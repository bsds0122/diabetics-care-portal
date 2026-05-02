import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";

interface ProfileHeaderProps {
  name: string;
  email: string;
}

export const ProfileHeader = ({ name, email }: ProfileHeaderProps) => {
  return (
    <DropdownMenuLabel className="font-normal">
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-semibold text-foreground leading-none">{name}</p>
        <p className="text-xs text-muted-foreground leading-none">
          {email}
        </p>
      </div>
    </DropdownMenuLabel>
  );
};