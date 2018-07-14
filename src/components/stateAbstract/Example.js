import React from 'react'
import ppHOC from './ppHOC'

const Example = ({ name }) => <input name="name" {...name} />

export const EnhancedExample = ppHOC(Example)
