import React from "react";


export const QuoteDisplay = (quote,i)=>{
    console.log(quote)
    return (
        <div key={i} className="quoteContainer">
            <div className="name">
                {quote.companyName}
            </div>
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