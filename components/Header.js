import Link from 'next/link';
import React from 'react';
import style from '../styles/Header.module.css';
import { BsBag, BsChevronCompactDown, BsTelephone } from 'react-icons/bs';
import { MdContactPhone, MdFavoriteBorder, MdOutlinePersonOutline } from 'react-icons/md';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { TbDiscount2 } from 'react-icons/tb';
import { IoPricetagsOutline } from 'react-icons/io5';
import MainMenu from './MainMenu';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerTop}>
        <div className={style.container}>
          <div className={style.headerLeft}>
            <p>Welcome To This E-Commerce Store</p>
          </div>

          <div className={style.headerRight}>
            <div className={style.dropdown}>
              <div className={style.dropTittle}>
                <p>USD </p>
                <BsChevronCompactDown />
              </div>
              <ul className={style.dropdownBox}>
                <li>
                  <Link href='/'>USD</Link>
                </li>
                <li>
                  <Link href='/'>IDR</Link>
                </li>
              </ul>
            </div>
            <div style={{ "marginLeft": "2.5rem" }} className={style.dropdown}>
              <div className={style.dropTittle}>
                <p>ENG </p>
                <BsChevronCompactDown />
              </div>
              <ul className={style.dropdownBox}>
                <li>
                  <Link href='/'>ENG</Link>
                </li>
                <li>
                  <Link href='/'>IDN</Link>
                </li>
              </ul>
            </div>
            <span className={style.divider}></span>
            <div className={style.dropTittle}>
              <MdContactPhone className={style.iconHeader} />
              <Link href='/'>Contact</Link>
            </div>
            <div className={style.dropTittle}>
              <AiOutlineExclamationCircle className={style.iconHeader} />
              <Link href='/'>Need Help</Link>
            </div>
            <div className={style.dropTittle}>
              <MdOutlinePersonOutline className={style.iconHeader} />
              <Link href='/login'>Sign In</Link>
            </div>
            <span className={style.delimiter}>/</span>
            <Link href='/register' style={{ "marginLeft": "0px" }}>Register</Link>
          </div>
        </div>
      </div>

      <div className={style.headerMiddle}>
        <div className={style.container}>
          <div className={style.headerLeft}>
            <button className={style.toggleMobile}>
              <FaBars />
            </button>
            <Link className={style.logo} href='/'>Amazonas</Link>
            <div className={style.headerSearch}>
              <form className={style.inputWrapper}>
                <input
                  className={style.inputfield}
                  type="text"
                  placeholder="Search products"
                />
                <button className={style.btnsearch}>
                  <BiSearchAlt className='text-slate-400 hover:text-blue-500' />
                </button>
              </form>
              <div className={style.result}>
                <div className={style.product}>
                  {/* <img /> */}
                  {/* <h4></h4> */}
                  {/* <p></p> */}
                </div>
              </div>
            </div>
          </div>
          <div className={style.headerRight}>

            <div className={style.call}>
              <BsTelephone className={style.middleicon} />
              <div>
                <h4 className='font-normal'>Call Us Now :</h4>
                <p>0812-XXXX-XXXX</p>
              </div>
            </div>

            <span className={style.dividermiddle}></span>

            <Link href='/wishlist' className={style.wishlist}>
              <MdFavoriteBorder className={style.iconwishlist} />
            </Link>
            <span className={style.dividermiddle}></span>

            <div className={style.shopping}>
              <div className={style.wrapper}>
                <h4 className='font-normal'>Shopping Cart</h4>
                <p>$ 612.87</p>
              </div>

              <BsBag className={style.shopicon} />

            </div>
          </div>
        </div>
      </div>

      <div className={style.headerBottom}>
        <div className={style.container}>
          <div className={style.headerLeft}>
            <MainMenu />
          </div>

          <div className={style.headerRight}>
            <div className='flex flex-row'>
              <TbDiscount2 className='mr-[1rem] font-bold text-2xl' />
              <Link href='/' className='text-sm'>Special Offers</Link>
            </div>
            <div className='flex flex-row ml-6'>
              <IoPricetagsOutline className='mr-[1rem] font-bold text-2xl' />
              <Link href='/' className='text-sm'>Promo Products</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;