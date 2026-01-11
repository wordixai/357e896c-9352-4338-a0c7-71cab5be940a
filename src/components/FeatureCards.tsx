import { Link2, Clock, Lock, Dumbbell } from "lucide-react";
import { Avatar } from "./Avatar";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  apps: string;
  days: string[];
  activeDays: number[];
  colorClass: string;
  textColorClass: string;
}

const features: FeatureCardProps[] = [
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "按时吃药",
    time: "19:00",
    apps: "5个应用",
    days: ["一", "二", "三", "四", "五", "六", "日"],
    activeDays: [5, 6],
    colorClass: "bg-card-blue",
    textColorClass: "text-card-blue-dark",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "按时睡觉",
    time: "22:00",
    apps: "3个应用",
    days: ["二", "三", "四", "五", "六", "日"],
    activeDays: [],
    colorClass: "bg-card-purple",
    textColorClass: "text-card-purple-dark",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "专心工作",
    time: "9:00",
    apps: "8个应用",
    days: ["二", "三", "四", "五", "六", "日"],
    activeDays: [4, 5],
    colorClass: "bg-card-pink",
    textColorClass: "text-card-pink-dark",
  },
  {
    icon: <Dumbbell className="w-5 h-5" />,
    title: "不要错过锻炼",
    time: "7:00",
    apps: "3个分类",
    days: ["二", "三", "四", "五", "六", "日"],
    activeDays: [3, 4],
    colorClass: "bg-card-green",
    textColorClass: "text-card-green-dark",
  },
];

export function FeatureCards() {
  return (
    <section className="w-full overflow-hidden py-8 mt-8">
      <div className="flex gap-6 pl-0 md:pl-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  time,
  apps,
  days,
  activeDays,
  colorClass,
  textColorClass,
}: FeatureCardProps) {
  return (
    <div className={`${colorClass} rounded-3xl p-6 min-w-[300px] w-[300px] relative overflow-hidden flex-shrink-0`}>
      {/* Avatar */}
      <div className="absolute top-4 right-4 w-16 h-16">
        <Avatar />
      </div>

      {/* Icon and Title */}
      <div className={`flex items-center gap-2 ${textColorClass} mb-6`}>
        {icon}
        <span className="font-semibold text-lg">{title}</span>
      </div>

      {/* Time and Apps */}
      <div className={`${textColorClass} opacity-60 text-sm space-y-2 mb-8`}>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4" />
          <span>{apps}</span>
        </div>
      </div>

      {/* Days */}
      <div className="flex gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              activeDays.includes(index)
                ? "bg-card text-foreground shadow-sm"
                : `${textColorClass} opacity-30`
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
