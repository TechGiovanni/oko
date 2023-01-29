import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { disabled, handleClick, children } = props;

  return (
    <button disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  // buttonColor: PropTypes.string,
  children: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
