import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NAVBAR_HEIGHT = 64; // keep in sync with Navbar height

export default function Layout({ theme, toggleTheme }) {
  return (
    <>
      {/* NAVBAR (with back button inside it) */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* PAGE CONTENT */}
      <main
        style={{
          paddingTop: NAVBAR_HEIGHT,
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
