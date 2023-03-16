import React, { isValidElement } from 'react'
import { renderHook } from '@testing-library/react-hooks'

import Slot from '../Slot'
import useSlots from './useSlots'

import type { ReactNode } from 'react'

const children: ReactNode = [
  <div key="header">header</div>,
  <div key="main">main</div>,
  <div key="footer">footer</div>
]

const childrenSlots: ReactNode = [
  <Slot key="slot-header" name="header">header</Slot>,
  <Slot key="slot-main" name="main">main</Slot>,
  <Slot key="slot-footer" name="footer">footer</Slot>
]

describe('useSlots', () => {
  it('Should useSlots return null without children', () => {
    const { result } = renderHook(() => useSlots())

    expect(result.current).toBeNull()
  })

  it('Should useSlots return null with empty children', () => {
    const { result } = renderHook(() => useSlots(<></>))

    expect(result.current).toBeNull()
  })

  it('Should useSlots return null with children without slots', () => {
    const { result } = renderHook(() => useSlots(children))

    expect(result.current).toBeNull()
  })

  it('Should useSlots object contain properties', () => {
    const { result } = renderHook(() => useSlots(childrenSlots))

    expect(result.current).toHaveProperty('main')
    expect(result.current).toHaveProperty('header')
    expect(result.current).toHaveProperty('footer')
  })

  it('Should useSlots object contain valid react elements', () => {
    const { result } = renderHook(() => useSlots(childrenSlots))

    expect(isValidElement(result.current?.main)).toBeTruthy()
    expect(isValidElement(result.current?.header)).toBeTruthy()
    expect(isValidElement(result.current?.footer)).toBeTruthy()
  })

  it('Should useSlots return slots with default & this valid react element', () => {
    const { result } = renderHook(() => useSlots(<Slot>slot</Slot>))

    expect(result.current).toHaveProperty('default')
    expect(isValidElement(result.current?.default)).toBeTruthy()
  })
})
