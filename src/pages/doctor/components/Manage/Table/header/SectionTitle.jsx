import { CardTitle } from "@/components/ui/card";

export const SectionTitle = ({ children }) => {
  return (
    <CardTitle className="text-lg font-bold text-foreground">
      {children}
    </CardTitle>
  );
};