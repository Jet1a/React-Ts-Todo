import { FiGithub } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between gap-4 p-6 mx-auto max-w-screen-xl'>
      <div className="text-2xl font-bold">
         <h1 className='text-itemBorder'>MY<span className='text-button'>TODO</span> </h1>
      </div>
      <div className="">
         <a title='gitHub' href="https://github.com/Jet1a" rel="noopener noreferrer" target='_blank'>
          <FiGithub className='text-itemBorder text-2xl'/>
         </a>
      </div>
    </nav>
  )
}

export default Navbar