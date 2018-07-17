import React from 'react'
import hoc from './hoc'

const Example = ({ onSave, onEdit, onCancel }) => (
	<React.Fragment>
		<button onClick={onSave}> Save </button>
		<button onClick={onEdit}> Edit </button>
		<button onClick={onCancel}> Cancel </button>
	</React.Fragment>
)

export const EnhancedExample = hoc(Example)
