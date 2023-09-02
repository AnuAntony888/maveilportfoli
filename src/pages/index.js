import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeContent from './HomeContent'
import Aboutme from './aboutme'

import Contact from './Contact'




export default function Home() {
  return (<div>

<HomeContent/>
<Aboutme/>

<Contact/>
</div>
 
  )
}
