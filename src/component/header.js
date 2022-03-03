import React from 'react';

export const Header = function(param) {
    return (
        <div className='nav'>
            <label className={param.index === 0 ? "checked" : ""} onClick={()=>{param.setIndex(0)}}>予約一覧</label>
            <label className={param.index === 1 ? "checked" : ""} onClick={()=>{param.setIndex(1)}}>予約作成</label>
            <label className={param.index === 2 ? "checked" : ""} onClick={()=>{param.setIndex(2)}}>予約検索</label>
        </div>
    )
}