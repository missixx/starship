import React from 'react'
import './Styles/Asteroid.css'

export default function Asteroid(props) {


    return (
        <div className='asteroid' style={{ right: props.item.right + 'px', top: props.item.top + 'px' }}>
        </div>
    )
}
