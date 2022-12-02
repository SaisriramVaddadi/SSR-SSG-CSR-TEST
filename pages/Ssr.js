import React from 'react'

const Ssr = (props) => {
  
  return (
    <div>{props.data.title}</div>
  )
}

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
return {
    props: { data }
  }
}

export default Ssr