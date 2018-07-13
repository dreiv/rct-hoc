import React from 'react'
import ppHOC from './ppHOC'

class Example extends React.Component {
	render() {
		return <input name="name" {...this.props.name} />
	}
}
export const EnhancedExample = ppHOC(Example)
