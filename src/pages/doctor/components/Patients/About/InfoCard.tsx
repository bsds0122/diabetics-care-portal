

export const InfoCard = ({ label, value }) => {
  return (
    <div className="relative bg-card/20 backdrop-blur-xl border border-border/60 rounded-xl p-4 hover:bg-muted/40 hover:shadow-primary/5 group overflow-hidden">

      {/* subtle glow accent */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* label */}
      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">
        {label}
      </p>

      {/* value */}
      <p className="font-semibold text-foreground mt-1 tracking-tight group-hover:text-primary">
        {value}
      </p>

    </div>
  );
};