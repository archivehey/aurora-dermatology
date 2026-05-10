import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

const ProgramList = ({ onOpenModal }) => {
  const categories = [
    {
      title: 'Lifting & Contouring',
      items: [
        { name: '울쎄라 리프팅', price: '별도문의', tags: ['초음파 리프팅', '맞춤 설계'] },
        { name: '써마지 FLX', price: '별도문의', tags: ['고주파 탄력', '콜라겐 재생'] },
        { name: '인모드 리프팅', price: '별도문의', tags: ['지방 제거', '타이트닝'] },
        { name: '오로라 윤곽 주사', price: '별도문의', tags: ['라인 정리', '비침습'] }
      ]
    },
    {
      title: 'Skin Booster & Glow',
      items: [
        { name: '리쥬란 힐러', price: '별도문의', tags: ['피부 재생', '수분 공급'] },
        { name: '쥬베룩', price: '별도문의', tags: ['자연스러운 볼륨', '결 개선'] },
        { name: '샤넬주사 (NCTF)', price: '별도문의', tags: ['광채 피부', '영양 공급'] },
        { name: '엑소좀 케어', price: '별도문의', tags: ['항염 효과', '장벽 강화'] }
      ]
    },
    {
      title: 'Trouble & Texture',
      items: [
        { name: '피코 토닝', price: '별도문의', tags: ['색소 개선', '밝은 안색'] },
        { name: '프락셀 Dual', price: '별도문의', tags: ['흉터 제거', '모공 축소'] },
        { name: '아쿠아 필', price: '별도문의', tags: ['딥클렌징', '각질 제거'] },
        { name: '메디컬 여드름 케어', price: '별도문의', tags: ['염증 완화', '진정 케어'] }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="전체 시술 안내" 
        description="오로라 피부과의 다양한 메디컬 솔루션을 확인하세요. 당신의 피부 고민에 맞는 최적의 프로그램을 제안합니다." 
      />

      {/* Header */}
      <section className="pt-48 pb-24 bg-bg">
        <div className="container text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent tracking-[6px] text-xs font-bold uppercase block mb-8"
          >
            All Programs
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-12"
          >
            Medical <span className="italic">Aesthetics</span>
          </motion.h1>
          <p className="text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            오로라는 검증된 기술과 장비를 바탕으로 고객님의 피부 상태에 가장 적합한 <br />
            개인별 맞춤 시술 플랜을 제안해 드립니다.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-32">
        <div className="container">
          <div className="space-y-32">
            {categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-serif mb-12 flex items-center gap-6">
                  {category.title}
                  <div className="flex-1 h-[1px] bg-primary/5"></div>
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, iidx) => (
                    <motion.div 
                      key={iidx}
                      whileHover={{ y: -5 }}
                      className="p-10 border border-primary/5 rounded-xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 flex justify-between items-center group"
                    >
                      <div>
                        <div className="flex gap-2 mb-4">
                          {item.tags.map((tag, tidx) => (
                            <span key={tidx} className="text-[0.6rem] tracking-[1px] text-accent/60 font-bold uppercase">{tag}</span>
                          ))}
                        </div>
                        <h4 className="text-xl font-medium group-hover:text-accent transition-colors">{item.name}</h4>
                      </div>
                      <button 
                        onClick={onOpenModal}
                        className="text-primary/20 group-hover:text-accent transition-colors font-serif italic text-lg"
                      >
                        Consult {'>'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-24 bg-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto p-12 border border-primary/10 rounded-2xl bg-white/50 backdrop-blur-sm">
            <h4 className="text-lg font-bold mb-6">시술 안내 및 주의사항</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light leading-relaxed">
              <li>• 모든 시술은 전문 의료진과의 1:1 상담 후 진행됩니다.</li>
              <li>• 개인의 피부 상태에 따라 시술 횟수 및 기간이 달라질 수 있습니다.</li>
              <li>• 시술 비용은 시술 범위 및 약제 용량에 따라 변동될 수 있으므로 별도 문의 부탁드립니다.</li>
              <li>• 부작용 예방을 위해 시술 후 안내해 드리는 주의사항을 반드시 준수해 주시기 바랍니다.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramList;
