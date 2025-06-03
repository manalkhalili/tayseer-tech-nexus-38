import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // أو 'auto' إذا كنت لا تفضل الحركة الناعمة
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
