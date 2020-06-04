import React, { PureComponent } from 'react';

class Home extends PureComponent {
	render() {
		return (
			<div>
				<span class="icon has-text-info">
					<i class="fas fa-info-circle" />
				</span>
				<span class="icon has-text-success">
					<i class="fas fa-check-square" />
				</span>
				<span class="icon has-text-warning">
					<i class="fas fa-exclamation-triangle" />
				</span>
				<span class="icon has-text-danger">
					<i class="fas fa-ban" />
				</span>
			</div>
		);
	}
}

export default Home;
