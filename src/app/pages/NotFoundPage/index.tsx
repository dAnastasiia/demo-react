import { ExternalLayout } from "@/layouts";

export default function NotFoundPage() {
  return (
    <ExternalLayout
      title="Sorry, page not found!"
      description="Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be sure to check your spelling."
    />
  );
}
