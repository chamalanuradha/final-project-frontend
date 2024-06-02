import React from 'react'
import { useState } from 'react'
import "./campsiteRegistration.css"
import FormInput from '../../components/formInput/FormInput'
import NavLogo from '../../components/navLogo/NavLogo'
import DragDrop from "../../components/DragPhoto/dragphoto";
import {useNavigate  } from "react-router-dom";
import Cookies from 'js-cookie';

const CampsiteRegistration = () => {
    const navigate  = useNavigate()

    const [values, setValues] = useState({
      campsite_name: "",
      location_address:"",
      nearest_city:"",
      business_registration_number:"",
      description:"",
      phone_number:"",
      password:"",


      });

      const [ photosOfLocation, setPhotosOfLocation ] = useState([]);
      const [ photosOfLegalDocs, setPhotosOfLegalDocs ] = useState([]);
    
      

    const inputs =[
     {
        id: 1,
          name: "campsite_name",
          type: "text",
          placeholder: "Campsite Name",
          errorMessage:
            "Campsite name should be 3-16 characters and shouldn't include any special character!",
          label: "Campsite Name",
          required: false,
     }
     ,
     {
        id: 2,
          name: "location_address",
          type: "text",
          placeholder: "Location Address",
          errorMessage:
            "Enter location address",
          label: "Location Address",
          required: false,
     },
     {
      id: 3,
        name: "nearest_city",
        type: "text",
        placeholder: "Nearest City",
        errorMessage:
          "Enter nearest city",
        label: "Nearest City",
        required: false,
   }
     ,
     {
      id: 4,
        name: "business_registration_number",
        type: "text",
        placeholder: "Business Registration Number",
        errorMessage:
          "Enter the business registration number",
        label: "Business Registration Number",
        required: false,
      },
    {
      id: 5,
        name: "description",
        type: "text",
        placeholder: "Description",
        errorMessage: "Enter a description",
        label: "Description",
        required: false,
     },
     {
      id: 6,
      name: "phone_number",
      type: "text",
      placeholder: "Phone Number",
      errorMessage:
        "Enter phone number",
      label: "Phone Number",
      required: false,
    },
    {
      id: 7,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: false,
    }
    ];
    

    const onChange = (e) => {
      console.log(e);
      let name = e.target.name;
      let value = e.target.value;
      setValues({ ...values, [name]:value});
      
    }

    const handleChange = (files) => {
    
      for (const file of files){
        const reader = new FileReader();
  
        reader.onload = () => {
        const base64 = reader.result;
  
        const _ = photosOfLocation
        _.push(base64)
        setPhotosOfLocation(_)
      } 
      reader.readAsDataURL(file)
      }
      console.log(photosOfLocation); 
    };

    const handleChange2 = (files) => {
    
      for (const file of files){
        const reader = new FileReader();
  
        reader.onload = () => {
        const base64 = reader.result;
  
        const _ = photosOfLegalDocs
        _.push(base64)
        setPhotosOfLegalDocs(_)
      } 
      reader.readAsDataURL(file)
      }
      console.log(photosOfLegalDocs); 
    };



    const handleSubmit = async(e) => {
      e.preventDefault();

      const { 
        campsite_name,
        location_address,
        nearest_city,
        business_registration_number,
        description,
        phone_number,
        password,
        featured
      } = values


        
        const res = await fetch("http://localhost:5000/api/v1/register_campsite",{
        method:"POST",
        headers:{"Content-Type":"application/json"
        },
     
        body:JSON.stringify({ 
        campsite_name,
        location_address,
        nearest_city,
        business_registration_number,
        description,
        phone_number,
        password,
        photos_of_location:photosOfLocation,
        photos_of_legal_docs:photosOfLegalDocs,
        featured
      } 
        )
          
      })
      const data = await res.json()
      console.log(data)
  
      if(data.status === 422 || !data){
        console.log('invalid registration');
      }else{
        Cookies.set('jwt',data.data.token,{expires:1});
        navigate('/pkgs',{replace:true});
        window.location.reload();
      }
    };

  return (
    <div className='regPage'>
      <NavLogo/>
        <div className="fullForm">
        <form method='POST' className="regForm" >
            <h1>Campsite Registration</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                
              />
            ))}
            <h4>Photos of campsite</h4>
            <DragDrop handleChange={handleChange}/>
            <h4>Photos of legal documents</h4>
            <DragDrop handleChange={handleChange2}/>
          
              <button className='mybutton' onClick={handleSubmit}>Register</button>
          </form>
        </div>
    </div>
  )
}

export default CampsiteRegistration