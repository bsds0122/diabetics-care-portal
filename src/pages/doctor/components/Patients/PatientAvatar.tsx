import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const PatientAvatar = ({
  avatar,
  firstName,
  lastName,
  isSelected,
}) => {
  return (
    <Avatar
      className={`h-10 w-10 border relative z-10 ${
        isSelected
          ? "border-primary shadow-md shadow-primary/20 scale-[1.02]"
          : "border-border group-hover:border-primary/40 group-hover:scale-[1.01]"
      }`}
    >
      <AvatarImage
        src={avatar}
        alt={`${firstName} ${lastName}`}
        className="object-cover"
      />
      <AvatarFallback className="bg-primary/15 text-primary font-bold text-xs">
        {firstName?.[0] || ""}
        {lastName?.[0] || ""}
      </AvatarFallback>
    </Avatar>
  );
};