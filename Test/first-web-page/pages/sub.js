import Link from 'next/link'
import Head from 'next/Head'
import React, { useState } from 'react';

export default function Sub() {
  const [textValue, setTextValue] = useState("");
  const [wordValue, setWordValue] = useState(null);
  function find(){
    <p id="display">Hello, nice to meet you!</p>
    var temp = "/"+wordValue+"/g";
    var count = (textValue.match(temp) || []).length;
    return (
      <p id="result">Occurences: {count}</p>
    );
  }
  return (
    <>
        <Head>
            <title>Searching</title>
        </Head>
        <h1>
          <Link href="/">
            <button>Home</button>
          </Link>
        </h1>
        <h2>Let's try finding a word</h2>
        <div id="Word">
          <label for="searchWord">Word:</label>
          <input type="text" 
          name ="myInput" 
          placeholder="Enter word" 
          onChange={(e)=>setWordValue(e.target.value)}
          >
          </input><br></br>
        </div>
        <button onClick ={()=>find} >Search</button>
        <div id="Text">
          <label for="searchText">Text:</label>
          <input type="text" 
          name ="myInput" 
          placeholder="Enter text to search" 
          onChange={(e)=>setTextValue(e.target.value)}
          >
          </input><br></br>
        </div>
        
    </>
  )
}