import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signupdata= {

		username,
		email,
		password,
	} 

	console.log(signupdata)
    const handleSignup =(e)=>{
        e.preventDefault()
        axios.post("https://authapireact.herokuapp.com/signup" , signupdata).then((result)=>{
            console.log(result)
        })
    }
	return (
		<form onSubmit={handleSignup}>
			<div>
				<input
					type="text"
					name="username"
					id="username"
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<input
					type="email"
					name="email"
					id="email"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<input
					type="password"
					name="password"
					id="password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<button >SignUp</button>
		</form>
	);
};

export default SignUp;
