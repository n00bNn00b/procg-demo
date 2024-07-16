import React, { FormEvent, useState } from "react";
import axios from "axios";

interface formData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
  });
console.log("email", formData.email, "password", formData.password)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const login = async (e: FormEvent) => {
    e.preventDefault();
    await axios
      .post(
        "http://129.146.85.244:3000/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("login: ", res);
        console.log("login page: ", res?.data);
        console.log("token login: ", res?.data?.access_token);
        
        localStorage.setItem("token", res.data.access_token);
      })
      .catch((error) => alert(error?.response?.data?.error));
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label>Email</label>
        <input type="email" value={formData.email} onChange={handleChange} name="email" />
        <label>Password</label>
        <input type="password" value={formData.password} onChange={handleChange} name="password"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
