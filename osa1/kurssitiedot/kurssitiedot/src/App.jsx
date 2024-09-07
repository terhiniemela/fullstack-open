// App renders course information
// 1.1 code refactored to three components
// 1.2 code includes now also component Part, which renders the information for course parts
// 1.3 course information transformed to objects
// 1.4. course information presented as an array of objects
// 1.5. course information presented as an object

// header renders the name of the course

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

// Part is used to render course information 
const Part = ({ section, numberOfExercises }) => {
  return (
    <div>
      <p>{section} and {numberOfExercises}</p>
    </div>
  )
}

// Content receives the information of course parts and numbers of exercises
// in an array, and forwards the information for component Part
const Content = ({ parts }) => {
  return (
    <div>
      <Part section={parts[0].name} numberOfExercises={parts[0].exercises} />
      <Part section={parts[1].name} numberOfExercises={parts[1].exercises} />
      <Part section={parts[2].name} numberOfExercises={parts[2].exercises} />
    </div>
  )
}

// renders the total sum of exercises
const Total = ({ parts }) => {
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App