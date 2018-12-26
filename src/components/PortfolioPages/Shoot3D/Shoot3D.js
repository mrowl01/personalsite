import React, { Component } from 'react';

class Shoot3D extends Component {
	render(){
		return(
		<div className = 'sections tc' >
			<h1>3D Rail Shooter</h1>
			<hr/>
			<img alt='' src='https://i.postimg.cc/9M6MRw6m/3dspace.png'></img>
			<h2>Tech Stack </h2>
			Unity3D
			<h2> Decription</h2>
			This game was made with Unity. It has the player play as a spaceship. It has yaw, pitch and roll to make it feel authentic.
			It is based on an alien planet. I found the textures on google and the space ship was provided by a free asset in the asset store.
			I did use blender 3D to modify a tiny bit but not enough to be noticable. It uses particle effects for the blast and it's set to enviroment so it can shoot forward.
			I added static enemy ships so the player can shoot at them and they do blow up. I have a trigger set for when the HP of the enemy hits 0 a particle effect is populated at it's location in space.

			
			<h2>Youtube Demo</h2>
			<a href= 'https://youtu.be/NlMz-YSJU_c'>
			https://youtu.be/NlMz-YSJU_c
			</a>
			<h2>GitHub</h2>
			<a href='https://github.com/mrowl01/3d-Space-Shooter'>
			https://github.com/mrowl01/3d-Space-Shooter
			</a>
		</div>
		)
	}
}

export default Shoot3D;