import React from 'react'

import { render, screen } from '@testing-library/react'

import Switch from './Switch'

const { Case } = Switch

const fallbackRole = 'fallback'
const wrapperRole = 'div'
const caseRole = 'case'
const caseRoleOne = 'case-1'
const caseRoleTwo = 'case-2'
const caseRoleThree = 'case-3'

describe('Switch', () => {
  it('Should Switch render nothing if Switch empty', () => {
    render(
      <div role={ wrapperRole }>
        <Switch>
        </Switch>
      </div>
    )

    expect(screen.queryByRole(wrapperRole)).toBeEmptyDOMElement()
  })

  it('Should Switch render nothing without Case', () => {
    render(
      <Switch>
        <span role={ caseRole }>element</span>
      </Switch>
    )

    expect(screen.queryByRole(caseRole)).toBeNull()
  })

  it('Should Switch render nothing with one false Case', () => {
    render(
      <Switch>
        <Case>
          <span role={ caseRole }>element</span>
        </Case>
      </Switch>
    )

    expect(screen.queryByRole(caseRole)).toBeNull()
  })

  it('Should Switch render fallback without Case', () => {
    render(
      <Switch fallback={ <span role={ fallbackRole }>element</span> }>
        <span role={ caseRole }>element</span>
      </Switch>
    )

    expect(screen.queryByRole(fallbackRole)).toBeInTheDocument()
    expect(screen.queryByRole(caseRole)).toBeNull()
  })

  it('Should Switch render element with match from one Case', () => {
    render(
      <Switch>
        <Case condition>
          <span role={ caseRole }>element</span>
        </Case>
      </Switch>
    )

    expect(screen.queryByRole(caseRole)).toBeInTheDocument()
  })

  it('Should Switch render matched Case element beside fallback', () => {
    render(
      <Switch fallback={ <span role={ fallbackRole }>element</span> }>
        <Case condition>
          <span role={ caseRole }>element</span>
        </Case>
      </Switch>
    )

    expect(screen.queryByRole(fallbackRole)).toBeNull()
    expect(screen.queryByRole(caseRole)).toBeInTheDocument()
  })

  it('Should Switch render element with match first Case from several matched', () => {
    render(
      <Switch>
        <Case condition>
          <span role={ caseRoleOne }>element</span>
        </Case>

        <Case condition>
          <span role={ caseRoleTwo }>element</span>
        </Case>
      </Switch>
    )

    expect(screen.queryByRole(caseRoleOne)).toBeInTheDocument()
    expect(screen.queryByRole(caseRoleTwo)).toBeNull()
  })

  it('Should Switch render element with match Case from several', () => {
    render(
      <Switch>
        <Case>
          <span role={ caseRoleOne }>element</span>
        </Case>

        <Case condition>
          <span role={ caseRoleTwo }>element</span>
        </Case>

        <Case>
          <span role={ caseRoleThree }>element</span>
        </Case>
      </Switch>
    )

    expect(screen.queryByRole(caseRoleOne)).toBeNull()
    expect(screen.queryByRole(caseRoleTwo)).toBeInTheDocument()
    expect(screen.queryByRole(caseRoleThree)).toBeNull()
  })

  it('Should Switch render fallback element if has not matched Cases', () => {
    render(
      <Switch fallback={ <span role={ fallbackRole }>element</span> }>
        <Case>
          <span role={ caseRoleOne }>element</span>
        </Case>

        <Case>
          <span role={ caseRoleTwo }>element</span>
        </Case>
      </Switch>
    )

    expect(screen.queryByRole(fallbackRole)).toBeInTheDocument()
    expect(screen.queryByRole(caseRoleOne)).toBeNull()
    expect(screen.queryByRole(caseRoleTwo)).toBeNull()
  })
})
