import React, { useEffect, useState } from "react";
import Text from "./Text";
import axios from "axios";

function Word() {
  const [text, setText] = useState("");
  const [api, setapi] = useState({});
  const [defination, setdefination] = useState("");
  const [partofspeech, setspeech] = useState("");
  const [syno, setsyno] = useState("");
  const [anto, setanto] = useState("");

  const numCharacters = text.length;
  const words = text.split(" ").filter((word) => word !== "");
  const numWords = words.length;

  async function datafetch() {
    try {
      let response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
      );
      setanto(response.data[0].meanings[0].antonyms[0]);
      setsyno(response.data[0].meanings[0].synonyms[0]);
      setdefination(response.data[0].meanings[0].definitions[0].definition);
      setspeech(response.data[0].meanings[0].partOfSpeech);

      console.log(response.data[0].meanings[0].partOfSpeech);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="word">
      <Text />
      <div className="inputbox">
        <input
          type="text"
          placeholder="Enter a word"
          onChange={(e) => setText(e.target.value)}
          className="input"
        />
        <button className="btn" onClick={datafetch}>
          Process Word
        </button>
      </div>

      <div className="counterdiv">
        <div className="upper">
          <p className="pclass">Characters</p>
          <p className="pclass">{numCharacters}</p>
        </div>

        <div className="lower">
          <p className="pclass">Words</p>

          <p className="pclass">{numWords}</p>
        </div>
      </div>

      <div className="dict">
        <p>Defination :- {defination}</p>
        <p>Parts of speech :- {partofspeech}</p>
        <p>Synonyms :- {syno}</p>
        <p>Antonyms :- {anto}</p>
      </div>
    </div>
  );
}

export default Word;
