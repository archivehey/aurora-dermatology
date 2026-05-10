import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import philoImg01 from '../assets/philosophy01.jpeg';
import philoVid02 from '../assets/philosophy02.mp4';
import interiorImg from '../assets/interior.png';

const About = ({ onOpenModal }) => {
  return (
    <div className="bg-white">
      <SEO 
        title="브랜드 스토리" 
        description="오로라 피부과의 철학 - 본질에 집중하는 정교한 미학으로 당신만의 아름다움을 설계합니다." 
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={philoImg01} alt="Brand Philosophy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent tracking-[6px] text-xs font-bold uppercase block mb-8"
          >
            The Essence of Beauty
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif leading-tight"
          >
            본질에 집중하는 <br />
            <span className="italic">오로라의 미학</span>
          </motion.h1>
        </div>
      </section>

      {/* Philosophy 01: The Aura */}
      <section className="py-32 md:py-48 bg-bg">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent tracking-[5px] text-xs font-bold uppercase block mb-8">01. Natural Aura</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">인위적인 변화가 아닌, <br />본연의 아름다움을 깨우다</h2>
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                우리는 모두 각자만의 고유한 '아우라'를 가지고 태어납니다. 오로라는 그 빛이 세월의 흐름이나 외부의 환경에 가려지지 않도록 돕는 조력자입니다.
              </p>
              <p className="text-gray-500 font-light leading-relaxed">
                억지로 멈추려 하기보다, 가장 조화롭고 건강하게 빛날 수 있는 방법을 제안합니다. 그것이 오로라가 추구하는 진정한 미학의 시작입니다.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={interiorImg} alt="Natural Aura" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy 02: Video Section */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-accent tracking-[5px] text-xs font-bold uppercase block mb-8">02. The Precision</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">1mm의 디테일이 만드는 <br />정교한 설계</h2>
            <div className="w-16 h-[1px] bg-accent mx-auto"></div>
          </div>
          
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-24">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={philoVid02} type="video/mp4" />
            </video>
          </div>

          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <h4 className="text-xl font-serif mb-6">In-depth Analysis</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">최첨단 장비를 통한 피부 구조의 과학적 분석을 선행합니다.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-6">Bespoke Design</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">개개인의 얼굴 윤곽과 피부 결에 맞춘 1:1 커스텀 디자인을 제안합니다.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-6">Artistic Skill</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">숙련된 의료진의 섬세한 술기로 예술적인 시술 결과를 완성합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">당신의 아우라를 완성할 준비가 되셨나요?</h2>
          <button 
            onClick={onOpenModal}
            className="px-12 py-5 border border-white/30 hover:bg-white hover:text-primary transition-all duration-500 text-[0.8rem] tracking-[3px] uppercase font-bold"
          >
            Consultation Request
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
