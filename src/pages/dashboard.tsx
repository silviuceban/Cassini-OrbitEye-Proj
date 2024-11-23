"use client";

import { BaseSyntheticEvent, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { FullScreenLoader } from "../components/fullScreenLoader";
import {
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  NativeSelect,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CropIcon from "@mui/icons-material/Crop";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { cn } from "../services/classNameService";
import AgriculturePlanForm from "../components/popup";

interface PredictionResult {
  probability: number;
  severity: "Low" | "Moderate" | "High" | "Extreme";
  recommendations: string[];
  insights: string[];
  graphData: {
    date: string;
    drought: number;
    humidity: number;
  }[];
  predictionStart: string;
  predictionEnd: string;
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const handlePredict = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const today = new Date();
      const oneYearAgo = new Date(
        today.getFullYear() - 1,
        today.getMonth(),
        today.getDate(),
      );
      const predictionEnd = new Date(
        today.getFullYear(),
        today.getMonth() + parseInt(selectedPeriod),
        today.getDate(),
      );

      const graphData = [];
      for (
        let d = new Date(oneYearAgo);
        d <= predictionEnd;
        d.setDate(d.getDate() + 1)
      ) {
        graphData.push({
          date: d.toISOString().split("T")[0],
          drought: Math.random() * 100,
          humidity: Math.random() * 100,
        });
      }

      setIsLoading(false);
      setResult({
        probability: 75,
        severity: "High",
        recommendations: [
          "Implement water-saving irrigation techniques",
          "Consider drought-resistant crops such as sorghum or millet",
          "Monitor soil moisture levels closely",
          "Develop a water conservation plan",
        ],
        insights: [
          "Historical data shows a 20% increase in drought frequency over the last decade",
          "El Niño conditions are likely to exacerbate drought risk in the coming months",
          "Groundwater levels are 30% below the 10-year average",
        ],
        graphData,
        predictionStart: today.toISOString().split("T")[0],
        predictionEnd: predictionEnd.toISOString().split("T")[0],
      });
    }, 2000);
  };

  const getSeverityColor = (severity: PredictionResult["severity"]) => {
    switch (severity) {
      case "Low":
        return "bg-green-500";
      case "Moderate":
        return "bg-yellow-500";
      case "High":
        return "bg-orange-500";
      case "Extreme":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="mb-3 flex w-full flex-col gap-3 p-3">
      {isLoading && <FullScreenLoader />}

      <div className="flex flex-row justify-center gap-3">
        <div
          className={cn(
            "bg-map flex min-h-[500px] basis-[1000px] flex-col items-center justify-center rounded-lg p-4",
            { "bg-selectedMap": !!selectedArea },
          )}
          onClick={() => setSelectedArea("point")}
        >
          {/* <p className="mb-4 text-green-700">Map Placeholder</p> */}
          {/* <div className="flex">
            <Button onClick={() => setSelectedArea("point")}>
              <FmdGoodIcon className="mr-2 h-4 w-4" /> Select Point
            </Button>
          </div> */}
        </div>
        <div className="flex w-full basis-[300px] flex-col items-end gap-6 px-5">
          <p>Select the poligon and the prediction period</p>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Period
            </InputLabel>
            <NativeSelect
              placeholder="Select period"
              inputProps={{
                name: "period",
                id: "uncontrolled-native",
              }}
              onChange={(e: BaseSyntheticEvent) => {
                setSelectedPeriod(e.target.value);
              }}
            >
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="9">9 months</option>
            </NativeSelect>
          </FormControl>

          <div className="flex w-full justify-evenly gap-2">
            <CropIcon />
            <FilterAltIcon />
            <FilterDramaIcon />
            <AutoAwesomeMotionIcon />
          </div>

          <span>
            <AgriculturePlanForm />
          </span>

          <Button
            onClick={handlePredict}
            disabled={isLoading || !selectedPeriod || !selectedArea}
            variant="outlined"
            sx={{
              backgroundColor:
                isLoading || !selectedPeriod || !selectedArea
                  ? "grey"
                  : "green",

              marginY: "20px",
              color: "white",
              width: "100%",
            }}
          >
            Start Prediction
          </Button>
          {selectedArea && (
            <p className="text-green-950">
              {selectedArea === "point" ? "Point" : "Polygon"} selection mode
              active
            </p>
          )}
        </div>
      </div>
      {result && (
        <div className="flex flex-col">
          <div className="space-y-6 rounded-lg bg-green-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-green-800">
              Prediction Result
            </h2>
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-lg font-medium text-green-700">
                  Drought Probability: {result.probability}%
                </p>
                <LinearProgress
                  value={result.probability}
                  className="h-10 w-full"
                  variant="determinate"
                  sx={{
                    height: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#e0e0e0", // Background color of the bar
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "black", // Color of the progress indicator
                    },
                  }}
                />
              </div>
              <div>
                <p className="mb-2 text-lg font-medium text-green-700">
                  Drought Severity:
                </p>
                <span
                  className={`inline-block rounded-full px-3 py-1 font-semibold text-white ${getSeverityColor(result.severity)}`}
                >
                  {result.severity}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-medium text-green-800">
                Recommendations:
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-green-700">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-xl font-medium text-green-800">
                Additional Insights:
              </h3>
              <div className="rounded-xl border-green-200 bg-green-100 p-4 text-green-800">
                <span className="flex gap-2">
                  <InfoIcon className="h-4 w-4" />
                  <h3>Important Information</h3>
                </span>
                <p className="ml-8">
                  <ul className="list-disc space-y-1 pl-5">
                    {result.insights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* <DroughtHumidityGraph
            data={result.graphData}
            predictionStart={result.predictionStart}
            predictionEnd={result.predictionEnd}
          /> */}
        </div>
      )}
    </div>
  );
}

//<Button onClick={() => setSelectedArea("polygon")}>
// {/* <div className="mr-2 h-4 w-4" /> */}
// Select Polygon
//</Button>;
