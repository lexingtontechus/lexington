import { OVERVIEW } from "../data";

import { default as PageClient } from "./page-client";

export default async function Page(props) {
  const params = await props.params;
  const overview = OVERVIEW.find((p) => p.slug === params.slug);

  return <PageClient overview={overview} overviews={OVERVIEW} />;
}

export async function generateStaticParams() {
  return OVERVIEW.map((overview) => ({
    params: { slug: overview.slug },
  }));
}

export const dynamic = "force-static";
