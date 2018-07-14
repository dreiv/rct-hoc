import React from 'react'

function iiHOC(WrappedComponent) {
	return class Enhancer extends WrappedComponent {
		render() {
			if (this.props.loggedIn) {
				return super.render()
			}
			return null
		}
	}
}

class Example extends React.Component {
	render() {
		return <div>Conditionally Rendered</div>
	}
}

export const EnhancedExample = iiHOC(Example)
