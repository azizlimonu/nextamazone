import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from '../utils/Store';
// import DropDown from './DropDown';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  const isCart = cartItemsCount > 0;
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
          <header>
            <nav className="flex h-12 items-center px-4 justify-between shadow-md">
              <Link className="text-lg font-bold" href="/">
                Amazonas
              </Link>
              <div>
                <Link className="p-2" href="/cart">
                  Cart
                  {isCart && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
                {status === 'loading' ? "Loading..." : session?.user
                  ? (
                    <Menu as='div' className='relative inline-block'>
                      <Menu.Button className='text-blue-600'>
                        {session.user.name}
                      </Menu.Button>
                      <Menu.Items className='absolute right-0 w-56 origin-top-right bg-white shadow-lg flex flex-col'>
                        <Menu.Item>
                          <Link className="dropdown-link" href="/profile">
                            Profile
                          </Link>
                        </Menu.Item>

                        <Menu.Item>
                          <Link className="dropdown-link" href="/order-history">
                            Order history
                          </Link>
                        </Menu.Item>

                        {session.user.isAdmin && (
                          <Menu.Item>
                            <Link href='/admin/dashboard' className='dropdown-link'>
                              Admin Dashboard
                            </Link>
                          </Menu.Item>
                        )}

                        <Menu.Item>
                          <a
                            className="dropdown-link"
                            href="#"
                            onClick={logoutHandler}
                          >
                            Logout
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  )
                  : (
                    <Link className="p-2" href="/login">
                      Login
                    </Link>
                  )}
              </div>
            </nav>
          </header>
          <main className="container m-auto mt-4 px-4">{children}</main>
          <footer className="flex h-10 justify-center items-center shadow-inner">
            <p>Copyright © 2022 Amazona</p>
          </footer>
        </div>
      </div>
    </>
  )
}
