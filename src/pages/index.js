import {Table} from 'antd';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../component/header';
import { headline } from '../table/overview';
import './index.scss'

export default function Index() {

    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        axios.get('data.json').then((response)=>{
            let data = response.data;
            if (data.code === 0) {
                setData(data.data);
            }

            return (()=>{})
        })
    },[])

    return (
        <div className='home'>
            <div className='header'>
                <h1>予約管理</h1>
                <Header index={index} setIndex={setIndex}/>
                <div className='wrap'>
                    <Table 
                        bordered
                        columns={headline}
                        dataSource={data}
                        rowKey = {(param) => (param.id)}
                    ></Table>
                </div>
            </div>
        </div>
    )
}