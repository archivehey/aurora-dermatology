import { motion } from 'framer-motion';
import { MessageCircle, Camera, MapPin, Play } from 'lucide-react';

const Sidebar = ({ onOpenModal }) => {
  const socialLinks = [
    { icon: <MessageCircle size={20} />, label: '카카오톡', link: 'https://pf.kakao.com' },
    { icon: <Camera size={20} />, label: '인스타그램', link: 'https://instagram.com' },
    { icon: <MapPin size={20} />, label: '네이버지도', link: 'https://map.naver.com' },
    { icon: <Play size={20} />, label: '유튜브', link: 'https://youtube.com' }
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
      {socialLinks.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:scale-110 transition-all duration-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + idx * 0.1 }}
        >
          <div className="text-gray-600 group-hover:text-primary transition-colors">
            {item.icon}
          </div>
          
          {/* Label Tooltip */}
          <span className="absolute right-16 px-4 py-2 bg-primary text-white text-[0.7rem] tracking-[1px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded-sm pointer-events-none">
            {item.label}
          </span>
        </motion.a>
      ))}
      
      <motion.button
        onClick={onOpenModal}
        className="w-14 h-32 bg-primary text-white rounded-full flex flex-col items-center justify-center gap-4 shadow-xl hover:bg-accent transition-colors duration-500"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="[writing-mode:vertical-lr] text-[0.7rem] tracking-[4px] uppercase font-bold">Booking</span>
      </motion.button>
    </div>
  );
};

export default Sidebar;
