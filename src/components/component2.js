import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <button type="button" className="button">
        {props.button}
      </button>
    </div>
  )
}

Component2.defaultProps = {
  button: 'Button',
}

Component2.propTypes = {
  button: PropTypes.string,
}

export default Component2
