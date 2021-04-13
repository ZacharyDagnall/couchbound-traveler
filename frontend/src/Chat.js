import React, { useState, useRef, useEffect } from "react";
import { FixedSizeList, VariableSizeList } from "react-window";

function Chat({ setChatShowing, messages, setMessages, address }) {
  const [newMessage, setNewMessage] = useState("");

  function handleSend(e) {
    e.preventDefault();
    setMessages((messages) => [...messages, { who: "user", text: newMessage }]);
    setNewMessage("");
    setTimeout(botReply, 800);
  }

  function botReply() {
    let msg = newMessage.toLocaleLowerCase(); //newMessage shouldn't be "" because of the way state works; should be last message (yo creo)
    if (
      msg.includes("hey") ||
      // msg.includes("yo") ||    //this doesn't work because it catches too many words like you and yogurt
      msg.includes("whatsup") ||
      msg.includes("whatsgood") ||
      msg.includes("what's up") ||
      msg.includes("what's good") ||
      msg.includes("hello") ||
      msg.includes("howdy") ||
      msg.includes("hola") ||
      msg.includes("how are you") ||
      msg.includes("what's the sitch")
    ) {
      setMessages((messages) => [...messages, { who: "bot", text: "Hey! :)" }]);
    } else if (
      msg.includes("food") ||
      msg.includes("dinner") ||
      msg.includes("lunch") ||
      msg.includes("breakfast") ||
      msg.includes("hungry") ||
      msg.includes("snack") ||
      msg.includes("eat") ||
      msg.includes("grub") ||
      msg.includes("meal") ||
      msg.includes("bite")
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
    } else if (messages.length <= 1) {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            "Hello! Nice to meet you. If there's something specific you're looking for, I might be able to help.",
        },
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

  const messageEl = useRef(null);
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div className="chat">
      <div className="head">
        Chat
        <span
          className="close-mode-box"
          style={{ color: "pink", backgroundColor: "#2d3436" }}
          onClick={(e) => setChatShowing(false)}
        >
          x
        </span>
      </div>
      <div className="messages" ref={messageEl}>
        {messages.map((m, i) => (
          <div
            className="msg"
            key={i}
            style={
              m.who === "bot"
                ? { backgroundColor: "lightblue" }
                : { backgroundColor: "white", textAlign: "right" }
            }
          >
            {m.who === "bot" ? "🤖  " + m.text : m.text + "  🙂"}
          </div>
        ))}
      </div>
      <div className="footer">
        <form onSubmit={handleSend}>
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
      </div>
    </div>
  );
}

export default Chat;
