import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";

const Confirm = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-7">
      <h2 className="text-3xl font-bold text-center">Confirmation link has sent to your email!</h2>
      <Button className="w-fit" onClick={() => navigate("/auth/login")}>
        Back to login
      </Button>
    </div>
  );
};

export default Confirm;
