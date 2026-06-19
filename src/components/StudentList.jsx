import StudentCard from "./StudentCard";

const StudentList = ({
  students,
  title = "All Students",
  children,
  getGrade
}) => {
  return (
    <section className="student-list-container">
      <h2>{title}</h2>

      {students.length === 0 ? (
        <p>No students to display yet</p>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              getGrade={getGrade}
            />
          ))}
        </div>
      )}

      {children && (
        <div className="list-footer">
          {children}
        </div>
      )}
    </section>
  );
};

export default StudentList;