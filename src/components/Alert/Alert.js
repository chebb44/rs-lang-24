import React from 'react';
import './Alert.css';

export const Alert = (props) => {
  if (props?.message?.length) {
    return (
      <div className="alert-message alert alert-primary">
        <span className="alert-text"> {props.message}</span>
      </div>
    );
  }
  return null;
};
