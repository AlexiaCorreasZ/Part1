import { useState } from 'react'

const Header = () =>{
  return (
  <h2>Give feedback</h2>
  )
}

const Content = () =>{
  return (
    <h2>Statistics</h2>
  )
}

const Button = (props) =>{
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) =>{
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
      {props.value}
      </td>
    </tr>
  )
}

const Statistics = (props) =>{
  if (!props.good || !props.neutral || !props.bad) {
    return (
      <p>No Feedback Given</p>
    )
  }
  return (
    <table>
      
        <StatisticLine text="Good" value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad" value={props.bad}/>
        <StatisticLine text="All" value={props.good + props.neutral + props.bad}/>
        <StatisticLine text="Average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
        <StatisticLine text="Positive" value={(props.good * 100) / (props.good + props.neutral + props.bad) + " %"}/>
      </table>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClicks = () => {
      setGood(good + 1)
  }

  const neutralClicks = () => {
      setNeutral(neutral + 1)
  }

  const badClicks = () => {
      setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button handleClick={goodClicks} text="good"/>
      <Button handleClick={neutralClicks} text="neutral"/>
      <Button handleClick={badClicks} text="bad"/>
      <Content />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
  

}

export default App
