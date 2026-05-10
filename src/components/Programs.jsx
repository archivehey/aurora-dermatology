import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import liftingImg from '../assets/lifting.png';
import antiAgingImg from '../assets/anti-aging.png';
import tightningImg from '../assets/tightning.jpeg';

const solutions = [
  {
    id: '01',
    category: 'Lifting',
    title: '리프팅',
    desc: '세밀한 디자인으로 완성하는 <br/>무너지지 않는 탄력의 깊이.',
    image: liftingImg
  },
  {
    id: '02',
    category: 'Anti-Aging',
    title: '안티에이징',
    desc: '피부 본연의 재생력을 깨워 <br/>시간을 되돌리는 투명한 광채.',
    image: antiAgingImg,
    staggered: true // 가운데 카드를 아래로 내리기 위한 옵션
  },
  {
    id: '03',
    category: 'Tightening',
    title: '타이트닝',
    desc: '모공부터 피부 결까지 <br/>정교하게 정돈된 피부 컨디션.',
    image: tightningImg
  }
];

const Programs = () => {
  return (
    <section id="programs" className="bg-white py-32 md:py-48">
      <div className="container">
        {/* Title Section */}
        <div className="mb-40 max-w-4xl mx-auto text-center">
          <span className="text-accent tracking-[5px] text-xs font-bold uppercase block mb-8">Signature Solution</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            당신만을 위해 <br />
            설계된 <span className="italic text-accent">시술 안내</span>
          </h2>
          <div className="w-16 h-[1px] bg-accent mt-12 mx-auto"></div>
        </div>

        {/* 3-Card Grid (Staggered Layout) */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              className={`group relative overflow-hidden rounded-[30px] bg-white shadow-2xl shadow-black/5 aspect-[3/4] cursor-pointer ${item.staggered ? 'md:mt-24' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                {/* Darker gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-12 flex flex-col justify-between text-white">
                <div>
                  <span className="text-[0.6rem] tracking-[3px] uppercase font-bold opacity-80">{item.category}</span>
                  <h3 className="text-4xl font-serif mt-4">{item.title}</h3>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[0.9rem] font-light leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <Link 
                    to="/signature"
                    className="text-[0.7rem] tracking-[2px] uppercase font-bold border-b border-white/40 pb-2"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
