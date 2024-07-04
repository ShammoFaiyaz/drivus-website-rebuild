import React from 'react';
import { AiFillCreditCard, AiOutlineMail, AiOutlineAppstore } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BiPaint, BiTimeFive } from "react-icons/bi";
import { GiRomanToga } from "react-icons/gi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsShieldLock, BsCalendar4 } from "react-icons/bs";
import { IoKeyOutline, IoReturnUpBackOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { RiFolderWarningLine } from "react-icons/ri";
import { GrBook } from "react-icons/gr";
import { FiBox } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";
import Link from 'next/link';

const Sidebar = () => {

  return (
    <div className='col-md-3 fs-6 text-dark'>

      <div className='fw-bold ms-3 fs-4'>sadman05</div>
      <div className='ms-3 mb-4'>Your personal account</div>

      <div>
        <ul className='sideitem'>
          <li className='py-1 mb-1'>
            <RiAccountCircleLine size={19} className="mx-2" /><Link href='/app/public'><a>Public Profile</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <FiSettings size={18} className="mx-2" /><Link href='/app/account'><a>Account</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <BiPaint size={19} className="mx-2" /><Link href='/app/appearance'><a>Appearance</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <GiRomanToga size={20} className="mx-2" /><Link href='/app/accessibility'><a>Accessibility</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <MdOutlineNotificationsNone size={20} className="mx-2" /><Link href='/app/notification'><a>Notifications</a></Link>
          </li>
        </ul>
        <hr />

        <div className='text-muted mb-1' style={{ fontSize: 14 }}>Access</div>
        <ul className='sideitem'>
          <li className='py-1 mb-1'>
            <AiFillCreditCard size={19} className="mx-2" /><Link href='/app/billing'><a>Billing and plans</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <AiOutlineMail size={19} className="mx-2" /><Link href='/app/email'><a>Emails</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <BsShieldLock size={19} className="mx-2" /><Link href='/app/password'><a>Password and authentication</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <IoKeyOutline size={20} className="mx-2" /><Link href='/app/ssh'><a>SSH and GPG keys</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <FaRegBuilding size={18} className="mx-2" /><Link href='/app/organization'><a>Organizations</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <RiFolderWarningLine size={19} className="mx-2" /><Link href='/app/moderation'><a>Moderation</a></Link>
          </li>
        </ul>
        <hr />

        <div className='text-muted mb-1' style={{ fontSize: 14 }}>Code, planning and automation</div>
        <ul className='sideitem'>
          <li className='py-1 mb-1'>
            <GrBook size={18} className="mx-2" /><Link href='/app/repositories'><a>Repositiries</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <FiBox size={19} className="mx-2" /><Link href='/app/packages'><a>Packages</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <BsCalendar4 size={17} className="mx-2" /><Link href='/app/pages'><a>Pages</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <IoReturnUpBackOutline size={19} className="mx-2" /><Link href='/app/saved'><a>Saved replies</a></Link>
          </li>
        </ul>
        <hr />

        <div className='text-muted mb-1' style={{ fontSize: 14 }}>Security</div>
        <ul className='sideitem'>
          <li className='py-1 mb-1'>
            <BsShieldLock size={18} className="mx-2" /><Link href='/app/code'><a>Code security and analysis</a></Link>
          </li>
        </ul>
        <hr />

        <div className='text-muted mb-1' style={{ fontSize: 14 }}>Integrations</div>
        <ul className='sideitem'>
          <li className='py-1 mb-1'>
            <span className='mx-2'><AiOutlineAppstore size={19} /></span><Link href='/app/applications'><a>Applications</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <span className='mx-2'><BiTimeFive size={19} /></span><Link href='/app/schedule'><a>Scheduled reminders</a></Link>
          </li>
        </ul>
        <hr />

        <div className='text-muted mb-1' style={{ fontSize: 14 }}>Archives</div>
        <ul className='sideitem'>
          <li className='py-1 mb-1'>
            <span className='mx-2'><CgNotes size={19} /></span><Link href='/app/security'><a>Security log</a></Link>
          </li>
          <li className='py-1 mb-1'>
            <span className='mx-2'><CgNotes size={19} /></span><Link href='/app/sponsorship'><a>Sponsorship log</a></Link>
          </li>
        </ul>
        <hr />

        <ul className='sideitem'>
          <li className='py-1 mb-1'>
            <span className='mx-2'><CgNotes size={19} /></span><Link href='/app/developer'><a>Developer settings</a></Link>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Sidebar