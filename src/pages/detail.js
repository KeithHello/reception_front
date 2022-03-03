import { Form } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../component/header';

export default function Detail() {
    const {id} = useParams();
    const [data, setData] = useState({});
    const [index, setIndex] = useState(-1);

    useEffect(()=>{
        axios.get('detail.json',{"abc":id,"hhh":2}).then((response)=>{
            let data = response.data
            if (data.code === 0) {
                setData(data)
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
                    <Form>
                        <Form.Item>
                            
                        </Form.Item>
                    </Form>
                    <Link to="/" className='nav-item'>back to index</Link>
                </div>
            </div>
        </div>
    )
}