import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  let sendMessage = () => {};

  return (
    <div>
      <div className="chat-window">
        <div className="chat-header">
          <h3>Live Chat</h3>
        </div>
        <div className="chat-body">
          <div className="message-container">
            {messages.map((messageContent) => {
              <div className="message" id="you">
                <div>{messageContent}</div>
              </div>;
            })}
          </div>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
