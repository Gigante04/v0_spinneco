import { useState } from 'react';

/**
 * useToast - A custom hook for managing toast notifications.
 */
export default function useToast() {
  const [toastMessage, setToastMessage] = useState<string | null>(null); // State to manage the toast message

  /**
   * showToast - Function to display a toast message.
   * @param message - The message to display in the toast.
   */
  const showToast = (message: string) => {
    setToastMessage(message); // Set the toast message
    setTimeout(() => setToastMessage(null), 3000); // Clear the toast after 3 seconds
  };

  return { toastMessage, showToast }; // Return the state and the function
}
