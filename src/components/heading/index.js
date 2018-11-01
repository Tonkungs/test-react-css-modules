// /* src/components/Heading/index.jsx */

// import React from 'react'
// import styles from './styles.css'

// export default ({ children }) => (
//     <h1 className={styles.heading}>{children}</h1>
// )
/* src/components/Heading/index.jsx */

import React from 'react'
import './styles.css' // We are able to forego constructing a style object

export default ({ children }) => ( // We use styleName instead of className
    <h1 styleName="heading">{children}</h1>
)