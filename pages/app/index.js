import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from "../../components/Sidebar/Navbar"

function App({ children }) {

  return (
    <div>
      <Navbar />

      <div className='container'>
        <div className='row'>

          <Sidebar />

          <div className='col-md-9'>
            {children}
          </div>
        </div>

      </div>
    </div>
  )
}

export default App