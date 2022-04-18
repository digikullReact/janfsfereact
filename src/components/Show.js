import React,{useEffect,useState} from 'react'
import { Table, Tag, Space } from 'antd';
import { Button } from 'antd/lib/radio';
import axios from 'axios';
import { Row, Col } from 'antd';



const Show = () => {
    const [apiData,setApiData]=useState([]);
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
    
    },[])
  
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
    
        
    ]
      return (
        <Row style={{marginTop:"200px"}}>
        <Col span={12} offset={6}>
            <h3>Notes Data</h3>
        <Table columns={columns} dataSource={apiData} />

            </Col> </Row>
      )
}

export default Show