import React from 'react';
import Image from 'next/image';
import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            src='/logo.svg'
            alt='Car Hub Logo'
            width={118}
            height={18}
            className='object-contain'
          ></Image>

          <p className='text-base text-gray-700'>
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div className='footer__link' key={link.title}>
              <h3 className='font-bold'>{link.title}</h3>

              {link.links.map((item) => (
                <Link key={item.title} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='flex max-md:flex-col justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 CarHub. All rights reserved</p>

        <div className='footer__copyrights-link'>
          <Link href='/' className='text-gray-500'>
            Privacy & Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
