import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log('constructor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
			.then(users=> this.setState({ robots: users }));
		
		console.log('componentDidMount');
	}

	onSearchChange = (event)=> {
		this.setState({ searchfield:event.target.value })
		
	}

	render () {
		console.log('render');
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1> Robofriends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll >
						<ErrorBoundry>
						<CardList robots= {filteredRobots} />
						</ErrorBoundry>
				</Scroll>
			</div>
		);

	}
	
	}
export default App;
