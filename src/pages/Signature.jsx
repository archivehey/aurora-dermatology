import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import liftingImg from '../assets/lifting.png';
import antiAgingImg from '../assets/anti-aging.png';
import tightningImg from '../assets/tightning.jpeg';

const Signature = ({ onOpenModal }) => {
  const signatures = [
    {
      title: 'Precision Lifting',
      name: '오로라 리프팅',
      desc: '단순히 당기는 것이 아닌, 얼굴의 입체감을 고려한 맞춤형 리프팅입니다. 1mm의 오차 없는 정교한 디자인으로 숨겨진 V라인을 찾아드립니다.',
      image: liftingImg,
      features: ['얼굴 윤곽 맞춤 설계', '비침습적 리프팅', '자연스러운 탄력 회복']
    },
    {
      title: 'Time Reversal',
      name: '안티에이징',
      desc: '피부 본연의 재생 주기를 정상화하여 속부터 차오르는 탄력과 광채를 선사합니다. 시간이 흘러도 변치 않는 아름다움을 경험하세요.',
      image: antiAgingImg,
      features: ['피부 세포 재생 유도', '피부 결 및 톤 개선', '깊은 주름 완화']
    },
    {
      title: 'Pore Tightening',
      name: '타이트닝 솔루션',
      desc: '늘어진 모공과 흐트러진 피부 결을 촘촘하게 조여주어 매끄러운 피부 캔버스를 완성합니다. 미세한 차이가 만드는 완벽한 결을 만나보세요.',
      image: tightningImg,
      features: ['모공 축소 및 탄력 강화', '피부 요철 정돈', '결 개선 솔루션']
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="시그니처 시술" 
        description="오로라 피부과만의 시그니처 솔루션 - 리프팅, 안티에이징, 타이트닝 등 하이엔드 시술을 경험하세요." 
      />

      {/* Header */}
      <section className="pt-48 pb-24 bg-bg">
        <div className="container text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent tracking-[6px] text-xs font-bold uppercase block mb-8"
          >
            Exclusive Care
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-12"
          >
            Signature <span className="italic">Solution</span>
          </motion.h1>
          <div className="w-20 h-[1px] bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Signature List */}
      <section className="py-32">
        <div className="container space-y-48">
          {signatures.map((item, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-24 items-center`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <span className="text-accent tracking-[4px] text-xs font-bold uppercase block mb-6">{item.title}</span>
                <h2 className="text-4xl font-serif mb-8">{item.name}</h2>
                <p className="text-gray-500 font-light leading-relaxed mb-10 text-lg">
                  {item.desc}
                </p>
                <ul className="space-y-4 mb-12">
                  {item.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-4 text-primary/70 font-light">
                      <div className="w-1 h-1 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onOpenModal}
                  className="px-10 py-4 bg-primary text-white text-[0.7rem] tracking-[3px] uppercase font-bold hover:bg-accent transition-all duration-500"
                >
                  Get Consultation
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-32 bg-bg text-center">
        <div className="container">
          <h2 className="text-3xl font-serif mb-10">더 많은 시술 정보가 궁금하신가요?</h2>
          <button className="px-10 py-4 border border-primary/20 hover:bg-primary hover:text-white transition-all duration-500 text-[0.7rem] tracking-[3px] uppercase font-bold">
            View All Programs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Signature;
