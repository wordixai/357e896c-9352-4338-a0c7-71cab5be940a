import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm">
          <span className="text-2xl">👶</span>
          <span className="font-semibold text-foreground">妈妈闹钟</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-2 py-2 bg-card rounded-full border border-border shadow-sm">
          <a href="#" className="px-4 py-2 text-foreground hover:bg-accent rounded-full transition-colors">
            主页
          </a>
          <a href="#" className="px-4 py-2 text-foreground hover:bg-accent rounded-full transition-colors">
            功能
          </a>
          <a href="#" className="px-4 py-2 text-foreground hover:bg-accent rounded-full transition-colors">
            帮助
          </a>
          <a href="#" className="px-4 py-2 text-foreground hover:bg-accent rounded-full transition-colors">
            博客
          </a>
          <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:bg-accent rounded-full transition-colors">
            中文
            <ChevronDown className="w-4 h-4" />
          </button>
        </nav>

        {/* CTA Button */}
        <button className="px-5 py-2.5 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
          下载 App
        </button>
      </div>
    </header>
  );
}
