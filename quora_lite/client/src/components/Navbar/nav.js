import React, { useState } from "react"
import "./nav.css"
import { ImHome } from 'react-icons/im'
import { IoNotificationsSharp, IoLogOut, IoSettingsSharp } from 'react-icons/io5'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoMdHelpCircle, IoIosArrowForward } from 'react-icons/io'

import profile from "./profile.jpg"

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const ToggleNavBar = () => {
        console.log("profile icon clicked");
        setActive(!isActive);
    }

    return (
        <>
        <nav>
            <div className="nav-left">
                <h1 className="logo">QuoraLite</h1>
                <ul className="nav-menu">
                    <li>
                        <a href="/">
                        <ImHome className="icons"/>
                        <div className="tooltip">Home</div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                        <IoNotificationsSharp className="icons"/>
                        <div className="tooltip">Notification</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="search-box">
                    <BiSearchAlt2 className="search-icon"/>
                    <input type="text" placeholder="Search.."/> 
                </div>
                <div className="user-icon online"  onClick={ToggleNavBar}>
                    <img src={profile} alt="profile pic"/>
                </div>
            </div>

            {/* user icon-wrapper */}
            <div className={isActive ? "profile-menu-height" : "profile-menu"}>
                <div className="profile-menu-inner">
                    <div className="user-profile">
                        <img src={profile} alt="profile pic"/>
                        <div>
                            <p>Lorem ipsum</p>
                            <a href="/">See your profile</a>
                        </div>
                    </div>
                    <hr />

                    <div className="mobile-view">
                        <div className="profile-options">
                            <IoNotificationsSharp className="profile-inside-icons"/>
                            <a href="/">Notifications <IoIosArrowForward /></a>
                        </div>
                    </div>
                    <div className="profile-options">
                        <IoSettingsSharp className="profile-inside-icons"/>
                        <a href="/">Settings <IoIosArrowForward /></a>
                    </div>
                    <div className="profile-options">
                        <IoMdHelpCircle className="profile-inside-icons"/>
                        <a href="/">Help & Support <IoIosArrowForward /></a>
                    </div>
                    <div className="profile-options">
                        <IoLogOut className="profile-inside-icons"/>
                        <a href="/">Logout <IoIosArrowForward /></a>
                    </div>
                </div>
            </div>
        </nav>
        <div>
            <div className="search-box mobile">
                <BiSearchAlt2 className="search-icon"/>
                <input type="text" placeholder="Search.."/> 
            </div>
        </div>
        </> 
    );
}

export default Navbar