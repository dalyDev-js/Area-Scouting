import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-full gap-4 text-center p-8">
      <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
        <MapPin className="w-8 h-8 text-zinc-400" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg">No Area Selected</h3>
        <p className="text-zinc-400 text-sm mt-1">
          Draw a polygon on the map to explore area intelligence insights
        </p>
      </div>
    </motion.div>
  );
}
