import React from 'react'
import './Card.module.css'

const  Card = ({imgname,username,name,likes,id}) =>{

    return (
        <div className='flex-container'>
            <div>
                <img src={imgname}/>

                <h2> username:{username}  </h2>
                <h2>name:{name}</h2>
                <h3>id:-{id}</h3>
                <h3>likes: {likes}</h3>
            </div>
        </div>
    )
}

export  default Card