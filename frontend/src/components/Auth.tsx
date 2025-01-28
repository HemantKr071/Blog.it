import React, { useState } from 'react';
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';
import { useUserContext } from '../context/UserContext';

interface InputTypes {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, placeholder, type, onChange }: InputTypes) => {
  return (
    <div className="w-full">
      <label className="text-base font-semibold">{label}</label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full mt-2 h-[40px] bg-gray-50 border border-slate-400 rounded-md p-4 text-gray-900 focus:border-blue-500"
      />
    </div>
  );
};

interface ButtonProps {
  type: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ type, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-[40px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 me-2 mb-2"
    >
      {type}
    </button>
  );
};

export const Auth = ({type}: {type : "signup" | "signin"}) => {
  
  const [formInput, setFormInput] = useState<SignupInput>({
    name: "",
    username: "",
    password: ""
  });

  const navigate = useNavigate();
  const { setUser } = useUserContext();
  
  // Function will send the request to backend
  const handleClick = async () => {
    try {
      
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signin' ? 'signin' : 'signup'}`, formInput);
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      const user = {
        id: response.data.user.id,
        name: response.data.user.name,
        username: response.data.username,
      }
      localStorage.setItem('user', JSON.stringify(user));

      setUser(user);
      navigate("/blogs");
    
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("An error has occurred while SignUp:", error.response?.data);
      } else {
        console.error("An unexpected error has occurred:", error);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="w-1/2">
          <h1 className='text-3xl text-center font-bold mb-2'>{type === 'signin' ? "Login to your Account" : "Create an Account"} </h1>
          <div className='text-slate-400 text-center'>
            {type === "signin" ? "Dont't have an account" : "Already have an account?"}
            <Link className='underline underline-offset-1 pl-2' to={type === "signin" ? "/signup" : "/signin" }>
                {type === "signin" ? "Sign Up" : "Sign In" }
            </Link>
          </div>
          <div className="flex m-6 flex-col items-start gap-3">
            <Input
              label="Username"
              placeholder="Hemant@gmail.com"
              onChange={(e) => setFormInput({ ...formInput, username: e.target.value })}
            />
            {type === 'signup' && <Input
              label="Name"
              placeholder="Enter your Name"
              onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
            />}
            <Input
              type='password'
              label="Password"
              placeholder="Enter a password"
              onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
            />
            <Button onClick={handleClick} type={type === 'signin'? 'Sign In' : 'Sign Up'} />
          </div> 
        </div>
      </div>
    </div>
  );
};
