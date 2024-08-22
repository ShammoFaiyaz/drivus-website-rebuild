import React, { useRef, useState } from "react";
import { Avatar } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ClientReview = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div className="bg-light">
      <div className="container position-relative">
        <div className="row py-5 w-full">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            // loopedSlides={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            navigation={{ prevEl, nextEl }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = prevEl;
              swiper.params.navigation.nextEl = nextEl;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1280: { slidesPerView: 2 },
            }}
            style={{ paddingBottom: "20px", paddingTop: "20px" }}
          >
            {[
              {
                title: "Cyrus John",
                review:
                  "Thank you so much Drivus for the fast application approval. I’m very happy with my vehicle 🚗. Thank you so much Sha for your understanding and professionalism! 👏 I would recommend this awesome company to everyone because their services are incredibly tremendous 👌🏻💯❤️",
              },
              {
                title: "Tamaliilesapi Zac",
                review:
                  "They are professional with what they do and understand when you are having trouble. I have been with them for 1 year and they are the best. You talk to them and they will listen no matter what. They will always make a way for you to get your dream car. I wanted a family car in red and they delivered my family car in rose 🌹red it is beautiful and I love it. You give them your trust and tell them what you need and they will deliver the best.",
              },
              {
                title: "Jermaine Moafanua-Stevenson",
                review:
                  "Great service! Very fast working staff! I got my car in 1 day. I highly recommend Drivus.",
              },
              {
                title: "Maame Esi De-Graft Hemans",
                review:
                  " I will always recommend them! If someone asks why, my answer is simple. Because, I got my brand new car, and I confidently say I am also a brand new car owner! Thank you so much Drivus! I will always refer friends and family who need assistance.",
              },
            ].map((item, idx) => (
              <SwiperSlide key={idx} className="p-3 bg-light">
                <div
                  style={{ minHeight: "250px" }}
                  className="card border-white d-flex justify-content-center align-item-center shadow p-3 py-5"
                >
                  <p className="h6 px-1 text-center text-secondary fst-italic">
                    {item.review}
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <Avatar size={40} src="/audi5.jpg" />
                    <div className="ms-2">
                      <p className="p-0 m-0">{item.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div> */}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "-50px",
              zIndex: 10,
            }}
          >
            <button
              ref={setPrevEl}
              className="btn-primary px-1 py-1 d-flex justify-content-center align-items-center"
            >
              <MdOutlineArrowBackIosNew />
            </button>
          </div>

          <div
            ref={setNextEl}
            style={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
              width: "5px",
              height: "10px",
              borderRadius: "10%",
              zIndex: 10,
            }}
          >
            <button className=" btn-primary px-1 py-1 d-flex justify-content-center align-items-center">
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
