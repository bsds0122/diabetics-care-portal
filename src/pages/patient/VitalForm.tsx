import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import DateSelectors from "@/pages/patient/components/manage/DateSelectors";
import VitalInputs from "@/pages/patient/components/manage/VitalInputs";
import SubmitButton from "@/pages/patient/components/manage/SubmitButton";

export default function VitalForm() {
  const [form, setForm] = useState({
    sugar: "",
    systolic: "",
    diastolic: "",
    height: "",
    weight: "",
    year: "",
    month: "",
    week: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.sugar || !form.systolic || !form.diastolic) {
      toast.error("Please fill in the required vital signs");
      return;
    }

    if (!form.year || !form.month || !form.week) {
      toast.error("Please select Year, Month, and Week");
      return;
    }

    toast.success("Health data saved successfully!");

    setForm({
      sugar: "",
      systolic: "",
      diastolic: "",
      height: "",
      weight: "",
      year: "",
      month: "",
      week: "",
    });
  };

  return (
    <Card className="rounded-2xl shadow-xl border-border bg-card">

      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center gap-2 text-base font-bold">
          <Plus className="w-5 h-5 text-primary" />
          Vital Input Form
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">

          <DateSelectors form={form} setForm={setForm} />
          <VitalInputs form={form} setForm={setForm} />
          <SubmitButton />

        </form>
      </CardContent>

    </Card>
  );
}