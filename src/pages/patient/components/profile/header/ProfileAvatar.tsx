import { User, Camera } from "lucide-react";
import { ProfileFormData } from "@/pages/patient/components/profile/types";

interface Props {
  formData: ProfileFormData;
  profileImage: string | null;
  isEditing: boolean;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ProfileAvatar({
  formData,
  profileImage,
  isEditing,
  handleImageUpload,
}: Props) {
  return (
    <div className="relative group">
      {/* Smaller Avatar */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-card bg-muted overflow-hidden flex items-center justify-center shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        {profileImage ? (
          <img
            src={profileImage}
            className="w-full h-full object-cover"
            alt={`${formData.firstName} ${formData.lastName}`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
            <User className="w-10 h-10 sm:w-12 sm:h-12 text-primary/40" />
          </div>
        )}
      </div>

      {/* Smaller upload button */}
      {isEditing && (
        <label
          htmlFor="profile-upload"
          className="absolute bottom-1 right-1 bg-primary hover:bg-primary/90 text-white p-2 rounded-full cursor-pointer shadow-md transition-all hover:scale-110"
        >
          <Camera className="w-3.5 h-3.5" />
          <input
            id="profile-upload"
            type="file"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </label>
      )}
    </div>
  );
}