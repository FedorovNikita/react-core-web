import React from 'react'
import { render, screen } from '@testing-library/react'

import For from './For'

const arr = [
  'arr_1',
  'arr_2',
  'arr_3'
]

const obj = {
  one: '1',
  two: '2',
  three: '3'
}

const wrapperRole = 'wrapper'
const itemRole = 'item'

describe('For', () => {
  it('Should not render something without children', () => {
    render(
      <div role={ wrapperRole }>
        { /* @ts-expect-error-next-line */ }
        <For each={ arr }>
        </For>
      </div>
    )

    expect(screen.queryByRole(wrapperRole)).toBeEmptyDOMElement()
  })

  it('Should not render something if children is not function', () => {
    render(
      <div role={ wrapperRole }>
        <For each={ arr }>
          { /* @ts-expect-error-next-line */ }
          <div>something</div>
        </For>
      </div>
    )

    expect(screen.queryByRole(wrapperRole)).toBeEmptyDOMElement()
  })

  it('Should render array', () => {
    render(
      <div role={ wrapperRole }>
        <For each={ arr }>
          { item => (
            <span role={ itemRole }>
              { item }
            </span>
          ) }
        </For>
      </div>
    )

    expect(screen.queryAllByRole(itemRole)).to.have.length(arr.length)

    for (const item of arr) {
      expect(screen.queryByText(item)).toBeInTheDocument()
    }
  })

  it('Should render object', () => {
    render(
      <div role={ wrapperRole }>
        <For each={ obj }>
          { ([key, value]) => (
            <span role={ itemRole }>
              { `[${key as string}]: ${value as string}` }
            </span>
          ) }
        </For>
      </div>
    )

    expect(screen.queryAllByRole(itemRole)).to.have.length(Object.keys(obj).length)

    for (const [key, value] of Object.entries(obj)) {
      expect(screen.queryByText(`[${key}]: ${value}`)).toBeInTheDocument()
    }
  })
})
