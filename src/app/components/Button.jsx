"use client"; // Make sure to include this directive

import PropTypes from 'prop-types';

const Button = ({ type, icon, children, onClick }) => {
  // Base styles common for all buttons
  const baseStyles = "px-4 py-[10px] rounded text-sm font-semibold shadow inline-flex items-center justify-center";

  // Different button styles based on the type
  const textButtonStyles = "text-white bg-zinc-800 hover:bg-zinc-900";
  const textIconButtonStyles = "gap-2 text-white bg-zinc-800 hover:bg-zinc-900 flex items-center space-x-2";
  const iconButtonStyles = "w-10 h-10 flex items-center justify-center border-2 border-zinc-900 rounded bg-transparent text-zinc-900 hover:bg-zinc-900 hover:text-white";

  // Select the appropriate styles based on the button type
  let buttonStyles = baseStyles;
  if (type === 'text') {
    buttonStyles += ` ${textButtonStyles}`;
  } else if (type === 'text-icon') {
    buttonStyles += ` ${textIconButtonStyles}`;
  } else if (type === 'icon') {
    buttonStyles += ` ${iconButtonStyles}`;
  }

  // Icon size and hover effect
  const iconStyles = "text-xl"; // Larger icon size
  const hoverIconStyles = type === 'icon' ? "hover:text-white" : ""; // Icon hover to white for icon-only button

  return (
    <button className={buttonStyles} onClick={onClick}>
      {/* For text-icon button, render icon on the left */}
      {type === 'text-icon' && icon && <span className={`${iconStyles} ${hoverIconStyles}`}>{icon}</span>}
      {children}
      {/* For icon-only button, render only the icon */}
      {type === 'icon' && icon && <span className={`${iconStyles} ${hoverIconStyles}`}>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['text', 'text-icon', 'icon']).isRequired,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: null,
  onClick: () => {},
};

export default Button;
