import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => (
	<div>
		<nav>
			<div className="nav-wrapper">
				<a href="#" className="brand-logo right">Logo</a>
				<ul id="nav-mobile" className="left hide-on-med-and-down">
					<li>
						<Link to='/'>Cards</Link>
					</li>
					<li>
						<Link to='/modal'>Modal</Link>
					</li>
					<li>
						<Link to='/parallax'>Parallax</Link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
);

export default Menu;