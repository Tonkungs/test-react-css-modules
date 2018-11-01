/* src/index.js */

import React from 'react'
import ReactDOM from 'react-dom'

import Heading from './components/heading/index'

const MainComponent = () => (
    <div>
        <Heading>Using the heading component!</Heading>
    </div>
)

ReactDOM.render(
    <MainComponent />,
    document.getElementById('app')
)