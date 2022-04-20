import React,{useState,useEffect} from 'react'
import { Input } from 'antd';
const { TextArea } = Input;
import { Button } from 'antd';
import axios from 'axios';

import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import NoteShow from './NoteShow';

const Add = () => {
    ///api/notes/fetchallnotes
    const initialData={
      title:"",
      description:"",
      _id:""

  }

    const [state,setState]=useState(initialData)

    const [apiData,setApiData]=useState([]);
    const [flag,setFlag]=useState(false);

    const [editMode,setEditMode]=useState(false);

const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

}

const getData=()=>{
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/notes/fetchallnotes`).then(response=>{
     console.log(response.data);
      setApiData(response.data);
    }).catch(err=>{
        console.log(err);
    })
}

useEffect(()=>{
    getData();

},[flag])

const deleteData=(data)=>{
    console.log(data);

    axios.delete(`http://localhost:8000/api/notes/deletenote/${data}`).then(res=>{
       console.log(res.data);
       alert("Data deleted")
       setFlag(!flag);

       // state change in here ---->
       //getData();
    }).catch(err=>{
        console.log(err);
    })

}

const editData=(id,row)=>{
  setState(row);
  setEditMode(true);

 

}

const submitData=()=>{
    // Api call
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/notes/addnote`,state).then(response=>{
     //  console.log(response);
       alert("Data Saved");
       setState(initialData)
       setFlag(!flag);
       //getData();
    }).catch(err=>{
        console.log(err);
    })
}

const editDataApi=()=>{

   // Api call
   axios.put(`http://localhost:8000/api/notes/updatenote/${state._id}`,state).then(response=>{
    //  console.log(response);
      alert("Data Edited");
      setFlag(!flag);
      setEditMode(false);
      setState(initialData)
      //getData();
   }).catch(err=>{
       console.log(err);
   })

}

  return (
    <div style={{marginTop:"200px"}}>
         <Row>
      <Col span={6} offset={9}>
          <h3>Add Your Notes Page</h3>
      <Input size="large" placeholder="Title" value={state.title} onChange={handleChange} name='title' prefix={<UserOutlined />} /> <br/>

      <TextArea rows={4} placeholder="Description"  value={state.description} onChange={handleChange} name='description'  style={{marginTop:"20px"}} />
{
  editMode ?      <Button type="primary" onClick={editDataApi} style={{marginTop:"20px"}}>Edit Note</Button>
  :      <Button type="primary" onClick={submitData} style={{marginTop:"20px"}}>Add Notes</Button>


}


      </Col>
    </Row>

    <Row>
      <Col span={6} offset={9}>
        
        <NoteShow data={apiData} deleteData={deleteData} editData={editData}/>


      </Col>
    </Row>



    </div>
  )
}

export default Add