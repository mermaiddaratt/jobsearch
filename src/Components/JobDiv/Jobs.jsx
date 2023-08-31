import React from 'react'
import NavBar from '../NavBar/NavBar'

//Imported Icons =======>
import {BiTimeFive} from 'react-icons/bi'

//Imported Images =========>
import logo1 from '../../assets/logo (1).png'
import logo2 from '../../assets/logo (2).png'
import logo3 from '../../assets/logo (3).png'
import logo4 from '../../assets/logo (4).png'
import logo5 from '../../assets/logo (5).png'
import logo6 from '../../assets/logo (6).png'
import { useNavigate } from 'react-router-dom'

const Data =[
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Tokyo',
    desc: 'Need someone to design the database',
    company: 'Jujutsu Kaisen.'
  },
  {
    id:1,
    image: logo2,
    title: 'Software Eng',
    time: '14Hrs',
    location: 'Osaka',
    desc: 'Need someone who can developing.',
    company: 'Kimetsu No Yaiba.'
  },
  {
    id:1,
    image: logo3,
    title: 'UI Designer',
    time: '10Hrs',
    location: 'Nagoya',
    desc: 'Requires someone to design for an application or software.',
    company: 'One Piece.'
  },
  {
    id:1,
    image: logo3,
    title: 'UI Designer',
    time: '10Hrs',
    location: 'Nagoya',
    desc: 'Requires someone to design for an application or software.',
    company: 'One Piece.'
  },
  {
    id:1,
    image: logo3,
    title: 'UI Designer',
    time: '10Hrs',
    location: 'Nagoya',
    desc: 'Requires someone to design for an application or software.',
    company: 'One Piece.'
  },
  {
    id:1,
    image: logo4,
    title: 'Product Designer',
    time: 'Now',
    location: 'Fukuyama',
    desc: 'Need someone to assist the company in creating and developing new products which are the result of creative ideas.',
    company: 'Naruto.'
  },
  {
    id:1,
    image: logo5,
    title: 'Researcher',
    time: '2 Days',
    location: 'Kure',
    desc: 'Requires someone who can operate each major tool, perform tests and evaluate test results.',
    company: 'Tokyo Revengers.'
  },
  {
    id:1,
    image: logo6,
    title: 'Data Scientist',
    time: '14 Days',
    location: 'Akashi',
    desc: 'Needs someone who can analyze large amounts of data to predict trends and provide reports with recommendations.',
    company: 'Attack On Titan.'
  },
  {
    id:1,
    image: logo6,
    title: 'Data Scientist',
    time: '14 Days',
    location: 'Akashi',
    desc: 'Needs someone who can analyze large amounts of data to predict trends and provide reports with recommendations.',
    company: 'Attack On Titan.'
  },
  {
    id:1,
    image: logo6,
    title: 'Data Scientist',
    time: '14 Days',
    location: 'Akashi',
    desc: 'Needs someone who can analyze large amounts of data to predict trends and provide reports with recommendations.',
    company: 'Attack On Titan.'
  },
]

function Jobs() {
  const nav = useNavigate();

  return (
    <div>
      <NavBar/>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

      {
        Data.map(({id,image,title,time,location,desc,company}) =>{
          return(
          
          <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor
              group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>{time}
              </span>
            </span>            
            <h6 className='text-[#ccc]'>{location}</h6>

            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {desc}
            </p>

            <div className='company flex items-center gap-2'>
              <img src={image} alt="Company Logo" className='w-[10%]'/>
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
            </div>

            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group:hover/
            item:text-textColor group:hover:text-white' onClick={() => {nav('/Jobs')}}>
              Chat Now!
            </button>

          </div>
          )
        })
      }

      </div>

    </div>
  )
}

export default Jobs