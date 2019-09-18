import React from 'react';
import widget from './widget'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export default class TickerWidget extends widget {
    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            tickers: this.props.ops ? this.props.ops.tickers:[],
            TickerInput: ''
        }
    }
    icon=faChartLine

    AddTicker=(e)=>{
        e.preventDefault()
        this.setState(prevstate=>({...prevstate,tickers:[...this.state.tickers,this.state.TickerInput],TickerInput:''}))
    }
    type="ticker"
    ops=()=>{
        return {tickers:this.state.tickers}
    }
    
    renderBody(){
        return <div>
                <label>Tickers:</label>
                <br></br>
                {this.state.tickers.map((ticker,i) => <div key={i}>{ticker}</div>)}
                <form onSubmit={this.AddTicker}>
                    <input name="TickerInput" value={this.state.TickerInput} onChange={this.valChange} />
                    <input type='submit' />
                </form>
            </div>
    }
}