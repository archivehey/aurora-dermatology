import { motion } from 'framer-motion';
import doctor1 from '../assets/doctor1.png';
import doctor2 from '../assets/doctor2.png';

const Doctors = () => {
  const doctors = [
    {
      name: '이현우',
      title: '대표원장 / 의학박사',
      quote: '"1mm의 차이가 만드는 완성도, 당신의 가치를 가장 먼저 생각합니다."',
      bio: '피부의 구조를 누구보다 깊이 이해하고 정교한 시술을 지향합니다. 인위적인 아름다움이 아닌, 본연의 건강함을 되찾아드리는 것이 저의 진료 철학입니다.',
      history: [
        '서울대학교 의과대학 졸업',
        '대한 피부과학회 정회원',
        '전) 청담 메이저 피부과 원장',
        '울쎄라/써마지 키닥터'
      ],
      image: doctor1,
      reverse: false
    },
    {
      name: '이지영',
      title: '대표원장 / 의학박사',
      quote: '"당신만이 가진 고유한 선을 찾아 가장 조화로운 디자인을 제안합니다."',
      bio: '미적 감각과 정교한 술기를 결합하여 섬세한 안티에이징 솔루션을 제공합니다. 상담부터 시술까지 한 분 한 분께 집중하는 프라이빗 케어를 약속드립니다.',
      history: [
        '연세대학교 의과대학 졸업',
        '대한 미용성형레이저의학회 정회원',
        '전) 압구정 리더스 피부과 원장',
        '리쥬란/쥬베룩 인증의'
      ],
      image: doctor2,
      reverse: true
    }
  ];

  return (
    <section id="doctors" className="bg-white py-32 md:py-48 overflow-hidden">
      <div className="container">
        {/* Section Title */}
        <div className="mb-32 max-w-4xl mx-auto text-center">
          <span className="text-accent tracking-[5px] text-xs font-bold uppercase block mb-6">Medical Team</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">오로라를 만드는 <br />사람들</h2>
          <div className="w-16 h-[1px] bg-accent mt-8 mx-auto"></div>
        </div>

        <div className="space-y-40">
          {doctors.map((doc, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col ${doc.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-20 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Doctor Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-accent/5"></div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="w-full md:w-1/2">
                <div className="max-w-xl mx-auto md:mx-0">
                  <span className="text-accent text-sm tracking-[2px] uppercase font-bold">{doc.title}</span>
                  <h3 className="text-5xl font-serif mt-4 mb-8">Dr. {doc.name}</h3>
                  <p className="text-2xl font-serif italic text-primary/80 mb-10 leading-snug">
                    {doc.quote}
                  </p>
                  <p className="text-gray-500 font-light mb-12 leading-relaxed">
                    {doc.bio}
                  </p>
                  
                  <div className="space-y-3">
                    {doc.history.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
