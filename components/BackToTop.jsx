import { FaLongArrowAltUp } from 'react-icons/fa';
import Link from 'next/link';


const BackToTop = () => {

  return (
    <a href='#' className="back-to-top d-flex align-items-center justify-content-center">
      <FaLongArrowAltUp />
    </a>
  )
}

export default BackToTop;