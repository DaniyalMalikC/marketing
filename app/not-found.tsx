import { Button } from "@/components/atoms";
import { Icon } from "@/components/atoms";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Icon name="mdi:file-question-outline" size={120} className="text-muted-foreground" />
        </div>
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg">
            <Icon name="mdi:home" size={20} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
