import React from 'react'
import ppHOC from './ppHOC'

export default class Example extends React.Component {
	render() {
		return (
			<div>
				<h2>Wrapped Component</h2>
				<p>Props</p>
				<pre>{JSON.stringify(this.props)}</pre>
				<form>
					<label>
						Automatically controlled input!
						<input type="email" {...this.props.fields('email')} />
					</label>
				</form>
			</div>
		)
	}
}

export const EnhancedExample = ppHOC(Example)
