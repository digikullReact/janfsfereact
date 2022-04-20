import React,{useEffect,useState} from 'react'
import { Table, Tag, Space } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;
import { UserOutlined } from '@ant-design/icons';


import axios from 'axios';
import { Row, Col } from 'antd';
import { Modal, Button } from 'antd';



const Show = () => {
    const [apiData,setApiData]=useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const initialData={
      title:"",
      description:"",
      _id:""

  }

  const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

}

    const [state,setState]=useState(initialData)

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
    
    },[isModalVisible])

    const editData=(_,row)=>{
      setIsModalVisible(true);
      setState(row);


    }

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {

         // Api call
   axios.put(`${process.env.REACT_APP_SERVER_URL}/api/notes/updatenote/${state._id}`,state).then(response=>{
    //  console.log(response);
      alert("Data Edited");
    
     
      setIsModalVisible(false);
      //getData();
   }).catch(err=>{
       console.log(err);
   })


     
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: text => text,
          },
          {
            title: 'Edit',
            dataIndex: '_id',
            key: '_id',
            render: (text ,row)=> <Button danger  onClick={()=>editData(text,row)}>Edit</Button>,
          },
    
        
    ]
      return (
        <Row style={{marginTop:"200px"}}>
        <Col span={12} offset={6}>
            <h3>Notes Data</h3>
        <Table columns={columns} dataSource={apiData} />

        <Modal title="Edit Data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input size="large" placeholder="Title" value={state.title} onChange={handleChange} name='title' prefix={<UserOutlined />} /> <br/>

<TextArea rows={4} placeholder="Description"  value={state.description} onChange={handleChange} name='description'  style={{marginTop:"20px"}} />
      </Modal>

            </Col> </Row>
      )
}

export default Show