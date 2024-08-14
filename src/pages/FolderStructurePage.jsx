import FolderStructure from '../components/FolderStructure/FolderStructure';
import { directory } from '../mock/directoryData';

function FolderStructurePage() {
  return (
    <div className='w-screen h-screen p-4'>
      <FolderStructure directoryData={directory} />
    </div>
  )
}

export default FolderStructurePage