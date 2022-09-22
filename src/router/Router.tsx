import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

//pages
import Layouts from '../components/layouts/Layouts'
import News from '../pages/news/News'
import Tests from '../pages/testlar/Tests'
import Home from '../pages/home/Home'
import NewsPages from '../pages/news/newsPages/NewsPages'
import TestStart from '../pages/testlar/testStart/TestStart'
import Questions from '../pages/testlar/questions/Questions'
import Table from '../pages/testlar/table/Table'
import Register from '../pages/register/Register'

export default function Router() {
  return (
    <Routes>
      <Route path='home' element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path='news' >
          <Route index element={<News />} />
          <Route path='news_pages' element={<NewsPages />} />
        </Route>
        <Route path='tests'>
          <Route index element={<Tests />} />
          <Route path='test_start'>
            <Route index element={<TestStart />} />
            <Route path='questions' >
              <Route index element={<Questions />} />
              <Route path='table' element={<Table />} />
              <Route path='tests' element={<Tests/>}/>
              <Route path='tests' element={<Tests/>}/>
            </Route>
            <Route path='table' element={<Table />} />
          </Route>
        </Route>
      </Route>

      <Route path='auth'>
       <Route index element={<Register/>}/>
      </Route>

      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  )
}
