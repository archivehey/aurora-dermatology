import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage, canonicalUrl }) => {
  const siteTitle = 'AURORA DERMATOLOGY | 청담 하이엔드 피부과';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDesc = '청담동 오로라 피부과에서 당신만의 고유한 아우라를 찾으세요. 정교한 미학으로 완성하는 하이엔드 시술 솔루션을 제공합니다.';
  const defaultKeywords = '청담동피부과, 하이엔드피부과, 오로라피부과, 리프팅, 안티에이징, 청담동피부관리';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonicalUrl || 'https://aurora-skin.com'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={ogImage || '/og-image.jpg'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />
      <meta property="twitter:image" content={ogImage || '/og-image.jpg'} />

      {/* Verification Tags - 발급받은 코드를 여기에 넣으세요 */}
      <meta name="google-site-verification" content="Euk_aO1q2MbTgIBMILxiu3Pbs92fQQylD0KJ8Arsklg" />
      <meta name="naver-site-verification" content="084ebb31132ce72ba43685d2cd7338f94fefd714" />
    </Helmet>
  );
};

export default SEO;
