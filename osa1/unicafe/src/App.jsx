// unicafe app for tracking customer feedback 
// 1.6. & 1.7. the app tracks feedback and renders stats when user interacts with the buttons, stats are included
// 1.8. stats are separated to their own component
// 1.9. feedback stats are not shown if there is no feedback yet

import { useState } from 'react'

// component of Statistics renders all the statistics of feedback
const Statistics = ({ good, neutral, bad }) => {
  console.log('important statistics')
  const total = good + neutral + bad

  // if there are no clicks, we don't have statistics to show
  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral} </div>
      <div>bad {bad} </div>
      <div>all {total}</div>
      <div>average {((good * 1) + (neutral * 0) + (bad * -1)) / total}</div>
      <div>positive {(good / total) * 100} %</div>
    </div>
  )
}

// component Button handles button clicks 
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
// the app provides three buttons for feedback, and statistics for total, average and positive feedback

const App = () => {
  // all buttons have their own states 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // good feedback - increasing the counter for state good
  const increaseGood = () => {
    console.log('increasing good, value before', good)
    setGood(good + 1)
  }

  // neutral feedback - increasing the counter for state neutral
  const increaseNeutral = () => {
    console.log('increasing neutral, value before', neutral)
    setNeutral(neutral + 1)
  }

  // bad feedback - increasing the counter for state bad
  const increaseBad = () => {
    console.log('increasing bad, value before', bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App