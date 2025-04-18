import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (message, type = 'info') => {
    const options = {
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark", 
    };

    switch (type) {
        case 'success':
            toast.success(message, options);
            break;
        case 'error':
            toast.error(message, options);
            break;
        case 'warn':
            toast.warn(message, options);
            break;
        case 'info':
        default:
            toast.info(message, options);
            break;
    }
};
