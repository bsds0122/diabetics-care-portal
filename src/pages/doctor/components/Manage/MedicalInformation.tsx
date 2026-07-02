import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
  } from "@/components/ui/form";
  
  import { Input } from "@/components/ui/input";
  
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select";
  
  export const MedicalInformation = ({ form }) => {
    return (
      <div className="grid grid-cols-2 gap-2">
  
        <FormField
          control={form.control}
          name="diabetesType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diabetes Type</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Type 1">Type 1</SelectItem>
                  <SelectItem value="Type 2">Type 2</SelectItem>
                  <SelectItem value="Gestational">Gestational</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
  
        <FormField
          control={form.control}
          name="dateOfDiagnosis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diagnosis Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
  
      </div>
    );
  };