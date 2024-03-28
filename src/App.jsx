/*import { useState } from 'react'*/
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import CafeReviews from './components/CafeReviews/CafeReviews'
import CafeValues from './components/CafeReviews/CafeValues/CafeValues'

function App() {
const initialCafes = {good: 0,neutral: 0, bad: 0}
  const handleLogCafe = (cafeName) => {
    console.log("cafeName:", cafeName);
  }
 
  return (
    <>
      <div>
        <CafeReviews handleLogCafe={handleLogCafe} /> 
        <CafeValues cafes={{initialCafes}} />
      </div>
      
    </>
  )
}

export default App
