import React, { useRef } from "react";
import { Upload, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const actionBtnClass =
  "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed";

interface AssessmentExcelUploadProps {
  onUpload?: (file: File) => void;
  loading?: boolean;
}

export const AssessmentExcelUpload: React.FC<AssessmentExcelUploadProps> = ({ 
  onUpload,
  loading = false
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (onUpload) {
      onUpload(file);
    }

    // Reset input value
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <>
      <input
        ref={fileRef}
        type="file"
        accept=".xlsx,.xls,.csv"
        className="hidden"
        onChange={handleExcelUpload}
        disabled={loading}
      />
      <button
        type="button"
        disabled={loading}
        onClick={() => fileRef.current?.click()}
        className={cn(actionBtnClass, "text-base")}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" />
            Upload Excel File
          </>
        )}
      </button>
    </>
  );
};
