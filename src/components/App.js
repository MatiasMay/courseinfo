import React from "react"
import Course from "./Course"


const App = () => {
  //Course object containing all of the data, can apply an arbitrary amount of courses now
  const courses = [
    {
    id: 1,
    name:'Half Stack application development',
    parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    }
    ,{
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    }
    ,{
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
  {
    name: 'Redux',
    exercises: 11,
    id: 4
  }]
  },{
    id: 2,
    name: 'Node.js',
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
  //Part that handles the site body
  return (
    <div>
      <Header2 name = 'Web Development curriculum'/>
    {courses.map( x => {
        console.log(x.id,x.name);
        return(
          <Course key = {x.id} course={x}/>
      )
    })
    }
  </div>
   )
  }
  //Header for the site in general
  const Header2 = ({name}) => (
    <h1>{name}</h1>
  )

export default App