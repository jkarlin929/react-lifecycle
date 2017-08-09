import React, { Component } from 'react';

const Widget = (props) => {
  return (
    <div className={`${props.widgetType} widget`}>
      This is a {props.widgetType} widget.
    </div>
  )
};

export default Widget;