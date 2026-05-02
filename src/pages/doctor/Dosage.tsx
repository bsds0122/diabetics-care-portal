import { DosagePage } from "@/pages/doctor/components/Dosage/TreatmentTableCard";
import { useDosage } from "@/hooks/doctor/useDosage";

const Dosage = () => {
  const { treatments, handleEdit } = useDosage();

  return (
    <div className="space-y-6">
      <div className="flex-1 w-full">
        <DosagePage
         
         
        />
      </div>
    </div>
  );
};

export default Dosage;