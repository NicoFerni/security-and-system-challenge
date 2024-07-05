import { About } from "../components/about";
import { Header } from "../components/header";
import {Interest} from "../components/interest";
import Form from "../components/form";
import Head from 'next/head'
import styles from '@/styles/Header.module.css'

export default function Home() {

  return (
    <>
     <Head>
        <title>Security And System</title>
        <meta property="og:title" content="My Page" key="title" />
      </Head>
      <Header />
      <About />
      <Interest/>
      <Form/> 
    </>
  );
}
