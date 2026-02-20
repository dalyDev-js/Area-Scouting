import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Building2, TrendingUp } from "lucide-react";
import { AreaStats } from "@/types/stats.types";
import StatsCard from "./StatsCard";
import EmptyState from "./EmptyState";
import StatsSkeleton from "./StatsSkeleton";

interface SidebarProps {
  stats: AreaStats | null;
  isLoading: boolean;
}

export default function Sidebar({ stats, isLoading }: SidebarProps) {
  return (
    <div className="h-full bg-zinc-950 border-l border-zinc-800 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800">
        <h1 className="text-white font-bold text-xl">Area Intelligence</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Draw a polygon to explore insights
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <StatsSkeleton />
        ) : !stats ? (
          <EmptyState />
        ) : (
          <Tabs defaultValue="demographics" className="p-4">
            <TabsList className="w-full bg-zinc-900 mb-4">
              <TabsTrigger value="demographics" className="flex-1">
                <Users className="w-4 h-4 mr-1" />
                People
              </TabsTrigger>
              <TabsTrigger value="poi" className="flex-1">
                <Building2 className="w-4 h-4 mr-1" />
                Places
              </TabsTrigger>
              <TabsTrigger value="business" className="flex-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                Business
              </TabsTrigger>
            </TabsList>

            {/* Demographics Tab */}
            <TabsContent value="demographics" className="flex flex-col gap-3">
              <StatsCard
                title="Total Population"
                value={stats.demographics.totalPopulation.toLocaleString()}
                icon={Users}
                delay={0}
              />
              <StatsCard
                title="Average Age"
                value={stats.demographics.averageAge}
                icon={Users}
                delay={0.1}
              />
              <StatsCard
                title="Households"
                value={stats.demographics.households.toLocaleString()}
                icon={Users}
                delay={0.2}
              />
              <StatsCard
                title="Median Income"
                value={stats.demographics.medianIncome}
                icon={Users}
                delay={0.3}
              />
              <StatsCard
                title="Population Density"
                value={stats.demographics.populationDensity}
                icon={Users}
                delay={0.4}
              />
            </TabsContent>

            {/* POI Tab */}
            <TabsContent value="poi" className="flex flex-col gap-3">
              <StatsCard
                title="Restaurants"
                value={stats.pointsOfInterest.restaurants}
                icon={Building2}
                delay={0}
              />
              <StatsCard
                title="Hospitals"
                value={stats.pointsOfInterest.hospitals}
                icon={Building2}
                delay={0.1}
              />
              <StatsCard
                title="Schools"
                value={stats.pointsOfInterest.schools}
                icon={Building2}
                delay={0.2}
              />
              <StatsCard
                title="Gas Stations"
                value={stats.pointsOfInterest.gasStations}
                icon={Building2}
                delay={0.3}
              />
              <StatsCard
                title="Retail Stores"
                value={stats.pointsOfInterest.retailStores}
                icon={Building2}
                delay={0.4}
              />
              <StatsCard
                title="Cafes"
                value={stats.pointsOfInterest.cafes}
                icon={Building2}
                delay={0.5}
              />
              <StatsCard
                title="Gyms"
                value={stats.pointsOfInterest.gyms}
                icon={Building2}
                delay={0.6}
              />
            </TabsContent>

            {/* Business Tab */}
            <TabsContent value="business" className="flex flex-col gap-3">
              <StatsCard
                title="Avg Foot Traffic"
                value={`${stats.businessIntelligence.avgFootTraffic.toLocaleString()}/day`}
                icon={TrendingUp}
                delay={0}
              />
              <StatsCard
                title="Market Saturation"
                value={stats.businessIntelligence.marketSaturation}
                icon={TrendingUp}
                delay={0.1}
              />
              <StatsCard
                title="Growth Score"
                value={`${stats.businessIntelligence.growthScore}/10`}
                icon={TrendingUp}
                delay={0.2}
              />
              <StatsCard
                title="Competitor Density"
                value={stats.businessIntelligence.competitorDensity}
                icon={TrendingUp}
                delay={0.3}
              />
              <StatsCard
                title="Investment Potential"
                value={stats.businessIntelligence.investmentPotential}
                icon={TrendingUp}
                delay={0.4}
              />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}
