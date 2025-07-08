import React from 'react'

const CheckList = ({ checked, onChange }) => {
  return (
    <>
    <input type='checkbox' checked={checked} onChange={onChange}/>
    </>
  )
}

export default CheckList