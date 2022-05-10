import React,{ useState } from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
//import ToDoList from '../components/ToDoList';
//import createTask from '../modals/createTask'
const CreateTask = ({modal,toggle,save}) => {
    const [taskName, setTaskName]=useState('');
    const [description, setDescription] = useState('');
   
    const handleChange = (e) => {
       
        const {name, value, save}= e.target;
         if(name==="taskName"){
             setTaskName(value);
         }
         else{
             setDescription(value);
         }
    }

    const handleSave = (e) => {
        e.preventDefault()
        console.log("saving details");
        let taskObj = {}
        var temp1=taskName;
        var temp2=description;
        taskObj["Name"] = temp1;
        taskObj["Description"] = temp2;
        console.log(temp1 + " " +temp2);
        save(taskObj);

    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input id="taskTitle" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName" />
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea id="textTitle" rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div> 
                    </form>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create Task</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;