"use client"
import { add } from '@/lib/store/Features/product/productSlice'
import { useAppDispatch } from '@/lib/store/hooks'
import React from 'react'

const DataSatter = ({data}:{data:any}) => {
    const dispatch = useAppDispatch()
    dispatch(add(data))
  return (
    <>
        
    </>
  )
}

export default DataSatter
