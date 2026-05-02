import { Label } from "@/components/ui/label";

interface InfoFieldProps {
  id: string;
  label: string;
  value: string;
  isEditing: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function InfoField({ id, label, value, isEditing, icon, children, className = "" }: InfoFieldProps) {
  return (
    <div className={`space-y-2 group ${className}`}>
      <Label htmlFor={id} className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
        {icon}
        {label}
      </Label>
      <div className="min-h-[44px]">
        {isEditing ? (
          children
        ) : (
          <div className="text-base font-bold text-foreground/80 px-4 py-2 rounded-xl border border-transparent bg-muted/5 group-hover:bg-muted/10 transition-colors">
            {value || "—"}
          </div>
        )}
      </div>
    </div>
  );
}
