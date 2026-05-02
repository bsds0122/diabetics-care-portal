import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileAvatar = ({ avatar, name, initials }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-lg pointer-events-none" />

      <Avatar className="relative h-10 w-10 border-2 border-blue-600 shadow-lg shrink-0">
        <AvatarImage
          src={avatar}
          alt={name}
          className="object-cover rounded-full"
        />
        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-500 text-white text-xs font-bold">
          {initials}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};