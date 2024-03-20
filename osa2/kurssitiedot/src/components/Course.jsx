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

export default Course