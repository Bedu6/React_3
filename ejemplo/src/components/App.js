import React, { Component } from 'react';
import FilaTarjetas from './FilaTarjetas';
import MiModal from './MiModal';
import Parallax from './Parallax';
import Menu from './Menu';
import { BrowserRouter, Route } from 'react-router-dom';

export class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Menu />
						<Route exact path='/' component={FilaTarjetas} />
						<Route exact path='/modal' component={MiModal} />
						<Route exact path='/parallax' component={Parallax} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
