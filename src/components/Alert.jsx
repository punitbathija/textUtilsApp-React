import React from "react";

function Alert(props) {
  return (
    props.message && (
      <div className={`alert alert-${[props.type]}  fade show`} role="alert">
        <strong>{[props.message]}</strong>
      </div>
    )
  );
}

export default Alert;
