import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectName, setName } from '../data/userDataSlice'

export function DataView() {

  const userData = useSelector(selectName);
  const dispatch = useDispatch();
  const fieldRef = useRef(null);

  const submit = () => {
    dispatch(setName(fieldRef.current.value))
  }

  return (
    <div>
      <p>Ваше имя: { userData }</p>
      <input onChange={() => submit()} ref={ fieldRef } type='text'/>
      <button>Сменить имя</button>
    </div>
  )
}