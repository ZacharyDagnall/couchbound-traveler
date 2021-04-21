import React, { useState, useRef, useEffect } from "react";

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
    let facts;
    if (address.fact) {
      facts = [address.food, address.language, address.religion, address.fact];
    } else {
      facts = [address.food, address.language, address.religion];
    }
    let initialGreetings = address.initial_greetings;
    let dontUnderstand = address.dont_understand;
    let greetings = address.greetings;
    let ok = address.ok;
    let correct = address.correct.yes;
    let incorrect = address.correct.no;
    let aFact = address.fact;

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
    } else if (msg.includes("are we in")) {
      // they can only land here if they typed "are we in" but *didn't* guess the name of the location
      setMessages((messages) => [
        ...messages,
        {
          who: "bot",
          text:
            typeof incorrect === "string"
              ? incorrect
              : englishOnly
              ? incorrect.english_sentence
              : {
                  l: incorrect.in_language,
                  t: incorrect.translation_arr,
                },
        },
      ]);
    } else if (includesFood(msg)) {
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
    } else if (includesLanguage(msg)) {
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
    } else if (includesReligion(msg)) {
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
      msg === "no" ||
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

  function includesFood(msg) {
    let english = [
      "food",
      "dinner",
      "lunch",
      "breakfast",
      "hungry",
      "snack",
      "eat",
      "grub",
      "meal",
      "bite",
      "hunger",
    ];
    let spanish = [
      "comida",
      "cena",
      "almuerzo",
      "desayuno",
      "hambriento",
      "bocadillo",
      "comer",
      "comida",
      "comida",
      "morder",
      "hambre",
    ];
    let french = [
      "aliments",
      "dîner",
      "déjeuner",
      "petit-déjeuner",
      "dejeuner",
      "diner",
      "manger",
      "petit-dejeuner",
      "repas",
      "mordre",
      "faim",
    ];
    let german = [
      "lebensmittel",
      "abendessen",
      "mittagessen",
      "frühstück",
      "hungrig",
      "snack",
      "essen",
      "fruhstuck",
      "mahlzeit",
      "beißen",
      "hunger",
    ];
    let portuguese = [
      "cafe de manha",
      "jantar",
      "almoço",
      "café da manhã",
      "refeicao",
      "lanche",
      "comer",
      "almoco",
      "refeição",
      "comida",
      "fome",
    ];
    let italian = [
      "cibo",
      "cena",
      "pranzo",
      "prima colazione",
      "Affamato",
      "merenda",
      "mangiare",
      "mangia",
      "pasto",
      "mordere",
      "fame",
    ];

    if (address.language_name === "spanish") {
      return checkTwoArrForString(english, spanish, msg);
    } else if (address.language_name === "german") {
      return checkTwoArrForString(english, german, msg);
    } else if (address.language_name === "italian") {
      return checkTwoArrForString(english, italian, msg);
    } else if (address.language_name === "french") {
      return checkTwoArrForString(english, french, msg);
    } else if (address.language_name === "portuguese") {
      return checkTwoArrForString(english, portuguese, msg);
    } else {
      return checkTwoArrForString(english, english, msg);
    }
  }

  function includesLanguage(msg) {
    let english = ["language", "tongue", "speak", "english", "idioma"];
    let spanish = ["idioma", "lengua", "habla", "inglés", "idioma"];
    let french = ["langue", "langue", "parle", "anglais", "idioma"];
    let german = ["sprache", "zunge", "sprech", "englisch", "idiom"];
    let portuguese = ["idioma", "língua", "falar", "inglês", "idioma"];
    let italian = ["lingua", "lingua", "parla", "inglese", "idioma"];

    if (address.language_name === "spanish") {
      return checkTwoArrForString(english, spanish, msg);
    } else if (address.language_name === "german") {
      return checkTwoArrForString(english, german, msg);
    } else if (address.language_name === "italian") {
      return checkTwoArrForString(english, italian, msg);
    } else if (address.language_name === "french") {
      return checkTwoArrForString(english, french, msg);
    } else if (address.language_name === "portuguese") {
      return checkTwoArrForString(english, portuguese, msg);
    } else {
      return checkTwoArrForString(english, english, msg);
    }
  }

  function includesReligion(msg) {
    let english = [
      "religion",
      "religious",
      "holy",
      "godly",
      "pray",
      "god",
      "worship",
      "temple",
      "synagogue",
      "church",
    ];
    let spanish = [
      "religión",
      "religioso",
      "santo",
      "piadoso",
      "rezar",
      "Dios",
      "Adoración",
      "templo",
      "sinagoga",
      "Iglesia",
    ];
    let french = [
      "religion",
      "religieux",
      "Saint",
      "pieux",
      "prier",
      "dieu",
      "culte",
      "temple",
      "synagogue",
      "église",
    ];
    let german = [
      "religion",
      "religiös",
      "heilig",
      "göttlich",
      "beten",
      "gott",
      "anbetung",
      "tempel",
      "synagoge",
      "kirche",
    ];
    let portuguese = [
      "religião",
      "religioso",
      "sagrado",
      "piedoso",
      "rezar",
      "deus",
      "adoração",
      "têmpora",
      "sinagoga",
      "Igreja",
    ];
    let italian = [
      "religione",
      "religioso",
      "santo",
      "pio",
      "pregare",
      "Dio",
      "culto",
      "tempio",
      "sinagoga",
      "Chiesa",
    ];

    if (address.language_name === "spanish") {
      return checkTwoArrForString(english, spanish, msg);
    } else if (address.language_name === "german") {
      return checkTwoArrForString(english, german, msg);
    } else if (address.language_name === "italian") {
      return checkTwoArrForString(english, italian, msg);
    } else if (address.language_name === "french") {
      return checkTwoArrForString(english, french, msg);
    } else if (address.language_name === "portuguese") {
      return checkTwoArrForString(english, portuguese, msg);
    } else {
      return checkTwoArrForString(english, english, msg);
    }
  }

  function checkTwoArrForString(arr1, arr2, str) {
    // two arr expected to have same length
    for (let i = 0; i < arr1.length; i++) {
      if (str.includes(arr1[i]) || str.includes(arr2[i])) {
        return true;
      } else {
      }
    }
    return false;
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
        <span className="close-mode-box" onClick={(e) => setChatShowing(false)}>
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
                  {secretFlag ? address.flag_emoji : "🙂"}
                </span>{" "}
                <span>
                  {typeof m.text === "string"
                    ? m.text
                    : m.text.l.map((word, i) => (
                        <>
                          <span className="tooltip">
                            {word}
                            {m.text.t[i] ? (
                              <span class="tooltiptext">{m.text.t[i]}</span>
                            ) : null}
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
            <button id="send-button">Send</button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Chat;
