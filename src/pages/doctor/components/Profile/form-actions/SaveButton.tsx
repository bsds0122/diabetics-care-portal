import React from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { actionBtnClass } from "./styles";

export const SaveButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} className={actionBtnClass}>
      <Save className="w-4 h-4" />
      Save Updates
    </Button>
  );
};