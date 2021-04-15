import React, { useState, useRef, useEffect } from "react";
// import { FixedSizeList, VariableSizeList } from "react-window";

function Chat({
  setChatShowing,
  messages,
  setMessages,
  address,
  englishOnly,
  setEnglishOnly,
}) {
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
    let initialGreetings = address.initial_greetings;
    let dontUnderstand = address.dont_understand;
    let greetings = address.greetings;
    let ok = address.ok;
    let correct = address.correct;

    let msg = newMessage.toLocaleLowerCase();

    if (
      (address.name && msg.includes(address.name.toLocaleLowerCase())) ||
      (address.state && msg.includes(address.state.toLocaleLowerCase())) ||
      (address.country && msg.includes(address.country.toLocaleLowerCase())) ||
      (address.continent && msg.includes(address.continent.toLocaleLowerCase()))
    ) {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            typeof correct === "string"
              ? correct
              : englishOnly
              ? correct.english_sentence
              : {
                  l: correct.in_language,
                  t: correct.translation_arr,
                },
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
        {
          who: "bot",
          text:
            typeof address.food === "string"
              ? address.food
              : englishOnly
              ? address.food.english_sentence
              : {
                  l: address.food.in_language,
                  t: address.food.translation_arr,
                },
        },
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
        {
          who: "bot",
          text:
            typeof address.language === "string"
              ? address.language
              : englishOnly
              ? address.language.english_sentence
              : {
                  l: address.language.in_language,
                  t: address.language.translation_arr,
                },
        },
      ]);
    } else if (
      (msg.includes("religion") ||
        msg.includes("religious") ||
        msg.includes("holy") ||
        msg.includes("godly") ||
        msg.includes("pray") ||
        msg.includes("god") ||
        msg.includes("worship") ||
        msg.includes("temple") ||
        msg.includes("synagogue") ||
        msg.includes("church")) &&
      address.religion
    ) {
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            typeof address.religion === "string"
              ? address.religion
              : englishOnly
              ? address.religion.english_sentence
              : {
                  l: address.religion.in_language,
                  t: address.religion.translation_arr,
                },
        },
      ]);
    } else if (
      msg.includes("information") ||
      msg.includes("facts") ||
      msg.includes("tell me") ||
      msg.includes("this place")
    ) {
      let fact = facts[Math.floor(Math.random() * facts.length)];
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            typeof fact === "string"
              ? fact
              : englishOnly
              ? fact.english_sentence
              : {
                  l: fact.in_language,
                  t: fact.translation_arr,
                },
        },
      ]);
    } else if (messages.length <= 1) {
      let greeting =
        initialGreetings[Math.floor(Math.random() * initialGreetings.length)];
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            typeof greeting === "string"
              ? greeting
              : englishOnly
              ? greeting.english_sentence
              : {
                  l: greeting.in_language,
                  t: greeting.translation_arr,
                },
        },
      ]);
    } else if (
      msg.includes("okay") ||
      msg.includes("ok") ||
      msg.includes("alright") ||
      msg === "kay" ||
      msg === "k" ||
      msg.includes("no") ||
      msg.includes("fine") ||
      msg.includes("very well")
    ) {
      let okay = ok[Math.floor(Math.random() * ok.length)];
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            typeof okay === "string"
              ? okay
              : englishOnly
              ? okay.english_sentence
              : {
                  l: okay.in_language,
                  t: okay.translation_arr,
                },
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
      msg === "hi" ||
      msg.includes("good morning") ||
      msg.includes("good day") ||
      msg.includes("how are you") ||
      msg.includes("what's the sitch")
    ) {
      let greeting = greetings[Math.floor(Math.random() * greetings.length)];
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            typeof greeting === "string"
              ? greeting
              : englishOnly
              ? greeting.english_sentence
              : {
                  l: greeting.in_language,
                  t: greeting.translation_arr,
                },
        },
      ]);
    } else {
      let du = // *d*on't *u*nderstand
        dontUnderstand[Math.floor(Math.random() * dontUnderstand.length)];
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            typeof du === "string"
              ? du
              : englishOnly
              ? du.english_sentence
              : {
                  l: du.in_language,
                  t: du.translation_arr,
                },
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
                    : m.text.l.map((word, i) => (
                        <>
                          <span className="tooltip">
                            {word}
                            <span class="tooltiptext">{m.text.t[i]}</span>
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
        <span onClick={() => setEnglishOnly(!englishOnly)}>
          {englishOnly ? address.globe_emoji : "🇬🇧"}
        </span>
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
