import Link from 'next/link'
import React from 'react'
import dlogo from "../../../public/drivus-03.png"
import { useRouter } from 'next/router'
import Image from 'next/image';
import { MdOutlineNotificationsNone } from "react-icons/md";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const menu = [
  { title: "Home", path: '/' },
  { title: "About us", path: '/about-us' },
  { title: "How it works", path: '/how-it-work' },
  { title: "Our Plans", path: '/our-plan' },
  { title: "FAQ", path: '/faqs' },
  { title: "Contact", path: '/contact' },
]

function Navbar() {

  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white p-0 shadow" style={{ zIndex: 1000 }}>
      <div className="container">
        <Link href="/">
          <a className="navbar-brand customsss"><Image src={dlogo} height={60} width={150} alt='logo' /></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <ul className='navbar-nav ps-md-5'>
              {menu.map((item, index) => {
                return (
                  <li className="nav-item pe-3 nav link" key={index}>
                    <Link href={item.path}><a style={{ textDecoration: "none" }} className={`cursor-pointer ${router.pathname === item.path
                      ? `active`
                      : ''
                      }`}>{item.title}</a></Link>
                  </li>
                )
              })}

              <li className="nav-item">
                <button
                  type="button" className="btn customs mt-1"
                  style={{
                    fontSize: 14,
                    display: "inline-block",
                    padding: "6px 15px",
                    borderRadius: 3,
                    transition: "0.5s",
                    color: "#272561",
                    border: " 2px solid #8B37B3",
                    position: "relative",
                    textDecoration: "none"
                  }}>Enquire</button>
              </li>

              <li className="nav-item">
                <span className='ms-3' style={{ cursor: "pointer" }}><MdOutlineNotificationsNone size={24} /></span>
              </li>

              <li className='nav-item'>
                <div className='ms-3'>

                  <div className="dropdown">
                    <div className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <Avatar size="small" icon={<UserOutlined />} />
                    </div>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>

                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>

    </nav >
  )
}

export default Navbar