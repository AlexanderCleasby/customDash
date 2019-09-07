import React from 'react';
import widget from './widget'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export default class TickerWidget extends widget{
    constructor(){
        super()
        this.state={...this.state,tickers:[],TickerInput:''}
    }
    icon=faChartLine

    AddTicker=(e)=>{
        e.preventDefault()
        this.setState({tickers:[...this.state.tickers,this.state.TickerInput]})
    }
    type="ticker"
    ops=()=>{
        return {tickers:this.state.tickers}
    }
    
    renderBody(){
        return <div>
                <label>Tickers:</label>
                <br></br>
                {this.state.tickers.map(ticker => <div>{ticker}</div>)}
                <form onSubmit={this.AddTicker}>
                    <input name="TickerInput" value={this.state.TickerInput} onChange={this.valChange} />
                    <input type='submit' />
                </form>
            </div>
    }
}