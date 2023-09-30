import Footer from "../Footer"
import Header from "../Header"
import styles from "./Layout.module.css"
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
          <title>
            Next JS Basic | 
            {' '}
            {pageTitle}</title>
          <meta name="description" content="This is the home page" />
        </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  )
}