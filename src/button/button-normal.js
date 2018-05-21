import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const {
      loading = false, disabled = false, text = '提交', icon,
      className = 'theme', onClick
    } = this.props;

    const clickable = !disabled && !loading;
    const iconDOM = icon ? (
      <i className={icon + ' btn-icon'}></i>
    ) : null;

    return (
      <span
        disabled={!clickable}
        className={`btn flat ${className}`}
        onClick={e => {
          if(!disabled) onClick(e);
        }}>
        {iconDOM}
        {text}
      </span>
    )
  }
}
Button.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};