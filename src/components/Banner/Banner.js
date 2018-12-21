import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
	render(){
		return(
		<div className = 'banner fl w-25  vh-100 tc '>
			<img 
			className = 'br-100 w-50 main-pic'
			src = 'https://i.postimg.cc/9Fh8CzK2/IMG-7619.jpg' 
			></img>
			<h1 className= 'main-name'>Chris Ortega</h1>
			<h1 className = 'job-title'>Software Engineer</h1>
			<div className= 'container socialMediaIcons'>
				<a href=''>
				<img 
				className = 'linkedinlogo socialicon br-100 grow'
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGtSURBVGhD7dm/K0VhHMfxI0Ummz+CySaRn4PB4J+g7AYTUhaD3eDXIGWR2WBQSimrUiwsyiZG3l/dp56+vtzO8dz7PB3Pp17J8e1776eje8+9p8jJycmpXaaxj7NI9jCJP2UdH4lYQ6VMwVoY0wRK5wDWsph2UTrnsJbFJM+pdC5gLYtJnlPp/JsiR5CX5iGs4B3WXEjBi5xAZwnWbEjBiyxAZwDWbEjBi2xCZw7WbEjBi7xhFi6DuIc1G1LwIs4LntWxVmpZkXYLXuQR18ot9NwN9JycRff3V8i/5JN37DfBiyxDZwR6rhc6hziFvP90yIFG+tHssiipIjONn1a6cQW9x0mqSLOMQu9xkivSg2F0ff32PQ/Qu0RSRfrg3nMu0QmdY+hdIqkiG/BnrM/jW/BnnKSKyKuWPzMPnVX4M07SRRahI/v9GScXsZaJXITkIshFrGWiNkXkwm5bkStaPSdfQOu5O/gz8jh65qcLx+BFYslFrGUxVSpSmy+x5S6VtSymHZSO3FSxlsU0jkqR213Wwhgq33pzkTMjp9S6UdkO8thjyMnJyalNiuITIQZmCNTpcUwAAAAASUVORK5CYII=">
				</img>
				</a>
				<a href=''>
				<img 
				className='githublogo socialicon br-100 grow'
				src="data:image/png;base64,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">
				</img>
				</a>
				<br/>
				<a class="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray br-pill" href="/">Home</a>
				<br/>
				<a class="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray br-pill" href="/portfolio">Portfolio</a>
				<br/>
				<a class="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray br-pill" href="/aboutme">About Me</a>
			</div>
			<div>
			
			</div>
		</div>
		)
	}
}

export default Banner;