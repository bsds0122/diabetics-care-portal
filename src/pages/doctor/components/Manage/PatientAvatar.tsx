import { Camera } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const PatientAvatar = ({
  avatar,
  firstName,
  lastName,
  onImageUpload,
}) => {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="relative">
        <Avatar className="h-12 w-12 border">
          <AvatarImage src={avatar} />
          <AvatarFallback>
            {firstName?.[0]}
            {lastName?.[0]}
          </AvatarFallback>
        </Avatar>

        <label className="absolute -right-1 -bottom-1 bg-primary text-white p-1 rounded-full cursor-pointer">
          <Camera className="h-3 w-3" />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={onImageUpload}
          />
        </label>
      </div>
    </div>
  );
};