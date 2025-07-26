import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './pages/Topbar.jsx'
import Sidebar from './pages/Sidebar.jsx'
import Dashsboard from './components/Dashboard.jsx'
import Team from './components/Team.jsx'
import Invoices from './components/Invoices.jsx'
import Contacts from './components/Contacts.jsx'
import Bar from './components/Bar.jsx'
import Form from './components/Form.jsx'
import Line from './components/Line.jsx'
import Pie from './components/Pie.jsx'
import Geography from './components/Geography.jsx'
import FAQ from './components/FAQ.jsx'
import Calender from './components/Calendar.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme, colorMode] = useMode();

  return ( 
    
    <ColorModeContext.Provider value={colorMode}>
      <ToastContainer position="top-right" autoClose={3000} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Your application components go here */}
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashsboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calender />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
