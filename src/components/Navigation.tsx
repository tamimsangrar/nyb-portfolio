import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [openMobileCategories, setOpenMobileCategories] = useState([]);
  const navRef = useRef(null);

  const toggleMobileCategory = (category) => {
    setOpenMobileCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
    setOpenMobileCategories([]);
  }, [location]);

  const menuItems = {
    main: [
      { path: '/', label: 'home' },
      { path: '/about', label: 'about me' }
    ],
    projects: [
      { path: '/projects/uiux-design', label: 'ui/ux design' },
      { path: '/projects/communication-design', label: 'communication design' },
      { path: '/projects/pixelplay', label: 'pixelplay' },
      { path: '/projects/illustration', label: 'illustration' }
    ],
    uiuxDesign: {
      title: 'ui/ux design',
      path: '/projects/uiux-design',
      items: [
        { path: '/projects/uiux-design/sriram-emani', label: 'sriram emani' },
        { path: '/projects/uiux-design/fortuna-insight', label: 'fortuna insight' },
        { path: '/projects/uiux-design/google-assistant', label: 'google assistant' },
        // { path: '/projects/uiux-design/cultural-connect', label: 'cultural connect' },
        { path: '/projects/uiux-design/styleai', label: 'styleAI' },
        { path: '/projects/uiux-design/promptcraft-ai', label: 'promptcraftAI' },
        { path: '/projects/uiux-design/quicksnack', label: 'quicksnack' }
      ]
    },
    commDesign: {
      title: 'communication design',
      path: '/projects/communication-design',
      items: [
        { path: '/projects/communication-design/hrx', label: 'hrx' },
        { path: '/projects/communication-design/almond-house', label: 'almond house' },
        { path: '/projects/communication-design/gappe-vappe', label: 'gappe vappe' }
      ]
    }
  };

  const NavLink = ({ to, children, className = '', onClick }) => (
    <Link
      to={to}
      className={`hover:text-gray-300 transition-colors ${isActive(to) ? 'text-white' : 'text-gray-400'} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Main navigation bar */}
      <div className="relative flex items-center justify-between p-4 md:px-12 md:pr-32 bg-black/80 backdrop-blur-sm max-w-[1920px] mx-auto z-50">
        <NavLink to="/" className="text-xl font-light">
          nyb.
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.main.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 hover:text-gray-300 transition-colors"
            >
              <span className={isActive('/projects') ? 'text-white' : 'text-gray-400'}>
                projects
              </span>
              <ChevronDown 
                className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div 
              className={`absolute top-full left-0 mt-1 py-1 w-44 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl transition-all duration-200 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              {menuItems.projects.slice(0, 2).map((category) => (
                <div
                  key={category.path}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(category.path)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <div className="flex items-center justify-between px-3 py-1.5 text-sm hover:bg-white/10">
                    <NavLink to={category.path}>
                      {category.label}
                    </NavLink>
                    <ChevronDown 
                      className={`w-4 h-4 transform transition-transform ${activeSubmenu === category.path ? 'rotate-180' : ''}`}
                    />
                  </div>

                  <div 
                    className={`absolute right-full top-0 py-1 w-44 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl mr-1 ${
                      activeSubmenu === category.path ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    {(category.path === '/projects/uiux-design' ? menuItems.uiuxDesign.items : menuItems.commDesign.items).map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className="block px-3 py-1.5 text-sm hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}

              {menuItems.projects.slice(2).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-1.5 text-sm hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black transition-all duration-300 ${
          isOpen ? 'opacity-95 visible' : 'opacity-0 invisible'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="pt-20 px-6 h-full overflow-y-auto">
          {menuItems.main.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="block py-3 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          
          {[menuItems.uiuxDesign, menuItems.commDesign].map((category) => (
            <div key={category.path} className="py-3">
              <div className="flex items-center justify-between w-full">
                <NavLink
                  to={category.path}
                  className={`text-lg font-medium mb-2 ${isActive(category.path) ? 'text-white' : 'text-gray-400'} hover:text-gray-300 transition-colors`}
                  onClick={() => {
                    setIsOpen(false);
                    setOpenMobileCategories([]);
                  }}
                >
                  {category.title}
                </NavLink>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileCategory(category.path);
                  }}
                  className="hover:text-gray-300 transition-colors"
                >
                  <ChevronDown 
                    className={`w-4 h-4 transform transition-transform ${
                      openMobileCategories.includes(category.path) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <div 
                className={`pl-4 space-y-2 transition-all duration-300 ${
                  openMobileCategories.includes(category.path) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{
                  pointerEvents: openMobileCategories.includes(category.path) ? 'auto' : 'none'
                }}
              >
                {category.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="block py-2 text-base"
                    onClick={() => {
                      setIsOpen(false);
                      setOpenMobileCategories([]);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          {menuItems.projects.slice(2).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="block py-3 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;