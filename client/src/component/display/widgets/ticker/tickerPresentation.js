import React from "react";
import { Textfit } from 'react-textfit';

export const QuoteDisplay = ({quote,i,style})=>{
    
    return (
        <div className={"quoteContainer"} key={i} style={style} >
            <Textfit forceSingleModeWidth={false} mode={"single"} className="name">
                {quote.companyName.length > 15 ? quote.companyName.substring(0,12)+"..." : quote.companyName }
            </Textfit>
            <div className="price">
                {quote.iexRealtimePrice || quote.latestPrice}
                <div className="change" style={{color:quote.change < 0 ? 'red': 'green'}}>
                    {quote.change}%
                </div>
            </div>
            <div className="symobol">
                {quote.symbol}
            </div>
        </div>)
}