const Header = ({ title, studentCount, averageScore }) => {
  const summary = `${studentCount} Students Enrolled | Class Average: ${averageScore.toFixed(1)}%`;

  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p>{summary}</p>
    </header>
  );
};

export default Header;