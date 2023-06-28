import Link from 'next/link';
import { FaGithub, FaLaptop, FaTwitter } from 'react-icons/fa';
export default function NavBar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
    <h1>
    <Link href='/' className='text-white no-underline hover:text-white'>
        Roshan
    </Link>
    </h1>
    <div className='flex flex-row justify-normal sm:justify-evenly align-middle gap-5 text-white text-4xl'>
        <Link className='text-white hover:text-white' href='https://github.com/ryroshan'>
            <FaGithub />
        </Link>
        <Link className='text-white hover:text-white' href='#'>
            <FaLaptop />
        </Link>
        <Link className='text-white hover:text-white' href='https://twitter.com/ro5haen'>
            <FaTwitter />
        </Link>
    </div>
      </div>
    </nav>
  )
}
