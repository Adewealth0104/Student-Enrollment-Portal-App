import React from "react";

class ClassButton extends React.Component {
  render() {
    const { title, onClick, className = "" } = this.props;

    return (
      <button
        className={`btn-class ${className}`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
}

// Functional components use props directly, while class components use this.props.

export default ClassButton;