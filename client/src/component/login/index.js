import React from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons'


export default ()=>{
    return ( 
        <Button block size="lg" color="primary" href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`} >
            <FontAwesomeIcon  icon={faGithub}></FontAwesomeIcon> log in w/ github
        </Button>)
}