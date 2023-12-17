
import React , {useState} from 'react'
import Header from '../Components/Header'

export default function App() {
  const [task,setTask] = useState("")
  const [taskArray,setTaskArray] = useState([])
  const [updateIdx,setupdateIdx] = useState(null)

function getTask(e){
    setTask(e.target.value)
    // console.log(todo)
}
function deleteFunc(idx){
  console.log("inside delete function")
  const temp = [...taskArray]
  temp.splice(idx,1)
  setTaskArray(temp)
}

function editFunc(data,idx){
setTask(data);
setupdateIdx(idx);
}

function appendTask(){
  if(task !== ""){
    setTaskArray([...taskArray,task])
    setTask(""); 
  
 
  }
}
function updateTask()
{
  if(task !== ""){
    let temp = [...taskArray]
    temp[updateIdx]=task;
    setTaskArray(temp);
    setTask("");
    setupdateIdx(null);
  }
  
}
 return (

    <div className="App">
      <Header />
     <h1 className="mainheading">Tasks</h1>
     <input type = "text" onChange={getTask} value={task}/>
     <button id="btn" onClick={appendTask}  >Add Task</button>
     <button id="update" onClick={updateTask} > Update Task</button>
      { taskArray.map((data,idx)=>{
        return(<div key={idx}>
                  <br/><span>{data}</span>
                  <button onClick={()=>{editFunc(data,idx)}}>Edit</button>
                  <button onClick={()=>{deleteFunc(idx)}}>Delete</button>
              </div>)
  })}
    </div>
  );
}