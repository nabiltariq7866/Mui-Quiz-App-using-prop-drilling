import React, { useContext } from 'react'
import AppContext from '../../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom';
const CheckLoginStatus = ({Element}) => {
   const context=useContext(AppContext)
   const loginData=context.getLocalStorage("login");
   let navigate=useNavigate();
   let newData;
   if(loginData.email){
    if(loginData.email==="usman.gcu217@gmail.com"){
      newData={
          ...loginData,
          role:'user',
          login:true
        }
        context.setLocalStorage('login',newData)
        context.setUser(newData)
        navigate("/EmployeeDashboard");
    }else  if(loginData.email==="nabiltariq7866@gmail.com"){
      newData={
          ...loginData,
          role:'admin',
          login:true
        }
        context.setLocalStorage('login',newData)
      
        navigate("/AdminDashboard");
      }
   }
  else{
       return Element;
    }
}

export default CheckLoginStatus
