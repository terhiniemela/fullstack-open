// App renders course information
// 1.1 code refactored to three components
// 1.2 code includes now also component Part, which renders the information for course parts
// 1.3 course information transformed to objects
// 2.1 rewriting components and adding component Course
// 2.2. updated component Total 
// 2.3. done already, in 2.2. Total was calculated with reduce
// 2.4 updating app so that there can be as many courses as can be in the courses array


// title for the page
const Title = ({ title }) => {
  console.log("hello from Title component")
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

// header renders the name of the course
const Header = ({ title }) => {
  console.log("hello from Header component")
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

// Part is used to render course information 
const Part = ({ section, numberOfExercises }) => {
  console.log("hello from Part component")
  return (
    <div>
      <p>{section} {numberOfExercises}</p>
    </div>
  )
}

// Content receives the information of course parts and numbers of exercises
// in an array parts. Content of parts is mapped and forwarded to component Part
const Content = ({ parts }) => {
  console.log("hello from Content component")
  return (
    <div>
      {parts.map(part => <Part key={part.id} section={part.name} numberOfExercises={part.exercises} />)}
    </div>
  )
}

// renders the total sum of exercises from array parts
// note that reduce needs one initial value first so it can calculate the sum, initial value is 0
const Total = ({ parts }) => {
  console.log("hello from Total component")
  return (
    <div>
      <h3>Number of exercises {parts.reduce((sum, current) => sum + current.exercises, 0)}</h3>
    </div>
  )
}

// course component renders course information for a course and forwards information for other components
const Course = ({ course }) => {
  console.log("hello from Course component")
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  // we go through the courses array objects with map and call Course component for all courses
  return (
    <div>
      <Title title="Web development curriculum" />
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App