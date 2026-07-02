
export const ActiveIndicator = ({ isSelected }) => {
  if (!isSelected) return null;

  return (
    <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-full shadow-lg shadow-primary/40" />
  );
};