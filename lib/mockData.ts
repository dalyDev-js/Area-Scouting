import { AreaStats } from "@/types/stats.types";

export const generateMockStats = (): AreaStats => ({
  demographics: {
    totalPopulation: 124500,
    averageAge: 31.4,
    households: 42300,
    medianIncome: "$52,000",
    populationDensity: "8,200/km²",
  },
  pointsOfInterest: {
    restaurants: 234,
    hospitals: 12,
    schools: 28,
    gasStations: 45,
    retailStores: 189,
    cafes: 98,
    gyms: 34,
  },
  businessIntelligence: {
    avgFootTraffic: 8400,
    marketSaturation: "Medium",
    growthScore: 7.2,
    competitorDensity: "Low",
    investmentPotential: "High",
  },
});
