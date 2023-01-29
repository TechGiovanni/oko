import PropTypes from 'prop-types';

const Button = (props) => {
  const { disabled, buttonType, handleClick, children } = props;

  return (
    <button disabled={disabled} onClick={handleClick} className={`button ${buttonType && buttonType}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  buttonType: PropTypes.string,
  children: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
