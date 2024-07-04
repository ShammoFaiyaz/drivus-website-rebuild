import { FaSearch } from 'react-icons/fa';


const Search = () => {
  return (
    <div style={{background: "#0A2457"}}>
      <div className='container pt-4 pb-2'>
        <div className="row">

          <div className="col-md-2">
            <select className="form-select form-select mb-3 p-2" aria-label=".form-select example">
              <option>All Status</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select form-select mb-3 p-2" aria-label=".form-select example">
              <option>Body Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select form-select mb-3 p-2" aria-label=".form-select example">
              <option>Select Makes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select form-select mb-3 p-2" aria-label=".form-select example">
              <option>Select Models</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select form-select mb-3 p-2" aria-label=".form-select example">
              <option>All Price</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-md-2 d-grid">
            <button type="button" className="btn btn-warning mb-3">
               <FaSearch /><span className='ps-3'>Search</span> 
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Search;