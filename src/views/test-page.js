import React from 'react'

import { Helmet } from 'react-helmet'

import './test-page.css'

const TestPage = (props) => {
  return (
    <div className="test-page-container">
      <Helmet>
        <title>test-page - District Security Developer</title>
        <meta
          property="og:title"
          content="test-page - District Security Developer"
        />
      </Helmet>
    </div>
  )
}

export default TestPage
