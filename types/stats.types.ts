export interface Demographics {
  totalPopulation: number;
  averageAge: number;
  households: number;
  medianIncome: string;
  populationDensity: string;
}

export interface PointsOfInterest {
  restaurants: number;
  hospitals: number;
  schools: number;
  gasStations: number;
  retailStores: number;
  cafes: number;
  gyms: number;
}

export interface BusinessIntelligence {
  avgFootTraffic: number;
  marketSaturation: "Low" | "Medium" | "High";
  growthScore: number;
  competitorDensity: "Low" | "Medium" | "High";
  investmentPotential: "Low" | "Medium" | "High" | "Very High";
}

export interface AreaStats {
  demographics: Demographics;
  pointsOfInterest: PointsOfInterest;
  businessIntelligence: BusinessIntelligence;
}
