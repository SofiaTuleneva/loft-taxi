import React from 'react';

class Header extends React.Component {

	handleMenuClick = (e, pageId) => {
		e.preventDefault();
		this.props.changePage(pageId)
	};

	render() {
		return (
			<div className="Header">
				{this.props.pages.map(({ id, name }) => (
					<button
						key={id}
						onClick={e => this.handleMenuClick(e, id)}
						className={id === this.props.activePageId ? 'activeButton' : null}
					>
					{name}
					</button>
				))}
			</div>
		);
	}

}

export default Header;
