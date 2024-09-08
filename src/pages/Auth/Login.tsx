import React from "react";
import Form from "../../components/common/Forms";
import {loginUser} from "../../redux/slices/AuthSlice";
import {useAppDispatch} from "../../hooks/hooks";
import {Link} from "react-router-dom";
import useNavigation from "../../hooks/useNavigation";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch(); // Get dispatch function from Redux store
  const {goTo} = useNavigation(); // Get goTo function from custom hook useNavigation
  const handleLoginSubmit = (formData: {[key: string]: string}) => {
    // FakeStore API requires 'username' and 'password'
    dispatch(
      loginUser({username: formData?.username, password: formData?.password})
    )
      .unwrap()
      .then(() => {
        goTo({
          path: "/" // Target route
        }); // Navigate to products after successful login
      })
      .catch((error) => {
        alert(error);
        console.error("Signup failed:", error);
        // Handle signup error (optional UI error message handling)
      });
  };

  const loginFields = [
    {
      name: "username",
      type: "text",
      value: "",
      placeholder: "Username",
      className:
        "block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm",
      disabled: false
    },
    {
      name: "password",
      type: "password",
      value: "",
      placeholder: "Password",
      className:
        "block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm",
      disabled: false
    }
  ];

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground text-blue-800 underline">
            Or{" "}
            <Link
              to="/sign-up"
              className="font-medium text-primary hover:text-primary/90"
            >
              sign up for a new account
            </Link>
          </p>
        </div>
        <Form
          fields={loginFields}
          onSubmit={handleLoginSubmit}
          submitText="Sign in"
          className="space-y-6"
        />
      </div>
    </div>
  );
};

export default LoginForm;
