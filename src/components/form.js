import React, { useState } from 'react';
import axios from 'axios';

function Form(){
  const [state, setState] = useState({
      name:'',
      surname:'',
      email:'',
      gender:'',
      danish:false,
      english:false,
      info:''
    });
    

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

   const languageChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: state.name,
      Surname: state.surname,
      Email: state.email,
      Gender:state.gender,
      Danish:state.danish,
      English:state.english,
      Information:state.info
    };
    
    axios.post(`https://jsonplaceholder.typicode.com/posts`, { user })
      .then(res => {console.log(res.data);
        alert('Successfully submitted')
      })
  }
    return (
      <div className="volunteer" id="volunteer-form">
        <form onSubmit={handleSubmit} className="volunteer__form">
          <div className="field">
            <label className="field__required" >Name</label>
            <input type="text" name="name" onChange={handleChange} pattern="[a-zA-Z]{1,}" required />
          </div>
          <div className="field">
            <label className="field__required" >Surname</label>
            <input type="text" name="surname" onChange={handleChange} pattern="[a-zA-Z]{1,}" required />
          </div>
          <div className="field">
            <label className="field__required" >Email</label>
            <input type="email" name="email" onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
          </div>
          <div className="field-g">
            <label>Gender</label>
            <div className="gender">
              <span className="gender-r">
                <label>Female</label>
                <input className="r-c" type="radio" id="female" name="gender" value="female" onChange={handleChange} />
              </span>
              <span className="gender-r">
                <label>Male</label>
                <input className="r-c" type="radio" id="male" name="gender" value="male" onChange={handleChange} />
              </span> 
            </div>
          </div>
          <div className="field-g">
            <label>Languages</label>
            <div className="gender">
              <span className="gender-r">
                <label>Danish</label>
                <input className="r-c" type="checkbox" id="danish" name="danish" value="true" checked={state.danish} onChange={languageChange} />
              </span>
              <span className="gender-r">
                <label>English</label>
                <input className="r-c" type="checkbox" id="english" name="english" value="true" checked={state.english} onChange={languageChange} />
              </span>
            </div>
          </div>
          <div className="txt-area">
          <label>Comments</label>
          <textarea name="info" value={state.info} rows="3" cols="30" onChange={handleChange} />
          </div>
          <button className="btn" type="submit">JOIN</button>
        </form>
        <div className="volunteer__info">
        <p><span>Do you want to become a volunteer at Summer Festival?</span><br/> 
          We are proud of our volunteers, because they have been taking part in creating a unique festival city - a city with strong values and a place where we transform dreams into reality.<br/>
          <span>Responsibilities</span><br/>
          The volunteers provide camping security, build stages, staff the festival stalls etc.
          Most volunteer positions require 32 hours effort, spread out on shifts throughout the whole festival, or 24 hours effort, spread out on the last four days of the festival.
          As a festival volunteer, you must be the minimum of 15 years old at the start of the festival. For positions relating to sale of liquor and beer, as well as work with safety, such as service-volunteers at camp sites or crowd safety, you must be at least 18 years old. Some positions require you to be the minimum of 21 years old.
          To become a volunteer, you must be ready to become part of a great and creative community!<br/>
          <span>Apply</span><br/>
          Please fill the form and join into our family
          Thank you!
        </p>
        </div>
      </div>
    )
}

export default Form;