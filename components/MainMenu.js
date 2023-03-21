import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { mainMenu } from '../utils/Menu';
import { BsArrowRight, BsChevronDown } from 'react-icons/bs';

const MainMenu = () => {
  const pathname = useRouter().pathname;

  return (
    <nav className='main-nav'>
      <ul className='menu'>
        <li id='menu-home' className={pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>

        <li className={`submenu ${pathname.includes('/shop') ? 'active' : ''}`}>
          <div className='droptitle'>
            <Link href='/shop'>Categories</Link>
            <BsChevronDown />
          </div>

          <div className='megamenu'>
            <div className='row'>
              <div className='col-6 col-sm-4 col-md-3 col-lg-4'>
                <h4 className='menu-title'>
                  Variantions 1
                </h4>

                <ul>
                  {mainMenu?.shop.variation1?.map((item, idx) => (
                    <li key={idx}>
                      <Link href={'/' + item.url}>
                        {item.title}
                        {item.hot ? <span className='tip tip-hot'>Hot</span> : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='col-6 col-sm-4 col-md-3 col-lg-4'>
                <h4 className="menu-title">Variations 2</h4>
                <ul>
                  {mainMenu?.shop?.variation2?.map((item, idx) => (
                    <li key={idx}>
                      <Link href={'/' + item.url}>
                        {item.title}
                        {item.new ? <span className="tip tip-new">New</span> : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="col-6 col-sm-4 col-md-3 col-lg-4 menu-banner menu-banner1 banner banner-fixed">
                <Image src='/images/banner/banner-1.jpg' alt='menu banner' width='221' height='330'
                />

                <div className='banner-content y-50'>
                  <h4 className='banner-subtitle font-weight-bold text-primary ls-m'>
                    Sale
                  </h4>
                  <h3 className='banner-title font-weight-bold'>
                    <span className='text-uppercase'>Up to</span>
                    70% Off
                  </h3>
                  <Link href='/' className='btn btn-link btn-underline'>
                    Shop Now
                    <BsArrowRight className='d-icon-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className={`submenu ${pathname.includes('/product') && !pathname.includes('/elements') ? 'active' : ''}`}>
          <div className='droptitle'>
            <Link href='/products'>
              products
            </Link>
            <BsChevronDown />
          </div>

          {/* <div className='megamenu'>
            <div className='row'>
              <div className='col-6 col-sm-4 col-md-3 col-lg-4'>
                <h4 className='menu-title'>
                  product Pages
                </h4>
                <ul>
                  {mainMenu?.product?.pages?.map((item, idx) => (
                    <li key={idx}>
                      <Link href={'/' + item.url}>
                        {item.title}
                        {item.hot ? <span className="tip tip-hot">Hot</span> : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                <h4 className="menu-title">Product Layouts</h4>
                <ul>
                  {
                    mainMenu?.product?.layout?.map((item, idx) => (
                      <li key={idx}>
                        <Link href={'/' + item.url}>
                          {item.title}
                          {item.new ? <span className="tip tip-new">New</span> : ""}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className='col-6 col-sm-4 col-md-3 col-lg-4 menu-banner menu-banner2 banner banner-fixed'>
                <Image src='/images/banner/banner-2.jpg' alt='Banner' width='221' height='330' />

                <div className='banner-content x-50 text-center'>
                  <h3 className='banner-title text-white'>
                    Sunglassess
                  </h3>
                  <h4 className='banner-subtitle font-weight-bold text-white mb-0'>
                    $23.00-$120.00
                  </h4>
                </div>
              </div>
            </div>
          </div> */}
        </li>

        <li className={`submenu  ${pathname.includes('/pages') ? 'active' : ''}`}>
          <div className='droptitle'>
            <Link href="/">Pages</Link>
            <BsChevronDown />
          </div>
          {/* <ul>
            {
              mainMenu?.other?.map((item, idx) => (
                <li key={idx}>
                  <Link href={'/' + item.url}>
                    {item.title}
                    {item.new ? <span className="tip tip-new">New</span> : ""}
                  </Link>
                </li>
              ))
            }
          </ul> */}
        </li>

        <li className={`submenu  ${pathname.includes('/blog') && !pathname.includes('/elements') ? 'active' : ''}`}>
          <div className='droptitle'>
            <Link href="/blog/classic">Blog</Link>
            <BsChevronDown />
          </div>

          {/* <ul>
            {
              mainMenu.blog.map((item, idx) => (
                <li key={idx} className={item.subPages ? "submenu" : ""}>
                  <Link href={'/' + item.url}>
                    {item.title}
                  </Link>

                  {
                    item.subPages ?
                      <ul>
                        {
                          item.subPages.map((item, idx) => (
                            <li key={idx}>
                              <Link href={'/' + item.url}>
                                {item.title}
                              </Link>
                            </li>
                          ))
                        }
                      </ul> : ""
                  }
                </li>
              ))
            }
          </ul> */}
        </li>

        <li className={`${pathname.includes('/elements') ? 'active' : ''} d-xl-show submenu`}>
          <div className='droptitle'>
            <Link href={`/elements`}>Elements</Link>
            <BsChevronDown />
          </div>

          {/* <ul>
            {
              mainMenu.element.map((item, idx) => (
                <li key={idx}>
                  <Link href={'/' + item.url}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul> */}
        </li>

        <li>
          <Link href="/pages/about-us">About Us</Link>
        </li>
      </ul>

    </nav>
  )
}

export default MainMenu