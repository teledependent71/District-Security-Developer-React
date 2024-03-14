import React from 'react'

import PropTypes from 'prop-types'

import './laron.css'

const Laron = (props) => {
  return (
    <div className="laron-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Laron.defaultProps = {
  text: 'Text',
}

Laron.propTypes = {
  text: PropTypes.string,
}

export default Laron
