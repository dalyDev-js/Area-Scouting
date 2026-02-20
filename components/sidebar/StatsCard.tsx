import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  delay?: number;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  delay = 0,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">
            {title}
          </CardTitle>
          <Icon className="w-4 h-4 text-zinc-400" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-white">{value}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
