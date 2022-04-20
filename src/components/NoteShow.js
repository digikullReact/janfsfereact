import React from 'react'
import { Table, Tag, Space } from 'antd';
import { Button } from 'antd/lib/radio';


const NoteShow = ({data,deleteData,editData}) => {

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
        title: 'Delete',
        dataIndex: '_id',
        key: '_id',
        render: text => <Button danger  onClick={()=>deleteData(text)}>Delete</Button>,
      },
      {
        title: 'Edit',
        dataIndex: '_id',
        key: '_id',
        render: (text ,row)=> <Button danger  onClick={()=>editData(text,row)}>Edit</Button>,
      },
]
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default NoteShow