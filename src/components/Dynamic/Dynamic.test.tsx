import React from 'react'
import { render, screen } from '@testing-library/react'

import Dynamic from './Dynamic'

const testComponentText = 'component text'
const testComponentMessage = 'component message'
const wrapperRole = 'div'

const TestComponent: React.FC<{ message?: string }> = ({ message }) => (
  <div>{ message ?? testComponentText }</div>
)

describe('Dynamic', () => {
  it('Should Dynamic render nothing if Component is empty', () => {
    render(
      <div role={ wrapperRole }>
        { /* @ts-expect-error-next-line */ }
        <Dynamic />
      </div>
    )

    expect(screen.queryByRole(wrapperRole)).toBeEmptyDOMElement()
  })

  it('Should Dynamic render Component without props', () => {
    render(
      <div role={ wrapperRole }>
        <Dynamic component={ TestComponent } />
      </div>
    )

    expect(screen.queryByText(testComponentText)).toBeInTheDocument()
  })

  it('Should Dynamic render Component with props', () => {
    render(
      <div role={ wrapperRole }>
        <Dynamic component={ TestComponent } message={ testComponentMessage } />
      </div>
    )

    expect(screen.queryByText(testComponentMessage)).toBeInTheDocument()
  })
})
