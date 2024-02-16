// App renders course information
// 1.1 code refactored to three components
// 1.2 code includes now also component Part, which renders the information for course parts
// 1.3 course information transformed to objects

// header renders the name of the course
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Part is used to render course information 
const Part = (props) => {
  return (
    <div>
      <p>{props.section} and {props.numberOfExercises}</p>
    </div>
  )
}

// Content receives the information of course parts and numbers of exercises
// in an array, and forwards the information for component Part
const Content = ({ part, numberOfExercises }) => {
  return (
    <div>
      <Part section={part[0]} numberOfExercises={numberOfExercises[0]} />
      <Part section={part[1]} numberOfExercises={numberOfExercises[1]} />
      <Part section={part[2]} numberOfExercises={numberOfExercises[2]} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part={[part1.name, part2.name, part3.name]} numberOfExercises={[part1.exercises, part2.exercises, part3.exercises]} />
      <Total sumFirst={part1.exercises} sumSecond={part2.exercises} sumThird={part3.exercises} />
    </div>
  )
}

export default App