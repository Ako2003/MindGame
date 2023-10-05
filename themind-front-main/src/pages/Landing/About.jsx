import Rafig from "../../assets/images/rafig.jpeg";
import Akif from "../../assets/images/akif.jpeg";
import Ravan from "../../assets/images/revan.jpeg";
import Farid from "../../assets/images/ferid.jpeg";

const data = [
  { id: 1, image: Rafig, name: "Rafig Hajili", role: "Frontend developer" },
  { id: 2, image: Akif, name: "Akif Mursalov", role: "Backend Developer" },
  { id: 3, image: Ravan, name: "Ravan Osmanli", role: "DevOps" },
  { id: 4, image: Farid, name: "Farid Muradzada", role: "Project Manager" },
];

const About = () => {
  return (
    <section id="about" className="px-4 xs:px-8 sm:px-16 lg:px-32 xl:px-64 py-32">
      <h1 className="text-center text-5xl font-medium mb-8">About us</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-2/3 xl:w-1/2 mx-auto">
        {data.map((user) => (
          <Card user={user} />
        ))}
      </div>
    </section>
  );
};

export default About;

const Card = ({ user }) => {
  return (
    <div className="bg-lightener-200 rounded-full p-8 hover:bg-lightener-250 duration-300 flex flex-col items-center">
      <img src={user.image} alt={user.name} className="rounded-full" />

      <h2 className="mt-8 text-3xl font-medium text-center">{user.name}</h2>

      <h3 className="text-xl font-black pb-8 mt-2 text-center">{user.role}</h3>
    </div>
  );
};
