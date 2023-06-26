import React from 'react'
import Createmodal from './Createmodal'
import { useState, useEffect } from 'react';
import Cards from './Cards';

export default function Todointro(props) {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
   {/*} useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])*/}

    useEffect(() => {
        let arr = localStorage.getItem("taskList");
        if (arr) {
          let obj = JSON.parse(arr);
          if (Array.isArray(obj)) { // Add this condition
            setTaskList(obj);
          }
        }
      }, []);
      

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

      const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }
      


    return (
        <>
            <div className = "header text-center">
                <h3>Todo List</h3>
                {/*<button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>*/}
                <Createmodal toggle = {toggle} modal = {modal} save = {saveTask} onClick = {() => setModal(true)}/>
            </div>
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Cards taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            {/*<Createmodal toggle = {toggle} modal = {modal} save = {saveTask}/>*/}
        </>

  )
}

