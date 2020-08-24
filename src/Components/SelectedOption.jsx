import React, {useState} from 'react'
import './style.css'
import { opt } from '../Components/mocks/mock-img'

export class SelectedOption extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const selectedP1 = this.props.playerOptions[0]>-1? opt[this.props.playerOptions[0]].path :''
        const selectedP2 = this.props.playerOptions[1]>-1? opt[this.props.playerOptions[1]].path :''

        return (<div>

            <ul>
                <li><img src={selectedP1} alt=""/></li>
                <li><img src={selectedP2} alt=""/></li>
            </ul>

        </div>)
    }
}