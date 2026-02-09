import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col justify-center items-center pt-10 pb-4'>
        <div className='w-full flex justify-around items-start px-40'>
            <div className="text-5xl font-extrabold">Blog</div>
            <div className=''>
                <ul className='text-xl flex justify-around items-start gap-8 flex-col'>
                    <li className='font-bold'>Features</li>
                    <li>Footer</li>
                    <li>Footer</li>
                    <li>Footer</li>
                </ul>
            </div>
            <div className=''>
                <ul className='text-xl flex justify-around items-start gap-8 flex-col'>
                    <li className='font-bold'>About</li>
                    <li>footer</li>
                    <li>footer</li>
                </ul>
            </div>
            <div className=''>
                <ul className='text-xl flex justify-around items-start gap-8 flex-col'>
                    <li className='font-bold'>Contact</li>
                    <li>footer</li>
                    <li>footer</li>
                    <li>footer</li>
                    <li>footer</li>
                </ul>
            </div>
            <div className=''>
                <ul className='text-xl flex justify-around items-start gap-8 flex-col'>
                    <li className='font-bold'>Careers</li>
                    <li>footer</li>
                    <li>footer</li>
                    <li>footer</li>
                    <li>footer</li>
                </ul>
            </div>
            <div className=''>
                <ul className='text-xl flex justify-around items-start gap-8 flex-col'>
                    <li className='font-bold'>Read</li>
                    <button className='bg-orange-400 px-14 py-4 text-white'>Read More</button>
                </ul>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <p>~ Made by Muhammad Shariq ~</p>
        </div>
    </footer>
  )
}

export default Footer