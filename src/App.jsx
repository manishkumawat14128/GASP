import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import CardGridContainer from './components/CardGrid'
import SwipeCardsContainer from './components/SwipeCards'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollHero from './components/new'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollHero />
{/* <Header />
<Hero />
<SwipeCardsContainer />
<CardGridContainer />
<Footer></Footer> */}
    </>
  )
}
export default App
