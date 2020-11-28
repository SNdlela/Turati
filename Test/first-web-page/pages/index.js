import Head from 'next/head'
import React, { useState } from 'react';
import Link from 'next/link'

export default function Home() {
  const [textValue, setTextValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  return (
    <>
        <Head>
            <title>Turati Challenge</title>
        </Head>
      <h1>Welcome, your future awaits!</h1>

      <iframe src="https://www.youtube.com/embed/Xo1pEPoYi8Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
      <div id="detailsForm">
        <label for="name">Name:</label>
        <input type="text" 
        name ="myInput" 
        placeholder="Enter name" 
        onChange={(e)=>setTextValue(e.target.value)}
        >
        </input><br></br>
        <button onClick={()=>setDisplayValue(textValue)}>Submit </button>
      </div>

      {/* <Link href="/sub"> */}
      
      {/* </Link> */}
      <p id="display">Hello {displayValue}, nice to meet you!</p>

    </>
  )
}



