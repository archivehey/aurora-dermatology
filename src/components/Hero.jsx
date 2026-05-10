import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpeg';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden py-0">
      {/* Video / Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* 나중에 영상을 넘겨주시면 아래 video 태그의 src를 수정하시면 됩니다 */}
        {/* <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
          poster={modelImg}
        >
          <source src="your-video-url.mp4" type="video/mp4" />
        </video> */}
        
        {/* 현재는 이미지를 100% 꽉 차게 배치 */}
          <img 
            src={heroImg} 
            alt="Aurora Hero" 
            className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
          />
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-white"
        >
          <span className="block text-accent tracking-[6px] mb-8 text-xs font-bold uppercase">Private Aesthetics Studio</span>
          <h1 className="text-6xl md:text-8xl leading-[1] mb-12 font-serif font-light">
            Reawaken <br />
            <span className="italic">Your Aura</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-xl mb-16 opacity-80 leading-relaxed">
            시간이 흘러도 변치 않는 고유의 아름다움. <br />
            오로라만의 정교한 미학으로 당신의 빛을 완성합니다.
          </p>
          
          <Link to="/about" className="group flex items-center gap-4 text-[0.8rem] tracking-[3px] uppercase font-bold">
            <span className="border-b border-white/50 pb-2 group-hover:border-accent group-hover:text-accent transition-all">Explore More</span>
            <span className="w-10 h-[1px] bg-white/50 group-hover:bg-accent transition-all"></span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[0.6rem] tracking-[4px] uppercase">Scroll Down</span>
        <div className="w-[1px] h-16 bg-white/40"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
