import React, { Component } from 'react';

class Dungeon extends Component {
	render(){
		return(
		<div className = 'sections tc' >
			<h1>Minotaur Dungeon</h1>
			<hr/>
			<img alt='' src='https://i.postimg.cc/mgv4FvdW/minotaur.png'></img>
			<h2>Tech Stack </h2>
			Unity3D & C#
			<h2> Decription</h2>
			This game is based a bit of diablo. I love greek monsters and legends. This game is still a work in progress but a good amount of the mechanics work on the older version of Unity.
			I used a delegate system (similar to events in javascript) to determine when the user clicks on an area. That click then shoots out a raycast that determines if that layer is walkable,an enemy or unavailable to do anything with it.
			After it determines it an action takes place through a delegate call. This is all determined by layers and the raycast is shot out of the main camera.
			The enemies are A.I. that walk based on the navmesh of the map. I used unity's terrain creater and determined the best way to make it, without making something complicated in blender (although I did make an alternative dungeon if you look in assets using blender of a minotaur maze).
			 The player or the enemies are unable to deviate from the created paths. I made a few enemeies. The ones you will see in the video are the mages. I gave them a fire ball using particle effects in unity.
			 My goal is to get a little better at 3D modeling in my free time (when I'm not working on webdev or security) to be able to model better enemies to fight.
			 I also need to add a dialouge system at some point. I did add special abilities that return health and do extra damage. The sword he is using is an asset I found using google.
			 I would love to work on a side project where I try getting this in VR. 
			 
			<h2>Youtube Demo</h2>
			<a href= 'https://www.youtube.com/watch?v=4RqyPv6lLAY&feature=youtu.be'>
			https://www.youtube.com/watch?v=4RqyPv6lLAY&feature=youtu.be
			</a>
			<h2>GitHub</h2>
			<a href='https://github.com/mrowl01/RPG-Combat'>
			https://github.com/mrowl01/RPG-Combat
			</a>
		</div>
		)
	}
}

export default Dungeon;