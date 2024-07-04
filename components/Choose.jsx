import React from 'react'
import Image from 'next/image';
import carlogo from "../public/carlogo.png"
import tag from "../public/tag.png"
import tagprice from "../public/tagprice.png"
import verify from "../public/verify.jpg"
import CarSale from './CarSale';

const Choose = () => {
  return (
    <div className='border-bottom' style={{ padding: "100px 0px" }}>

      <div className='container'>
        <div className="col-md-12 pb-5 text-center">
          <h2 className='fw-bold' style={{ color: "#0A2457" }}>Why Choose Us?</h2>
        </div>

        <div className='row' >
          <div className='col-md-4 d-flex'>
            <Image src={tagprice} alt="Tag" height={40} width={90} />
            <div className='ms-4'>
              <h6 style={{ color: "#0A2457" }}>Best Price</h6>
              <p style={{ fontSize: 14 }}>Our Stress-Fee Finance Department That Can Find Financial Solutions To Save You Money.</p>
            </div>
          </div>

          <div className='col-md-4 d-flex'>
            <Image src={carlogo} alt="Carlogo" height={40} width={80} />
            <div className='ms-4'>
              <h6 style={{ color: "#0A2457" }}>Trusted By Thousands</h6>
              <p style={{ fontSize: 14 }}>Our Stress-Fee Finance Department That Can Find Financial Solutions To Save You Money.</p>
            </div>
          </div>

          <div className='col-md-4 d-flex'>
            <Image src={verify} alt="Verify" height={50} width={90} />
            <div className='ms-4'>
              <h6 style={{ color: "#0A2457" }}>Wide Range of Brands</h6>
              <p style={{ fontSize: 14 }}>Our Stress-Fee Finance Department That Can Find Financial Solutions To Save You Money.</p>
            </div>
          </div>
        </div>

        <div className='row my-5'>

          <div className='col-md-6 pb-3'>
            <div className='p-5' style={{ backgroundColor: "#F5C24C", borderRadius: 10 }}>
              <h4 className='mt-4 fw-bold'>Are You looking for a car?</h4>
              <p style={{ fontSize: 14 }} className="mt-3">Search Your CAr in Our Inventory And Request A Quote On The Vehicle Of Your Choosing.</p>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='p-5' style={{ backgroundColor: "#1A375F", borderRadius: 10 }}>
              <h4 className='mt-4 fw-bold' style={{ color: "white" }}>Do You want to sell a car?</h4>
              <p style={{ fontSize: 14, color: "white" }} className="mt-3">Request Search Your Car In Our Inventory And A Quote On The Vehicle Of Your Choosing.</p>
            </div>
          </div>

        </div>

        <div className='mb-5'>
          <CarSale />
        </div>

      </div>
    </div>
  )
}

export default Choose;