import React from 'react'
import { Routes, Route ,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Tours from './../pages/Tours'
import Transfers from './../pages/Transfers'

import TourDetails from '../pages/TourDetails'
import TransferDetails from '../pages/TransferDetails'

import SearhResultList from '../pages/SearchResultList'
import Register from '../pages/Register'
import ThankYou from '../pages/ThankYou'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to ='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/transfers/:id" element={<TransferDetails />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tours/search" element={<SearhResultList />} />


    </Routes>
  )
}

export default Routers