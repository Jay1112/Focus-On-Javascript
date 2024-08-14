import FileItem from './FileItem';
import FolderItem from './FolderItem';

function FolderStructure({
    directoryData
}) {
  return (
    <div>
        <h1>Folder Structure</h1>
        <div className='flex flex-col'>
          {
            directoryData.map((item, index)=>{
               if(item.isFolder){
                return <FolderItem key={item.name + index + '-folder'} data={item} />
               }
               return <FileItem key={item.name + index + '-file'} data={item} />
            })
          }
        </div>
    </div>
  )
}

export default FolderStructure