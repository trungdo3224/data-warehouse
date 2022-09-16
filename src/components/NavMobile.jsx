import React from 'react';
import { navigationData } from "../data"

const NavMobile = () => {
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4'>
      {navigationData.map((item, index) => (
        <li key={index}>
          <a className='text-white' href={item.href} alt="">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavMobile;
