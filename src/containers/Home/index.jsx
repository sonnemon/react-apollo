import React, { PureComponent } from 'react';
import Pages from '../../components/Pages';
class Home extends PureComponent {
	render() {
		return (
			<section className="section">
				<div className="container">
					<Pages />
				</div>
			</section>
		);
	}
}

export default Home;
