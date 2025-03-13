import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
        <Link to="/">MySite</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>

        {/* Menu Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-4 absolute md:static bg-gray-900 md:bg-transparent w-full md:w-auto left-0 p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'top-16' : '-top-96'
          }`}
        >
          <li className="py-2 md:py-0">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/forms" onClick={() => setIsOpen(false)}>
              Forms
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/multiInput" onClick={() => setIsOpen(false)}>
              MultiInput
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/submit-form" onClick={() => setIsOpen(false)}>
              SubmitForm
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/dashboard/profile" onClick={() => setIsOpen(false)}>
              Profile
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/dashboard/overview" onClick={() => setIsOpen(false)}>
              Overview
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/dashboard/settings" onClick={() => setIsOpen(false)}>
              Settings
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/register" onClick={() => setIsOpen(false)}>
              Register
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/memo" onClick={() => setIsOpen(false)}>
              React Memo
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/users" onClick={() => setIsOpen(false)}>
              Users
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/nasa" onClick={() => setIsOpen(false)}>
              NASA
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/github" onClick={() => setIsOpen(false)}>
              GitHub
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/character" onClick={() => setIsOpen(false)}>
              characters
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
