import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AllPets from './components/AllPets'
import ThisPet from './components/ThisPet'
import AddPet from './components/AddPet'
import Edit from './components/Edit'


function App() {
  return (<>
    <h1>Pet Shelter</h1>
    <Router>
      <Switch>
      
        <Route path="/pet/details/:id" component={ThisPet} />
        <Route path="/pet/edit/:id" component={Edit} />

        <Route path="/add" component={AddPet} />
        <Route path="/" component={AllPets} />
      </Switch>
    </Router>
  </> )
}

export default App;
