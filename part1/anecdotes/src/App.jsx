import { useState } from 'react'

const Button = ({text, onClick}) => (
  <>
    <button onClick={onClick}>{text}</button>
  </>
)

const Header = ({text}) => (
  <>
    <h1>{text}</h1>
  </>
)

const AnecdoteDay = ({anecdotes, setSelected, setVote, selected, votes}) => {
  const Next = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const Vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }


  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <Button text={"vote"} onClick={Vote} />   <Button text={"next anecdote"} onClick={Next} />
    </div>
  )
}

const MostVotes = ({votes, anecdotes}) => (
  <div>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
)

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

  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  return(
    <div>
      <Header text={"Anecdote of the day"} />
      <AnecdoteDay anecdotes={anecdotes} setSelected={setSelected} setVote={setVote} selected={selected} votes={votes} />
      <Header text={"Anecdote with most votes"} />
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App