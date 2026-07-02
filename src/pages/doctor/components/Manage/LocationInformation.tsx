import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
  } from "@/components/ui/form";
  
  import { Input } from "@/components/ui/input";
  
  export const LocationInformation = ({ form }) => {
    return (
      <div className="grid grid-cols-2 gap-2">
  
        <FormField
          control={form.control}
          name="traditionalAuthority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>T.A.</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
  
        <FormField
          control={form.control}
          name="village"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Village</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
  
      </div>
    );
  };