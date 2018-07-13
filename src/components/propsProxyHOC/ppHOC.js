import React from 'react'

export default function ppHOC(WrappedComponent) {
	return class PP extends React.Component {
		constructor(props) {
			super(props)

			this.state = { fields: {} }
		}

		getField(fieldName) {
			if (!this.state.fields[fieldName]) {
				this.state.fields[fieldName] = {
					value: '',
					onChange: event => {
						this.state.fields[fieldName].value = event.target.value
						this.forceUpdate()
					},
				}
			}

			return {
				value: this.state.fields[fieldName].value,
				onChange: this.state.fields[fieldName].onChange,
			}
		}

		render() {
			const props = Object.assign({}, this.props, {
				fields: this.getField.bind(this),
			})

			return (
				<div>
					<h2>PP HOC</h2>
					<p>Im a Props Proxy HOC that abstracts controlled inputs</p>
					<WrappedComponent {...props} />
				</div>
			)
		}
	}
}
