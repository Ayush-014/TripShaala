import { Link } from 'react-router-dom';
import { theme } from "../../theme.js"

const Navbar = () => {
  const navItems = [
    { path: '/', name: 'Home', width: 'w-[77px]' },
    { path: '/rafting', name: 'Rafting', width: 'w-[77px]' },
    { path: '/camping', name: 'Camping', width: 'w-[77px]' },
    { path: '/adventure-activities', name: 'Adventure Activities', width: 'w-[154px]' },
    { path: '/vehicle-rent', name: 'Vehicle Rent', width: 'w-[154px]' },
  ];

  return (
    <nav className={`relative w-full h-[110px] border-b ${theme.colors.navBorder}`}>
      {/* logo */}
      <div 
        className={`absolute ${theme.dimensions.logo} top-[10px] left-[50px] border ${theme.colors.navBorder} flex items-center justify-center`}
      >
        <span className={theme.colors.logo}>Logo</span>
      </div>

      {/* routes  */}
      <div className="absolute top-[40px] right-[50px] flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              ${item.width} ${theme.dimensions.navItem} flex items-center justify-center
              ${isActive ? theme.colors.active : `${theme.colors.inactive} ${theme.colors.primaryHover}`}
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;