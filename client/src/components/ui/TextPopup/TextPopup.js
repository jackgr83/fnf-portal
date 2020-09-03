import React from "react";
import Cross from '../../../img/cross.png'
import useStyles from "./styles";

const TextPopup = ({ content, cross, heading}) => {
  const classes = useStyles();
  return (
    <div className={classes.textPopupMain}>
      <div className={classes.textPopupSecond}>
        <img
          src={Cross}
          className={classes.textPopupImg}
          alt="cross"
          onClick={cross}
        />
        <div className={classes.textPopupHead}>{heading}</div>
        <div className={classes.textPopupContent}>{content}</div>
      </div>
    </div>
  );
};

export default TextPopup;
