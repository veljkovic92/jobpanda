import React, { useEffect, useRef, useState } from "react";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useIdToken } from "react-firebase-hooks/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import classes from "./Profile.module.scss";
import profilePhoto from "../../assets/profilephoto.png";
import Modal from "react-modal";
import { Button, Form } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import AppliedJobsList from "../../components/AppliedJobsList/AppliedJobsList";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

type MatchingUser = {
  email: string;
  phone_number: string;
  username: string;
};

const Profile = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const photoUrlRef = useRef<HTMLInputElement>(null);
  const [isPhotoUrlAdded, setIsPhotoUrlAdded] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // add logic for photo change and other profile info fields
  const onPhotoChangeHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const photoUrl = photoUrlRef.current?.value;

    if (auth.currentUser) {
      updateProfile(auth.currentUser, { photoURL: photoUrl }) // 2. update the user's photo URL
        .then(() => {
          setIsPhotoUrlAdded(true);
          closeModal(); // close the modal after the update is successful
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const deletePhotoHandler = () => {
    if (auth.currentUser) {
      updateProfile(auth.currentUser, { photoURL: "" }) // 2. update the user's photo URL
        .then(() => {
          setIsPhotoUrlAdded(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const auth = getAuth();
  const [user, loading, error] = useIdToken(auth);

  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, `users/${user?.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMatchingUser(snapshot.val());
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  const [matchingUser, setMatchingUser] = useState<MatchingUser | null>(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (matchingUser) {
    return (
      <main className={classes.profile}>
        <h2>Profile information</h2>
        <section className={classes["profile__main"]}>
          <div className={classes["profile__main__left"]}>
            <p>Name: {matchingUser.username}</p>
            <p>E-Mail: {matchingUser.email}</p>
            <p>Phone: {matchingUser.phone_number || "No phone number added"}</p>
          </div>
          <div className={classes["profile__main__right"]}>
            <img
              src={user?.photoURL || profilePhoto}
              onClick={openModal}
              className={classes["profile__main__right__img"]}
            />

            <AiFillCloseCircle
              onClick={deletePhotoHandler}
              className={user ? classes["profile__main__right__close-btn"] : ""}
            />

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h3>Please add new Photo URL</h3>

              <Form onSubmit={onPhotoChangeHandler}>
                <input ref={photoUrlRef} />
                <Button type="submit">Confirm</Button>
                <Button onClick={closeModal}>Close</Button>
              </Form>
            </Modal>
          </div>
        </section>
        <section>
          <ProfileForm />
        </section>
        <AppliedJobsList />
      </main>
    );
  }
  return <div></div>;
};

export default Profile;
