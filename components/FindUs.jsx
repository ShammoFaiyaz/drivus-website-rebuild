import styles from '../styles/FindUs.module.css'

const FindUs = () => {
  return (
    <div className='border-bottom'>
      <div className="container">
        <div className={`${styles.root} row`}>

          <div className="col-md-12 text-center pb-5" >
            <h2 className='fw-bold' style={{color: "#0A2457"}}>How To Find Us</h2>
          </div>

          <div className="col-md-4">
            <div className="rounded shadow-sm p-5">
              <div className="mx-3">
                <div>
                  <h6 className={`${styles.title}`}>Our Address</h6>  
                  <p className={`${styles.para}`}>Germany</p>
                  <p className={`${styles.para}`}>329 Queensberry Street</p>
                  <p className={`${styles.para}`}>North Melbourne VIC 3051</p>
                </div>

                <div className="my-5">
                  <h6 className={`${styles.title}`}>Opeaning Hours</h6>  
                  <p className={`${styles.para}`}>Monday-Friday: 09:00AM-09:00PM</p>
                  <p className={`${styles.para}`}>Satureday: 09:00AM-07:00PM</p>
                  <p className={`${styles.para}`}>Sunday: Closed</p>
                </div>

                <div className="d-grid">
                  <button type="button" className="btn btn-warning text-center p-2">Plan Your Visit</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card border rounded">
              <iframe width="100%" height="405px" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FindUs