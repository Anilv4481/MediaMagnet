import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Register() {
  // await createUserWithEmailAndPassword(getAuth(), data.email, data.password)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   isLoginHelper.setLoggedIn(true);
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ...
  // });
  return (
    <Card placeholder="" color="transparent" shadow={false}>
      <Typography placeholder="" variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography placeholder="" color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            placeholder=""
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Name
          </Typography>
          <Input
            crossOrigin
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder="anilv4481@gmail.com"
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Your Email
          </Typography>
          <Input
            crossOrigin
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder=""
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Password
          </Typography>
          <Input
            crossOrigin
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          crossOrigin
          label={
            <Typography
              placeholder=""
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button placeholder="" className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography
          placeholder=""
          color="gray"
          className="mt-4 text-center font-normal"
        >
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
