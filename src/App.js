import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container } from "@mui/material";
import { Header } from "./Components/Header/Header";
import { Main } from './Components/Main/Main';



function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [language, setLanguage] = useState("en");
  
  
  
  
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${language}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
   console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  },[word,language]);

  return (
    <div
      className="App"
      style={{ height: "900px", backgroundColor: "#536976" , color: "#BBD2C5" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
      <Header
      language={language}
      setLanguage={setLanguage}
      word={word}
      setWord={setWord}
      />
      {meanings && (
      <Main word={word} meanings={meanings} language={language}/>
      )}
      </Container>
    </div>
  );
}

export default App;
