import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
