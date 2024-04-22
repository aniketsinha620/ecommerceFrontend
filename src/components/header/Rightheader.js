import { React, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { useAuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import "./rightheader.css"
import LogoutIcon from '@mui/icons-material/Logout';


const Rightheader = ({ logclose, logoutuser }) => {

    const { authUser,setAuthUser } = useAuthContext();

    return (
        <>
            <div className="rightheader">
                <div className="right_nav">
                    {
                        authUser ? <Avatar className='avtar2'>{authUser.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className='avtar'></Avatar>
                    }
                    {authUser ? <h3>Helloo, {authUser.fname.toUpperCase()}</h3> : ""}
                </div>
                <div className="nav_btn" onClick={() => logclose()}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By category</NavLink>

                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />

                    <NavLink to="/">today's Deal</NavLink>
                    {
                        authUser ? <NavLink to="/buynow">Your orders</NavLink> : <NavLink to="/login">Your orders</NavLink>
                    }


                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />

                    <div className="flag">
                        <NavLink to="/">Settings</NavLink>
                        <img src="./india.png" style={{ width: 35, marginLeft: 10 }} alt="" />
                    </div>


                    {
                        authUser ?
                            <div className="flag">
                                <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                                <h3 onClick={() => logoutuser()} style={{ cursor: "pointer", fontWeight: 500 }}>Logout</h3>
                            </div> :
                            <NavLink to="login">SingIN</NavLink>
                    }
                </div>
            </div>
        </>
    )
}

export default Rightheader