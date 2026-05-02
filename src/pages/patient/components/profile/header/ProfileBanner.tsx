export function ProfileBanner() {
    return (
      <div className="h-32 sm:h-36 bg-gradient-to-r from-blue-600 via-primary to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
      </div>
    );
  }