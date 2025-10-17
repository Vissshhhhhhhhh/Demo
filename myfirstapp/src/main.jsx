import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CourseList from './CourseList.jsx';
import Navbar from './Navbar.jsx';
import Form from './Form.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* <Navbar />
    <CourseList />     */}

    <Form />
    </>
  </StrictMode>,
)
