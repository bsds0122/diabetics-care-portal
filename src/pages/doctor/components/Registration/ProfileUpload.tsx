import React, { useRef } from "react";
import { Upload } from "lucide-react";

import { ProfileUploadProps } from "@/types/registration";

export const ProfileUpload: React.FC<ProfileUploadProps> = ({
  image,
  onChange,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = React.useState<string | null>(
    typeof image === "string" ? image : null
  );

  React.useEffect(() => {
    if (image instanceof File) {
      const url = URL.createObjectURL(image);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    } else if (typeof image === "string") {
      setPreview(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    onChange(file);
  };

  return (
    <div className="flex items-center gap-4">
      <div
        onClick={() => fileRef.current?.click()}
        className="flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border"
      >
        {preview ? (
          <img
            src={preview}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <Upload className="h-5 w-5 text-muted-foreground" />
        )}
      </div>

      <div>
        <p className="font-medium">Profile Image</p>
        <p className="text-sm text-muted-foreground">
          Upload patient photo
        </p>
      </div>

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