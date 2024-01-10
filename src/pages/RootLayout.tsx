import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout(): JSX.Element {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
