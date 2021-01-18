'use strict';
const React = require('react');

class Goods extends React.Component {
	// constructor() {
	// 	super(...arguments);
	// 	this.state = {
	// 		Text: 'ssr'
	// 	}
	// }

	render() {
		// const { Text } = this.state;
		return (
			<div className="search-text">
				<p>Goods</p>
			</div>
		)
	}
}

// const Goods = () => {
//   return (
//     <div>goods</div>
//   )
// }

module.exports = <Goods />;