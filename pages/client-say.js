import styles from "../styles/Testimonial.module.css";
import { Carousel } from "antd";

const ClientSay = () => {
  return (
    <div className={styles.pic}>
      <div className={styles.blur}>
        <div
          className="container pt-5 pb-4 text-white"
          style={{ minHeight: 550 }}
        >
          <div className="row mt-2 mt-md-5 px-3 px-md-0">
            <div className="col-md-6 mt-4">
              <h1
                className=" fw-bold text-white mb-3 mt-4"
                style={{ fontSize: 40 }}
              >
                What our Clients Say?
              </h1>
              <Carousel autoplay className="text-white left">
                <div>
                  <p className="fw-bold my-4" style={{ fontSize: 20 }}>
                    Cyrus John
                  </p>
                  <p className="pb-5 mb-5" style={{ fontSize: 17 }}>
                    Thank you so much Drivus for the fast application approval.
                    I’m very happy with my vehicle 🚗 Thank you so much Sha for
                    Your understanding and professionalism! 👏 I would recommend
                    this awesome company to everyone, their services is
                    incredibly tremendous 👌🏻💯❤️
                  </p>
                </div>
                <div>
                  <p className="fw-bold my-4" style={{ fontSize: 20 }}>
                    Tamaliilesapi Zac
                  </p>
                  <p className="pb-5 mb-5" style={{ fontSize: 17 }}>
                    They are professional with what they do and also
                    understanding when you are having troubles. I bin with them
                    for 1 year and they are the best. You talk to them and they
                    will listen no matter what it is they will always make a way
                    for you to get your dream car. I wanted a family car in red
                    and they deliver my family car in rose 🌹red and it
                    beautiful and I love it. You give them your trust and what
                    you need and they will deliver with best.
                  </p>
                </div>
                <div>
                  <p className="fw-bold my-4" style={{ fontSize: 20 }}>
                    Jermaine Moafanua-Stevenson
                  </p>
                  <p className="pb-5 mb-5" style={{ fontSize: 17 }}>
                    Great service, very fast working staff got my car in 1 day.
                    I highly recommend it.
                  </p>
                </div>
                <div>
                  <p className="fw-bold my-4" style={{ fontSize: 20 }}>
                    Maame Esi De-Graft Hemans
                  </p>
                  <p className="pb-5 mb-5" style={{ fontSize: 17 }}>
                    I will always recommend them, someone will ask why, cos I
                    got my brand new car, of which I can confidently say I am
                    also a brand new car owner. Thank you guys so much I will
                    always refer friends and family who need assistance.
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
