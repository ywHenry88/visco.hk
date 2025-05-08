import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Translation {
  [key: string]: string;
}

interface Translations {
  en: Translation;
  zh: Translation;
}

const translations: Translations = {
  en: {
    'company-name': 'Visco',
    'nav-projects': 'Projects',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'hero-title': 'Welcome to Visco',
    'hero-subtitle': 'Discover our innovative projects in Python, web development, AI, and design',
    'hero-cta': 'Explore Projects',
    'projects-title': 'Our Projects',
    'project-0-title': 'VTOL Drone for Marine Mammal Surveys',
    'project-0-desc': 'A cutting-edge VTOL drone system for line transect surveys and Photo ID observation of marine mammals, focusing on Chinese white dolphin (<i>Sousa chinensis</i>) and finless porpoise (<i>Neophocaena</i>). Powered by AI-driven image recognition and eco-friendly electric propulsion, it ensures precise data collection with minimal environmental impact.',
    'project-0-tech': 'Technologies: Python, AI, Drone Technology',
    'project-0-features': 'Features: Real-time species identification, low-carbon footprint, high-resolution imaging',
    'project-1-title': 'Image Processing Script',
    'project-1-desc': 'A Python script for processing images, featuring error handling with OpenCV\'s <code>cv2.seamlessClone</code> and dataset management for drone-captured dolphin images (top and side views).',
    'project-1-tech': 'Technologies: Python, OpenCV',
    'project-1-features': 'Features: Error logging, batch processing',
    'project-2-title': 'YOLO Dataset Management',
    'project-2-desc': 'Scripts to merge and update YOLO dataset labels for AI-driven surveillance, remapping classes like \'dop_side\', \'dop_top\', \'ship_side\', \'ship_top\' and updating <code>data.yaml</code>.',
    'project-2-tech': 'Technologies: Python',
    'project-2-features': 'Features: Class ID remapping, dataset configuration',
    'project-3-title': 'Flask Web Application',
    'project-3-desc': 'A responsive Flask app with a header inspired by etaklogistics.com, featuring a leave application form with fixed apply dates and selectable leave ranges.',
    'project-3-tech': 'Technologies: Flask, HTML, CSS, Bootstrap',
    'project-3-features': 'Features: Responsive design, form handling',
    'project-4-title': 'MS SQL Report Generator',
    'project-4-desc': 'A Python-based report generator using pyodbc, tkinter, and ReportLab, with a GUI for selecting report types and date ranges, exporting to PDF.',
    'project-4-tech': 'Technologies: Python, pyodbc, tkinter, ReportLab',
    'project-4-features': 'Features: GUI, PDF export, database integration',
    'project-5-title': 'Dynamic Directory Reader',
    'project-5-desc': 'A Python script to dynamically read directory structures (e.g., <code>C:\\github\\py01\\Etak\\hr.bak</code>) and file contents, encoding binary files in base64.',
    'project-5-tech': 'Technologies: Python',
    'project-5-features': 'Features: Dynamic file reading, base64 encoding',
    'project-6-title': 'Vue.js and Arco Design Exploration',
    'project-6-desc': 'Research into Vue.js for building user interfaces and Arco Design for enterprise UI components, aimed at modern web development.',
    'project-6-tech': 'Technologies: Vue.js, Arco Design',
    'project-6-features': 'Features: Component-based UI, enterprise design',
    'project-7-title': 'QR Code Frame and Poster',
    'project-7-desc': 'Designed a professional QR code frame and poster for event photo sharing, featuring elegant layouts with gold accents.',
    'project-7-tech': 'Technologies: Graphic Design',
    'project-7-features': 'Features: Elegant design, event branding',
    'project-8-title': 'Dolphin Image Editing',
    'project-8-desc': 'Edited drone-captured dolphin images to add realistic eyes, adjust glowing patterns, and change eye color to white for enhanced visual appeal.',
    'project-8-tech': 'Technologies: Image Editing',
    'project-8-features': 'Features: Realistic enhancements, color adjustments',
    'about-title': 'About Us',
    'about-desc': 'Visco is a leading technology firm headquartered in Hong Kong, with over 20 years of experience, renowned for its expertise in artificial intelligence, drone technology, advanced surveillance systems, and system development. Our mission is to provide cutting-edge, data-driven solutions that empower clients to tackle intricate challenges in data analytics, aerial reconnaissance, security infrastructure, and custom system development with unparalleled precision and efficiency.',
    'contact-title': 'Contact',
    'contact-text': 'Reach out to discuss projects or collaborations:',
    'contact-email': 'Email: <a href="mailto:info@visco.hk">info@visco.hk</a>',
    'footer-copyright': '© 2025 Visco. All rights reserved.',
    'footer-contact': 'Contact Us'
  },
  zh: {
    'company-name': '域高',
    'nav-projects': '項目',
    'nav-about': '關於',
    'nav-contact': '聯繫',
    'hero-title': '歡迎體驗 域高',
    'hero-subtitle': '探索我們在 Python、網頁開發、人工智能及設計方面的創新項目',
    'hero-cta': '探索項目',
    'projects-title': '我們的項目',
    'project-0-title': 'VTOL無人機海洋哺乳動物調查',
    'project-0-desc': '一個尖端的VTOL無人機系統，用於海洋哺乳動物的線性調查和照片識別觀察，專注於中華白海豚（<i>Sousa chinensis</i>）和江豚（<i>Neophocaena</i>）。採用人工智能驅動的圖像識別和環保的電動推進技術，確保精確的數據收集，同時對環境影響最小。',
    'project-0-tech': '技術：Python，人工智能，無人機技術',
    'project-0-features': '功能：實時物種識別，低碳足跡，高分辨率成像',
    'project-1-title': '圖像處理腳本',
    'project-1-desc': '一個用於處理圖像的 Python 腳本，具備 OpenCV 的 <code>cv2.seamlessClone</code> 錯誤處理功能，以及管理無人機拍攝的海豚圖像數據集（頂視圖和側視圖）。',
    'project-1-tech': '技術：Python, OpenCV',
    'project-1-features': '功能：錯誤記錄，批量處理',
    'project-2-title': 'YOLO 數據集管理',
    'project-2-desc': '用於合併和更新 YOLO 數據集標籤的腳本，針對人工智能驅動的監控，重新映射類別如 \'dop_side\'、\'dop_top\'、\'ship_side\'、\'ship_top\'，並更新 <code>data.yaml</code>。',
    'project-2-tech': '技術：Python',
    'project-2-features': '功能：類別 ID 重新映射，數據集配置',
    'project-3-title': 'Flask 網頁應用',
    'project-3-desc': '一個響應式 Flask 應用程式，參考 etaklogistics.com 的標頭設計，包含具有固定申請日期和可選休假範圍的休假申請表單。',
    'project-3-tech': '技術：Flask, HTML, CSS, Bootstrap',
    'project-3-features': '功能：響應式設計，表單處理',
    'project-4-title': 'MS SQL 報告生成器',
    'project-4-desc': '基於 Python 的報告生成器，使用 pyodbc、tkinter 和 ReportLab，具備選擇報告類型和日期範圍的圖形用戶界面，並可導出為 PDF。',
    'project-4-tech': '技術：Python, pyodbc, tkinter, ReportLab',
    'project-4-features': '功能：圖形用戶界面，PDF 導出，數據庫整合',
    'project-5-title': '動態目錄閱讀器',
    'project-5-desc': '一個動態閱讀目錄結構（例如 <code>C:\\github\\py01\\Etak\\hr.bak</code>）及文件內容的 Python 腳本，將二進制文件編碼為 base64。',
    'project-5-tech': '技術：Python',
    'project-5-features': '功能：動態文件閱讀，base64 編碼',
    'project-6-title': 'Vue.js 與 Arco Design 探索',
    'project-6-desc': '研究 Vue.js 用於構建用戶界面，以及 Arco Design 用於企業 UI 組件，目標是現代網頁開發。',
    'project-6-tech': '技術：Vue.js, Arco Design',
    'project-6-features': '功能：基於組件的 UI，企業設計',
    'project-7-title': 'QR Code 框架與海報',
    'project-7-desc': '為活動照片分享設計了專業的 QR Code 框架和海報，擁有金色點綴的優雅佈局。',
    'project-7-tech': '技術：圖形設計',
    'project-7-features': '功能：優雅設計，活動品牌推廣',
    'project-8-title': '海豚圖像編輯',
    'project-8-desc': '編輯無人機拍攝的海豚圖像，添加逼真的眼睛，調整發光圖案，並將眼睛顏色更改為白色以增強視覺吸引力。',
    'project-8-tech': '技術：圖像編輯',
    'project-8-features': '功能：逼真增強，顏色調整',
    'about-title': '關於我們',
    'about-desc': '域高 是一家總部設於香港的領先科技公司，擁有超過 20 年的經驗，以其在人工智能、無人機技術、先進監控系統及系統開發方面的專業知識而聞名。我們的使命是提供尖端、數據驅動的解決方案，幫助客戶以無與倫比的精確度和效率應對數據分析、空中偵察、安全基礎設施及定制系統開發中的複雜挑戰。',
    'contact-title': '聯繫我們',
    'contact-text': '聯繫我們以討論項目或合作：',
    'contact-email': '電郵：<a href="mailto:info@visco.hk">info@visco.hk</a>',
    'footer-copyright': '© 2025 域高。版權所有。',
    'footer-contact': '聯繫我們'
  }
};

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    setCurrentLang(newLang);
    document.querySelector('html')!.lang = newLang === 'en' ? 'en' : 'zh-Hant';
    console.log(`Language switched to ${newLang === 'en' ? 'English' : 'Traditional Chinese'}`);
  };

  const t = (key: string) => translations[currentLang][key];

  return (
    <div className="font-['Poppins','Noto_Sans_TC'] bg-gray-100 text-gray-800">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg z-50"
      >
        <div className="text-2xl font-semibold text-yellow-400" dangerouslySetInnerHTML={{ __html: t('company-name') }} />
        <div className="flex items-center gap-4">
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-yellow-400 transition-colors" dangerouslySetInnerHTML={{ __html: t('nav-projects') }} />
            <a href="#about" className="hover:text-yellow-400 transition-colors" dangerouslySetInnerHTML={{ __html: t('nav-about') }} />
            <a href="#contact" className="hover:text-yellow-400 transition-colors" dangerouslySetInnerHTML={{ __html: t('nav-contact') }} />
          </div>
          <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            🌐
          </button>
        </div>
      </motion.nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-white text-center py-20 bg-gradient-to-br from-yellow-400 to-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_10px,transparent_10px,transparent_20px)] opacity-30" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('hero-title') }} />
          <p className="text-xl mb-6" dangerouslySetInnerHTML={{ __html: t('hero-subtitle') }} />
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition-colors"
            dangerouslySetInnerHTML={{ __html: t('hero-cta') }}
          />
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <section id="projects">
          <h2 className="text-3xl font-bold text-center mb-8" dangerouslySetInnerHTML={{ __html: t('projects-title') }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2" dangerouslySetInnerHTML={{ __html: t(`project-${i}-title`) }} />
                <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: t(`project-${i}-desc`) }} />
                <ul className="list-disc pl-5 text-gray-700">
                  <li dangerouslySetInnerHTML={{ __html: t(`project-${i}-tech`) }} />
                  <li dangerouslySetInnerHTML={{ __html: t(`project-${i}-features`) }} />
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('about-title') }} />
          <p className="text-lg max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t('about-desc') }} />
        </section>

        <section id="contact" className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('contact-title') }} />
          <p className="text-lg mb-2" dangerouslySetInnerHTML={{ __html: t('contact-text') }} />
          <p dangerouslySetInnerHTML={{ __html: t('contact-email') }} />
        </section>
      </div>

      <footer className="bg-gray-900 text-white text-center py-8">
        <p dangerouslySetInnerHTML={{ __html: t('footer-copyright') }} />
        <p><a href="mailto:info@visco.hk" className="text-yellow-400 hover:underline" dangerouslySetInnerHTML={{ __html: t('footer-contact') }} /></p>
      </footer>
    </div>
  );
};

export default App;
