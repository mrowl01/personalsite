import React, {Component} from 'react' ; 
import boot from './SkillImages/boot.png';
import cplus from './SkillImages/cplus.png';
import csharp from './SkillImages/csharp.png';
import css from './SkillImages/css.png';
import express from './SkillImages/express.png';
import heroku from './SkillImages/heroku.png';
import html from './SkillImages/html.png';
import javascript from './SkillImages/javascript.png';
import jquery from './SkillImages/jquery.jpg';
import mysql from './SkillImages/mysql.jpg';
import node from './SkillImages/node.png';
import postgres from './SkillImages/postgres.png';
import py from './SkillImages/py.png';
import react from './SkillImages/react-512.png';
import redux from './SkillImages/redux.png';
import unity from './SkillImages/unity.png';
import unreal from './SkillImages/unreal.png';

class Skills extends Component {
	render(){
		return (
			<div className= 'sections fl w-75 bg-red'>
			<h1>Skills</h1>
				<div className = 'skillItems'>
					<div title = 'bootstrap' className = 'box br-100 grow'>
						<img src={boot}></img>
					</div>
					<div title = 'C++' className = 'box br-100 grow'>
						<img src={cplus}></img>
					</div>
					<div title = 'C#' className = 'box br-100 grow'>
						<img src={csharp}></img>
					</div>
					<div title = 'CSS' className = 'box br-100 grow'>
						<img src={css}></img>
					</div>
					<div title = 'Express' className = 'box br-100 grow'>
						<img src={express}></img>
					</div>
					<div title = 'Heroku' className = 'box br-100 grow'>
						<img src={heroku}></img>
					</div>
					<div title = 'HTML' className = 'box br-100 grow'>
						<img src={html}></img>
					</div>
					<div title = 'Javascript' className = 'box br-100 grow'>
						<img src={javascript}></img>
					</div>
					<div title = 'JQuery' className = 'box br-100 grow'>
						<img src={jquery}></img>
					</div>
					<div title = 'MySql' className = 'box br-100 grow'>
						<img src={mysql}></img>
					</div>
					<div title = 'Node Js' className = 'box br-100 grow'>
						<img src={node}></img>
					</div>
					<div title = 'Postgres' className = 'box br-100 grow'>
						<img src={postgres}></img>
					</div>
					<div title = 'Python' className = 'box br-100 grow'>
						<img src={py}></img>
					</div>
					<div title = 'React' className = 'box br-100 grow'>
						<img src={react}></img>
					</div>
					<div title = 'Redux' className = 'box br-100 grow'>
						<img src={redux}></img>
					</div>
					<div title = 'Unity 3D' className = 'box br-100 grow'>
						<img src={unity}></img>
					</div>
					<div title = 'Unreal Engine' className = 'box br-100 grow'>
						<img src={unreal}></img>
					</div>
				</div>
			</div>
		)
	}
}

export default Skills ;