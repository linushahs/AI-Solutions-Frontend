import React from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Input from "../../components/ui/input";
import { isValidEmail, isValidPassword } from "../../utils";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const emailValid = isValidEmail(email);
    const passwordValid = isValidPassword(password);

    setEmailError(!emailValid);
    setPasswordError(!passwordValid);

    if (emailValid && passwordValid) {
      if (email === "admin@admin.com" && password === "Admin@123") {
        localStorage.setItem("token", email);
        navigate("/admin");
      } else {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div className="flex justify-center items-center gap-16 h-[100vh]">
      <Toaster position="bottom-right" />

      <img
        src="/login/login.png"
        className="h-[500px] w-[40%] xl:w-[30%] rounded-xl object-cover"
        alt="login page"
      />
      <form onSubmit={handleLogin} className="flex flex-col gap-10">
        <h1 className="font-bold text-3xl">Admin Panel</h1>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email Address</label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. admin@gmail.com"
              id="email"
              className={emailError ? "border-red-500 bg-red-100" : ""}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <div
              className={twMerge(
                "relative flex rounded p-2 bg-gray-200 border-b-2 border-gray-400 items-center justify-between",
                passwordError && "border-red-500 bg-red-100"
              )}
            >
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={"border-none bg-transparent outline-none p-0 w-full"}
              />

              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <IoEyeOutline className="text-[20px]" />
                ) : (
                  <IoEyeOffOutline className="text-[20px]" />
                )}
              </button>
            </div>
            <p className="font-semibold text-sm text-gray-600">
              It must be a combination of minimum 8 letters, numbers, and
              symbols.
            </p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full gap-4 font-semibold bg-teal-500 hover:bg-teal-600 rounded px-6 py-[7px] text-white"
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
