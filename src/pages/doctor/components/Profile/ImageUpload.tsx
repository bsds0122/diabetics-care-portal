import React, { useRef } from "react";
import { User } from "lucide-react";

interface ImageUploadProps {
  preview?: string;
  handleProfileImageUpload: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  preview,
  handleProfileImageUpload,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        onClick={() => fileRef.current?.click()}
        className="flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-muted"
      >
        {preview ? (
          <img
            src={preview}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <User className="h-8 w-8 text-muted-foreground" />
        )}
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleProfileImageUpload}
      />
    </>
  );
};