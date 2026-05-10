import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import philoImg01 from '../assets/philosophy01.jpeg';
import philoVid02 from '../assets/philosophy02.mp4';

const About = () => {
  return (
    <section id="about" className="bg-bg py-32 md:py-48">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-24">
          {/* Sticky Left Content */}
          <div className="md:w-1/3">
            <div className="sticky-left">
              <span className="text-accent tracking-[5px] text-xs font-bold uppercase block mb-6">Our Philosophy</span>
              <h2 className="text-5xl leading-[1.2] mb-10 font-serif">
                본질에 집중하는 <br />
                오로라의 <span className="italic">디자인</span>
              </h2>
              <div className="line-accent"></div>
              <p className="text-gray-500 text-lg leading-relaxed font-light mb-12">
                우리는 단순히 시술을 권하지 않습니다. <br />
                당신이 가진 고유의 선과 결을 분석하여 <br />
                가장 조화로운 아름다움을 찾아냅니다.
              </p>
              <Link to="/about" className="group flex items-center gap-4 text-[0.7rem] tracking-[3px] uppercase font-bold text-primary">
                <span className="border-b border-primary/30 pb-2 group-hover:border-accent group-hover:text-accent transition-all">View Story</span>
                <span className="w-10 h-[1px] bg-primary/30 group-hover:bg-accent transition-all"></span>
              </Link>
            </div>
          </div>

          {/* Scrolling Right Content */}
          <div className="md:w-2/3 flex flex-col gap-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="aspect-video overflow-hidden rounded-sm mb-10">
                <img src={philoImg01} alt="Philosophy 01" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" />
              </div>
              <h3 className="text-3xl font-serif mb-6 italic">Private Lounge</h3>
              <p className="text-gray-400 font-light max-w-xl">
                청담동의 프라이빗한 라운지에서 시작되는 진정한 힐링. <br />
                오로라는 진료의 모든 과정에서 당신의 프라이버시를 존중합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="aspect-video overflow-hidden rounded-sm mb-10">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                >
                  <source src={philoVid02} type="video/mp4" />
                </video>
              </div>
              <h3 className="text-3xl font-serif mb-6 italic">1:1 Precision Consulting</h3>
              <p className="text-gray-400 font-light max-w-xl">
                1mm의 디테일이 만드는 차이. <br />
                오로라의 의료진은 당신만을 위한 정교한 디자인을 제안합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
