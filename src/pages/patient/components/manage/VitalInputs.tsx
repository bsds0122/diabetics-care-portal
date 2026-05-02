import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function VitalInputs({ form, setForm }) {
  return (
    <>
      {/* BLOOD SUGAR */}
      <div>
        <Label>Blood Sugar (mg/dL)</Label>
        <Input
          type="number"
          value={form.sugar}
          onChange={(e) =>
            setForm({ ...form, sugar: e.target.value })
          }
        />
      </div>

      {/* BLOOD PRESSURE */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Systolic BP</Label>
          <Input
            type="number"
            value={form.systolic}
            onChange={(e) =>
              setForm({ ...form, systolic: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Diastolic BP</Label>
          <Input
            type="number"
            value={form.diastolic}
            onChange={(e) =>
              setForm({ ...form, diastolic: e.target.value })
            }
          />
        </div>
      </div>

      {/* PHYSICAL */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Height (cm)</Label>
          <Input
            type="number"
            value={form.height}
            onChange={(e) =>
              setForm({ ...form, height: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Weight (kg)</Label>
          <Input
            type="number"
            value={form.weight}
            onChange={(e) =>
              setForm({ ...form, weight: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
}