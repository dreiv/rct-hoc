import React from 'react'

export default function ppHOC(WrappedComponent) {
	return class PP extends React.Component {
		constructor(props) {
			super(props)
			this.state = { name: '' }

			this.onNameChange = this.onNameChange.bind(this)
		}

		onNameChange({ target: { value } }) {
			this.setState({ name: value })
		}

		render() {
			const newProps = {
				name: {
					value: this.state.name,
					onChange: this.onNameChange,
				},
			}
			return <WrappedComponent {...this.props} {...newProps} />
		}
	}
}
