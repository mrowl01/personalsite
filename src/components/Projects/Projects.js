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
			<div id ='project' className= 'sections mv4 fl'>
			<h1 className = 'tc'>Projects</h1>
				<div  className = 'skillItems projects flex-wrap flex justify-between '>
					<div title = '3D Rail Shooter' className = 'project  grow pa3'>
						<a href='/portfolio/shoot3d'><img alt = '' className='br-100' src={space3d}></img></a>
					</div>
					<div title = '2d Space Invader' className = 'project  grow pa3 pa3'>
						<a href='/portfolio/shoot2d'><img alt = '' className='br-100' src={space2d}></img></a>
					</div>
					<div title = 'Glitch Garden' className = 'project  grow pa3'>
						<a href='/portfolio/glitch'><img alt = '' className='br-100' src={glitch}></img></a>
					</div>
					<div title = 'Minotaur Dungeon Crawl' className = 'project  grow pa3'>
						<a href='/portfolio/dungeon'><img alt = '' className='br-100' src={mino}></img></a>
					</div>
					<div title = 'Starwars Search' className = 'project  grow pa3'>
						<a href='/portfolio/starwars'><img alt = '' className='br-100' src={wars}></img></a>
					</div>
					<div title = 'Robot Buddies' className = 'project  grow pa3'>
						<a href='/portfolio/robots'><img alt = '' className='br-100' src={buds}></img></a>
					</div>
					<div title = 'Face Detector' className = 'project  grow pa3'>
						<a href='/portfolio/facedetect'><img alt = '' className='br-100' src={face}></img></a>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects ;