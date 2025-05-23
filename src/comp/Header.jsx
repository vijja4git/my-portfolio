import { Link } from "react-scroll";

const Header = () => (
  <nav className="sticky top-0 bg-white shadow z-50 px-4 py-3 flex gap-6 justify-center text-blue-600 font-semibold border-b border-gray-200">
    <Link
      to="about"
      smooth
      duration={500}
      className="cursor-pointer hover:text-blue-800"
    >
      About
    </Link>
    <Link
      to="skills"
      smooth
      duration={500}
      className="cursor-pointer hover:text-blue-800"
    >
      Skills
    </Link>
    <Link
      to="education"
      smooth
      duration={500}
      className="cursor-pointer hover:text-blue-800"
    >
      Education
    </Link>
    <Link
      to="experience"
      smooth
      duration={500}
      className="cursor-pointer hover:text-blue-800"
    >
      Experience
    </Link>
    <Link
      to="projects"
      smooth
      duration={500}
      className="cursor-pointer hover:text-blue-800"
    >
      Projects
    </Link>
  </nav>
);

export default Header;
