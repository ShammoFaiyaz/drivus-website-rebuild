import Image from 'next/image';
import React, { useState } from 'react'
import { Card } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import suv1 from '../public/suv1.png'
import sedan1 from '../public/sedan1.png'
import coupe1 from '../public/coupe1.png'
import compactSuv1 from '../public/compactSuv1.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const { Meta } = Card;

const Our = () => {
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1, itemsToScroll: 1, showArrows: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3, itemsToScroll: 1, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1, pagination: false },
    { width: 1450, itemsToShow: 5, itemsToScroll: 1, pagination: false },
    { width: 1750, itemsToShow: 6, itemsToScroll: 1, pagination: false },
  ])

  return (
    <div>
      <Header />
      <Navbar />

      <div className='bg-light pt-4'>
        <div className=' p-3'>
          <div className='pb-3'>
            <div className='container'>
              <div className='fs-1 fw-bold' style={{ color: "#272561" }}>Our Cars!</div>
              <p className='py-3' style={{ fontSize: 17, color: "#25225B" }}>Lorem ipsum is simply dummy text of the printing andtypesetting industry.Lorem ipsum has been the isdustry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <section id="pricing" className="pricing py-0">
              <Swiper
                // slidesPerView={1}
                spaceBetween={18}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper px-2"
                // initialSlide="3"
                centeredSlides={true}
                loop={true}
                // loopedSlides={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={
                  {
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 40
                    },
                    850: {
                      slidesPerView: 3,
                      spaceBetween: 40
                    },
                    1200: {
                      slidesPerView: 5,
                      spaceBetween: 40
                    }
                  }
                }
                style={{ paddingBottom: "50px", paddingTop: "30px" }}
              >

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                  <SwiperSlide key={'1'}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#07d5c0" }}>Suv</h3>
                        <div className="price"><sup>$</sup>450<span> / mo</span></div>
                        <Image src={suv1} className="img-fluid" alt="" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li className="na">Pharetra massa</li>
                          <li className="na">Massa ultricies mi</li>
                        </ul>
                        <a href="#" className="btn-buy" style={{ textDecoration: "none" }}>See more</a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                  <SwiperSlide key={'2'}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#65c600" }}>Sedan</h3>
                        <div className="price"><sup>$</sup>375<span> / mo</span></div>
                        <Image src={sedan1} className="img-fluid" alt="" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li className="na">Massa ultricies mi</li>
                        </ul>
                        <a href="#" className="btn-buy" style={{ textDecoration: "none" }}>See more</a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                  <SwiperSlide key={'3'}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#ff901c" }}>Cupe</h3>
                        <div className="price"><sup>$</sup>400<span> / mo</span></div>
                        <Image src={coupe1} className="img-fluid" alt="" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li>Massa ultricies mi</li>
                        </ul>
                        <a href="#" className="btn-buy" style={{ textDecoration: "none" }}>See more</a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                  <SwiperSlide key={'4'}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#ff0071" }}>Compact Sedan</h3>
                        <div className="price"><sup>$</sup>350<span> / mo</span></div>
                        <Image src={compactSuv1} className="img-fluid" alt="" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li>Massa ultricies mi</li>
                        </ul>
                        <a href="#" className="btn-buy" style={{ textDecoration: "none" }}>See more</a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                  <SwiperSlide key={'5'}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#ff0071" }}>Compact Sedan</h3>
                        <div className="price"><sup>$</sup>350<span> / mo</span></div>
                        <Image src={compactSuv1} className="img-fluid" alt="" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li>Massa ultricies mi</li>
                        </ul>
                        <a href="#" className="btn-buy" style={{ textDecoration: "none" }}>See more</a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                  <SwiperSlide key={'6'}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#ff0071" }}>Compact Sedan</h3>
                        <div className="price"><sup>$</sup>350<span> / mo</span></div>
                        <Image src={compactSuv1} className="img-fluid" alt="" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li>Massa ultricies mi</li>
                        </ul>
                        <a href="#" className="btn-buy" style={{ textDecoration: "none" }}>See more</a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

              </Swiper>
            </section>

          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Our;