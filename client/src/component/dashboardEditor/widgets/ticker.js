import React from 'react';
import widget from './widget'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export default class TickerWidget extends widget{
    constructor(){
        super()
        this.state={...this.state,tickers:[]}
    }
    icon=faChartLine

    AddTicker=()=>{
        this.setState({tickers:[...this.state.tickers,]})
    }
    
    renderBody(){
        return <div>
                <label>Tickers:</label>
                <br></br>
                {this.state.tickers.map(ticker => <div>{ticker}</div>)}
                <form>
                    <input />
                    <input type='submit' />
                </form>
            </div>
    }
}