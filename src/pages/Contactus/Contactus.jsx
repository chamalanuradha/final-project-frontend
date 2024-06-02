import { useState } from "react";
import "./Contactus.css";
import NavLogo from "../../components/navLogo/NavLogo";
import EventFormInput from "../../components/CreateEvent/EventFormInput";
import {Link } from "react-router-dom"; 
import React from 'react';



const Contactus = () => {
  const [values, setValues] = useState({
    contact_name: "",
    contact_email: "",
    subject: "",
    suggesion: "",
  
    
  });

  const [text1, setText1] = useState('Types');

  const inputs = [
    {
      id: 1,
      name: "contact_name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

   
    {
      id: 2,
      name: "contact_email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

 
    {
      id: 3,
      name: "subject",
      type: "text",
      placeholder: "Subeject",
      label: "Subject",
      required: true,
    },

    {
      id:4,
      name: "suggesion",
      type: "text",
      placeholder: "Sugessions",
      label: "Sugessions",
      required: true,
    },
   

    
    
   
  ];

  const onChange = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]:value});
    
  };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const{
//     contact_name,
//     contact_email,
//     subject,
//     suggesion
  
//     } = values

//     const res = await fetch("http://localhost:5000/api/v1/contact",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"
//         },
//         body:JSON.stringify({ 
//           contact_name,
//           contact_email,
//           subject,
//           suggesion,
//           message:text1



//   })

// })
// const data = await res.json()

// if(data.status === 422 || !data){
//   console.log('invalid registration');
// }else{
//   console.log('Successfull')
//   console.log(data);

// }
// };

  return (
    <div className="contactpage"><NavLogo/>
    <div className="contactfullform">
         
      <form method= 'POST' className="contactform" >
        <h1>Contact us</h1>
        {inputs.map((input) => (
          <EventFormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <label><br/>Message<br/></label>
        <textarea value={text1} 
             onChange={(e) => setText1(e.target.value) } > </textarea>
        
        
        <Link to="/"><button className='contactbutton'>Send</button></Link>
      </form>
    </div>
   
    </div>
  );
};

export default Contactus;
