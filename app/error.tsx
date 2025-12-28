"use client";

import { Button } from "@/components/atoms";
import { Icon } from "@/components/atoms";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <Icon name="mdi:alert-circle-outline" size={120} className="text-destructive" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-destructive">Something went wrong</h1>
        <p className="mb-8 text-muted-foreground">
          {error.message || "An unexpected error occurred"}
        </p>
        <Button onClick={reset} size="lg">
          <Icon name="mdi:refresh" size={20} />
          Try Again
        </Button>
      </div>
    </div>
  );
}
