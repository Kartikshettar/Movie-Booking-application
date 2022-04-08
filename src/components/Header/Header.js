import "./Header.css";
//Header component consist of application title
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 BOOK SHOW🎥
    </span>
  );
};

export default Header;
