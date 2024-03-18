import { useState } from 'react'

// component Button handles button clicks and button text
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // prefilled array for points filled with zeroes
  const prefilled = Array(anecdotes.length).fill(0)

  // state for selected anecdote, in the beginning the state gets a random number from range 0-anecdotes.length-1 to select the anecdote
  const [selected, setSelected] = useState(Math.floor(Math.random() * (anecdotes.length)))
  // state for points calculating votes, state prefilled with array of zeros
  const [points, setPoints] = useState([...prefilled])
  // state for the index of most voted anecdote
  const [mostVotedIndex, setMostVotedIndex] = useState(0)

  // 
  const updateSelected = () => {
    console.log("updating selected anecdote, state before", selected)
    // setting selected with a random number from range 0-anecdotes.length-1
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
    console.log(selected)
  }

  const updatePoints = () => {
    console.log(selected)
    console.log("starting voting, points before", points)

    // the points array can't be directly updated so the array is copied to another array
    const copied = [...points]
    // the selected index from anecdotes array presents the anecdote also in the points/copied array
    copied[selected] += 1
    console.log(copied, "copyn pisteet")
    setPoints([...copied])
    // here we can see that yes, react really updates state asynchronously, array of points hasn't been updated yet
    console.log(points, "uudet pisteet")

    // updating most voted anecdote, using copied array so that we are handling correctly updated data
    // this doesn't handle a tie in the voting situation, it just shows one anecdote with biggest points
    // first we get the biggest number of votes with math.max and then its index, and then setting the index to the mostvotedindex state
    const mostVoted = copied.indexOf(Math.max(...copied))
    setMostVotedIndex(mostVoted)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>

      <Button handleClick={updatePoints} text="vote" />
      <Button handleClick={updateSelected} text="next anecdote" />

      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVotedIndex]}
      <div>has {points[mostVotedIndex]} votes</div>

    </div>
  )
}

export default App