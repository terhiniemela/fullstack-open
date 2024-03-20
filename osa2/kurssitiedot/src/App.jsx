// App renders course information
// 1.1 code refactored to three components
// 1.2 code includes now also component Part, which renders the information for course parts
// 1.3 course information transformed to objects
// 2.1 rewriting components and adding component Course
// 2.2. updated component Total 
// 2.3. done already, in 2.2. Total was calculated with reduce
// 2.4 updating app so that there can be as many courses as can be in the courses array
// 2.5 component Course moved to its own module

import Course from './components/Course'

// title for the page
const Title = ({ title }) => {
  console.log("hello from Title component")
  return (
    <div>
      <h1>{title}</h1>
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