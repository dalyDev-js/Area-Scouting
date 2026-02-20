import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AreaStats } from "@/types/stats.types";

const fetchAreaStats = async (
  coordinates: number[][][],
): Promise<AreaStats> => {
  const { data } = await api.post("/api/area-stats", { coordinates });
  return data;
};

export const useAreaStats = () => {
  return useMutation({
    mutationFn: fetchAreaStats,
  });
};
