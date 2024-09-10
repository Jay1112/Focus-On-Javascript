import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FolderStructurePage from "./pages/FolderStructurePage"
import CustomDebounceHook from "./pages/CustomDebounceHook"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/folder-structure/" element={<FolderStructurePage/>} />
      <Route path="/custom-debounce-hook/" element={<CustomDebounceHook/>} />
    </Routes>
  )
}