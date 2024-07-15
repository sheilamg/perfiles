import React, { useState } from 'react'

export const useButtom = () => {
  const [value, setValue] = useState(0);
  const inc = () => {setValue(prev => prev + 1)}
  const desc = () => {setValue(prev => prev - 1)}  

  return {
    value,
    inc,
    desc
  }
}
