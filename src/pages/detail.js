import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../component/header';
import './detail.scss'

export default function Detail() {
    const {id} = useParams();
    const [data, setData] = useState({});
    const [index, setIndex] = useState(-1);

    useEffect(()=>{
        axios.get('detail.json',{id}).then((response)=>{
            let data = response.data
            if (data.code === 0) {
                console.log(data.data)
                setData(data.data)
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
                    <Form
                        name="basic"
                        layout="vertical"
                        className='form'
                        initialValues={{
                          remember: true,
                          title: data.title,
                        }}
                    >
                        <Form.Item
                            className="item"
                            label="タイトル"
                            name="title"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="予約番号"
                            name="reservationNumber"
                        >
                            <Input defaultValue={data.reservationNumber}/>
                        </Form.Item>

                        <Form.Item
                            label="受け種別名"
                            name="aimOfMeeting"
                        >
                            <Input defaultValue={data.aimOfMeeting}/>
                        </Form.Item>

                        <Form.Item
                            label="担当者"
                            name="personInCharge"
                        >
                            <Input defaultValue={data.personInCharge}/>
                        </Form.Item>

                        <Form.Item
                            label="参加者"
                            name="name"
                        >
                            <Input defaultValue={data.name}/>
                        </Form.Item>

                        <Form.Item
                            label="会議室"
                            name="meetingRoom"
                        >
                            <Input defaultValue={data.meetingRoom}/>
                        </Form.Item>

                        <Form.Item
                            label="予約日時開始"
                            name="reservationDateStart"
                        >
                            <Input defaultValue={data.reservationDateStart}/>
                        </Form.Item>

                        <Form.Item
                            label="予約日時終了"
                            name="reservationDateEnd"
                        >
                            <Input defaultValue={data.reservationDateEnd}/>
                        </Form.Item>

                        <Form.Item
                            label="備考"
                            name="note"
                        >
                            <Input defaultValue={data.note}/>
                        </Form.Item>

                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                    <Link to="/" className='nav-item'>back to index</Link>
                </div>
            </div>
        </div>
    )
}