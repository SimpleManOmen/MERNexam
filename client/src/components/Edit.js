import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

const Edit = props => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")
    const [errors, setErrors] = useState([])
    const {id} = props.match.params

    useEffect(()=>{
        axios.get(`http://localhost:8001/api/main/${id}`)
            .then(res=>{
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkillOne(res.data.skillOne)
                setSkillTwo(res.data.skillTwo)
                setSkillThree(res.data.skillThree)
                // setLoaded(true)
                console.log("API call is done")
            })
    }, [])

    const updatePetHandler = e =>{
        e.preventDefault()
        axios.put(`http://localhost:8001/api/main/edit/${id}`, {
            name,type, description,skillOne, skillTwo, skillThree
        })
        .then(res=>{
            console.log("Response: ", res)
            props.history.push('/')
        })
        .catch(err=>{
            console.log("This thing", err)
            const errorResponse = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
        

    }

    return(<>
    <p><Link to="/">Back to home</Link></p>
    <h1>Know a pet needing a home?</h1>

    <form onSubmit={updatePetHandler}>
            {errors.map((err, index) => <p style={{color:"red"}}key={index}>{err}</p>)}
            <p>
                <label>Name: </label>
                <input type="text" onChange={e=>{setName(e.target.value)}} value={name} />
            </p>
            <p>
                <label>Type: </label>
                <input type="text" onChange={e=>{setType(e.target.value)}} value={type} />
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange={e=>{setDescription(e.target.value)}} value={description} />
            </p>
            <p>
                <label>Skill One: </label>
                <input type="text" onChange={e=>{setSkillOne(e.target.value)}} value={skillOne} />
            </p>
            <p>
                <label>Skill Two: </label>
                <input type="text" onChange={e=>{setSkillTwo(e.target.value)}} value={skillTwo} />
            </p>
            <p>
                <label>Skill Three: </label>
                <input type="text" onChange={e=>{setSkillThree(e.target.value)}} value={skillThree} />
            </p>
            <input type="submit" value="Update"/>
        </form>
    
    </>)
}

export default Edit