import React from "react";


export const QuoteDisplay = (quote)=>{
    console.log(quote)
    return (
        <div className="quoteContainer">
            <div className="name">
                {quote.companyName}
            </div>
            <div className="price">
                {quote.iexRealtimePrice}
            </div>
            <div className="symobol">
                {quote.symbol}
            </div>
        </div>)
}