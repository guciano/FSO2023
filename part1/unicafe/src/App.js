import { useState } from "react";

const Header = ({text}) => <h1>{text}</h1>

// const Button = ({handle, text}) => 
//   <button onClick={handle}>
//     {text}
//   </button>

const StatisticLine = ({text, value}) => 
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = ({clicks}) => {
  const all = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good - clicks.bad) / all
  const positive = clicks.good / all + "%"

  if (all === 0) {
    return <div>No feedback given</div>
  }

  return (
    <div>
      <StatisticLine text="good" value={clicks.good} />
      <StatisticLine text="neutral" value={clicks.neutral} />
      <StatisticLine text="bad" value={clicks.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}


const App = () => {
  
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    average: 0,
    positive: 0
  })

  const sumGood = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }
  const sumNeutral = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }
  const sumBad = () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }
  return (
    <div>
      <Header text="give feedback" />
      <button onClick={sumGood}>good</button>
      <button onClick={sumNeutral}>neutral</button>
      <button onClick={sumBad}>bad</button>
      <Header text="statistics" />
      <Statistics clicks={clicks}/>

      
    </div>
  )
}

export default App