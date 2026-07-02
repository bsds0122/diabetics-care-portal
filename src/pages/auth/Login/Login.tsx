
import { LoginForm } from "./LoginForm";


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        

        {/* Form */}
        <div className="mt-6">
          <LoginForm />
        </div>

      </div>
    </div>
  );
}