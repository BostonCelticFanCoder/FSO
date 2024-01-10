const Header = ({text}) => (
  <h2>{text}</h2>
)


const Part = ({name, exercise}) => (
  <>
    <p>{name} {exercise}</p>
  </>
)

const Content = ({content}) => {
  return content.map((part) => {
    return (<Part name={part.name} exercise={part.exercises} key={part.id} />)
  })

}

const TotalEx = ({content}) => {
  const array = [];
  for (let i = 0; i < content.length; i++) {
    array.push(content[i].exercises)
  }
  let counter = 0;
  const total = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, counter,
  );
  return (
    <b>total of {total} exercises</b>
  )
}



const Course = ({course}) => {
  return (
    <div>
      <Header text={course.name} />
      <Content content={course.parts} key={course.id} />
      <TotalEx content={course.parts} />
    </div>
  )
}

export default Course