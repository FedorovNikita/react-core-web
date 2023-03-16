import React from 'react'

import type { ReactNode } from 'react'

export interface ForProps {
  each: any[] | Record<string, any>
  children: (entity: any) => ReactNode
}

const For: React.FC<ForProps> = ({ each, children }) => {
  if (typeof children !== 'function') {
    return null
  }

  if (Array.isArray(each)) {
    return (
      <>
        { each.map(item => children(item)) }
      </>
    )
  }

  if (each !== null && typeof each === 'object') {
    return (
      <>
        { Object.entries(each).map(entry => children(entry)) }
      </>
    )
  }

  return null
}

export default For
