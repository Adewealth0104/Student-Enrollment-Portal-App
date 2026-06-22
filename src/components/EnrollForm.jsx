import { useState, useRef } from "react";
import Button from "./Button";

const EnrollForm = ({ tracks, onEnroll }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [track, setTrack] = useState(tracks[0]);
  const [score, setScore] = useState("");

  const [errors, setErrors] = useState({});

  const emailRef = useRef(null);
  const isActiveRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const isActive = isActiveRef.current.checked;

    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (
      score === "" ||
      Number(score) < 0 ||
      Number(score) > 100
    ) {
      newErrors.score = "Score must be between 0 and 100";
    }

    if (!email.includes("@")) {
      newErrors.email = "Valid email required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const student = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      track,
      score: Number(score),
      isActive,
      avatar: "https://i.pravatar.cc/150"
    };

    onEnroll(student);

    setFirstName("");
    setLastName("");
    setTrack(tracks[0]);
    setScore("");

    emailRef.current.value = "";
    isActiveRef.current.checked = false;

    setErrors({});
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="enroll-form"
    >

      <h2>Enroll New Student</h2>
<div>

      <input
        value={firstName}
        onChange={(event) =>
          setFirstName(event.target.value)
        }
        placeholder="First Name"
      />
       {errors.firstName && (
    <span>
      {errors.firstName}
    </span>
  )}
</div>
<div>
      <input
        value={lastName}
        onChange={(event) =>
          setLastName(event.target.value)
        }
        placeholder="Last Name"
      />
       {errors.lastName && (
    <span>
      {errors.lastName}
    </span>
  )}
</div>

<div>
      <select
        value={track}
        onChange={(event) =>
          setTrack(event.target.value)
        }
      >

        {tracks.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}

      </select>
      </div>

<div>
      <input
        type="number"
        value={score}
        onChange={(event) =>
          setScore(event.target.value)
        }
        placeholder="Score"
      />
{errors.score && (
    <span>
      {errors.score}
    </span>
  )}
</div>
<div>
      <input
        type="email"
        defaultValue=""
        ref={emailRef}
        placeholder="Email"
      />
{errors.email && (
    <span>
      {errors.email}
    </span>
  )}
</div>

      <label>
        <input
          type="checkbox"
          ref={isActiveRef}
        />
        Active
      </label>


      <p>
        {`Preview: ${firstName} ${lastName} — ${track} (${score})`}
      </p>


      <Button title="Enroll" />

    </form>
  );
};

export default EnrollForm;