
import ForgotPasswordForm from "./ForgotPasswordForm";
import {ForgotPasswordFooter} from "./ForgotPasswordFooter";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        

        {/* Form */}
        <div className="mt-6">
          <ForgotPasswordForm />
        </div>

        {/* Footer */}
        <div className="mt-6">
          <ForgotPasswordFooter />
        </div>
      </div>
    </div>
  );
}