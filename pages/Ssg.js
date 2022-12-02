import React from 'react'

const Ssg = (props) => {
  return (
    <div>{props.data.title}</div>
  )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
return {
    props: { data }
  }
}

export default Ssg