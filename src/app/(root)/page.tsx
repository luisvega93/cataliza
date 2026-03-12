import type { Metadata } from "next";

import { RootRedirect } from "@/components/root-redirect";
import { siteName } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteName} | Language chooser`,
  description: "Select Spanish or English to enter the Cataliza Capital site.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function IndexPage() {
  return <RootRedirect />;
}
