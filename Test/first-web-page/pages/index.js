import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <>
        <Head>
            <title>Turati Challenge</title>
        </Head>
      <h1>Welcome, your future awaits!</h1>

      <iframe src="https://www.youtube.com/embed/Xo1pEPoYi8Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <form>
        <label for="name">Name:</label>
        <input type="text" id ="name"></input><br></br>
        <Link href="/sub">
        <input type="submit" value="Submit"></input>
        </Link>
        
      </form>
    </>
  )
}
