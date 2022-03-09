import React, { useState, useEffect, useRef } from 'react';
import Output from "./Output";

function Input() {

  const [input, setInput] = useState("");
  
  const [filter, setFilter] = useState(""); //
  const [filterList, setFilterList] = useState([])  //filtered array

  const [list, setList] = useState([]);   //array value
  
  const counter = useRef(0);  //store counter everytime new todo is made

  //create new filter array
  useEffect(() => {
    const tempList = list.filter(item => 
      item.toLowerCase().includes(filter.toLowerCase())
    )
    setFilterList(tempList);

  },[filter])

  //todo-maker handler
  const handleInput = (e) => {
    e.preventDefault();   //prevents refreshing page which is caused by form submission.
    setList(prevState => [...prevState, input]);  //take list and add to it.
    setInput(""); //clear input
    counter.current += 1;
  }

  //counter handler
  const handleCounter = () => {
    counter.current +=10;
  }

  return (
    <>
      <form onSubmit={handleInput}>
        <label htmlFor="new-item">New Todos</label>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} name="new-item"/>
        <input type="submit" value="Create Todo" />
        </form>
      <div>
        <label htmlFor="filter-item">Filter Todos</label>
        <input value={filter} onChange={(e) => setFilter(e.target.value)} name="filter-item"/>
      </div>

        { (filter.length === 0)?
          <Output output={list}/>
        :
          <Output output={filterList} />
        }

      <h2> That's all the todos for the day!</h2>

      <button onClick={handleCounter}>Add 10 to counter</button>
      <h3>useRef example: {counter.current}</h3>
    </>
  );
}

export default Input;
  