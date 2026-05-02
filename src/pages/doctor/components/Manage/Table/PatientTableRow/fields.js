export const patientFields = [
    { key: "firstName", className: "font-medium text-foreground lowercase" },
    { key: "lastName", className: "text-muted-foreground lowercase" },
    { key: "email", className: "text-primary/90 lowercase" },
    {
      key: "password",
      className: "text-muted-foreground/50 tracking-widest lowercase",
      formatter: () => "••••••••",
    },
  ];