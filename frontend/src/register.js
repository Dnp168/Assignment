import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

function Assignment8() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    

    function handleSubmit(event) {
        
        event.preventDefault();
        axios.post("http://localhost:8000/register", { firstname: firstname, lastname: lastname, email: email, password: password }).then((res) => {
            // const ans = res.data;
            // console.log(ans);
            // setAns(ans);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="row g-3">
                <center><h1>Register</h1></center>

                
                    <label htmlFor="firstname" className="form-label">First Name: </label>
                    <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={(e) => { setFirstName(e.target.value) }}
                        required
                    />
                <br></br>
                <br></br>
                    <label htmlFor="lastname" className="form-label">Last Name: </label>
                    <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => { setLastName(e.target.value) }}
                        required
                    />
                
                <br></br>
                <br></br>
               
                    <label className="form-label" htmlFor="email">Email: </label>
                    <input
                        id="email" 
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                        required
                    />
                <br></br>
                <br></br>
               
                    <label className="form-label" htmlFor="password">Password: </label>
                    <input
                        id="password" 
                        type="text"
                        name="password"
                        value={password}
                        onChange={e => { setPassword(e.target.value) }}
                        required
                    />
                
                <br></br>
                <br></br>
                
                    <label  htmlFor="confirmpassword">Confirm Password: </label>
                    <input
                        id="confirmpassword" 
                        type="text"
                        name="confirmpassword"
                        value={confirmpassword}
                        onChange={e => { setConfirmPassword(e.target.value) }}
                        required
                    />
                <br></br>
                <br></br>
                <center><input type="submit" className="btn btn-primary" style={{ width: "5%" }} value="Submit" /></center>
            </form>
        </div>
    )
}

export default Assignment8;