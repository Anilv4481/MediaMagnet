import { yupResolver } from "@hookform/resolvers/yup";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithCustomToken,
} from "firebase/auth";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import isLoginHelper from "../pullstate/store";
import { signInWithEmailAndPassword } from "firebase/auth";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const [inputValue, setInputValue] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  async function onSubmit(data: any) {
    console.log(data, "show data");

    await signInWithEmailAndPassword(getAuth(), data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "user");
        isLoginHelper.setLoggedIn(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="m-2">
      {/* register your input into the hook by invoking the "register" function */}
      <input
        className="border border-gray-300 "
        placeholder="Email"
        {...register("email")}
      />
      {errors && (
        <p className=" text-end mx-32" style={{ color: "red" }}>
          {errors.email?.message}
        </p>
      )}
      <input
        className="border border-gray-300 my-2"
        placeholder="Password"
        {...register("password")}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {errors && (
        <p className=" text-end mx-32" style={{ color: "red" }}>
          {errors.password?.message}
        </p>
      )}
      {/* {errors.password && <span>This field is required</span>} */}

      <Button
        placeholder=""
        variant="gradient"
        size="sm"
        className=" lg:inline-block "
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
