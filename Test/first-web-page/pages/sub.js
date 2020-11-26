import Link from 'next/link'
import Head from 'next/Head'

export default function Sub() {
  return (
    <>
        <Head>
            <title>Subscription</title>
        </Head>
      <h1>Thank you for subscribing!</h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </>
  )
}