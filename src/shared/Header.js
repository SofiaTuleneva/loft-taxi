import React from 'react';

class Header extends React.Component {

	handleMenuClick = (e, pageId) => {
		e.preventDefault();
		this.props.changePage(pageId)
	};

	render() {
		return (
			<div className="Header">
				{this.props.pages.map(page => (
					<button
						key={page.id}
						onClick={e => this.handleMenuClick(e, page.id)}
						className={page.id === this.props.activePageId ? 'activeButton' : null}
					>
					{page.name}
					</button>
				))}
			</div>
		);
	}

}

export default Header;
