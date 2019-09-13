

export const getQuote = (symbols)=>{
    symbols = symbols.join(",")
    return new Promise((resolve,reject)=>{
        fetch(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote&token=${process.env.REACT_APP_IEX_TOKEN}`)
        .then(res=>res.json())
        .then(res=>resolve(res))
    })
}