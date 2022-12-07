import Head from 'next/head';
import Header from '../components/homeComps/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nahid Hossain</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/boy.png" />
      </Head>

      <div>
        <Header />
      </div>
    </div>
  )
}
