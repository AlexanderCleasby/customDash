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
        this.updateQuotes()
        setInterval(this.updateQuotes,1000*60)
    }

    updateQuotes = () => {
        getQuote([this.props.ops.tickers])
            .then(res => {
                this.setState({
                    quote: Object.keys(res).map(ticker => res[ticker].quote)
                })
            })
    }

    widgetStyles = ()=>({
        position:'absolute',
        top:DecimalToPercent(this.props.x/this.props.dashHeight),
        left:DecimalToPercent(this.props.y/this.props.dashWidth),
        height:DecimalToPercent(this.props.width/this.props.dashWidth),
        width:DecimalToPercent(this.props.height/this.props.dashHeight) 
    })

    QuoteStyle = ()=>({
        width:DecimalToPercent(1/this.props.height),
        height:DecimalToPercent(1/this.props.width)
    })

    render(){
        return(<div className="ticker displayWidget" style={this.widgetStyles()}>
            {this.state.quote.map((quote,i)=><QuoteDisplay style={this.QuoteStyle()} quote={quote} key={i} />)}
        </div>)
    }
}