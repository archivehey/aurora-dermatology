import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const ReservationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '상담 후 결정',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${formData.name}님, 예약 요청이 완료되었습니다. 곧 연락드리겠습니다.`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-bg rounded-2xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-primary/40 hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-10 md:p-14">
              <span className="text-accent tracking-[4px] text-[0.6rem] font-bold uppercase block mb-4">Reservation</span>
              <h2 className="text-3xl font-serif mb-10">당신만의 시간을 <br />예약하세요</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[0.7rem] tracking-[2px] uppercase font-bold text-primary/40 mb-3">성함</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-primary/10 py-3 focus:border-accent outline-none transition-colors font-light"
                    placeholder="성함을 입력해주세요"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-[0.7rem] tracking-[2px] uppercase font-bold text-primary/40 mb-3">연락처</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-transparent border-b border-primary/10 py-3 focus:border-accent outline-none transition-colors font-light"
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[0.7rem] tracking-[2px] uppercase font-bold text-primary/40 mb-3">관심 시술</label>
                    <select 
                      className="w-full bg-transparent border-b border-primary/10 py-3 focus:border-accent outline-none transition-colors font-light appearance-none"
                      value={formData.treatment}
                      onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                    >
                      <option>상담 후 결정</option>
                      <option>리프팅</option>
                      <option>안티에이징</option>
                      <option>타이트닝</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.7rem] tracking-[2px] uppercase font-bold text-primary/40 mb-3">희망 날짜</label>
                    <input 
                      type="date" 
                      className="w-full bg-transparent border-b border-primary/10 py-3 focus:border-accent outline-none transition-colors font-light"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-sm text-[0.8rem] tracking-[3px] uppercase font-bold hover:bg-accent transition-all duration-500 mt-10"
                >
                  Request Consultation
                </button>
              </form>
              
              <p className="mt-8 text-[0.7rem] text-center text-gray-400 font-light leading-relaxed">
                * 남겨주신 연락처로 상담 실장이 확인 후 <br />빠른 시간 내에 안내 전화를 드리겠습니다.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
