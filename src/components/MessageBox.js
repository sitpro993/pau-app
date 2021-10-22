import React from "react";

function MessageBox(props) {
  const { message } = props;
  return (
    <>
      <div className="message-content">
        <div className="status-code">{message.statusCode}</div>
        <hr />
        <div className="message">{message.message}</div>
        <div className="description">{message.description}</div>
      </div>
    </>
  );
}

export default MessageBox;
