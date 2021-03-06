import { Space } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { DeleteBtn, DetailBtn } from '../component/button';

export const headline = [
    {
        title: "タイトル", 
        dataIndex: "title"
    },
    {
        title: "予約番号", 
        dataIndex: "reservationNumber"
    },
    {
        title: "受け種別名", 
        dataIndex: "aimOfMeeting"
    },
    {
        title: "担当者", 
        dataIndex: "personInCharge"
    },
    {
        title: "参加者", 
        dataIndex: "name"
    },
    {
        title: "会議室", 
        dataIndex: "meetingRoom"
    },
    {
        title: "予約日時開始", 
        dataIndex: "reservationDateStart"
    },
    {
        title: "予約日時終了", 
        dataIndex: "reservationDateEnd"
    },
    {
        title: "備考", 
        dataIndex: "note"
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, param) => (
        <Space size="middle">
          <DetailBtn id={param.id} />
          <DeleteBtn id={param.id} />
        </Space>
      ),
    }
]