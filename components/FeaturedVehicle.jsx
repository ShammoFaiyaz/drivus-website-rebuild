import React from 'react'
import Card from './Card';
import styles from "../styles/Listing.module.css"
import { GoStar } from "react-icons/go";
import { ImRoad } from "react-icons/im";
import { GiGasPump } from "react-icons/gi";
import { IoMdGitNetwork } from "react-icons/io"
import Image from 'next/image';
import car from "../public/car.jpg"

const FeaturedVehicle = () => {
  return (
    <div className="bg-light" style={{ padding: "100px 0px" }}>
      <div className="container">
        <div className="col-md-12 text-center pb-5" >
          <h2 className='fw-bold' style={{ color: "#0A2457" }}>Featured Vehicles</h2>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <div className='my-2'>
              <div className="card" style={{ borderRadius: 8, borderTop: "none", }} >
                <div className="card-img-top">
                  <Image src={car} alt="Card image cap" className={styles.border} />
                  <span className={`${styles.badge} badge rounded-pill`}>Featured</span>
                </div>
                <div className='px-3'>

                  <div className='border-bottom'>
                    <p className="card-title fw-bold" style={{ fontSize: 15, color: "#0A2457" }}>$129</p>
                    <span className='fw-bold' style={{ fontSize: 14, color: "#0A2457" }}>Volvo XC90 - 2020</span>
                    <p className="mt-1" style={{ color: "#FDCC0D" }}><GoStar /> <GoStar /> <GoStar /> <GoStar /> <GoStar /> <span className='fw-bold' style={{ color: "#0A2457", fontSize: 13 }}> 4.7 </span><span className='text-secondary' style={{ fontSize: 13 }}>(684 reviews)</span></p>
                  </div>
                  <div className='py-3'>

                    <span className='text-secondary' style={{ fontSize: 13 }}><ImRoad size={14} /><span className='mx-2'>77362</span><span className='mx-3 ms-4'><GiGasPump size={18} /><span className='ms-2'>Diesel</span></span><span className='mx-2'> <IoMdGitNetwork size={16} /><span className='ms-2'>Automatic</span></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturedVehicle;