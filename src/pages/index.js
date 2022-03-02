import {Table} from 'antd';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
        })
    })

    return (
        <div className='home'>
            <div className='header'>
                <h1>予約管理</h1>
                <div className='nav'>
                    <label className={index === 0 ? "checked" : ""} onClick={()=>{setIndex(0)}}>予約一覧</label>
                    <label className={index === 1 ? "checked" : ""} onClick={()=>{setIndex(1)}}>予約作成</label>
                    <label className={index === 2 ? "checked" : ""} onClick={()=>{setIndex(2)}}>予約検索</label>
                </div>
                <div className='wrap'>
                    <Table 
                        bordered
                        columns={headline}
                        dataSource={data}
                    ></Table>
                    <Link to="/" className='nav-item'>back to index</Link>
                </div>
            </div>
        </div>
    )
}