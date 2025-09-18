import './App.css'
import AppRoutes from './AppRoutes'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import "./css/Navbar.css"
import "./css/Sidebar.css"

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <AppRoutes />
    </>
  )
}

export default App
