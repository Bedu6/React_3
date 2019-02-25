import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const Tarjeta = (props) => (
	<div>
		<Card
			className='col s3'
			header={
				<CardTitle
					reveal
					image={"https://cdn1.royalcanin.es/wp-content/uploads/2017/01/gatos-de-interior.jpg"}
					waves='light'
				/>
			}
		   title="Un gato bien chido"
		   reveal={
		   	<p>Here is some more information about this product that is only revealed once clicked on.Here is some more information about this product that is only revealed once clicked on.Here is some more information about this product that is only revealed once clicked on.Here is some more information about this product that is only revealed once clicked on.</p>
		   }
		>
		    <p><a href="#">Galeria de gato chidos</a></p>
		</Card>
	</div>
);

export default Tarjeta;