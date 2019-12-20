import React, {Component} from 'react';
import widget from './widget'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

class TickerWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TickerInput: ''
        }
    }
    icon=faChartLine

    AddTicker=(e)=>{
        e.preventDefault()
        let tickers = this.props.ops.tickers ? this.props.ops.tickers:[]
        this.props.changeOptions({name:"tickers",value:[...tickers,this.state.TickerInput]})
        this.setState({TickerInput:''})
    }
    type="ticker"
    ops=()=>{
        return {tickers:this.state.tickers}
    }
    
    valChange=(e)=>this.setState({[e.target.name]:e.target.value})

    render(){
        return <div>
                <label>Tickers:</label>
                <br></br>
                {(this.props.ops.tickers || []).map((ticker,i) => <div key={i}>{ticker}</div>)}
                <form onSubmit={this.AddTicker}>
                    <input name="TickerInput" value={this.state.TickerInput} onChange={this.valChange} />
                    <input type='submit' />
                </form>
            </div>
    }
}

export default widget(TickerWidget,{icon:faChartLine})
