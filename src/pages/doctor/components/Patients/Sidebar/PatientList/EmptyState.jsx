export const EmptyState = ({
    message = "No data found.",
    icon = "🔍",
  }) => {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-3 opacity-60">
  
        <div className="w-12 h-12 rounded-2xl bg-muted/20 flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
  
        <p className="text-xs font-medium text-muted-foreground">
          {message}
        </p>
  
      </div>
    );
  };