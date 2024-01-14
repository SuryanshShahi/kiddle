import { FC, Fragment, PropsWithChildren, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoIosArrowUp } from 'react-icons/io';

interface IPageWraps {
  wrapperClass?: string;
  isNavbar?: boolean;
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  isNavbar,
}) => {
  const [isActive, setIsActive] = useState(false);
  const slideNav = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  typeof window !== 'undefined' && window.addEventListener('scroll', slideNav);
  return (
    <div className='animate-bottom'>
      {isNavbar && <Navbar />}
      <div className={`px-5 bg-white lg:px-[60px] ${wrapperClass}`}>
        {children}
      </div>
      {isActive && (
        <div
          className='z-10 w-12 h-8 hover:h-10 duration-300 bottom-0 right-10 rounded-t-md fixed cursor-pointer bg-primary flex items-center justify-center'
          onClick={() => window.scroll(0, 0)}
        >
          <IoIosArrowUp color='white' />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PageWrapper;
