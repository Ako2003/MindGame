import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <section id="home" className="w-full h-screen relative">
      {/* top fade */}
      <div className="absolute w-full h-[50vh] top-0 left-0 bg-gradient-to-b from-dark-400 to-transparent pointer-events-none" />

      {/* bottom fade */}
      <div className="absolute w-full h-[50vh] bottom-0 left-0 bg-gradient-to-t from-dark-400 to-transparent pointer-events-none" />

      <div className="w-full h-full">
        <Spline scene="https://prod.spline.design/tiftums2qBTDuavB/scene.splinecode" />
      </div>
    </section>
  );
};

export default Home;
