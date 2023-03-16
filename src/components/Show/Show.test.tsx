import React from 'react'
import { render, screen } from '@testing-library/react'

import Show from '@/components/Show'

const textNode = 'content'
const role = 'element'

describe('Show', () => {
  it('Should render text node with true condition', () => {
    render(
      <Show condition={ true }>
       { textNode }
      </Show>
    )

    expect(screen.queryByText(textNode)).toBeInTheDocument()
  })

  it('Should render element with true condition', () => {
    render(
      <Show condition={ true }>
        <span role={ role }>element</span>
      </Show>
    )

    expect(screen.getByRole(role)).toBeInTheDocument()
  })

  it('Should not render element with false condition', () => {
    render(
      <Show condition={ false }>
        <span role={ role }>element</span>
      </Show>
    )

    expect(screen.queryByRole(role)).toBe(null)
  })
})
