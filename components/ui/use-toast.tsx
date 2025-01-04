import { useState } from 'react';

interface ToastOptions {
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'destructive';
}

export default function useToast() {
  const [toast, setToast] = useState<ToastOptions | null>(null);

  /**
   * showToast - Function to display a toast with options.
   * @param options - Object containing title, description, and variant.
   */
  const showToast = (options: ToastOptions) => {
    setToast(options);
    setTimeout(() => setToast(null), 3000); // Clear the toast after 3 seconds
  };

  return { toast, showToast };
}
