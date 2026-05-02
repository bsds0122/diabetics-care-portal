import { Button } from "@/components/ui/button";
import { Edit2, X, Save } from "lucide-react";

interface Props {
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  handleSave: () => void;
}

export function ProfileActions({
  isEditing,
  setIsEditing,
  handleSave,
}: Props) {
  return (
    <div className="md:ml-auto pb-4 flex gap-2">
      {!isEditing ? (
        <Button
          onClick={() => setIsEditing(true)}
          className="rounded-full px-6 shadow-md hover:shadow-lg transition-all"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setIsEditing(false)}
            className="rounded-full px-6"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            className="rounded-full px-8 shadow-md hover:shadow-lg transition-all bg-primary"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}