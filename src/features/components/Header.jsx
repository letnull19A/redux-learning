import { Component, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectName, setName } from '../data/userDataSlice'
import './Header.css'

export default function Header() {

  const userData = useSelector(selectName);
  const dispath = useDispatch();

  return(
    <header className='header'>
      { userData }
    </header>
  )

}