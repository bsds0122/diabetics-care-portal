import { useState } from "react";
import { contactService } from "@/services/contactService";
import { getErrorMessage } from "@/utils/errorHandler";

export const useContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

 

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  
    setIsLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const res = await contactService.submitContactForm({
        email,
        subject,
        message,
      });
  
      if (res.statusCode === 200) {
        setSuccess(res.message);
  
        // Clear form after success
        setEmail("");
        setSubject("");
        setMessage("");
  
        // Hide success message after 2 seconds
        setTimeout(() => {
          setSuccess(null);
        }, 2000);
  
      } else {
        setError(res.message);
  
        // Hide error message after 2 seconds
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
    } catch (err) {
      const errorMessage = getErrorMessage(err);
  
      setError(errorMessage);
  
      // Hide error message after 2 seconds
      setTimeout(() => {
        setError(null);
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setSubject("");
    setMessage("");
    setError(null);
    setSuccess(null);
  };

  return {
    // Form fields
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,

    // UI state
    isLoading,
    success,
    error,

    // Actions
    handleSubmit,
    resetForm,
  };
};