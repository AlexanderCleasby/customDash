import React from 'react'


export default ()=>{
    return ( <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`} >log in w/ github</a>)
}