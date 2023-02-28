import React, { useEffect, useState } from "react";
import { getDatabase, ref, update, child, get } from "firebase/database";
import { useIdToken } from "react-firebase-hooks/auth";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Button, Form } from "react-bootstrap";
import classes from "./JobApplicationForm.module.scss";
import Alert from "react-bootstrap/Alert";

type MatchingUser = {
  email: string;
  name: string;
  phoneNumber?: string;
  profession?: string;
  experience?: string;
  country?: string;
  city?: string;
  applied_jobs?: object;
};

type ApplicationInputs = {
  letter: string;
};

const JobApplicationForm = () => {
  const auth = getAuth();
  const [user, loading, error] = useIdToken(auth);
  console.log(user);
  const params = useParams();
  console.log("posao je " + params.jobId);

  const allJobs = useSelector((state: RootState) => state.jobs.anyJobs);

  const selectedJob = allJobs.find((job) => job.id === params.jobId);

  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, `users/${user?.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setMatchingUser(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  const [matchingUser, setMatchingUser] = useState<MatchingUser | null>(null);

  const db = getDatabase();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    // pronadji zasto izbacuje ovaj bug i resi formu da update usera
    defaultValues: {
      letter: "",
    },
  });

  // U formi trebas da prikazes email, ime i broj telefona user-a. Ukoliko broj telefona ne postoji, treba da postoji button koji otvara input i button za submit i to se store u user/database. Jedan od nacina je da phone bude mandatory. Onda postoji forma koja prima PDF fajl i textualni input za motivaciono pismo. Button za submit koji pronalazi datog user-a u firebase database i cuva pdf i motivaciono pismo.

  // Izvuci odabrani job (params.jobId) iz allJobs preko find metode i posalji na submit informacije job-a na firebase database uz PDF i motivaciono pismo.

  const onSubmit = async (data: ApplicationInputs) => {
    try {
      // Construct the updates object
      const updates: ApplicationInputs = {
        letter: "",
      };

      if (data.letter) {
        updates["letter"] = data.letter;
      }

      // Update user data in Firebase database with the updates object
      await update(
        ref(db, "users/" + user!.uid + "/applied_jobs/" + params.jobId),
        updates
      );

      // If update is successful, clear any previous error message
      setUpdateError(null);
    } catch (error) {
      console.log(error);
    }
  };

  const [updateError, setUpdateError] = useState(null);

  console.log(matchingUser?.applied_jobs);

  const userHasAppliedForJob =
    matchingUser?.applied_jobs &&
    Object.keys(matchingUser.applied_jobs).every((job) => job == params.jobId);

  const showFormOrInfo = userHasAppliedForJob ? (
    <Alert key="success" variant="success" className={classes["job-applied"]}>
      <p>You have successfully applied for this job!</p>
    </Alert>
  ) : (
    <>
      <h2>Apply for this job:</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="city">
          <Form.Label>Motivational letter</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write your motivational letter"
            {...register("letter")}
          />
          {errors.letter && (
            <Form.Text className="text-danger">
              {errors.letter.message}
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isDirty}>
          Apply for Job
        </Button>

        {updateError && (
          <div className="alert alert-danger mt-3">{updateError}</div>
        )}
      </Form>
    </>
  );

  return showFormOrInfo;
};

export default JobApplicationForm;
