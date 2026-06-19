const StudentCard = ({ student, getGrade }) => {
  const {
    firstName,
    lastName,
    email,
    track,
    score,
    isActive,
    avatar
  } = student;

  const cardClass = isActive ? "card-active" : "card-inactive";

  return (
    <div className={`student-card ${cardClass}`}>
      <img
        src={avatar}
        alt={`${firstName} ${lastName}`}
        className="student-avatar"
      />

      <div className="student-info">
        <h3>{`${firstName} ${lastName}`}</h3>

        <p>
          {`${track} · ${email}`}
        </p>

        <p>
          {`Score: ${score} (Grade: ${getGrade(score)}) · `}
          {isActive ? "Active" : "Inactive"}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;