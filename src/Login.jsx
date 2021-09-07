import axios from "axios";
import React, { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const logindata = { email, password };
	const handleLogin = (e) => {
		e.preventDefault();
		axios.post("https://authapireact.herokuapp.com/login", logindata).then((result) => {
			if (result) {
				localStorage.setItem("token", result.data.token);
				console.log(result);
			}
		});
	};
	return (
		<div>
			<form onSubmit={handleLogin}>
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
				<button>LogIn</button>
			</form>
		</div>
	);
};

export default Login;
