import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";

const Forgot = () => {
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSuccessfull(true);
  };

  return isSuccessfull ? (
    <div className="flex flex-col items-center gap-7">
      <h2 className="text-3xl font-bold text-center">Recovery link has sent to your email!</h2>
      <Button className="w-fit" onClick={() => navigate("/auth/login")}>
        Back to login
      </Button>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-7">
      {/* title */}
      <h2 className="text-3xl font-bold text-center">Enter your email</h2>

      {/* input field */}
      <InputField label="Email" name="email" register={register} required />

      {/* button */}
      <Button className="w-fit">Send confirmation link</Button>
    </form>
  );
};

export default Forgot;
