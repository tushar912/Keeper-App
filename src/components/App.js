import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
function createnote(note){
  return(<Note 
title={note.title}
content={note.content}/>);

}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createnote)}
      <Footer />
    </div>
  );
}

export default App;
