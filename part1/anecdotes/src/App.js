import { useState } from 'react'

const Button = ({handle, text}) => <button onClick={handle}>{text}</button>

const ListProp = ({header, text, vote}) =>
  <div>
    <h1>{header}</h1>
    <p>{text}</p>
    <p>This anecdote has {vote} votes</p>
  </div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleButton = () => {
    let arrAnecdt = Math.floor(Math.random() * anecdotes.length)
    setSelected(arrAnecdt)
  }

  const handleVote = () => {
    const voteCount = [...vote]
    voteCount[selected] += 1
    setVote(voteCount)
  }

  const highestVote = vote.indexOf(Math.max(...vote))

  return (
    <div>
      <ListProp header={"Anecdote of the day"} text={anecdotes[selected]} vote={vote[selected]} />

      <Button handle={handleVote} text={"vote"} />
      <Button handle={handleButton} text={"next anecdote"} />
      <ListProp header={"Anecdote"} text={anecdotes[highestVote]} vote={vote[highestVote]} />
    </div>
  )
}

export default App