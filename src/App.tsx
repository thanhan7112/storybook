import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from 'component/sidebar/sidebar';
import Form from 'pages/form/form';
import Filter from 'pages/filter/filter';
import Layout from 'pages/layout/layout';
import Paginated from 'pages/paginated/paginated';
import PDFViewer from 'pages/pdf-viewer/pdfViewer';
import Realtime from 'pages/realtime/realtime';
import BackgroundJob from 'pages/background-job/background-job';
function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Sidebar />
        <div className='main'>
          <Routes>
            <Route path='/' element={<Navigate to='/form' />} />
            <Route path='/form' element={<Form />} />
            <Route path='/filter' element={<Filter />} />
            <Route path='/layout' element={<Layout />} />
            <Route path='/paginated' element={<Paginated />} />
            <Route path='/pdfviewer' element={<PDFViewer />} />
            <Route path='/realtime' element={<Realtime />} />
            <Route path='/backgroundjob' element={<BackgroundJob />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
