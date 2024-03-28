

const CafeReviews = ({handleLogCafe}) => {
  return (
      <div>
          <button onClick={() => handleLogCafe("good")}>Good</button>
          <button onClick={() => handleLogCafe("neutral")}>Neutral</button>
          <button onClick={() => handleLogCafe("bad")}>Bad</button>
          <button onClick={() => handleLogCafe("reset")}>Reset</button>
    </div>
  )
}

export default CafeReviews