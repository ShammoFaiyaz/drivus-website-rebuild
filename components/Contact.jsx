import styles from '../styles/Contact.module.css'
import Head from 'next/head'
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";

function Contact() {
  return (
    <div className="bg-light">

      <Head>
        <title>Drivus-Contact</title>
      </Head>

      <div className="mb-5">
        <iframe width="100%" height="590px" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>

      <div className="container">
        <div className={`${styles.root} row`}>
          <div className="col-md-4">
            <div>
              <h4 className={`${styles.title} pb-3`}>Contact Details</h4>
              <p className={`${styles.para}`}>Germany</p>
              <p className={`${styles.para}`}>329 Queensberry Street</p>
              <p className={`${styles.para}`}>North Melbourne VIC 3051</p>
            </div>

            <div className='py-4'>
              <h4 className={`${styles.title}`}>+1 670 936 46 70</h4>
              <p className={`${styles.para}`}>hello@gmail.com</p>
            </div>

            <div>
              <a href="#" className={`${styles.icon} me-3`}><ImFacebook /> </a>
              <a href="#" className={`${styles.icon} me-3`}><BsTwitter /> </a>
              <a href="#" className={`${styles.icon} me-3`}><BsInstagram /> </a>
              <a href="#" className={`${styles.icon}`}><ImLinkedin2 /> </a>
            </div>

          </div>

          <div className="col-md-8">
            <div className='row'>
              <h4 className={`${styles.title} col-md-12 pb-3`}>Contact Form</h4>

              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className={`${styles.label} form-label m-0`}>First Name*</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className={`${styles.label} form-label m-0`}>Last Name*</label>
                <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="email" className={`${styles.label} form-label m-0`}>Email*</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email" />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className={`${styles.label} form-label m-0`}>Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter Phone" />
              </div>

              <div className="col-md-12 mb-3">
                <label htmlFor="message" className={`${styles.label} form-label m-0`}>Message</label>
                <textarea type="text" className="form-control" id="message" rows="10" placeholder="Message"></textarea>
              </div>

              <div className="col-md-12 mb-3">
                <button type="button" className="btn btn-warning text-center px-5 py-2">Get In Touch</button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact