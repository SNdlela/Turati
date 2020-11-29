import Head from 'next/head'
import React, { useState } from 'react';
import Link from 'next/link'

export default function Home() {
  const [textValue, setTextValue] = useState("");
  const [displayValue, setDisplayValue] = useState(null);
  function dis(displayValue){
    if (displayValue) {
      return (
        <p id="display">Hello {displayValue}, nice to meet you!</p>
      );
    }
  }
  return (
    <>
        <Head>
            <title>Turati Challenge</title>
        </Head>
      <h1>Welcome, your future awaits!</h1>

      <div>
        <iframe src="https://www.youtube.com/embed/Xo1pEPoYi8Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
      </div>
      <div id="detailsForm">
        <label for="name">Name:</label>
        <input type="text" 
        name ="myInput" 
        placeholder="Enter name" 
        onChange={(e)=>setTextValue(e.target.value)}
        >
        </input><br></br>
        <button onClick= {()=>setDisplayValue(textValue)}>Submit </button>
        {dis(displayValue)}
        
      </div>
      <Link href="/sub">
        <button> Next Page</button>
      </Link>
      
    </>
  )
}




