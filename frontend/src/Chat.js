import React, { useState } from "react";

function Chat({ setChatShowing, messages, setMessages, address }) {
  const [newMessage, setNewMessage] = useState("");

  function handleSend(e) {
    e.preventDefault();
    setMessages((messages) => [...messages, { who: "user", text: newMessage }]);
    setNewMessage("");
    setTimeout(botReply(newMessage.toLocaleLowerCase()), 1200); //newMessage shouldn't be "" because of the way state works; should be last message (yo creo)
  }

  function botReply(msg) {
    if (messages.length <= 1) {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            "Hello! Nice to meet you. If there's something specific you're looking for, I might be able to help.",
        },
      ]);
    } else if (
      msg.includes("food") ||
      msg.includes("dinner") ||
      msg.includes("lunch") ||
      msg.includes("breakfast") ||
      msg.includes("hungry") ||
      msg.includes("snack") ||
      msg.includes("eat") ||
      msg.includes("grub") ||
      msg.includes("meal")
    ) {
      setMessages((messages) => [
        ...messages,
        { who: "bot", text: address.food },
      ]);
    } else if (
      msg.includes("language") ||
      msg.includes("tongue") ||
      msg.includes("speak") ||
      msg.includes("english") ||
      msg.includes("idioma")
    ) {
      setMessages((messages) => [
        ...messages,
        { who: "bot", text: address.language },
      ]);
    } else if (
      (msg.includes("religion") ||
        msg.includes("prayer") ||
        msg.includes("God") ||
        msg.includes("worship") ||
        msg.includes("temple") ||
        msg.includes("synagogue") ||
        msg.includes("church")) &&
      address.religion
    ) {
      setMessages((messages) => [
        ...messages,
        { who: "bot", text: address.religion },
      ]);
    } else {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            "I'm sorry.. I don't quite understand. Try asking another question, or being more specific.",
        },
      ]);
    }
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
