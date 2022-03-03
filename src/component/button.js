import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const DetailBtn = (param) => {
    return (
        <Button><Link to={"/detail/" + param.id}>詳細</Link></Button>
    )
}

export const DeleteBtn = (param) => {
    return (
        <Button type="primary" onClick={() => 
            {
                if (window.confirm("Are you sure")) {
                    window.alert("The data of " + param.id + " is deleted")
                }
            }
        }
        >Delete</Button>
    )
}