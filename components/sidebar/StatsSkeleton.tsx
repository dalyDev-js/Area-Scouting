import { Skeleton } from "@/components/ui/skeleton";

export default function StatsSkeleton() {
  return (
    <div className="flex flex-col gap-3 p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <Skeleton className="h-4 w-24 bg-zinc-800" />
            <Skeleton className="h-4 w-4 bg-zinc-800" />
          </div>
          <Skeleton className="h-8 w-32 bg-zinc-800" />
        </div>
      ))}
    </div>
  );
}
