import { ProfileFormData } from "@/pages/patient/components/profile/types";
import { ProfileBanner } from "@/pages/patient/components/profile/header/ProfileBanner";
import { ProfileAvatar } from "@/pages/patient/components/profile/header/ProfileAvatar";
import { ProfileActions } from "@/pages/patient/components/profile/header/ProfileActions";

interface ProfileHeaderProps {
  formData: ProfileFormData;
  isEditing: boolean;
  profileImage: string | null;
  setIsEditing: (val: boolean) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

export function ProfileHeader({
  formData,
  isEditing,
  profileImage,
  setIsEditing,
  handleImageUpload,
  handleSave,
}: ProfileHeaderProps) {
  return (
    <>
      <ProfileBanner />

      <div className="px-6 sm:px-12 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-12">
          
          <ProfileAvatar
            formData={formData}
            profileImage={profileImage}
            isEditing={isEditing}
            handleImageUpload={handleImageUpload}
          />

          <ProfileActions
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            handleSave={handleSave}
          />
        </div>
      </div>
    </>
  );
}