import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '../context/AuthContext';
import { BASE_URL } from '../../helper';

const SIgnUp = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const { setAuthUser } = useAuthContext();

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    console.log(udata);

    const adddata = (e) => {
        const { name, value } = e.target;

        setUdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const senddata = async (e) => {
        e.preventDefault();
        const { fname, email, mobile, password, cpassword } = udata;
        console.log(udata)
        const res = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            toast.warn("invalid details", {
                position: "top-center",
            })
        } else {
            toast.success("data succesfully added", {
                position: "top-center",
            });
            localStorage.setItem("Users", JSON.stringify(data));
            setAuthUser(data);
            setUdata({ ...udata, fname: "", email: "", mobile: "", password: "", cpassword: "" });
            navigate("/"); // Redirect to the home page
        }
    }

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="amazonlogo" />
                </div>
                <div className="sign_form">
                    <form method='POST'>
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your name</label>
                            <input type="text"
                                onChange={adddata}
                                value={udata.fname}
                                name="fname" id="fname" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                onChange={adddata}
                                value={udata.email}
                                name="email" id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text"
                                onChange={adddata}
                                value={udata.mobile}
                                name="mobile" id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                onChange={adddata}
                                value={udata.password}
                                name="password" placeholder='At least 6 char' id="password" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Password Again</label>
                            <input type="password"
                                onChange={adddata}
                                value={udata.cpassword}
                                name="cpassword" id="cpassword" />
                        </div>
                        <button className='signin_btn' onClick={senddata}>Continue</button>

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Signin</NavLink>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default SIgnUp;
