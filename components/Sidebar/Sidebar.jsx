import { AiFillHome, AiFillTwitterSquare } from 'react-icons/ai';
import { BsBell, BsBookmark, BsPerson } from 'react-icons/bs';

import { BiMessageDetail } from 'react-icons/bi';
import { CiCircleMore } from 'react-icons/ci';
import { FiMoreHorizontal } from 'react-icons/fi'
import Image from "next/image";
import Profile from '../../assets/profile.jpeg';
import SidebarMenuItems from "../SidebarMenu/SidebarMenuItems";
import { TbHash } from 'react-icons/tb';
import Twitter from '../../assets/twitter-logo.png';

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image src={Twitter} height="50" width="50" alt={""}></Image>
        </div>
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItems text="Home" Icon={AiFillHome} active/>
            <SidebarMenuItems text="Explore" Icon={TbHash} />
            <SidebarMenuItems text="Notifications" Icon={BsBell} />
            <SidebarMenuItems text="Messages" Icon={BiMessageDetail} />
            <SidebarMenuItems text="Bookmarks" Icon={BsBookmark} />
            <SidebarMenuItems text="Twitter Blue" Icon={AiFillTwitterSquare} />
            <SidebarMenuItems text="Profile" Icon={BsPerson} />
            <SidebarMenuItems text="More" Icon={CiCircleMore} />
        </div>
        <div>
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
        </div>
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
          <Image 
            src={Profile} 
            height="100" 
            width="100" 
            alt={""} 
            className="h-10 w-10 rounded-full xl:mr-2">
          </Image>
          <div className="leading-5 hidden xl:inline">
            <h4 className='font-bold text-white'>Graig kolodziejczyk</h4>
            <p className="text-gray-500">@codeGraigKolo</p>
          </div>
          <FiMoreHorizontal className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>
    </div>
  )
}

export default Sidebar