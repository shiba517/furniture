import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='p-4  bg-black text-gray-200'>
      <nav className='flex flex-row [&>*]:pr-2'>
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>About</Link>
      </nav>
    </header>
  );
}

export default Navbar;
