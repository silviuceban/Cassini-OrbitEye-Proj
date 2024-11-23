import { CircularProgress } from "@mui/material";

export function FullScreenLoader() {
  return (
    <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
        <CircularProgress />
        <p className="text-primary mt-4 text-lg font-semibold">
          Calculating drought prediction...
        </p>
      </div>
    </div>
  );
}
