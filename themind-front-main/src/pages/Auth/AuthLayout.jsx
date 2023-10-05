import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useCurrentPath from "../../hooks/useCurrentPath";
import wallpaper from "../../assets/images/wallpaper.png";
import Spline from "@splinetool/react-spline";

const AuthLayout = () => {
  const currentPath = useCurrentPath();
  const navigate = useNavigate();

  useEffect(() => {
    currentPath == "auth" && navigate("login");
  }, [currentPath]);

  return (
    <div className="w-full h-screen bg-gradient-radial-at-top from-lightener-100 to-transparent">
      {currentPath[1] === "login" || currentPath[1] === "register" ? (
        <div className="w-full min-h-screen flex">
          <div
            className="hidden sm:block w-1/2 lg:w-3/5 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${wallpaper})` }}
          >
            <h1 className="font-bold text-5xl uppercase absolute left-8 bottom-8">
              Mindgame <br /> will blow <br /> your mind
            </h1>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/5">
            <div className="relative h-full py-32 px-8 xs:px-24 sm:px-8 md:px-16 xl:px-32 flex flex-col justify-center gap-y-8">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full p-4 flex items-center justify-center relative">
          {/* UFO */}
          <div className="absolute opacity-0 sm:opacity-100 left-4 md:left-16 lg:left-32 top-4 md:top-8 lg:top-16">
            <Spline scene="https://prod.spline.design/KF4TBmmPlSfzabgy/scene.splinecode" />
          </div>

          {/* Rocket */}
          <div className="absolute opacity-0 sm:opacity-100 left-4 md:left-16 lg:left-32 bottom-4 md:bottom-8 lg:bottom-16">
            <Spline scene="https://prod.spline.design/Tgy9aN8FNiFykIy2/scene.splinecode" />
          </div>

          {/* Saturn */}
          <div className="absolute opacity-0 sm:opacity-100 right-4 md:right-16 lg:right-32 top-4 md:top-8 lg:top-16">
            <Spline scene="https://prod.spline.design/KPvY6KgwQtM2f8H7/scene.splinecode" />
          </div>

          {/* Start */}
          <div className="absolute opacity-0 sm:opacity-100 right-4 md:right-16 lg:right-32 bottom-4 md:bottom-8 lg:bottom-16">
            <Spline scene="https://prod.spline.design/lV2oRouRwlJJUTPH/scene.splinecode" />
          </div>

          <div className="border-4 border-lightener-400 p-8 rounded-3xl w-[375px]">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
