import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='w-screen h-screen p-4 grid grid-cols-1 md:grid-cols-4'>
        <Link to={'/folder-structure/'}>Folder Structure Machine Coding Round</Link>
    </div>
  )
}

export default HomePage