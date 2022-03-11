import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GameForm from '../components/GameForm'
import NavigationComponent from '../components/NavigationComponent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scorekeeper</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏆</text></svg>"></link>
      </Head>
      <GameForm />
      <NavigationComponent />
      
    </div>
  )
}


