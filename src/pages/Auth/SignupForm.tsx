import React from "react";
import Form from "../../components/common/Forms";
import {signupUser} from "../../redux/slices/AuthSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Link} from "react-router-dom";
import useNavigation from "../../hooks/useNavigation";

const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const {goTo} = useNavigation(); // Use the useNavigation hook to navigate to different routes

  const handleSignupSubmit = (formData: {[key: string]: string}) => {
    const {name, email, password, confirmPassword} = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!"); // You can replace this with proper form validation or UI feedback
      return;
    }

    dispatch(
      signupUser({
        email,
        password,
        username: email, // Assuming username is the email for this example
        name: {
          firstname: name?.split(" ")[0],
          lastname: name?.split(" ")[1] || ""
        },
        phone: "" // You can add phone number if required
      })
    )
      .unwrap()
      .then(() => {
        goTo({
          path: "/login" // Target route
        }); // Navigate to login after successful sign-up
      })
      .catch((error) => {
        alert(error);
        console.error("Sign Up failed:", error);
        // Handle signup error (optional UI error message handling)
      });
  };

  const signUpFields = [
    {
      name: "name",
      type: "text",
      value: "",
      placeholder: "Jared Palmer",
      className:
        "block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm",
      disabled: auth.status === "loading"
    },
    {
      name: "email",
      type: "email",
      value: "",
      placeholder: "m@example.com",
      className:
        "block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm",
      disabled: auth.status === "loading"
    },
    {
      name: "password",
      type: "password",
      value: "",
      placeholder: "Password",
      className:
        "block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm",
      disabled: auth.status === "loading"
    },
    {
      name: "confirmPassword",
      type: "password",
      value: "",
      placeholder: "Confirm Password",
      className:
        "block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm",
      disabled: auth.status === "loading"
    }
  ];

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl  font-bold tracking-tight text-foreground">
            Sign Up to Create a New Account
          </h2>

          <p className="mt-2 text-center text-blue-800 text-sm text-muted-foreground underline">
            Or{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:text-primary/90"
            >
              Sign In if you already have an account
            </Link>
          </p>
        </div>
        <Form
          fields={signUpFields}
          onSubmit={handleSignupSubmit}
          submitText={auth.status === "loading" ? "Signing Up..." : "Sign Up"} // Show loading state
          className="space-y-4"
        />
      </div>
    </div>
  );
};

export default SignUpForm;
