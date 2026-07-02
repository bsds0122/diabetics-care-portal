import React from "react";
import { SaveButton } from "./SaveButton";

export const FormActions = ({ handleSave }) => {
  return (
    <div className="mt-8 flex justify-end border-t border-border pt-4">
      <SaveButton onClick={handleSave} />
    </div>
  );
};