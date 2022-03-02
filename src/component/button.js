import { Button } from 'antd';
import React from 'react';

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