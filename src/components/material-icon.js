
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "material-design-icons/iconfont/material-icons.css";

export default class Icon extends Component {

	componentDidMount() {}

	render() {
		return (
			<div className="material--icon">
				<i className="material-icons">
          {this.props.element}
        </i>
			</div>
		);
	}
}

Icon.propTypes = {
  element: PropTypes.string.isRequired
}
