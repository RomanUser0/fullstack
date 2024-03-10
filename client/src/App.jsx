import { useState } from 'react'
import styles from './app.module.css'
import Content from './components/content/content'
import Header from './components/header/header'
import Navigation from './components/navigation/navigation'
import Auth from './pages/auth/auth'
import { useSelector } from 'react-redux'


function App() {

 const auth = useSelector(state => state.auth.auth)
 console.log(auth)


  return (
    <div className={styles.appWrapper}>
      <Header />
      {auth ?
        <div>
          <Navigation />
          <Content />
        </div>
        :
        <Auth />
      }

    </div>
  )
}

export default App
