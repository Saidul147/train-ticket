import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { makeHomeHead } from "@/lib/i18n";

export const Route = createFileRoute("/bn/")({
  head: () => makeHomeHead("bn"),
  component: HomePage,
});
