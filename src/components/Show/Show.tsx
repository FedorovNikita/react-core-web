import React from 'react'

import type { ReactNode } from 'react'

export interface ShowProps {
  condition?: boolean
  children?: ReactNode
}

const Show: React.FC<ShowProps> = ({ condition, children }) => (
  <>{ condition === true && children }</>
)

Show.displayName = 'Show'

export default Show
