import Image from 'next/image';
import React from 'react'
import fformal from "../public/fformal.jpg"
import formal from "../public/formal.jpg"
import styles from "../styles/Listing.module.css"

const Team = () => {
  return (
    <div className='pt-5 border-bottom'>
      <div className='container py-4 mb-5 pb-5'>
        <h2 className='text-center my-4 fw-bold'>Our Team</h2>
        <div className='row' style={{ cursor: "pointer" }}>
          <div className='col-md-3 mt-3'>
            <div className="card" style={{ borderRadius: 9, }}>
              <Image src={fformal} layout='responsive' alt='fformal' className={styles.team} />
              <span className={styles.details}>Dianne Russel</span>
              <span className={styles.subDetails}>Dog Trainer</span>
            </div>
          </div>

          <div className='col-md-3 mt-3'>
            <div className="card" style={{ borderRadius: 9 }}>
              <Image src={formal} layout='responsive' alt='formal' className={styles.team} />
              <span className={styles.details}>Ralph Edwards</span>
              <span className={styles.subDetails}>President of Sales</span>
            </div>
          </div>

          <div className='col-md-3 mt-3'>
            <div className="card" style={{ borderRadius: 9 }}>
              <Image src={fformal} layout='responsive' alt='formal' className={styles.team} />
              <span className={styles.details}>Dianne Russel</span>
              <span className={styles.subDetails}>Dog Trainer</span>
            </div>
          </div>

          <div className='col-md-3 mt-3'>
            <div className="card" style={{ borderRadius: 9 }}>
              <Image src={formal} layout='responsive' alt='formal' className={styles.team} />
              <span className={styles.details}>Ralph Edwards</span>
              <span className={styles.subDetails}>President of Sales</span>
            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Team;