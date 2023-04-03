import {BsStars} from 'react-icons/bs'
import Input from '../Input/Input'
import Post from '../Post/Post'
import React from 'react'

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Graig Kolodziejczyk",
      username: "GraigCode",
      userImg: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F220453%2Fpexels-photo-220453.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-220453.jpg%26fm%3Djpg&tbnid=QsatBu9zpFWl5M&vet=12ahUKEwjAzYPw5er9AhUTmicCHSSHAqgQMygDegUIARDoAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&docid=y7i4Swccn0rqpM&w=3476&h=5214&q=profile%20image&ved=2ahUKEwjAzYPw5er9AhUTmicCHSSHAqgQMygDegUIARDoAQ",
      img: "https://pbs.twimg.com/media/FrnHITZWcAACaKG?format=jpg&name=small",
      text: "Nice job",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Graig Kolodziejczyk",
      username: "GraigCode",
      userImg: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F220453%2Fpexels-photo-220453.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-220453.jpg%26fm%3Djpg&tbnid=QsatBu9zpFWl5M&vet=12ahUKEwjAzYPw5er9AhUTmicCHSSHAqgQMygDegUIARDoAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&docid=y7i4Swccn0rqpM&w=3476&h=5214&q=profile%20image&ved=2ahUKEwjAzYPw5er9AhUTmicCHSSHAqgQMygDegUIARDoAQ",
      img: "https://pbs.twimg.com/media/FrnHITZWcAACaKG?format=jpg&name=small",
      text: "Nice job!!",
      timestamp: "2 days ago",
    },
    {
      id: "3",
      name: "Graig Kolodziejczyk",
      username: "GraigCode",
      userImg: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4E03AQFIz1CRoh5YSg%2Fprofile-displayphoto-shrink_800_800%2F0%2F1663779779208%3Fe%3D2147483647%26v%3Dbeta%26t%3DTxSy6VYDjXqByTaKxD6J6hBQYjk4YZc55Iq-iPpgEP8&tbnid=9KSnBhoAYRgpuM&vet=12ahUKEwifgL2bqOv9AhXEpicCHQTsB68QMygAegQIARAn..i&imgrefurl=https%3A%2F%2Ffr.linkedin.com%2Fin%2Fgraig-kolodziejczyk-1482241b8&docid=CzXKJgPKRmiFsM&w=800&h=800&q=graig%20kolodziejczyk&ved=2ahUKEwifgL2bqOv9AhXEpicCHQTsB68QMygAegQIARAn",
      img:"https://pbs.twimg.com/media/FrnHITZWcAACaKG?format=jpg&name=small",
      text: "Nice job!!!!",
      timestamp: "2 minutes ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-700 xl:min-w-[576px] sm:ml-[73px] flew-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 justify-between border-b border-gray-700">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer sticky">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <BsStars className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post) => {
          return <Post key={post.id} post={post} />
          })}
    </div>
  )
}

export default Feed