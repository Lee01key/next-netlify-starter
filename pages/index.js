import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Project Portfolio: Wonki Lee</title>
      </Head>

      <main>
        <Header title="Project 3" />
        <p className="description">
        </p>
      </main>

      <Footer />
    </div>
  )
}
