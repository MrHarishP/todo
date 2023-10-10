// import { useState } from "react";
import React, { useState,useEffect } from "react";

const Todo = ({list,setList}) => {
    // const [ delete , setDelete] = useState("intiate value")
  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")

  function saveDataInList (){
    console.log("--save data",list,title,description)
    setList([...list,{title,description}])
    setTitle("")
    setDescription("")
  }


const deletebutton =(index)=>{
    const updatedList = [...list]; // Create a new array by spreading the existing list
  updatedList.splice(index, 1); // Remove the item at the specified index
  setList(updatedList); // Update the state with the new list
}
useEffect(()=>{

},[list])
  return (
    <>
      <div className="container">
        <div className="col-12 text-center">
          <h1 className="col-12 " >
            Add New Task
          </h1>
        </div>
      </div>
      <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="text-center">
            <h2> </h2>
          </div>
          <form className="col-12 p-2" >
            <label className="label" htmlFor="title ">Enter Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              className="w-100 my-1 p-2 color-white"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="my-2" htmlFor="description">
              Enter
            </label>
            <input
              type="text"
              value={description}
              placeholder="Description"
              className="w-100 my-1 p-2"
              onChange={(e) => setDescription(e.target.value)}
             
            />
            <button className="btn btn-primary my-2" onClick={saveDataInList}> save</button>
          </form>
        </div>
      </div>
      <div className="showAllListItems">
      {list.map((item, index) => (
    <div className = "row border rounded shadow p-3 mb-5 bg-white rounded my-3 p-2 " key={index}>
        
      <p>Title: {item.title}</p>
      <p>Description: {item.description}</p>

       <div className="col-12 d-flex justify-content-end my-1">

      <button className="btn btn-danger" onClick={(e)=>{deletebutton(index)}}>Delete</button>
      </div>
    </div>
  ))}      </div>
    </>
  );
};

export default Todo;
