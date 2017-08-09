import React from 'react';

const ChangeWidget = props => {
  return (
    <button onClick={() => props.changeType(props.newType)}>
      {props.newType}
    </button>
  );
};

export default ChangeWidget;
