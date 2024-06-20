import React from 'react'

interface CustomCheckboxProps {
    checked: boolean, 
    callback: () => void
}

const CustomCheckbox = (
    { checked, callback }: CustomCheckboxProps
) => {
  return (
    <div>
        <input type='checkbox' className='w-[25px] h-[25px] rounded-checkbox'/>
    </div>
  )
}

export default CustomCheckbox