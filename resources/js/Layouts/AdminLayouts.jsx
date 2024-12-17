import React from 'react';
import logo from '../assets/Rich-Music-B.png';

const AdminLayouts = () => {
  return (
    <>
      <header className='bg-dark text-light'>
        <div className="container ms-auto">
            <h2 className='fw-bold'>Todo</h2>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <div className="row">
                        <div className="col-md-4">
                        <a className="navbar">
                            <img src={logo} alt="Logo" style={{ width: "150px", height: "auto", filter: "invert(100%)" }} />
                        </a>
                        </div>
                        <div className="col-md-8"></div>
                    </div>
                    </a>
                </div>
                </nav>
        </div>

      </header>
    </>
  )
}

export default AdminLayouts
