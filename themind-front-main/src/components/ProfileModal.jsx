import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./UI/Button";
import InputField from "./UI/InputField";
import Modal from "./UI/Modal";
import Popup from "./UI/Popup";

const ProfileModal = ({ isVisible, setIsVisible }) => {
  const [popupMsg, setPopupMsg] = useState("");
  const [popupType, setPopupType] = useState(false);

  const { register } = useForm({
    defaultValues: {
      name: "Rafig",
      surname: "Hajili",
      email: "rafig.hajili@gmail.com",
    },
  });

  return (
    <>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible} title="My profile" className="p-4">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold mb-2 text-neutral-400">User information</h2>

            <InputField label="Name" name="name" register={register} required />
            <InputField label="Surname" name="surname" register={register} required />
            <InputField label="Email" name="email" register={register} required />

            <Button className="self-end">Update user data</Button>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold mb-2 text-neutral-400">Personal information</h2>
            <InputField label="Current password" type="password" name="currentPassword" register={register} required />
            <InputField label="New password" type="password" name="newPassword" register={register} required />
            <InputField
              label="Confirm new password"
              type="password"
              name="confirmNewPassword"
              register={register}
              required
            />

            <Button className="self-end">Update password</Button>
          </div>
        </div>
      </Modal>

      <Popup message={popupMsg} setMessage={setPopupMsg} type={popupType} />
    </>
  );
};

export default ProfileModal;
