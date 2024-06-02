import './CampsiteLogin.css'
import {useState} from 'react'
import FormInput from '../../../components/formInput/FormInput';
import NavLogo from '../../../components/navLogo/NavLogo';
import {useNavigate  } from "react-router-dom";
import Cookies from 'js-cookie';

const CampsiteLogin = () => {
  const navigate  = useNavigate()
  const [values, setValues] = useState({
    business_registration_number:"",
    password:"",
  });
  const inputs =[
    {
      id: 1,
      name: "business_registration_number",
      type: "text",
      placeholder: "Business registration number",
      errorMessage: "Provide valid business registration number!",
      unique: true,
      label: "Business registration number",
      required: true,
 }
 ,
 {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Provide correct password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
      required: true,
 }
  ];
  const onChange = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]:value});
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault();


    try{


    const { business_registration_number, password } = values

      const res = await fetch("http://localhost:5000/api/v1/login_campsite",{
      method:"POST",
      headers:{"Content-Type":"application/json"
      },
   
      body:JSON.stringify({
        
        business_registration_number,
        password
      }
      )
        
    })
    const data = await res.json()
        if (!res.ok) {
          throw Error(data['error'])
        }
        Cookies.set('jwt', data.data.token, { expires: 1 });
        navigate('/', { replace: true });
        window.location.reload();

      } catch (error) {
        console.log(error.message);
      }
  };

  return (
    <div className='regPage'>
    <NavLogo/>
      <div className="fullForm">
      <form method='POST' className="regForm" >
          <h1>Campsite Login</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              
            />
          ))}
          <button className='mybutton' onClick={handleSubmit}>Login</button>
        </form>
      </div>
  </div>
  )
}

export default CampsiteLogin