import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Navigation() {
  const location = useLocation();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<'comm' | 'uiux' | null>(null);

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-sm">
      <Link to="/" className="text-xl font-light">nyb.</Link>
      <div className="hidden md:flex gap-8">
        <Link 
          to="/" 
          className={`hover:text-gray-300 transition-colors ${isActive('/') ? 'text-white' : 'text-gray-400'}`}
        >
          home
        </Link>
        <Link 
          to="/about" 
          className={`hover:text-gray-300 transition-colors ${isActive('/about') ? 'text-white' : 'text-gray-400'}`}
        >
          about me
        </Link>
        <div className="relative group">
          <button 
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            className={`flex items-center gap-1 hover:text-gray-300 transition-colors ${
              isActive('/projects') ? 'text-white' : 'text-gray-400'
            }`}
          >
            projects
            <ChevronDown className={`w-4 h-4 transform transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
          </button>
          {/* Projects Dropdown */}
          <div 
            className={`absolute top-full right-0 mt-2 py-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl transition-all duration-200 ${isProjectsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              to="/projects/pixelplay"
              className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                isActive('/projects/pixelplay') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Pixelplay
            </Link>
            <Link 
              to="/projects/illustration"
              className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                isActive('/projects/illustration') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Illustration
            </Link>
            {/* Communication Design with sub-items */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveSubmenu('comm')}
            >
              <div className="w-full px-4 py-2 text-sm hover:bg-white/10 transition-colors flex items-center justify-between">
                <Link
                  to="/projects/communication-design"
                  className={`flex-grow ${
                    isActive('/projects/communication-design') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Communication Design
                </Link>
                <ChevronDown className={`w-3 h-3 transform transition-transform ${activeSubmenu === 'comm' ? 'rotate-180' : ''}`} />
              </div>
              {/* Communication Design Sub-menu */}
              <div 
                className={`absolute right-full top-0 mt-0 mr-0.5 py-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl transition-all duration-200 ${activeSubmenu === 'comm' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                style={{ zIndex: 60 }}
              >
                <Link 
                  to="/projects/communication-design/hrx"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/communication-design/hrx') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  HRX
                </Link>
                <Link 
                  to="/projects/communication-design/almond-house"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/communication-design/almond-house') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Almond House
                </Link>
                <Link 
                  to="/projects/communication-design/gappe-vappe"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/communication-design/gappe-vappe') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Gappe Vappe
                </Link>
              </div>
            </div>
            {/* UI/UX Design with sub-items */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveSubmenu('uiux')}
            >
              <div className="w-full px-4 py-2 text-sm hover:bg-white/10 transition-colors flex items-center justify-between">
                <Link
                  to="/projects/uiux-design"
                  className={`flex-grow ${
                    isActive('/projects/uiux-design') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  UI/UX Design
                </Link>
                <ChevronDown className={`w-3 h-3 transform transition-transform ${activeSubmenu === 'uiux' ? 'rotate-180' : ''}`} />
              </div>
              {/* UI/UX Design Sub-menu */}
              <div 
                className={`absolute right-full top-0 mt-0 mr-0.5 py-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl transition-all duration-200 ${activeSubmenu === 'uiux' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                style={{ zIndex: 60 }}
              >
                <Link 
                  to="/projects/uiux-design/sriram-emani"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/uiux-design/sriram-emani') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Sriram Emani
                </Link>
                <Link 
                  to="/projects/uiux-design/fortuna-insight"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/uiux-design/fortuna-insight') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Fortuna Insight
                </Link>
                <Link 
                  to="/projects/uiux-design/google-assistant"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/uiux-design/google-assistant') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Google Assistant
                </Link>
                <Link 
                  to="/projects/uiux-design/cultural-connect"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/uiux-design/cultural-connect') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Cultural Connect
                </Link>
                <Link 
                  to="/projects/uiux-design/styleai"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/uiux-design/styleai') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  StyleAI
                </Link>
                <Link 
                  to="/projects/uiux-design/promptcraft-ai"
                  className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                    isActive('/projects/uiux-design/promptcraft-ai') ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setIsProjectsOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  Promptcraft AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button 
        className="md:hidden"
        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
      >
        <ChevronDown className={`w-6 h-6 transform transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm transition-all duration-200 ${isProjectsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="p-4 space-y-4">
          <Link 
            to="/"
            className={`block py-2 hover:text-gray-300 transition-colors ${
              isActive('/') ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => setIsProjectsOpen(false)}
          >
            home
          </Link>
          <Link 
            to="/about"
            className={`block py-2 hover:text-gray-300 transition-colors ${
              isActive('/about') ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => setIsProjectsOpen(false)}
          >
            about me
          </Link>
          <Link 
            to="/projects/pixelplay"
            className={`block py-2 hover:text-gray-300 transition-colors ${
              isActive('/projects/pixelplay') ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => setIsProjectsOpen(false)}
          >
            pixelplay
          </Link>
          <Link 
            to="/projects/illustration"
            className={`block py-2 hover:text-gray-300 transition-colors ${
              isActive('/projects/illustration') ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => setIsProjectsOpen(false)}
          >
            illustration
          </Link>
          <div className="pl-4 space-y-2">
            <Link 
              to="/projects/communication-design"
              className={`block py-2 hover:text-gray-300 transition-colors font-medium ${
                isActive('/projects/communication-design') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              communication design
            </Link>
            <Link 
              to="/projects/communication-design/hrx"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/communication-design/hrx') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              HRX
            </Link>
            <Link 
              to="/projects/communication-design/almond-house"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/communication-design/almond-house') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Almond House
            </Link>
            <Link 
              to="/projects/communication-design/gappe-vappe"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/communication-design/gappe-vappe') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Gappe Vappe
            </Link>
          </div>
          <div className="pl-4 space-y-2">
            <Link 
              to="/projects/uiux-design"
              className={`block py-2 hover:text-gray-300 transition-colors font-medium ${
                isActive('/projects/uiux-design') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              UI/UX design
            </Link>
            <Link 
              to="/projects/uiux-design/sriram-emani"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/uiux-design/sriram-emani') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Sriram Emani
            </Link>
            <Link 
              to="/projects/uiux-design/fortuna-insight"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/uiux-design/fortuna-insight') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Fortuna Insight
            </Link>
            <Link 
              to="/projects/uiux-design/google-assistant"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/uiux-design/google-assistant') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Google Assistant
            </Link>
            <Link 
              to="/projects/uiux-design/cultural-connect"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/uiux-design/cultural-connect') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Cultural Connect
            </Link>
            <Link 
              to="/projects/uiux-design/styleai"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/uiux-design/styleai') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              StyleAI
            </Link>
            <Link 
              to="/projects/uiux-design/promptcraft-ai"
              className={`block py-2 hover:text-gray-300 transition-colors pl-4 text-sm ${
                isActive('/projects/uiux-design/promptcraft-ai') ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setIsProjectsOpen(false)}
            >
              Promptcraft AI
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;