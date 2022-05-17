import { CircleNotch } from 'phosphor-react'
import React from 'react'

export default function Loading() {
  return (
    <div className="loading-content">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  )
}
