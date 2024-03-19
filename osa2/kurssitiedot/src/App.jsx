// App renders course information
// 1.1 code refactored to three components
// 1.2 code includes now also component Part, which renders the information for course parts
// 1.3 course information transformed to objects
// 2.1 

// header renders the name of the course
const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

// Part is used to render course information 
const Part = ({ section, numberOfExercises }) => {
  return (
    <div>
      <p>{section} {numberOfExercises}</p>
    </div>
  )
}

// Content receives the information of course parts and numbers of exercises
// in an array parts. Content of parts is mapped and forwarded to component Part
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} section={part.name} numberOfExercises={part.exercises} />)}
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

// course component renders course information for a course
const Course = ({ course }) => {
  console.log("hello from Course component")
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'High-order functions',
        exercises: 56,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Total parts={course.parts} />
      <Course course={course} />
    </div>
  )
}

export default App