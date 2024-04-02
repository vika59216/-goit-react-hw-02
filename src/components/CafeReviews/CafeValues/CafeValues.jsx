

const CafeValues = ({cafes, total, handlePositive}) => {
  return (
      <ul>
          <li>Good: {cafes.good}</li>
          <li>Neutral: {cafes.neutral}</li>
          <li>Bad: {cafes.bad}</li>
          <li>Total: <b>{total}</b></li>
          <li>Positive: {handlePositive}%</li>
          
          

    </ul>
  )
}

export default CafeValues