import React from 'react'

function FileItem({
  data
}) {
  return (
    <div className='my-[4px] bg-indigo-500 text-white rounded-md border-rose-500'>
      <p className='px-2 py-[4px] cursor-pointer'>
         <i className='pi pi-file mr-2'></i>
        {data.name}
      </p>
    </div>
  )
}

export default FileItem