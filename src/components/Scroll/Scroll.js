import React, {Component} from 'react' ; 

class Scroll extends Component {
	render(){
		return (
			<div className = 'vh-100'style = {{overflowY:'scroll'}}>
				{this.props.children }
			</div>
		)
	}
}

export default Scroll ;