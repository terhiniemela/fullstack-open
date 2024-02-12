// refactoring code to include three components, header, content and total

// header renders the name of the course
const Header = (props) => {
  console.log(props.course)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// content renders the course parts
const Content = (props) => {
  return (
    <div>
      <p> {props.part} and {props.numberOfExercises}</p>
    </div>
  )
}

// renders the total sum of exercises
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.sumFirst + props.sumSecond + props.sumThird} </p>
    </div>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} numberOfExercises={exercises1} />
      <Content part={part2} numberOfExercises={exercises2} />
      <Content part={part3} numberOfExercises={exercises3} />
      <Total sumFirst={exercises1} sumSecond={exercises2} sumThird={exercises3} />
    </div>
  )
}

export default App