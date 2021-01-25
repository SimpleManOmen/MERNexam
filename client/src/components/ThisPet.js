import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

const ThisPet = props => {
    const [pet, setPet] = useState({})
    const {id} = props.match.params

    useEffect(()=>{
        axios.get(`http://localhost:8001/api/main/${id}`)
            .then(res=>{
                setPet(res.data)
                console.log("API call is done")
            })
    }, [])

    const onAdoptHandler = (id) => {
        axios.delete(`http://localhost:8001/api/main/delete/${id}`)
            .then(res => {
                props.history.push('/')
            })
    }

    return(<>
    <h2>Details about {pet.name}</h2>
    <p><Link to="/">Back to home</Link></p>
    <button onClick={e=>{onAdoptHandler(pet._id)}}>Adopt {pet.name}</button>
    <p>Pet type: {pet.type}</p>
    <p>Description: {pet.description}</p>
    <p>Skills:</p>
    <p>{pet.skillOne}</p>
    <p>{pet.skillTwo}</p>
    <p>{pet.skillThree}</p>
    {/* {pet.skillOne && <p>Skill One: {pet.skillFive}</p>} */}
    
    </>)
}

export default ThisPet