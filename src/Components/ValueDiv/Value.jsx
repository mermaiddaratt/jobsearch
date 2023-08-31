import React from 'react'

import easy from '../../assets/easy.png'
import happy from '../../assets/happy.png'
import medal from '../../assets/medal.png'

function Value() {
  return (
    <div className='mb-[4rem] mt-[5rem]'>
      <h1 className='text-textColor text-[20px] py-[2rem] pb-[3rem] font-bold w-[500px] block'>
        The value holds us true and to account
      </h1>
      <div className="flex">
      <div className='grid gap-[10rem] w-[33%] items-center'>
      <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={easy} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem]'>
            Things beinf made beautiful simple are at the heart of everything we do.
          </p>
        </div>
      </div>

      <div className='grid gap-[10rem] w-[33%] items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={happy} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem]'>
            Things beinf made beautiful simple are at the heart of everything we do.
          </p>
        </div>
        </div>

      <div className='grid gap-[10rem] w-[33%] items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <img src={medal} alt="" className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[15px] text-textColor opacity-[.7] py-[1rem]'>
            Things beinf made beautiful simple are at the heart of everything we do.
          </p>
        </div>

      </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">

        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career??</h1>
          <h2 className='text-white text-[25px] font-bold'>Let's get started!</h2>
        </div>


          <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
            Get Started
          </button>

      </div>

    </div>
  )
}

export default Value
