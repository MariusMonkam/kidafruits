import React,{useState} from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const upperCaseAlp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const Main = () => {
  const { speak } = useSpeechSynthesis();
  const {show, setShow}=useState(false)


  
  
  return (
    <div className="main-wrapper">
      <div className="main">
      {upperCaseAlp.map(letter => (
          <h1
           
            className="pickedletter"
            key={letter}
          >
            {letter}
          </h1>
        ))}
        <div />
      </div>
      <div className="sidebar">
        {upperCaseAlp.map(letter => (
          <h1
            onClick={()=>speak({text: letter })}
            className="letter"
            key={letter}
          >
            {letter}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Main;
