import { useEffect } from 'react';
import './App.css'
import { useTelegram } from './components/hooks/useTelegram'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import MVP from './components/MVP/mvp'
import Mobiscroll from './components/Mobiscroll/Mobiscroll'

function App() {

  const {tg, onToggleButton} = useTelegram()

  useEffect( () => {
    tg.ready()
    tg.expand()
  }, [])

  return (
    <>
      <Header />
      <Mobiscroll />
      <MVP />
      <Button onClick={onToggleButton}>toggle</Button>
    </>
  )
}

export default App
