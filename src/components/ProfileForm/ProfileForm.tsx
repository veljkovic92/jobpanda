import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { getDatabase, ref, update, child, get } from "firebase/database";
import { useIdToken } from "react-firebase-hooks/auth";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { async } from "@firebase/util";
import { FiEdit } from "react-icons/fi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import classes from "./ProfileForm.module.scss";

type MatchingUser = {
  email: string;
  name: string;
  phone_number?: string;
  profession?: string;
  experience?: string;
  country?: string;
  city?: string;
};

type ProfileInputs = {
  profession?: string;
  experience?: string;
  country?: string;
  city?: string;
};

function ProfileForm() {
  const auth = getAuth();
  const [user, loading, error] = useIdToken(auth);
  console.log(user);

  const dbRef = ref(getDatabase());

  const [updated, setUpdated] = useState(0);

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
  }, [user, updated]);

  const [matchingUser, setMatchingUser] = useState<MatchingUser | null>(null);

  const db = getDatabase();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    // pronadji zasto izbacuje ovaj bug i resi formu da update usera
    defaultValues: {
      profession: matchingUser?.profession || "",
      experience: matchingUser?.experience || "",
      country: matchingUser?.country || "",
      city: matchingUser?.city || "",
    },
  });

  const [updateError, setUpdateError] = useState(null);

  const onSubmit = async (data: ProfileInputs) => {
    try {
      // Construct the updates object
      const updates: ProfileInputs = {};
      if (data.profession) {
        updates["profession"] = data.profession;
      }
      if (data.experience) {
        updates["experience"] = data.experience;
      }
      if (data.country) {
        updates["country"] = data.country;
      }
      if (data.city) {
        updates["city"] = data.city;
      }

      // Update user data in Firebase database with the updates object
      await update(ref(db, "users/" + user!.uid), updates);

      // If update is successful, clear any previous error message
      setUpdateError(null);
    } catch (error) {
      console.log(error);
    }
  };

  const [professionIsClicked, setProfessionIsClicked] = useState(false);
  const [experienceIsClicked, setExperienceIsClicked] = useState(false);
  const [countryIsClicked, setCountryIsClicked] = useState(false);
  const [cityIsClicked, setCityIsClicked] = useState(false);

  const professionInputRef = useRef<HTMLInputElement>(null);
  const experienceInputRef = useRef<HTMLInputElement>(null);
  const countryInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const updateSpecificProfileInfo = async (
    profileInfo: keyof ProfileInputs
  ) => {
    try {
      const professionValue = professionInputRef.current?.value;
      // Construct the updates object
      const updates: ProfileInputs = {};
      if (profileInfo === "profession") {
        if (professionValue?.length === 0) {
          throw new Error("Profession value can't be empty")
        } else {
          updates[profileInfo] = professionValue;
        }
      } else if (profileInfo === "experience") {
        updates[profileInfo] = experienceInputRef.current?.value;
      } else if (profileInfo === "country") {
        updates[profileInfo] = countryInputRef.current?.value;
      } else if (profileInfo === "city") {
        updates[profileInfo] = cityInputRef.current?.value;
      }

      // Update user data in Firebase database with the updates object
      await update(ref(db, "users/" + user!.uid), updates);
      console.log("uspelo");
      setUpdated((prevVal) => prevVal + 1);

      if (profileInfo === "profession") {
        setProfessionIsClicked((prevVal) => !prevVal);
      } else if (profileInfo === "experience") {
        setExperienceIsClicked((prevVal) => !prevVal);
      } else if (profileInfo === "country") {
        setCountryIsClicked((prevVal) => !prevVal);
      } else if (profileInfo === "city") {
        setCityIsClicked((prevVal) => !prevVal);
      }

      // If update is successful, clear any previous error message
      setUpdateError(null);
    } catch (error: any) {
      setUpdateError(error.message)
    }
  };
  // dodaj edit fields za svaki profile info field
  const profession = matchingUser?.profession ? (
    <div>
      <div className={classes["profile-form__top-field"]}>
        <p>Profession: {matchingUser?.profession}</p>
        <FiEdit
          onClick={() => setProfessionIsClicked((prevValue) => !prevValue)}
        />
      </div>

      {professionIsClicked && (
        <div className={classes["profile-form__bot-field"]}>
          <Form.Control
            type="text"
            placeholder="Change your profession"
            ref={professionInputRef}
          />
          <BsFillCheckCircleFill
            onClick={() => updateSpecificProfileInfo("profession")}
            size="2em"
          />
        </div>
      )}
    </div>
  ) : (
    <Form.Group controlId="profession">
      <Form.Label>Professison</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your profession"
        {...register("profession")}
      />
      {errors.profession && (
        <Form.Text className="text-danger">
          {errors.profession.message}
        </Form.Text>
      )}
    </Form.Group>
  );

  const experience = matchingUser?.experience ? (
    <div>
      <div className={classes["profile-form__top-field"]}>
        <p>Experience: {matchingUser?.experience}</p>
        <FiEdit
          onClick={() => setExperienceIsClicked((prevValue) => !prevValue)}
        />
      </div>

      {experienceIsClicked && (
        <div className={classes["profile-form__bot-field"]}>
          <Form.Control
            type="text"
            placeholder="Change your experience"
            ref={experienceInputRef}
          />
          <BsFillCheckCircleFill
            onClick={() => updateSpecificProfileInfo("experience")}
            size="2em"
          />
        </div>
      )}
    </div>
  ) : (
    <Form.Group controlId="experience">
      <Form.Label>Experience</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your years of experience"
        {...register("experience")}
      />
      {errors.experience && (
        <Form.Text className="text-danger">
          {errors.experience.message}
        </Form.Text>
      )}
    </Form.Group>
  );

  const country = matchingUser?.country ? (
    <div>
      <div className={classes["profile-form__top-field"]}>
        <p>Country: {matchingUser?.country}</p>
        <FiEdit
          onClick={() => setCountryIsClicked((prevValue) => !prevValue)}
        />
      </div>

      {countryIsClicked && (
        <div className={classes["profile-form__bot-field"]}>
          <Form.Control
            type="text"
            placeholder="Change your country"
            ref={countryInputRef}
          />
          <BsFillCheckCircleFill
            onClick={() => updateSpecificProfileInfo("country")}
            size="2em"
          />
        </div>
      )}
    </div>
  ) : (
    <Form.Group controlId="country">
      <Form.Label>Country</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your country"
        {...register("country")}
      />
      {errors.country && (
        <Form.Text className="text-danger">{errors.country.message}</Form.Text>
      )}
    </Form.Group>
  );

  const city = matchingUser?.city ? (
    <div>
      <div className={classes["profile-form__top-field"]}>
        <p>City: {matchingUser?.city}</p>
        <FiEdit onClick={() => setCityIsClicked((prevValue) => !prevValue)} />
      </div>
      {cityIsClicked && (
        <div className={classes["profile-form__bot-field"]}>
          <Form.Control
            type="text"
            placeholder="Change your city"
            ref={cityInputRef}
          />
          <BsFillCheckCircleFill
            onClick={() => updateSpecificProfileInfo("city")}
            size="2em"
          />
        </div>
      )}
    </div>
  ) : (
    <Form.Group controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your city"
        {...register("city")}
      />
      {errors.city && (
        <Form.Text className="text-danger">{errors.city.message}</Form.Text>
      )}
    </Form.Group>
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={classes["profile-form"]}>
      {profession}
      {experience}
      {country}
      {city}
      {(!matchingUser?.profession ||
        !matchingUser?.experience ||
        !matchingUser?.country ||
        !matchingUser?.city) && (
        <Button variant="primary" type="submit" disabled={!isDirty}>
          Update Profile
        </Button>
      )}

      {updateError && (
        <div className="alert alert-danger mt-3">{updateError}</div>
      )}
    </Form>
  );
}

export default ProfileForm;
