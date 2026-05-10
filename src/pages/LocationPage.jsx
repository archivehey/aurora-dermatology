import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import { MapPin, Phone, Clock, Car } from 'lucide-react';

const LocationPage = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="오시는 길" 
        description="청담동 오로라 피부과 오시는 길 안내 - 강남구청역 도보 5분 거리, 전 고객 발렛 파킹 서비스를 제공합니다." 
      />

      {/* Header */}
      <section className="pt-48 pb-24 bg-bg">
        <div className="container text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent tracking-[6px] text-xs font-bold uppercase block mb-8"
          >
            Visit Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif mb-12"
          >
            Contact <span className="italic">& Location</span>
          </motion.h1>
          <div className="w-20 h-[1px] bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="container">
          <div className="h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.5517176545747!2d127.03923307641887!3d37.51730497204481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca40f2882a9f1%3A0x6b44760773d7495!2z6rCV64Ko6rWs7LKt!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-accent mb-4">
                <MapPin size={24} />
                <h4 className="text-lg font-serif font-bold">Address</h4>
              </div>
              <p className="text-gray-500 font-light leading-relaxed">
                서울특별시 강남구 청담동 123-45 <br />
                오로라 빌딩 3-5F <br />
                <span className="text-sm">(강남구청역 4번 출구 도보 5분)</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-accent mb-4">
                <Phone size={24} />
                <h4 className="text-lg font-serif font-bold">Contact</h4>
              </div>
              <p className="text-gray-500 font-light leading-relaxed">
                T. 02-123-4567 <br />
                E. aurora@clinic.com <br />
                Kakao. @오로라피부과
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-accent mb-4">
                <Clock size={24} />
                <h4 className="text-lg font-serif font-bold">Business Hours</h4>
              </div>
              <p className="text-gray-500 font-light leading-relaxed">
                월 - 금 : 10:00 - 20:00 <br />
                토요일 : 10:00 - 16:00 <br />
                <span className="text-accent">평일 전일 야간 진료 시행</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-accent mb-4">
                <Car size={24} />
                <h4 className="text-lg font-serif font-bold">Parking</h4>
              </div>
              <p className="text-gray-500 font-light leading-relaxed">
                전 고객 발렛 파킹 가능 <br />
                건물 전용 주차장 이용 <br />
                (방문 시 정문 입구에서 안내)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Directions */}
      <section className="py-24 bg-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-center mb-16 italic underline underline-offset-8 decoration-accent/30">Directions Detail</h3>
            <div className="space-y-12">
              <div className="flex gap-10 items-start">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full shrink-0 font-serif">01</div>
                <div>
                  <h4 className="text-xl font-medium mb-4">지하철 이용 시</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    7호선 / 수인분당선 강남구청역 4번 출구로 나오셔서 청담동 방향으로 약 300m 직진하세요. <br />
                    하나은행 청담지점을 지나 사거리 코너 오로라 빌딩 3층으로 오시면 됩니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-10 items-start">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full shrink-0 font-serif">02</div>
                <div>
                  <h4 className="text-xl font-medium mb-4">자가용 이용 시</h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    내비게이션에 '오로라피부과' 혹은 '서울특별시 강남구 청담동 123-45'를 검색하세요. <br />
                    정문 입구에 도착하시면 발렛 요원이 직접 주차를 도와드립니다. (발렛비 무료 서비스 제공)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
