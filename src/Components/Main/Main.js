import React from "react";
import languages from "../data/languages";
import "../Main/Main.css";

export const Main = ({ word, meanings,language }) => {
  return (
    <div className="meanings">
{
  meanings[0] && word && language ==='en'&&  (
    <audio
     src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
     style={{background: "#fff", borderRadius: 10}}
    controls>
      
      NONONO
    </audio>
  )
}

      {word === "" ? (
        <span className="title">Start by typing</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="titletwo"
                style={{ backgroundColor: "#bbd2c5", color: "black" }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example:</b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms:</b>
                    {def.synonyms}
                    
                  </span>
                  )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Main;
