import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "About",
    path: "/about",
  },
  {
    id: 3,
    text: "Contact",
    path: "/contact",
  },
];

function NawLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className="btn  btn-ghost  text-accent-content"
            key={link.id}
            to={link.path}
          >
            {" "}
            {link.text}
          </Link>
        );
      })}
    </>
  );
}

export default NawLinks;
