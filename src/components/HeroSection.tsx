import { Apple, Shuffle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center px-6 py-12">
      <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
        妈妈说，时间到了
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        妈妈闹钟让你按计划行事——屏蔽干扰，并督促你完成你承诺过的事。
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className="flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
          <Apple className="w-5 h-5" />
          下载 App
        </button>
        <button className="flex items-center gap-2 px-6 py-3.5 bg-card text-foreground rounded-full font-medium border border-border hover:bg-accent transition-colors">
          <Shuffle className="w-5 h-5" />
          换一换
        </button>
      </div>
    </section>
  );
}
