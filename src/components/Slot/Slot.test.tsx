import React from 'react'

import { render, screen } from '@testing-library/react'

import Slot from './Slot'

const textNode = 'content'
const role = 'element'

describe('Slot', () => {
  it('Should render text node', () => {
    render(
      <Slot>
       { textNode }
      </Slot>
    )

    expect(screen.queryByText(textNode)).toBeInTheDocument()
  })

  it('Should render element', () => {
    render(
      <Slot>
        <span role={ role }>element</span>
      </Slot>
    )

    expect(screen.getByRole(role)).toBeInTheDocument()
  })
})
