import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useRouter } from "next/router";

import { Input } from "pinus-ui-library";
import { FirebaseError, handleFirebasePromise } from "src/firebase";
import { isString } from "src/utils";

import * as S from "./style";

const wrongCredentialErrors = ["auth/user-not-found", "auth/wrong-password"];
const errorMessages = {
  wrongCredentials:
    "Your email or password is incorrect. Please verify and try again.",
  general:
    "We had a problem logging you in. Please try again in a few minutes.",
};

const LoginContent: React.FC = () => {
  const router = useRouter();
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const referrer = isString(router.query.src)
    ? (router.query.src as string)
    : "/";

  const isIncomplete = () => {
    return !email || !password;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (isIncomplete()) {
      return;
    }

    const [, err] = await handleFirebasePromise(
      firebase.login({ email, password })
    );

    if (err) {
      return handleLoginError(err);
    }

    await router.push(referrer);
  };

  const handleLoginError = (err: FirebaseError) => {
    if (wrongCredentialErrors.includes(err.code)) {
      setErrorMessage(errorMessages.wrongCredentials);
    } else {
      setErrorMessage(errorMessages.general);
    }
  };

  const renderErrorMessage = () => {
    return (
      <div className={S.ErrorDiv}>
        <p className={`text-center`}>{errorMessage}</p>
      </div>
    );
  };

  return (
    <div className={S.Page}>
      <div className={S.Content}>
        <p className={S.Heading}>Login to PINUS</p>
        {errorMessage && renderErrorMessage()}
        <div className={S.FormDiv}>
          <form
            className={S.Form}
            onSubmit={handleSubmit}
            aria-label="login-form"
          >
            <Input
              type="text"
              name="email"
              value={email}
              placeholder="Email address"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className={S.Submit}
              type="submit"
              aria-label="login-button"
              disabled={isIncomplete()}
            >
              Login
            </button>
          </form>
        </div>

        {/* TODO: Commented until Signup is live */}
        {/* <div className={S.Join}>
          <p className={`text-center`}>
            New to PINUS?{" "}
            <Link href="/signup">
              <a className={S.Link}>Join us</a>
            </Link>
            !
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LoginContent;
