import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Pill, ClipboardList, FileText, UserSearch } from "lucide-react";

export const PrescriptionBody = () => {
  return (
    <div className="p-6 space-y-8">

      {/* Patient ID */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground/90 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <UserSearch className="w-4 h-4" />
          </span>
          Patient ID
        </Label>

        <Input
          placeholder="Enter patient ID"
          className="h-12 rounded-xl border-border/60 bg-background shadow-sm
                     hover:border-primary/40 focus-visible:ring-2
                     focus-visible:ring-primary/20 transition-all duration-200"
        />
      </div>

      {/* Drug Information */}
      <div className="space-y-5">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="space-y-2">
            <Label>Drug Name</Label>
            <Input placeholder="Enter drug name" />
          </div>

          <div className="space-y-2">
            <Label>Dosage</Label>
            <Input placeholder="500mg / 1 tablet" />
          </div>

          <div className="space-y-2">
            <Label>Frequency</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="1">1 time daily</SelectItem>
                <SelectItem value="2">2 times daily</SelectItem>
                <SelectItem value="3">3 times daily</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Time to Take</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
                <SelectItem value="night">Night</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>Duration</Label>
            <Input placeholder="7 days / 30 days" />
          </div>

        </div>
      </div>

      {/* Treatment Details */}
      <div className="space-y-5">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="space-y-2">
            <Label>Total Tablets Required</Label>
            <Input placeholder="Auto calculated" disabled />
          </div>

          <div className="space-y-2">
            <Label>Availability Status</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select stock status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="low">Low Stock</SelectItem>
                <SelectItem value="out">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>Date Issued</Label>
            <Input type="date" />
          </div>

        </div>
      </div>

      {/* Patient Instructions */}
      <div className="space-y-5">
    
        <div className="space-y-2">
          <Label>Instructions</Label>

          <textarea
            rows={5}
            placeholder="Take after meals, drink water, avoid alcohol, complete dosage..."
            className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm resize-none outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

    </div>
  );
};