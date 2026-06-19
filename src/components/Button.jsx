const Button = ({ title, onClick, className = "" }) => {
  return (
    <button
      className={`btn-functional ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;