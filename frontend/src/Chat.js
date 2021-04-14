import React, { useState, useRef, useEffect } from "react";
// import { FixedSizeList, VariableSizeList } from "react-window";

function Chat({ setChatShowing, messages, setMessages, address }) {
  const [newMessage, setNewMessage] = useState("");
  const [secretFlag, setSecretFlag] = useState(false);
  const [showEnglishWord, setShowEnglishWord] = useState(false);

  function handleSend(e) {
    e.preventDefault();
    if (newMessage) {
      setMessages((messages) => [
        ...messages,
        { who: "user", text: newMessage },
      ]);
      setNewMessage("");
      setTimeout(botReply, 800);
    }
  }

  function botReply() {
    let facts = [address.food, address.language, address.religion];
    let initialGreetings = [
      "Hello! Nice to meet you. If there's something specific you're looking for, I might be able to help.",
      "Hey, what's up? If you ask something specific, maybe I can help!",
    ];
    let noComprendo = [
      "I'm sorry.. I don't quite understand. Try asking another question, or being more specific.",
      "Hmm.. I don't get what you mean.. Can you say or ask that in a different way?",
    ];
    let greetings = [
      "Hey! :)",
      "Wonderful day!",
      "Life is great honestly.",
      "Howdy!!",
    ];
    let ok = ["okay", "ok", "alright", "fine", "very well"];

    let msg = newMessage.toLocaleLowerCase(); //newMessage shouldn't be "" because of the way state works; should be last message (yo creo)

    if (address.name && msg.includes(address.name.toLocaleLowerCase())) {
      setMessages((messages) => [
        ...messages,
        { who: "bot", text: `Yes! We are in ${address.name}! Great guess.` },
      ]);
    } else if (
      address.state &&
      msg.includes(address.state.toLocaleLowerCase())
    ) {
      setMessages((messages) => [
        ...messages,
        { who: "bot", text: `Yes! We are in ${address.state}! Great guess.` },
      ]);
    } else if (
      address.country &&
      msg.includes(address.country.toLocaleLowerCase())
    ) {
      setMessages((messages) => [
        ...messages,
        { who: "bot", text: `Yes! We are in ${address.country}! Great guess.` },
      ]);
    } else if (
      address.continent &&
      msg.includes(address.continent.toLocaleLowerCase())
    ) {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text: `Yes! We are in ${address.continent}! Great guess.`,
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
      msg.includes("meal") ||
      msg.includes("bite")
    ) {
      setMessages((messages) => [
        ...messages,
        { who: "bot", text: address.food.in_language },
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
        msg.includes("religious") ||
        msg.includes("holy") ||
        msg.includes("godly") ||
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
    } else if (
      msg.includes("information") ||
      msg.includes("facts") ||
      msg.includes("tell me") ||
      msg.includes("this place")
    ) {
      setMessages((messages) => [
        ...messages,
        { who: "bot", text: facts[Math.floor(Math.random() * facts.length)] },
      ]);
    } else if (messages.length <= 1) {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            initialGreetings[
              Math.floor(Math.random() * initialGreetings.length)
            ],
        },
      ]);
    } else if (
      msg.includes("okay") ||
      msg.includes("ok") ||
      msg.includes("alright") ||
      msg === "kay" ||
      msg === "k" ||
      msg.includes("fine") ||
      msg.includes("very well")
    ) {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text: ok[Math.floor(Math.random() * ok.length)],
        },
      ]);
    } else if (
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
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text: greetings[Math.floor(Math.random() * greetings.length)],
        },
      ]);
    } else {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text: noComprendo[Math.floor(Math.random() * noComprendo.length)],
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
          style={{ color: "yellow", backgroundColor: "#2d3436" }}
          onClick={(e) => setChatShowing(false)}
        >
          ―
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
            {m.who === "bot" ? (
              <>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setSecretFlag(!secretFlag)}
                >
                  {secretFlag ? address.flag_emoji : "🤖"}
                </span>{" "}
                <span>
                  {typeof m.text === "string"
                    ? m.text
                    : m.text.map((word, i) => (
                        <>
                          <span className="tooltip">
                            {word}
                            <span class="tooltiptext">
                              {address.food.translation_arr[i]}
                            </span>
                          </span>{" "}
                        </>
                      ))}
                </span>{" "}
              </>
            ) : (
              m.text + "  🧳"
            )}
          </div>
        ))}
      </div>
      <div className="footer">
        <form onSubmit={handleSend}>
          <span>
            <input
              type="text"
              placeholder={
                messages.length ? "reply..." : "Start conversation..."
              }
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
