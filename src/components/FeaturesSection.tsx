import { Clock, Lock } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          专治拖延，强制执行
        </h2>
        <p className="text-muted-foreground text-lg">
          把你说过的计划，变成每天都会发生的事。
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Card - Schedule */}
        <div className="space-y-4">
          <div className="bg-feature-yellow rounded-3xl p-6 aspect-[4/3] flex items-end justify-center overflow-hidden relative">
            {/* Decorative diagonal stripes */}
            <div className="absolute top-0 right-0 w-full h-32">
              <div className="absolute top-8 right-0 w-[120%] h-8 bg-feature-orange/40 -rotate-12 origin-right" />
              <div className="absolute top-16 right-0 w-[120%] h-6 bg-feature-pink/40 -rotate-12 origin-right" />
            </div>

            {/* Purple Card */}
            <div className="bg-card-purple rounded-2xl p-5 w-full max-w-[320px] relative z-10 mb-4">
              <div className="text-card-purple-dark space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold text-xl">14:00</span>
                </div>
                <div className="flex items-center gap-2 opacity-70">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm">3个应用和5个网站</span>
                </div>
              </div>

              {/* Days */}
              <div className="flex gap-2 mt-4">
                {["一", "二", "三", "四", "五", "六", "日"].map((day, index) => (
                  <div
                    key={day}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${
                      index >= 4
                        ? "bg-card text-foreground shadow-sm"
                        : "text-card-purple-dark opacity-40"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              她说什么时候，就是什么时候
            </h3>
            <p className="text-muted-foreground">
              设定不讲条件的闹钟。时间一到，没有商量。
            </p>
          </div>
        </div>

        {/* Right Card - Apps */}
        <div className="space-y-4">
          <div className="bg-feature-beige rounded-3xl p-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
            {/* Stacked App Icons */}
            <div className="relative w-48 h-48">
              {/* Back app - Green (WeChat-like) */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-lg transform rotate-12" />

              {/* Middle app - Pink/Red */}
              <div className="absolute top-8 right-8 w-28 h-28 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl shadow-lg transform rotate-6" />

              {/* Front app - TikTok-like with lock */}
              <div className="absolute top-12 right-16 w-32 h-32 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-xl flex items-center justify-center">
                {/* TikTok-like logo */}
                <div className="relative">
                  <svg viewBox="0 0 48 48" className="w-16 h-16">
                    <path d="M38.4 14.4c-3.6 0-6.6-2.1-8.1-5.1v19.2c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12c.6 0 1.2 0 1.8.15v6.15c-.6-.15-1.2-.3-1.8-.3-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6V3h6c0 .6.15 1.2.3 1.8 1.2 4.2 5.1 7.2 9.6 7.2v6.3c-1.2.3-2.4.45-3.6.45" fill="url(#tiktok-gradient)" />
                    <defs>
                      <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#25F4EE" />
                        <stop offset="50%" stopColor="#FE2C55" />
                        <stop offset="100%" stopColor="#FE2C55" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Lock icon */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-card rounded-xl shadow-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              她会把手机收走
            </h3>
            <p className="text-muted-foreground">
              妈妈闹钟会屏蔽让你分心的 App和网站，让你专心做该做的事。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
