import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState("english");

  const handleSaveLanguage = () => {
    // TODO: Save language preference to API/localStorage
    console.log("Selected language:", language);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 animate-in fade-in duration-500">

      {/* Theme Preferences */}
      <Card className="border border-border/40 bg-card/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-base">
            Preferences
          </CardTitle>

          <CardDescription className="text-xs">
            Choose your theme mode
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs
            value={theme}
            onValueChange={(value) =>
              setTheme(value as "light" | "dark")
            }
          >
            <TabsList className="grid grid-cols-2 w-full text-xs">

              <TabsTrigger value="light" className="text-xs">
                <Sun className="h-4 w-4 mr-2" />
                Light
              </TabsTrigger>

              <TabsTrigger value="dark" className="text-xs">
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </TabsTrigger>

            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Language Settings */}
      <Card className="border border-border/40 bg-card/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-base">
            Language Settings
          </CardTitle>

          <CardDescription className="text-xs">
            Select your preferred language
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Tabs
            value={language}
            onValueChange={setLanguage}
          >
            <TabsList className="grid grid-cols-2 w-full text-xs">

              <TabsTrigger value="english">
                English
              </TabsTrigger>

              <TabsTrigger value="chichewa">
                Chichewa
              </TabsTrigger>

            </TabsList>
          </Tabs>

        </CardContent>
      </Card>

    </div>
  );
}