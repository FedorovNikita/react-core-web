import React, { useMemo } from 'react'

import type { ReactNode, ReactElement } from 'react'
import type { SlotProps } from '../Slot'

const useSlots = (children?: ReactNode): Record<string, ReactNode> | null => {
  if (children === undefined || React.Children.count(children) === 0) {
    return null
  }

  const slots = useMemo(() => (
    React.Children
      .toArray(children)
      .reduce((acc, child) => {
        const isSlotComponent = (
          ((child as ReactElement<SlotProps>)?.type as React.FC<SlotProps>)?.displayName === 'Slot'
        )

        if (isSlotComponent) {
          const slotName = (child as ReactElement<SlotProps>)?.props?.name
          return ({ ...acc, [slotName ?? 'default']: child })
        }

        return acc
      }, {})
  ), [children])

  return Object.entries(slots).length > 0 ? slots : null
}

export default useSlots
