import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";
import Popup from "../../components/UI/Popup";

const Login = () => {
  const [popupMsg, setPopupMsg] = useState("");
  const [popupType, setPopupType] = useState(false);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const accessToken = await login(data);
      localStorage.setItem("accessToken", accessToken);
      navigate("/lobby");
    } catch (error) {
      console.log(error);
      setPopupType(false);
      setPopupMsg("Wrong email or password!");
    }
  };

  return (
    <>
      {/* navigator for register page */}
      <div className="absolute top-8 right-8 uppercase tracking-wider text-xs flex gap-1">
        <p className="font-bold text-neutral-400">Don't have an account?</p>
        <Link to="/auth/register" className="font-bold hover:text-primary">
          Sign up
        </Link>
      </div>

      <h1 className="uppercase font-bold text-5xl">Login</h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <InputField label="Email" name="email" register={register} required />
        <InputField label="Password" name="password" type="password" register={register} required />

        <Button className="mt-2">Login</Button>
      </form>

      {/* seperator line */}
      <span className="w-full h-[1px] bg-lightener-200"></span>

      {/* forgot password */}
      <Link to="/auth/forgot" className="w-fit self-center text-sm font-medium hover:text-primary">
        Forgot your password?
      </Link>

      <Popup message={popupMsg} setMessage={setPopupMsg} type={popupType} />
    </>
  );
};

export default Login;
