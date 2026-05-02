import React from "react";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { actionBtnClass } from "./styles";

export const EditButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} className={actionBtnClass}>
      <Edit2 className="w-4 h-4" />
      Edit Profile
    </Button>
  );
};