import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { handleClick, handleChangeColor } from './actions';

const COLORS = ['RED', 'GREEN', 'BLUE'];

export class PureClickHandler extends Component {
  static get propTypes() {
    return {
      count: PropTypes.number,
      color: PropTypes.string,
      handleClick: PropTypes.func.isRequired,
      handleChangeColor: PropTypes.func.isRequired
    };
  }

  createClickFn() {
    console.log(this.props);
    const { handleClick } = this.props;
    return e => { handleClick(1) };
  }

  createColorSelectFn() {
    const { handleChangeColor } = this.props;
    return e => { handleChangeColor(e.target.value) }
  }

  render() {
    const clickFn = this.createClickFn();
    const colorSelectFn = this.createColorSelectFn();

    return (
      <div className="click-handler">
        <h2>This click handler has { this.props.count } { this.props.color } clicks</h2>
        <button type="button" onClick={ clickFn }>CLICK</button>
        <select onChange={ colorSelectFn }>
          <option value="">Choose a color...</option>
          { COLORS.map(color => <option value={ color }>{ color }</option>) }
        </select>
      </div>
    );
  }
}

export default connect(
  state => state.clickHandler,
  dispatch => bindActionCreators({ handleClick, handleChangeColor }, dispatch)
)(PureClickHandler);
