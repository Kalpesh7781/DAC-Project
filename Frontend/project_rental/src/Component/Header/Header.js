import "../../Stylesheet/Header.css";
import Navbar1 from "../Subcimponent/Navbar1";
import Navbar2 from "../Subcimponent/Navbar2";
import Navbar3 from "../Subcimponent/Navbar3";
function Header() {
  return (
    <div className=" Header">
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
    </div>
  );
}

export default Header;
