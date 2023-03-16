import React, { Children } from 'react'

import Show, { type ShowProps } from '@/components/Show'

import type { ReactElement } from 'react'

export type SwitchFC<Props = Record<string, unknown>> = React.FC<Props> & { Case: React.FC<ShowProps> }

export interface SwitchProps {
  fallback?: ReactElement
  children: ReactElement<ShowProps> | Array<ReactElement<ShowProps>>
}

const Switch: SwitchFC<SwitchProps> = ({ fallback, children }) => {
  const matchedCase = (
    Children
      .toArray(children)
      .find(child => (
        ((child as ReactElement<ShowProps>)?.type as React.FC<ShowProps>)?.displayName === 'Show' &&
        (child as ReactElement<ShowProps>)?.props?.condition
      ))
  )

  if (matchedCase !== undefined) {
    return <>{ matchedCase }</>
  }

  return <>{ fallback ?? null }</>
}

Switch.Case = Show

export default Switch
