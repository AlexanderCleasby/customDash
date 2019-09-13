import React, { Component } from 'react'
import { DecimalToPercent } from "../../../../utility/decimalToPercent";
import  { getQuote }  from "../../../../utility/iex";
import { QuoteDisplay } from "./tickerPresentation"
import './ticker.scss'

export default  class TickeridgetDisplay extends Component {
    constructor(props){
        super(props)
        this.state={
            quote:[]
        }
    }
    componentDidMount(){
        getQuote([this.props.ops.tickers])
        .then(res=>{
            this.setState({quote:Object.keys(res).map(ticker=>res[ticker].quote)})
        })
        console.log(this.state.quote)
    }

    widgetStyles = ()=>({
        position:'absolute',
        top:DecimalToPercent(this.props.x/this.props.dashHeight),
        left:DecimalToPercent(this.props.y/this.props.dashWidth),
        height:DecimalToPercent(this.props.width/this.props.dashWidth),
        width:DecimalToPercent(this.props.height/this.props.dashHeight) 
    })

    render(){
        return(<div className="ticker displayWidget" style={this.widgetStyles()}>
            {this.state.quote.map(quote=>QuoteDisplay(quote))}
        </div>)
    }
}