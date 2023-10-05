import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import InputField from "../../components/UI/InputField";

const Room = ({ room }) => {
  const { register, handleSubmit } = useForm();

  const joinRoom = (data) => {};

  return (
    <div className="w-full border border-lightener-200 rounded-xl hover:border-lightener-400 duration-300 flex flex-col p-4">
      <Content title="Room name" text="Rafig's room" />
      <Content title="Players" text="2" />

      <form onSubmit={handleSubmit(joinRoom)} className="mt-4 flex flex-col">
        <InputField register={register} label="Password" id={`passwordRoom${room}`} name="password" required />
        <Button className="bg-neutral-700">Join</Button>
      </form>
    </div>
  );
};

const Content = ({ title, text }) => {
  return (
    <p className="text-lg">
      <span className="font-bold">{title}:</span> {text}
    </p>
  );
};

export default Room;
