import React from 'react'

import type { ComponentClass } from 'react'

export interface DynamicProps {
  component: React.FC | ComponentClass
  [key: string]: any
}

const Dynamic: React.FC<DynamicProps> = ({ component: Component, ...restProps }) => {
  if (Component === undefined) {
    return null
  }

  return (
    <Component { ...restProps } />
  )
}

export default Dynamic
