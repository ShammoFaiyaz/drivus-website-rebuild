import Image from 'next/image'
import React from 'react'
// import car5 from "../public/car5.jpg"
// import petrol from "../public/petrol.jpg"
// import ac from "../public/ac.jpg"
// import repair from "../public/repair.jpeg"
// import brake from "../public/brake.png"
import { HiCheckCircle } from "react-icons/hi";
import styles from "../styles/Contact.module.css"
import styless from "../styles/Service.module.css"
import Head from 'next/head'

const Service = () => {
  return (

    <div className='bg-light pt-4'>
      <Head>
        <title>Drivus - Service</title>
      </Head>
      <div className='container pb-5 pt-4'>
        <h2 className='fw-bold' style={{ color: "#0A2457" }}>Service</h2>

        <div className='row d-flex align-items-center'>
          <div className='col-md-6'>

            <div>
              <h4 className='fw-bold' style={{ color: "#0A2457" }}>Our Service Include</h4>
              <p style={{ fontSize: 14 }} className="mt-4 text-secondary">Our Car Sure Experts Inspect The Car On Over 200 Checkpoints So You Get Complete Satisfaction And Peace Of Mind Before Buying.</p>
            </div>

            <div className='row mt-5'>
              <div className='col-md-6 text-secondary'>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Generate Automotive Repair</span></p>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Preventative Car Maintenance</span></p>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Air Conditioning And Heater Service</span></p>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Cooling System And Radiator Repair</span></p>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Synthetic Motor oil Replacement</span></p>
              </div>
              <div className='col-md-6 text-secondary'>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Generate Automotive Repair</span></p>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Preventative Car Maintenance</span></p>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Air Conditioning And Heater Service</span></p>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Cooling System And Radiator Repair</span></p>
                <p style={{ fontSize: 14 }}><HiCheckCircle color='#1947E2' size={19} /><span className='ms-2'>Synthetic Motor oil Replacement</span></p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className=' '>
              <Image src='car5.jpg' alt="car" className={styless.image} height={550} width={500} />
            </div>
          </div>

        </div>

      </div>

      <div style={{ backgroundColor: "white" }}>
        <div className='container'>
          <div className={`${styless.mobile} row align-items-center mt-5 pt-5`} >
            <div className='col-md-6'>
              <div className='mt-5' >
                <Image src='petrol.jpg' alt="petrol" height={300} width={500} className={styless.image} />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='text-secondary'>
                <h4 className='fw-bold' style={{ color: "#0A2457" }}>Oil Changes</h4>
                <p style={{ fontSize: 14 }} className="mt-3">Lorem Ipsum Dolor Sit Amet, Consectual Adipiscing Elit.Aenean Commodo Ligula Eget Dolor, Aenean Massa.Cum Socils Theme Natoque Penatibus Et Magnis Dis Parturient Montes, Nascetur</p>
                <p className='mt-4' style={{ fontSize: 14 }}>Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros Et Accu Qui Blandit Praesent Luptatum Zzril Delenit.</p>
              </div>
            </div>
          </div>

          <div className='row align-items-center mt-5 pt-5'>

            <div className='col-md-6'>
              <h4 className='fw-bold' style={{ color: "#0A2457" }}>Air Conditioning</h4>
              <div className='pe-5 text-secondary'>
                <p style={{ fontSize: 14 }} className="mt-3">Lorem Ipsum Dolor Sit Amet, Consectual Adipiscing Elit.Aenean Commodo Ligula Eget Dolor, Aenean Massa.Cum Socils Theme Natoque Penatibus Et Magnis Dis Parturient Montes, Nascetur</p>
                <p className='mt-4' style={{ fontSize: 14 }}>Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros Et Accu Qui Blandit Praesent Luptatum Zzril Delenit.</p>
              </div>
            </div>

            <div className='col-md-6'>
              <div className=''>
                <Image src='./ac.jpg' alt="ac" height={300} width={500} className={styless.image} />
              </div>
            </div>
          </div>

          <div className={`${styless.mobile} row align-items-center mt-5 pt-5`}>
            <div className='col-md-6'>
              <div className=''>
                <Image src='repair.jpeg' alt="repair" height={300} width={500} className={styless.image} />
              </div>
            </div>

            <div className='col-md-6 text-secondary'>
              <h4 className='fw-bold' style={{ color: "#0A2457" }}>Auto Electric</h4>
              <p style={{ fontSize: 14 }} className="mt-3">Lorem Ipsum Dolor Sit Amet, Consectual Adipiscing Elit.Aenean Commodo Ligula Eget Dolor, Aenean Massa.Cum Socils Theme Natoque Penatibus Et Magnis Dis Parturient Montes, Nascetur</p>
              <p className='mt-4' style={{ fontSize: 14 }}>Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros Et Accu Qui Blandit Praesent Luptatum Zzril Delenit.</p>
            </div>
          </div>

          <div className='row align-items-center mt-5 py-5'>

            <div className='col-md-6 text-secondary'>
              <h4 className='fw-bold' style={{ color: "#0A2457" }}>Brake Services</h4>
              <div className='pe-5'>
                <p style={{ fontSize: 14 }} className="mt-3">Lorem Ipsum Dolor Sit Amet, Consectual Adipiscing Elit.Aenean Commodo Ligula Eget Dolor, Aenean Massa.Cum Socils Theme Natoque Penatibus Et Magnis Dis Parturient Montes, Nascetur</p>
                <p className='mt-4' style={{ fontSize: 14 }}>Vel Illum Dolore Eu Feugiat Nulla Facilisis At Vero Eros Et Accu Qui Blandit Praesent Luptatum Zzril Delenit.</p>

              </div>
            </div>

            <div className='col-md-6'>
              <div className=''>
                <Image src='brake.png' alt="brake" height={300} width={500} className={styless.image} />

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='container mt-3 pt-5'>
        <div className={`${styles.root} row`}>

          <div className="col-md-8 border p-4 mt-4" style={{ backgroundColor: "white", borderRadius: 8 }}>
            <div className='row'>
              <h6 className='col-md-12 py-3 fw-bold' style={{ color: "#0A2457" }}>Schedule Service</h6>

              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className={`${styles.label} form-label mb-2`}>Name</label>
                <input type="text" className="form-control" id="firstName" />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="email" className={`${styles.label} form-label mb-2`}>Email</label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className={`${styles.label} form-label mb-2`}>Phone</label>
                <input type="text" className="form-control" id="phone" />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className={`${styles.label} form-label mb-2`}>Make/Model</label>
                <input type="text" className="form-control" id="phone" />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="message" className={`${styles.label} form-label mb-2`}>Mileage (optional)</label>
                <input type="text" className="form-control" id="message" />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="message" className={`${styles.label} form-label mb-2`}>Best time</label>
                <input type="text" className="form-control" id="message" />
              </div>

              <div className="col-md-12 my-3">
                <button type="button" className="btn btn-warning text-center px-5 py-2">Request Service</button>
              </div>

            </div>

          </div>

          <div className='col-md-4 mt-4'>
            <div className=' px-4 py-4 border pb-5' style={{ backgroundColor: "white", borderRadius: 8 }}>
              <h6 className='fw-bold' style={{ color: "#0A2457" }}>Opening hours</h6>
              <div className='mt-5 fw-bold' style={{ fontSize: 13, color: "#0A2457" }}>
                <p className='border-bottom'>Sunday<span className='float-end'>10:00 - 17:00</span></p>
                <p className='border-bottom'>Tuesday<span className='float-end'>10:00 - 17:00</span></p>
                <p className='border-bottom'>Wednesday<span className='float-end'>10:00 - 17:00</span></p>
                <p className='border-bottom'>Thursday<span className='float-end'>10:00 - 17:00</span></p>
                <p className='border-bottom'>Friday<span className='float-end'>10:00 - 17:00</span></p>
                <p className='border-bottom'>Saturday<span className='float-end'>10:00 - 17:00</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


  )
}

export default Service