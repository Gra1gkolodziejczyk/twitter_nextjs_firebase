import { GrEmoji } from 'react-icons/gr'
import { HiOutlinePhotograph } from 'react-icons/hi'
import Image from 'next/image'
import Profile from '../../assets/profile.jpeg'
import React from 'react'
const Input = () => {
  return (
    <div className="flex border-b border-gray-700 p-3 space-x-3">
        <Image
            src={Profile}
            height="100"
            width="100"
            alt={"user-info"}
            className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95">
          </Image>
        <div className="w-full divide-y divide-gray-700">
            <div>
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-500 tracking-wide min-h-[50px] text-white" rows="2" placeholder="Qu'est ce qu'il ce passe ?"></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5 ">
                <div className="flex">
                    <HiOutlinePhotograph className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-gray-700"/>
                    <GrEmoji className="hover:-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-gray-700"/>
                </div>
                <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50" disabled>Tweet</button>
            </div>
        </div>
    </div>
  )
}

export default Input
