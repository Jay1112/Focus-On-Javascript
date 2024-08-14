import React, { useState } from 'react';
import FileItem from './FileItem';

function FolderItem({
  data
}) {
  const [expanded, setExpanded] = useState(false);

  function toggle(e){
    setExpanded(!expanded);
  }

  return (
    <div className='py-[2px] bg-rose-500 text-white rounded-md border-rose-500'>
      <p className='p-2 cursor-pointer' onClick={toggle}>
        { expanded ? <i className='pi pi-folder-open mr-2'></i> : <i className='pi pi-folder mr-2'></i>}
        {data.name}
      </p>
      {
        data.isFolder && 
        expanded &&
        <div className='pl-2 flex flex-col'>
        {
           data.files.map((item,index)=>{
            if(item.isFolder){
              return <FolderItem key={item.name + index + '-folder'} data={item} />
             }
             return <FileItem key={item.name + index + '-file'} data={item} />
           })
        }
        </div>
      }
    </div>
  )
}

export default FolderItem