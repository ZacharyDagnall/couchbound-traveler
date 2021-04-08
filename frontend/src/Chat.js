import React, { useState } from "react";

function Chat({ setChatShowing, messages, setMessages }) {
  const [newMessage, setNewMessage] = useState("");

  function handleSend(e) {
    e.preventDefault();
    setMessages((messages) => [...messages, { who: "user", text: newMessage }]);
    setNewMessage("");
    botReply();
  }

  function botReply() {
    //maybe add a small delay
    setMessages((messages) => [
      ...messages,
      { who: "bot", text: "well aren't you just the sweetest" },
    ]);
  }

  return (
    <div id="chatbox">
      <h3 id="chat-header">Chat</h3>
      {messages.map((m, i) => {
        return (
          <div key={i}>
            {" "}
            {m.who === "bot" ? "🤖  " + m.text : m.text + "  🙂"}{" "}
          </div>
        );
      })}

      <form onSubmit={handleSend}>
        {/* how do i get the send button on the same line as the input box ? */}
        <span>
          <input
            type="text"
            placeholder="reply..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          ></input>
          <button style={{ backgroundColor: "green", color: "white" }}>
            Send
          </button>
        </span>
      </form>
      <span className="close-mode-box" onClick={(e) => setChatShowing(false)}>
        x
      </span>
    </div>
  );
}

export default Chat;
