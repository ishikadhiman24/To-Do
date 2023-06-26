import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function Createmodal(props) {

  const [taskName, setTaskName] =useState("");
  const  [description, setDescription] =useState("")
  const handleChange =(e)=>{
    const name= e.target.name
    const value=e.target.value

    if(name==="taskName"){
      setTaskName(value)
    }
    else{
      setDescription(value)
    }

  }

  const handleSave=()=>{
    let taskObj ={}
    taskObj["Name"]=taskName
    taskObj["Description"]=description
    {props.save(taskObj)}
  }
  return (
    <div>
      <Button color="danger" onClick={props.toggle}>
        Create Task
      </Button>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input type="text" className='form-control' value={taskName} onChange={handleChange} name='taskName'/>
            </div>
            <div className="form-group">
            <label>Task Description</label>
              <textarea rows='5' className='form-control' value={description} onChange={handleChange} name='description'>

              </textarea>
            </div>

          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create Task
          </Button>{' '}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
