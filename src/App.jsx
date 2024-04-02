
import { useState } from 'react';
import {useEffect} from 'react';
import CafeReviews from './components/CafeReviews/CafeReviews'
import CafeValues from './components/CafeReviews/CafeValues/CafeValues'
import Description from './components/CafeReviews/Description/Description'
import Notification from './components/CafeReviews/Notification/Notification'


const initialCafes = {good:0, neutral:0, bad:0}
function App() {
  const [cafes, setCafes] = useState(() => {
    const stringifiedCafes = localStorage.getItem("cafevalues");
    const parsedCafes = JSON.parse(stringifiedCafes) ?? initialCafes;
    return parsedCafes;
  });
  const [isVisibleBar, setIsVisibleBar] = useState(false);


  const handleLogCafe = (cafeName) => {
    console.log("cafeName:", cafeName);
    setCafes({ ...cafes, [cafeName]: cafes[cafeName] + 1 });
  }


  const handleResetCafes = () => {
    setCafes(initialCafes);
  }
 

  const totalFeedback = cafes.good + cafes.neutral + cafes.bad;
  const positiveFeedback = Math.round((cafes.good / totalFeedback) * 100)
  const onToggleMiniBarVisibility = () => {
    setIsVisibleBar(isVisibleBar);
  }
  useEffect(() => {
    localStorage.setItem("CafeValues", JSON.stringify(cafes));
  }, [cafes]);


  
  return (
    <>
      <div>
        <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      ></Description>
        <CafeReviews
          positiveFeedback={positiveFeedback}
        total={totalFeedback}
          handleResetCafes={handleResetCafes}
          onToggleMiniBarVisibility={onToggleMiniBarVisibility}
          handleLogCafe={handleLogCafe} /> 
        <CafeValues cafes={cafes} total={totalFeedback}
          
        />
        <Notification notificationText="Not feedback yet"></Notification>
      </div>
      
    </>
  )
}

export default App
