import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

const AllPets = props => {
    const [pets, setPets] = useState ([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
    axios.get('http://localhost:8001/api/main/get')
    .then(res=>{
        setPets(res.data)
        setLoaded(true)
        console.log("We've got the pets")
    })
}, [])


    return (<>
    <h2>These pets are looking for a good home.</h2>
    <Link to={`/add`}>Add a pet</Link>
    { loaded && 
            <table>
                <tr>
                    <th>Pet's Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {pets.map((pet, index)=>{
                    return(
                        <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={`/pet/details/${pet._id}`}> Details </Link>  
                                |
                                <Link to={`/pet/edit/${pet._id}`}> Edit </Link>
                            </td>
                        </tr>
                    )
                })}
            </table>
        }

    </>)
}

export default AllPets