import { AlertTriangle } from "lucide-react";

export const EmergencyNotice = () => {
  return (
    <div className="rounded-3xl border-l-4 border-l-amber-600 border border-amber-200 bg-amber-50 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />

        <div>
          <h3 className="text-lg font-semibold text-amber-900">
            Emergency Notice
          </h3>

          <p className="mt-2 text-sm leading-6 text-amber-800">
            This contact form is not intended for emergency medical
            situations. If you experience severe symptoms, loss of
            consciousness, chest pain, or any urgent medical condition,
            please visit the emergency department immediately or contact
            your local emergency services.
          </p>
        </div>
      </div>
    </div>
  );
};