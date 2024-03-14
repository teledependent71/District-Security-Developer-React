import React from 'react'

import PropTypes from 'prop-types'

import './test-component.css'

const TestComponent = (props) => {
  return (
    <div className="test-component-container">
      {props.children}
      <h1>{props.heading}</h1>
      <button type="button" className="button">
        {props.button}
      </button>
      <h1 className="test-component-text">{props.heading1}</h1>
    </div>
  )
}

TestComponent.defaultProps = {
  heading1: 'Heading',
  button: 'Button',
  heading: 'Heading',
}

TestComponent.propTypes = {
  heading1: PropTypes.string,
  button: PropTypes.string,
  heading: PropTypes.string,
}

export default TestComponent
