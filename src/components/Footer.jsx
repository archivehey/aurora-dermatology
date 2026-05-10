import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-32 pb-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl tracking-[8px] font-serif font-bold mb-10 block">AURORA</Link>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              본연의 아름다움이 가장 조화롭게 빛날 수 있도록 <br />
              우리는 당신의 시간과 가치를 존중합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-accent text-[0.7rem] tracking-[3px] uppercase mb-10">Main Menus</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">브랜드 스토리</Link></li>
              <li><Link to="/signature" className="hover:text-white transition-colors">시그니처 시술</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">시술 안내</Link></li>
              <li><Link to="/location" className="hover:text-white transition-colors">오시는 길</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent text-[0.7rem] tracking-[3px] uppercase mb-10">Legal</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">비급여 진료비 안내</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent text-[0.7rem] tracking-[3px] uppercase mb-10">Information</h4>
            <div className="text-sm font-light text-gray-400 space-y-2">
              <p>상호명 : 오로라의원</p>
              <p>대표자 : 홍길동</p>
              <p>사업자번호 : 123-45-67890</p>
              <p>주소 : 서울시 강남구 청담동 123-45</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[0.65rem] text-gray-600 tracking-[1px] uppercase">
            © 2024 AURORA DERMATOLOGY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[0.65rem] text-gray-600 tracking-[2px] uppercase cursor-pointer hover:text-white transition-colors">Instagram</span>
            <span className="text-[0.65rem] text-gray-600 tracking-[2px] uppercase cursor-pointer hover:text-white transition-colors">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
