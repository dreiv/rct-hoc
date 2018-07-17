import React from 'react'

// This is not really a HOC, just tried stuff
export default function hoc(WrappedComponent) {
	return class PP extends React.Component {
		constructor(props) {
			super(props)

			this.egProps = {
				onSave: this.onSave,
				onEdit: this.onEdit,
				onCancel: this.onCancel,
			}
		}

		onSave = () => console.log('saving!')
		onEdit = () => console.log('editing!')
		onCancel = () => console.log('canceling')

		render() {
			return <WrappedComponent {...this.props} {...this.egProps} />
		}
	}
}
