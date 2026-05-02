// SymptomFormCard.tsx
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
  
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
  
  import { ClipboardList, Send } from "lucide-react";
  import { Doctor } from "@/pages/patient/components/dashboard/symptoms/types";
  
  interface Props {
    selectedDoctor: Doctor | null;
  }
  
  export function SymptomFormCard({
    selectedDoctor,
  }: Props) {
    return (
      <Card className="rounded-2xl border shadow-sm bg-card/20 backdrop-blur-xl lg:col-span-2 flex flex-col">
        <CardHeader className="border-b space-y-4">
          <CardTitle className="text-sm font-bold text-primary flex items-center gap-2">
            <ClipboardList className="w-4 h-4" />
            Symptom Report
          </CardTitle>
  
          {selectedDoctor && (
            <div className="flex items-center gap-3 p-3 rounded-xl border bg-muted/30">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                />
                <AvatarFallback>
                  {selectedDoctor.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
  
              <div>
                <p className="text-sm font-semibold">
                  {selectedDoctor.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {selectedDoctor.specialty}
                </p>
              </div>
            </div>
          )}
        </CardHeader>
  
        <CardContent className="pt-5 flex-grow bg-card/20 backdrop-blur-xl">
          <Textarea
            placeholder="Describe your symptoms here..."
            className="min-h-[320px] resize-none bg-card/20 backdrop-blur-xl border-muted focus-visible:ring-primary"
          />
        </CardContent>
  
        <CardFooter className="border-t pt-4 flex justify-end">
          <Button className="px-6 flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send
          </Button>
        </CardFooter>
      </Card>
    );
  }