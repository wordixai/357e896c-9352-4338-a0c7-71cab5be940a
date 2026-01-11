export function ProductBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
      <Badge title="Product of the day" rank="1st" />
      <Badge title="Product of the week" rank="1st" />
    </div>
  );
}

function Badge({ title, rank }: { title: string; rank: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* Left laurel */}
      <svg className="w-8 h-12 text-laurel" viewBox="0 0 32 48" fill="none">
        <path d="M28 4C24 8 20 14 18 24C16 34 18 42 20 46" stroke="currentColor" strokeWidth="2" fill="none"/>
        <ellipse cx="24" cy="8" rx="4" ry="6" fill="currentColor" transform="rotate(-20 24 8)"/>
        <ellipse cx="22" cy="16" rx="4" ry="6" fill="currentColor" transform="rotate(-10 22 16)"/>
        <ellipse cx="20" cy="24" rx="4" ry="6" fill="currentColor" transform="rotate(0 20 24)"/>
        <ellipse cx="20" cy="32" rx="4" ry="6" fill="currentColor" transform="rotate(10 20 32)"/>
        <ellipse cx="22" cy="40" rx="4" ry="6" fill="currentColor" transform="rotate(20 22 40)"/>
      </svg>

      <div className="text-center">
        <p className="text-primary font-medium text-sm">{title}</p>
        <p className="text-primary font-bold text-2xl">{rank}</p>
      </div>

      {/* Right laurel */}
      <svg className="w-8 h-12 text-laurel transform scale-x-[-1]" viewBox="0 0 32 48" fill="none">
        <path d="M28 4C24 8 20 14 18 24C16 34 18 42 20 46" stroke="currentColor" strokeWidth="2" fill="none"/>
        <ellipse cx="24" cy="8" rx="4" ry="6" fill="currentColor" transform="rotate(-20 24 8)"/>
        <ellipse cx="22" cy="16" rx="4" ry="6" fill="currentColor" transform="rotate(-10 22 16)"/>
        <ellipse cx="20" cy="24" rx="4" ry="6" fill="currentColor" transform="rotate(0 20 24)"/>
        <ellipse cx="20" cy="32" rx="4" ry="6" fill="currentColor" transform="rotate(10 20 32)"/>
        <ellipse cx="22" cy="40" rx="4" ry="6" fill="currentColor" transform="rotate(20 22 40)"/>
      </svg>
    </div>
  );
}
