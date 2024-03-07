import styles from './app.module.css'
import Content from './components/content/content'
import Header from './components/header/header'
import Navigation from './components/navigation/navigation'


function App() {


  return (
    <div className={styles.appWrapper}>
      <Header />
      <Navigation />
      <Content />
    </div>
  )
}

export default App
