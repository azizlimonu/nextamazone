// import { Menu } from '@headlessui/react';
// import Cookies from 'js-cookie';
// import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head'
// import Link from 'next/link'
// import { useRouter } from 'next/router';
// import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Store } from '../utils/Store';
// import { BiSearchAlt } from 'react-icons/bi';
import Header from './Header';
// import DropDown from './DropDown';

export default function LayoutTest({ title, children }) {
  // const { status, data: session } = useSession();
  // const { state, dispatch } = useContext(Store);
  // const { cart } = state;

  // const [cartItemsCount, setCartItemsCount] = useState(0);
  // useEffect(() => {
    // setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  // }, [cart.cartItems]);

  // const logoutHandler = () => {
  //   Cookies.remove('cart');
  //   dispatch({ type: 'CART_RESET' });
  //   signOut({ callbackUrl: '/login' });
  // };

  // const isCart = cartItemsCount > 0;

  // const [query, setQuery] = useState('');

  // const router = useRouter();
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   router.push(`/search?query=${query}`);
  // };

  return (
    <>
      <div>
        <Head>
          <title>{title ? title + ' - Amazona' : 'Amazonasto'}</title>
          <meta name="description" content="Ecommerce Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ToastContainer position='bottom-center' limit={1} />

        <div className="flex min-h-screen flex-col justify-between ">
          <Header />
          <main className="container m-auto mt-4 px-4">{children}</main>
          <footer className="flex h-10 justify-center items-center shadow-inner">
            <p>Copyright © 2022 Amazona</p>
          </footer>
        </div>
      </div>
    </>
  )
}
