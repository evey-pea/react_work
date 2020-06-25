import React from 'react';

const Button = (props) => {
    return (
      <div
        value={props.value}
        className={"button"}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          props.addValue(props.value);
        }}
      >
        {props.value}
      </div>
    );
}

export default Button;