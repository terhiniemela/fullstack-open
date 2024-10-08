// unicafe app for tracking customer feedback 
// 1.6. & 1.7. the app tracks feedback and renders stats when user interacts with the buttons, stats are included
// 1.8. stats are separated to their own component
// 1.9. feedback stats are not shown if there is no feedback yet
// 1.10 adding components button and statistics, button is already implemented
// 1.11 statistics are shown in a html table

import { useState } from 'react'

// component shows one statistic line with text and value
// sign is optional and  used for percentage value
// -- stats are presented in a html table, and component returns a table row with two cells for text and value
// table and div cannot be combined, so div cannot be used 
const StatisticLine = ({ text, value, sign }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {sign} </td>
    </tr>
  )
}


// component of Statistics renders all the statistics of feedback
const Statistics = ({ good, neutral, bad }) => {
  console.log('important statistics')
  const total = good + neutral + bad
  // average calculated with weights good=1, neutral=0, bad=-1
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positive = (good / total) * 100

  // if there are no clicks, we don't have statistics to show
  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </div>
    )
  }
  // otherwise we do have feedback and we use statistic line component to show stats
  // stats are presented as a html table, and div cannot be used as a wrapper here
  // table content comes from statistic line component with table rows with content
  return (
    <table>
      <tbody>
        <tr><th><h2>statistics</h2></th></tr>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} sign="%" />
        <Test text="wut" person={{name:"tepa", age:'27'}} />
        
      </tbody>
    </table>

  )
}

// component Button handles button clicks and button text
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