import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className=' bg-black text-white flex items-center justify-center  p-4'>
    <ul className='flex  gap-2 list-none sm:list-disc  items-center justify-center sm:gap-6  flex-wrap text-sm  '>
        <li>About</li>
        <li>Setting</li>
        <li>Help</li>
        <li>API Documentation</li>
        <li>Hacker News</li>
        <li>Fork/Contribute</li>
        <li>Cool Apps</li>
    </ul>
   </footer>
   
   </>
  )
}

export default Footer
