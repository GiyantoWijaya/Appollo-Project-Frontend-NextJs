"use client";
import { Navbar, Nav } from "rsuite";
import PeoplesCostomizeIcon from "@rsuite/icons/PeoplesCostomize";
import PageEndIcon from "@rsuite/icons/PageEnd";
// import 'bootstrap/dist/css/bootstrap.css';
import "./navbarLandingPage.styles.css";
// import "/Users/caesarresyaxavier/CODE/apollo-project-nextjs/node_modules/rsuite/dist/rsuite.css";

import { useRouter } from "next/navigation";
const NavbarLandingPage = () => {
  const router = useRouter();

  const handleLogin = (event) => {
    router.push("/authentication/login");
    // setIsLoading(true);
  };

  const handleRegister = (event) => {
    router.push("/authentication/register");
    // setIsLoading(true);
  };
  return (
    <Navbar>
      <Navbar.Brand href="/">APOLLO PROJECT</Navbar.Brand>

      <Nav appearance="tabs">
        <div className="mx-5 text-center">
          {/* <Nav.Item icon={<HomeIcon />} href="/">
            <span className="mx-5">Home</span>
          </Nav.Item> */}
          <Nav.Item href="#news">
            <span className="mx-5">News</span>
          </Nav.Item>
          <Nav.Item href="/gamedetail">
            <span className="mx-5">Leaderboard</span>
          </Nav.Item>
        </div>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={handleRegister} icon={<PeoplesCostomizeIcon />}>
          Sign-Up
        </Nav.Item>
        <span className="mx-3">
          <Nav.Item onClick={handleLogin} icon={<PageEndIcon />}>
            Login
          </Nav.Item>
        </span>
      </Nav>
    </Navbar>
  );
};

export default NavbarLandingPage;
