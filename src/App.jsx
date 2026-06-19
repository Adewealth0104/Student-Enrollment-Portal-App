import { useEffect, useState } from "react";
import Header from "./components/Header";
import EnrollForm from "./components/EnrollForm";
import StudentList from "./components/StudentList";
import StatusMessage from "./components/StatusMessage";
import ClassButton from "./components/ClassButton";
import "./App.css";


const TRACKS = [
  "Frontend",
  "Backend",
  "Mobile",
  "Data"
];


const SEED_STUDENTS = [
  {
    id: "seed-1",
    firstName: "Amara",
    lastName: "Johnson",
    email: "amara@kodecamp.dev",
    track: "Frontend",
    score: 92,
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "seed-2",
    firstName: "Chidi",
    lastName: "Okafor",
    email: "chidi@kodecamp.dev",
    track: "Backend",
    score: 67,
    isActive: false,
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];


const getGrade = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";

  return "F";
};


const getAverage = (list) => {
  if (list.length === 0) return 0;

  const total = list.reduce(
    (sum, student) => sum + student.score,
    0
  );

  return total / list.length;
};


const App = () => {

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);



  const fetchStudents = async () => {

    setLoading(true);
    setError(null);


    try {

      const response = await fetch(
        "https://randomuser.me/api/?results=6&nat=us,gb"
      );


      if (!response.ok) {
        throw new Error("Unable to fetch students");
      }


      const data = await response.json();


      const fetchedStudents = data.results.map(
        (user, index) => ({
          id: user.login.uuid,
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          avatar: user.picture.thumbnail,
          track: TRACKS[index % TRACKS.length],
          score: Math.floor(
            Math.random() * 61
          ) + 40,
          isActive: true
        })
      );


      setStudents([
        ...SEED_STUDENTS,
        ...fetchedStudents
      ]);


    } catch (error) {

      setError(error.message);

      setStudents(SEED_STUDENTS);


    } finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    fetchStudents();

  }, []);




  const handleEnroll = (newStudent) => {

    setStudents((previous) => [
      newStudent,
      ...previous
    ]);

  };



  return (

    <div className="app-container">


      <Header
        title="KodeCamp 6.0 — Enrollment Portal"
        studentCount={students.length}
        averageScore={getAverage(students)}
      />



      <EnrollForm
        tracks={TRACKS}
        onEnroll={handleEnroll}
      />



      {loading && (
        <StatusMessage type="loading" />
      )}



      {error && !loading && (
        <StatusMessage type="error" />
      )}



      {!loading && (

        <StudentList
          students={students}
          title="Student Roster"
          getGrade={getGrade}
        >

          <p>
            {`End of roster — ${students.length} total`}
          </p>

        </StudentList>

      )}




      <ClassButton
        title="Refresh Roster"
        onClick={fetchStudents}
      />



    </div>

  );

};


export default App;