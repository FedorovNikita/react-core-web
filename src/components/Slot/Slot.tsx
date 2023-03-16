import React from 'react'

import type { ReactNode } from 'react'

export interface SlotProps {
  name?: string
  children?: ReactNode
}

const Slot: React.FC<SlotProps> = ({ children }) => (
  <>{ children }</>
)

Slot.displayName = 'Slot'

export default Slot
