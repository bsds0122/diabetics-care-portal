import { CardHeader } from "@/components/ui/card";

export const HeaderWrapper = ({ children }) => {
  return (
    <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 bg-muted/5 py-5 px-6 space-y-0">
      {children}
    </CardHeader>
  );
};