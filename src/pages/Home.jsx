import SEO from '../components/seo/SEO';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import About from '../components/About';
import Doctors from '../components/Doctors';
import Location from '../components/Location';

const Home = () => {
  return (
    <>
      <SEO 
        title="메인" 
        description="청담동 오로라 피부과 - 당신만의 고유한 아우라를 완성하는 하이엔드 미학 솔루션." 
      />
      <Hero />
      <Programs />
      <About />
      <Doctors />
      <Location />
    </>
  );
};

export default Home;
