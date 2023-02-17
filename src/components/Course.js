import React from "react";

//Show name of the course
const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
        )
}

//Show header of course
const Header = (props) => (
    <h2>{props.course}</h2>
  )

//Show parts of the course dinamically
const Content = ({parts}) => {
  return(
    <div>
        {
        parts.map( x => {
            console.log(x.id,x.name);
            return(
              <Part key = {x.id} part={x}/>
          )
        })}
    </div>
  )
}

//SHow the total of exercises of the course

const Total = ({parts}) => <b> Total of exercises {parts.reduce(
  (sum, part) => sum+part.exercises,0)
  }</b>


//Show name and number of exercises per part of the course
const Part = (props) => (
    <p> {props.part.name} {props.part.exercises} </p>
  )

export default Course
