import React from "react";
import { EditButton } from "./EditButton";
import { CancelButton } from "./CancelButton";
import { SaveButton } from "./SaveButton";

export const FormActions = ({
  isEditing,
  setIsEditing,
  handleSave,
}) => {
  return (
    <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-border">
      {!isEditing ? (
        <EditButton onClick={() => setIsEditing(true)} />
      ) : (
        <>
          <CancelButton onClick={() => setIsEditing(false)} />
          <SaveButton onClick={handleSave} />
        </>
      )}
    </div>
  );
};