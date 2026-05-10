import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section id="location" className="bg-bg py-32 md:py-48">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent tracking-[5px] text-xs font-bold uppercase block mb-6">Location</span>
            <h2 className="text-5xl font-serif mb-10">오시는 길</h2>
            <div className="line-accent"></div>
            
            <div className="space-y-10 text-gray-500 font-light">
              <div>
                <h4 className="text-primary font-medium mb-2">Address</h4>
                <p>서울특별시 강남구 청담동 123-45 오로라 빌딩 3-5F <br />(강남구청역 4번 출구 도보 5분)</p>
              </div>
              <div>
                <h4 className="text-primary font-medium mb-2">Contact</h4>
                <p>Tel. 02-123-4567</p>
                <p>Kakao. @오로라피부과</p>
              </div>
              <div>
                <h4 className="text-primary font-medium mb-2">Hours</h4>
                <p>Mon - Fri : 10:00 - 20:00 (야간진료)</p>
                <p>Sat : 10:00 - 16:00</p>
                <p>Sun / Holiday : Closed</p>
              </div>
            </div>
          </div>

          <div className="h-[500px] bg-gray-100 rounded-sm overflow-hidden shadow-2xl shadow-black/5">
            {/* Google Map Iframe Placeholder (Gangnam-gu Office area) */}
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
      </div>
    </section>
  );
};

export default Location;
