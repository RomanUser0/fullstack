import { useState } from 'react'
import styles from './app.module.css'
import Content from './components/content/content'
import Header from './components/header/header'
import Navigation from './components/navigation/navigation'
import Auth from './pages/auth/auth'


function App() {

  const [auth, setAuth] = useState(false)


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
