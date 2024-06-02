import Cookies from 'js-cookie';
import { useEffect } from 'react';
import {useNavigate  } from "react-router-dom";

export default function Logout(){

    const navigate  = useNavigate()

    useEffect(()=>{
        Cookies.remove('jwt')
        navigate('/', { replace: true });
        window.location.reload();

    },[])

    return (
        <></>
    )

}