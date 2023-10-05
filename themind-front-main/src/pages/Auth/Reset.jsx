import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSuccessfull(true);
  };

  return isSuccessfull ? (
    <div className="flex flex-col items-center gap-7">
      <h2 className="text-3xl font-bold text-center">Your password was updated successfully!</h2>
      <Button className="w-fit" onClick={() => navigate("/auth/login")}>
        Back to login
      </Button>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-7">
      {/* title */}
      <h2 className="text-3xl font-bold text-center">Reset your password</h2>

      {/* input fields */}
      <div className="flex flex-col w-full">
        <InputField
          label="New password"
          name="newPassword"
          type="password"
          register={register}
          required
          errorMsg={""}
        />
        <InputField
          label="Confirm new password"
          name="confirmNewPassword"
          type="password"
          register={register}
          required
          errorMsg={""}
        />
      </div>

      {/* button */}
      <Button className="w-fit">Reset password</Button>
    </form>
  );
};

export default Reset;
