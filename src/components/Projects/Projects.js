import React, {Component} from 'react' ; 
import space3d from './images/3dSpace.png';
import space2d from './images/spaceshoot2d.png';
import glitch from './images/GlitchGarden.png';
import mino from './images/Minotaur.png';
import wars from './images/starwars_search2.png';
import buds from './images/RobotBuds3.png';
import face from './images/Face_detect2.png';
class Projects extends Component {
	render(){
		return (
			<div className= 'sections fl w-75 bg-green'>
			<h1>Projects</h1>
				<div className = 'skillItems projects'>
					<div title = '3D Rail Shooter' className = 'project  grow'>
						<img className='br-100' src={space3d}></img>
					</div>
					<div title = '2d Space Invader' className = 'project  grow'>
						<img className='br-100' src={space2d}></img>
					</div>
					<div title = 'Glitch Garden' className = 'project  grow'>
						<img className='br-100' src={glitch}></img>
					</div>
					<div title = 'Minotaur Dungeon Crawl' className = 'project  grow'>
						<img className='br-100' src={mino}></img>
					</div>
					<div title = 'Starwars Search' className = 'project  grow'>
						<img className='br-100' src={wars}></img>
					</div>
					<div title = 'Robot Buddies' className = 'project  grow'>
						<img className='br-100' src={buds}></img>
					</div>
					<div title = 'Face Detector' className = 'project  grow'>
						<img className='br-100' src={face}></img>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects ;