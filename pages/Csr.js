import React, { useEffect, useState } from "react";

const Csr = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return(data ? <div>{data.title}</div> : <p>Loading...</p>)
};

export default Csr;
