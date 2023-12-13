import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1> 

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, statistic}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{statistic}</td>
    </tr>
  )
}

const Statistic = ({good, bad, neutral}) => (
  <table> 
    <tbody>
      <StatisticLine text={"good"} statistic={good} />
      <StatisticLine text={"neutral"} statistic={neutral} />
      <StatisticLine text={"bad"} statistic={bad} />
      <StatisticLine text={"all"} statistic={good + neutral + bad} />
      <StatisticLine text={"average"} statistic={isNaN((good - bad) / (good + neutral + bad)) ? 0 : (good - bad) / (good + neutral + bad)} />
      <StatisticLine text={"positive"} statistic={isNaN(good / (good + neutral + bad)) ? 0 + " %" : (good / (good + neutral + bad)).toString() + " %"} />
    </tbody>
  </table>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttonClick = (button) => (
    () => {
      if (button == "good") {
        setGood(good + 1)
      } else if (button == "neutral") {
        setNeutral(neutral + 1)
      } else if (button == "bad") {
        setBad(bad + 1)
      }
    } 
  )

  let stats = <Statistic good={good} bad={bad} neutral={neutral} />
  if (good == 0 && bad == 0 && neutral == 0) {
    stats = "No feedback given"
  }


  return (
    <div>
      <Header text="give feedback" />
      <Button text={"good"} onClick={buttonClick("good")} />
      <Button text={"neutral"} onClick={buttonClick("neutral")} />
      <Button text={"bad"} onClick={buttonClick("bad")} />
      <Header text={"statistics"} />
      {stats}
    </div>
  )
}

export default App