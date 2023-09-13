import { NavLink } from 'react-router-dom';

export default function Nav(){
return(
    <>
   <nav className="flex justify-between items-center w-80vw">
    <div className="flex">
        <ul className="flex font-bold gap-4">
            <li className='text-[#2D2E2E] hover:underline hover:text-green-400'>
            <NavLink to="/">
           Services
            </NavLink>
            </li>

            <li className='text-[#2D2E2E]'> 
            <NavLink to="/">
            Partners
            </NavLink>
            </li>

            <li className='text-[#2D2E2E]'>
            <NavLink to="/">
            Careem Plus
            </NavLink>
            </li>

            <li className='text-[#2D2E2E]'>
            <NavLink to="/">
            Our Services
            </NavLink>
            </li>
        </ul>
       
    </div>

    <div className="flex">
        <button className='bg-green-400 border-none text-[#2D2E2E] px-2 py-2 font-semibold rounded-md'>Downoad the app</button>
        <select name="" id=""></select>
    </div>
   </nav>
    </>
)
}
