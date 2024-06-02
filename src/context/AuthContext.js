import { createContext, useEffect } from "react";
import Cookies from 'js-cookie';
import { useState } from "react";
import {jwtVerify} from "jose";


export const AuthContext = createContext();


async function verify(token, secret){
  try {
      const decode = await jwtVerify(token, new TextEncoder().encode(secret));
      return decode;
  } catch (error) {
      return false;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [user,setUser] = useState(null)

  useEffect(()=>{
    const token = Cookies.get('jwt')
    const myfn = async()=>{
      const {payload} = await verify(token,'CampKey')
      setUser(payload['user'])
      console.log(payload['user']);
    }
    if (token !== undefined) myfn()
    else {
      setUser(null)
    }
  },[])

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};
