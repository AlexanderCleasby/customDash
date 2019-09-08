import React,{ Component } from 'react';

export default class Display extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return <div>Display!</div>
    }
} 