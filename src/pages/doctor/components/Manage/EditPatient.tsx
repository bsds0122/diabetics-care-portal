import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

import { PatientAvatar } from "./PatientAvatar";
import { PersonalInformation } from "./PersonalInformation";
import { MedicalInformation } from "./MedicalInformation";
import { LocationInformation } from "./LocationInformation";

export const EditPatient = ({
  isOpen,
  onOpenChange,
  form,
  onSubmit,
  loading = false,
  handleImageUpload,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-4">

        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Edit Patient
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

            <PatientAvatar
              avatar={form.watch("avatar")}
              firstName={form.watch("firstName")}
              lastName={form.watch("lastName")}
              onImageUpload={handleImageUpload}
            />

            <PersonalInformation form={form} />
            <MedicalInformation form={form} />
            <LocationInformation form={form} />

            <DialogFooter className="flex gap-2 pt-2">

              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Cancel
              </Button>

              <Button type="submit" className="flex-1" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save"
                )}
              </Button>

            </DialogFooter>

          </form>
        </Form>

      </DialogContent>
    </Dialog>
  );
};