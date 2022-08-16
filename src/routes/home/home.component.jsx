import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />{" "}
      {/* for nested routes. it is where nested matched paths wiil be rendered */}
    </div>
  );
};

export default Home;
