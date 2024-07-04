import React, { useState } from 'react'
import { useRouter } from 'next/router'
import jwt_decode from "jwt-decode";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";

// deprecated
const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [press, setPress] = useState(false);
  const [add, setAdd] = useState([]);

  const router = useRouter();
  const { query: { token } } = router;

  // const decoded = jwt_decode(token);

  const handleDelete = (id) => {
    const remove = add.filter((item, idx) => idx !== id);
    setAdd(remove);
  }

  return (
    <div className='my-5 py-5 container text-center'>
      <h5>Name: decoded?.name</h5>
      <h5 className='mt-4'>Email: decoded?.email</h5>

      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-auto">
          <label htmlFor="inputPassword6" className="col-form-label text-danger" style={{ fontSize: 18, fontWeight: 500 }}>Set Password:</label>
        </div>
        <div className="col-auto">
          <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>
      </div>

      {password === "" ? (
        <div className='text-center'>

          <button type="button" className="btn btn-primary mt-4" disabled>Submit</button>
        </div>
      ) : (
        <div className='text-center'>

          <button type="button" className="btn btn-primary mt-4" onClick={() => setPress(true)}>Submit</button>

        </div>
      )}

      {press && (
        <div className='mt-4'>
          <h5>Your <span className='text-danger fw-bold'>password</span> has been set.Now you can Sign in.</h5>
          <Link href={`/application/${token}`}>
            <a><button type="button" className="btn btn-primary mt-3">Complete Profile</button></a>
          </Link>
        </div>
      )}

      <div className='mt-4'>

        <div style={{ cursor: "pointer" }} onClick={() => setAdd([...add, add.push({})])}><IoIosAddCircle size={35} /></div>

        {add.map((item, idx) =>
          <div className='mt-3' key={idx}>
            <label className='fw-bold me-3' style={{ fontSize: 17 }}>Test:</label>
            <input />

            <span className='ms-3' style={{ cursor: "pointer" }}><AiFillMinusCircle size={33} onClick={() => handleDelete(idx)} /></span><br />
          </div>
        )}
      </div>

    </div>
  )
}

export default SetPassword;