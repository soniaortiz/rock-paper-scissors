import React from 'react'
import './style.css'
import { opt } from '../Components/mocks/mock-img'


export function Options(props) {

    const machineMovement = ()=>{
        //select option
        let machineOption = Math.floor(Math.random()*3)
        return machineOption
    }

    const handleClick = ({ target }) => {
        //select random machine response
        // machineMovement()
        props.setPlayersOptions([target.id, machineMovement()])
    }

    return (<div>

        {
            <ul>
                {
                    opt.map((element, index) => {
                        return (<li key={index}>
                            <img src={element.path} onClick={handleClick} id={index} />
                        </li>)
                    })
                }
            </ul>
        }
    </div>)
}