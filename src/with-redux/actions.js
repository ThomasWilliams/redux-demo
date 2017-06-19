export const actionTypes = {
  CLICK: 'CLICK',
  CHANGE_COLOR: 'CHANGE_COLOR'
};

export const handleClick = amount => ({ type: actionTypes.CLICK, amount });

export const handleChangeColor = color => ({ type: actionTypes.CHANGE_COLOR, color });
