import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { register as registerAcc } from "../../api/auth";
import Popup from "../../components/UI/Popup";

const schema = yup.object().shape({
  firstname: yup.string().required("First name required!"),
  lastname: yup.string().required("Last name required!"),
  username: yup.string().required("Username required!"),
  email: yup.string().email("Invalid email!").required("Email required!"),
  password: yup
    .string()
    .required("Password required!")
    .min(4, "Minimum 4 characters!")
    .max(15, "Maximum 15 characters!"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match!"),
});

const Register = () => {
  const [popupMsg, setPopupMsg] = useState("");
  const [popupType, setPopupType] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerAcc(data);
      navigate("/auth/login");
    } catch (error) {
      setPopupType(false);
      setPopupMsg(error?.response?.data?.message ?? "Cannot register with those data!");
    }
  };

  return (
    <>
      {/* navigator for login page */}
      <div className="absolute top-8 right-8 uppercase tracking-wider text-xs flex gap-1">
        <p className="font-bold text-neutral-400">Already have an account?</p>
        <Link to="/auth/login" className="font-bold hover:text-primary">
          Sign in
        </Link>
      </div>

      <h1 className="uppercase font-bold text-5xl">Register</h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="First name"
            name="firstname"
            register={register}
            errorMsg={errors?.firstname?.message}
            required
          />
          <InputField
            label="Last name"
            name="lastname"
            register={register}
            errorMsg={errors?.lastname?.message}
            required
          />
        </div>
        <InputField
          label="Username"
          name="username"
          register={register}
          errorMsg={errors?.username?.message}
          required
        />
        <InputField label="Email" name="email" register={register} errorMsg={errors?.email?.message} required />
        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="Password"
            name="password"
            type="password"
            register={register}
            errorMsg={errors?.password?.message}
            required
          />
          <InputField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            register={register}
            errorMsg={errors?.confirmPassword?.message}
            required
          />
        </div>

        <Button className="mt-2">Register</Button>

        <Popup message={popupMsg} setMessage={setPopupMsg} type={popupType} />
      </form>
    </>
  );
};

export default Register;
