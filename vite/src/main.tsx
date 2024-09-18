import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home/index.tsx'
import { About } from './components/about/index.tsx'

import '../src/styles/global.css'
import { Menu } from './components/menu/index.tsx'
import { Post } from './components/Post/index.tsx'
import { Redirect } from './components/redirect/index.tsx'
import { NotFound } from './components/not-found/index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/Post' element={<Post />} />
      {/*<Route path='/Post/:id' element={<Post />} />*/}
      <Route path='/Post/' element={<Post />} >
         <Route path=':id' element={<div>ola id 10</div>} />
      </Route>
      <Route path='/redirect' element={<Redirect />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
