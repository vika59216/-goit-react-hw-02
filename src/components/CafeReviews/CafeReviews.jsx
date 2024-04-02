import { useEffect } from "react";

    const CafeReviews = ({ handleResetDrinks, onToggleMiniBarVisibility, handleLogCafe,  total }) => {
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.code === "Escape") {
                onToggleMiniBarVisibility()
            }
           
        }
        window.addEventListener(`keydown`, onKeyDown)
        return () => {
            window.removeEventListener(`keydown`, onKeyDown);
        }
    },[onToggleMiniBarVisibility ])

  return (
      <div>
          <button onClick={() => handleLogCafe("good")}>Good</button>
          <button onClick={() => handleLogCafe("neutral")}>Neutral</button>
          <button onClick={() => handleLogCafe("bad")}>Bad</button>
          {total !== 0 && <button onClick={handleResetDrinks}>Reset</button>}
         
    </div>
        )
        }

export default CafeReviews