
import './App.css';
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

function App() {
  const constacts=[
    {
      id:"1",
      name:"Mostahid",
      email:"mostahid@gmail.com",


    },
    {
      id:"2",
      name:"fahim",
      email:"fahim@gmail.com",


    },

  ];
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList constacts={constacts}/>
    </div>
  );
}

export default App;
