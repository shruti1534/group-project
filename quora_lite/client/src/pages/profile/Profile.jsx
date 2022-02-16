import React, { useState } from 'react'
import './profile.css'
import Modal from '@material-ui/core/Modal';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SchoolIcon from '@material-ui/icons/School';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import EditModal from './EditProfileModal/EditModal';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const ITEM_HEIGHT = 58;
const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];


function Profile() {

    const [open, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const friendopen = Boolean(anchorEl);
    const handleFriendClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleFriendClose = () => {
        setAnchorEl(null);
    };



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div className='profile'>

                <div className="profileRight">
                    <div className="profileRightTop">

                        <img className='profileCoverImg' src="assets/default-cover.jpg" alt="" />

                        <div className="profileInfo">
                            <div className="pi-left">
                                <div className="pi-row">
                                    <img className='pi-image' src="assets/default-img.jpg" alt="" />
                                    <div>
                                        <h3>Namita Choudhary</h3>
                                        <p>120 Followers - 24 Followings</p>

                                    </div>
                                </div>
                            </div>
                            <div className="pi-right">
                                <button type="button"><PersonAddIcon className='b-img' />Follow</button>
                                <br />
                                <MoreHorizIcon className='pi-right-img' onClick={handleOpen} />


                            </div>
                        </div>

                        <div className="profile-info">
                            <div className="info-col">

                                <div className="profile-intro">
                                    <h3>Intro</h3>
                                    <p className='intro-txt'>Believe in yourself and you can do unbelievable things</p>
                                    <hr />
                                    <ul>
                                        <li><SchoolIcon className='intro-icon' /> Studied at National Institute of Technology</li>
                                        <li><SchoolIcon className='intro-icon' /> Went to JVM Shyamali </li>
                                        <li><LocationOnIcon className='intro-icon' /> Lives in Ranchi, India</li>
                                        <li><HomeIcon className='intro-icon' />From Ranchi, India</li>

                                    </ul>
                                </div>
                                <div className="profile-intro">
                                    <div className="title-box">
                                        <h3>Friends</h3>

                                        <p onClick={handleFriendClick}>All Friends</p>
                                        <Menu

                                            id="long-menu"
                                            keepMounted
                                            open={friendopen}
                                            onClose={handleFriendClose}
                                            anchorEl={anchorEl}


                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 6.5,
                                                    width: '30ch',

                                                },
                                            }}


                                        >
                                            {options.map((option) => (
                                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                    {option}
                                                </MenuItem>
                                            ))}

                                        </Menu>


                                    </div>
                                    <p>120 friends</p>

                                    <div className="photo-box">
                                        <div><img src="assets/default-img.jpg" alt='' /><p>Namita Choudhary</p></div>
                                        <div><img src="assets/default-img.jpg" alt='' /><p>Namita Choudhary</p></div>
                                        <div><img src="assets/default-img.jpg" alt='' /><p>Namita Choudhary</p></div>
                                        <div><img src="assets/default-img.jpg" alt='' /><p>Namita Choudhary</p></div>
                                        <div><img src="assets/default-img.jpg" alt='' /><p>Namita Choudhary</p></div>
                                        <div><img src="assets/default-img.jpg" alt='' /><p>Namita Choudhary</p></div>
                                    </div>
                                </div>

                            </div>
                            <div className="post-col">

                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <EditModal />
            </Modal>


        </>
    )
}

export default Profile