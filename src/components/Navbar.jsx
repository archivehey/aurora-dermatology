import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = [
    { name: '브랜드 스토리', link: '/about' },
    { name: '시그니처 시술', link: '/signature' },
    { name: '시술 안내', link: '/programs' },
    { name: '오시는 길', link: '/location' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-10'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className={`text-2xl tracking-[6px] font-serif font-bold transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-white'}`}>
          AURORA
        </Link>
        
        <ul className="hidden md:flex gap-16 text-[0.85rem] tracking-[1px] font-medium">
          {menus.map((menu, idx) => (
            <li key={idx}>
              <Link 
                to={menu.link} 
                className={`transition-colors duration-500 hover:text-accent ${scrolled ? 'text-primary' : 'text-white'}`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-8">
          <button 
            onClick={onOpenModal}
            className={`hidden md:block px-10 py-3 rounded-sm text-[0.75rem] tracking-[2px] transition-all duration-500 ${scrolled ? 'bg-primary text-white' : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary'}`}
          >
            온라인 예약
          </button>
          <button className={`md:hidden transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
