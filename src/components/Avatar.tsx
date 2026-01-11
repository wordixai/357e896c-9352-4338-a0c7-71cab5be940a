export function Avatar() {
  return (
    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Background */}
        <circle cx="50" cy="50" r="48" fill="#FEF3E2" />

        {/* Hair */}
        <ellipse cx="50" cy="35" rx="30" ry="25" fill="#8B6914" />
        <ellipse cx="25" cy="45" rx="10" ry="15" fill="#8B6914" />
        <ellipse cx="75" cy="45" rx="10" ry="15" fill="#8B6914" />

        {/* Face */}
        <ellipse cx="50" cy="55" rx="25" ry="28" fill="#FFE4C4" />

        {/* Eyes */}
        <ellipse cx="40" cy="52" rx="3" ry="4" fill="#333" />
        <ellipse cx="60" cy="52" rx="3" ry="4" fill="#333" />

        {/* Eyebrows */}
        <path d="M35 46 Q40 44 45 46" stroke="#8B6914" strokeWidth="2" fill="none" />
        <path d="M55 46 Q60 44 65 46" stroke="#8B6914" strokeWidth="2" fill="none" />

        {/* Smile */}
        <path d="M40 65 Q50 72 60 65" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Cheeks */}
        <circle cx="32" cy="60" r="5" fill="#FFB6C1" opacity="0.5" />
        <circle cx="68" cy="60" r="5" fill="#FFB6C1" opacity="0.5" />
      </svg>
    </div>
  );
}
