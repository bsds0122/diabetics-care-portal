export const WaveEmoji = () => {
  return (
    <>
      <span className="inline-block animate-[wave_1.5s_ease-in-out_infinite] origin-[70%_70%]">
        👋
      </span>

      {/* Custom animation */}
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            15% { transform: rotate(14deg); }
            30% { transform: rotate(-8deg); }
            45% { transform: rotate(14deg); }
            60% { transform: rotate(-4deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
    </>
  );
};