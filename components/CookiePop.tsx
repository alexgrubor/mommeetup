'use client'
import { useState, useEffect } from 'react';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasCookieConsent = localStorage.getItem('cookieConsent');
    if (!hasCookieConsent) {
      setShowPopup(true);
      document.body.style.overflow = 'hidden'; // Disable scrolling on the body.
    }
  }, []);

  const acceptCookie = () => {
    setShowPopup(false);
    localStorage.setItem('cookieConsent', 'true');
    document.body.style.overflow = 'auto'; // Enable scrolling on the body.
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-cream text-center py-4">
      <div className="mx-auto flex flex-col gap-3 items-center">
        <p className="text-rose text-2xl">Mom Meet Up</p>
        <p className="text-rose text-xl">
          We use cookies to improve your experience on our site.
          By continuing to browse this website you are agreeing with their usage and privacy policy.
          
        </p>
        <button className="bg-rose w-1/4 text-white py-2 px-4 rounded-full text-lg" onClick={acceptCookie}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;