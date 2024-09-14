import PropTypes from 'prop-types';

const Link = ({ href, text, ariaLabel, title, active, onClick }) => {
  // Base styles for all links
  const baseStyles = "text-medium font-semibold block py-2 pr-4 pl-3 rounded lg:p-0 transition-colors duration-200";

  // Active state styles
  const activeStyles = "text-white bg-zinc-700 lg:bg-transparent lg:text-zinc-700 dark:text-white";

  // Default state styles
  const defaultStyles = "text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-700 lg:dark:hover:bg-transparent dark:border-zinc-700";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      title={title}
      className={`${baseStyles} ${active ? activeStyles : defaultStyles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Link.propTypes = {
  href: PropTypes.string, // Adjusted to optional
  text: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired, // Added onClick handler prop
};

Link.defaultProps = {
  active: false,
  href: '', // Default value for href if not used
};

export default Link;
