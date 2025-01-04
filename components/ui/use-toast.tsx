import { useState } from 'react';

export default function useToast() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000); // Hide toast after 3 seconds
  };

  return { toastMessage, showToast };
}
