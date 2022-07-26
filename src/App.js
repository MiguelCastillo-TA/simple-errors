import './App.css';
import React, {useState} from 'react';

function App() {

  const [errors, setErrors] = useState({
    "name": '',
    "email": ''
  })

  const handleChange = e =>{
    if(e.target.id == "name"){
      if(isValid(e.target.value, 3) == false){
        setErrors({...errors, [e.target.id] : "Name must be greater than 3"})

      } else {
        setErrors({...errors, [e.target.id] : ""})
      }
    }
    if(e.target.id == "email"){
      if(isValid(e.target.value, 6) == false){
        setErrors({...errors, [e.target.id] : "Email must be greater than 6"})
      } else {
        setErrors({...errors, [e.target.id] : ""})
      }
    }
    
  }

  const isValid = (val, len) => {
    if(val.length < len){
      return false
    }
    return true
  }


  return (
    <>
      <form>
        <label htmlFor="name">
          Name:
        </label>
        <input id="name" type="text" onChange={handleChange}></input>
        <p>
          {errors.name.length > 0 ? errors.name : '' }
        </p>

        <label htmlFor="email">
          Email:
        </label>
        <input id="email" type="email" onChange={handleChange}></input>
        <p>
          {errors.email.length > 0 ? errors.email : '' }
        </p>
        <input type="submit" value="submit"/>
      </form>
    </>
  );
}

export default App;
