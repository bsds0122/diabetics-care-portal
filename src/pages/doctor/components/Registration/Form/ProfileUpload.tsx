import React, { useRef } from "react";
import { Upload } from "lucide-react";

interface ProfileUploadProps {
  image?: string;
  onChange: (imageUrl: string) => void;
}

export const ProfileUpload: React.FC<ProfileUploadProps> = ({
  image,
  onChange,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    onChange(imageUrl);
  };

  return (
    <div className="flex items-center gap-6">

      {/* Avatar (MEDIUM SIZE) */}
      <div
        onClick={() => fileRef.current?.click()}
        className="
          w-28 h-28 rounded-full
          border border-border/60
          bg-muted/20
          flex items-center justify-center
          cursor-pointer overflow-hidden
          shadow-sm
          hover:shadow-md hover:border-primary/40
          transition-all duration-200
        "
      >
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <Upload className="w-6 h-6 text-primary opacity-80" />
        )}
      </div>

      {/* Text */}
      <div className="space-y-1">
        <p className="text-sm font-semibold text-foreground">
          Profile Image
        </p>
        <p className="text-xs text-muted-foreground">
          Click to upload patient photo
        </p>
      </div>

      {/* Hidden input */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
};