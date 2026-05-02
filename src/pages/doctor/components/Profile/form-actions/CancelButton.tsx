import React from "react";
import { Button } from "@/components/ui/button";

export const CancelButton = ({ onClick }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className="
        flex items-center gap-2
        px-6 py-2.5
        rounded-xl
        font-medium

        border border-border
        text-muted-foreground
        bg-transparent

        hover:bg-muted/40
        hover:text-foreground

        transition-all duration-200
      "
    >
      Cancel
    </Button>
  );
};