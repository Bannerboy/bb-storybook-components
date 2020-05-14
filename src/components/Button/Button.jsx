import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import classNames from 'classnames';

const Button = ({
  children,
  onClick = () => false,
  filled = false,
  ...rest
}) => {
  return (
    <button
      className={classNames('bb-button', {
        filled,
      })}
      type="button"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  filled: PropTypes.bool,
};
export default Button;
