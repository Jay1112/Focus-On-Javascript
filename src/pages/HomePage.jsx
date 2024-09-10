import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='w-screen h-screen p-4 grid grid-cols-1 md:grid-cols-4'>
      <p><Link to={'/folder-structure/'}>Folder Structure Machine Coding Round</Link></p>
      <p><Link to={'/custom-debounce-hook'} >Custom Debounce Hook</Link></p>
    </div>
  )
}

export default HomePage