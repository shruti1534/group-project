import React from 'react'
import './editModal.css'

function EditModal() {
  return (
    <>
      <div className="modal-bg">
        <div className="container">
          <h1 className='container-header'>Edit Your Profile</h1>
          <div className="edit-box">
            <div className='edit-left'>
              <h3>Edit your Profile Info</h3>
              <form>
                <div className="input-row">
                  <div className="input-group">
                    <label>Name</label>
                    <input className='edit-input' type="text" placeholder='Namita Choudhary'></input>
                  </div>


                  <div className="input-group">
                    <label>Phone</label>
                    <input className='edit-input' type="text" placeholder='562766527'></input>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Email</label>
                    <input className='edit-input' type="email" placeholder='namita@gmail.com'></input>
                  </div>


                  <div className="input-group">
                    <label>Intro</label>
                    <input className='edit-input' type="text" placeholder='Believe in yourself'></input>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>College</label>
                    <input className='edit-input' type="text" placeholder='NIT Jsr'></input>
                  </div>


                  <div className="input-group">
                    <label>School</label>
                    <input className='edit-input' type="text" placeholder='JVM Shyamali'></input>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Location City</label>
                    <input className='edit-input' type="text" placeholder='Ranchi'></input>
                  </div>


                  <div className="input-group">
                    <label>Location Country</label>
                    <input className='edit-input' type="text" placeholder='India'></input>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Home City</label>
                    <input className='edit-input' type="text" placeholder='Ranchi'></input>
                  </div>


                  <div className="input-group">
                    <label>Home Country</label>
                    <input className='edit-input' type="text" placeholder='India'></input>
                  </div>
                </div>

                <button type="submit" className='submit-button'>Update</button>
              </form>
            </div>
            <div className="edit-right">
              <h3>Change your Profile/Cover Image</h3>
              <form>
                <div >
                  <div className="input-group">
                    <label><h2>Change Cover Image</h2></label>
                    <input className='edit-input' type="file" ></input>
                  </div>

                  <div className="input-group">
                    <label><h2>Change User Image</h2></label>
                    <input  className='edit-input' type="file" ></input>
                  </div>
                </div>
              </form>
            </div>



          </div>
        </div>

      </div>
    </>
  )
}

export default EditModal