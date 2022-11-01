import { json, LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

type Property = {
  basic_information: {
    title: string;
    local_and_area_description: string;
  };
};
type ApiResponse = {
  properties: Property[];
};

async function getData(token: string) {
  //const token = process.env.RS_TOKEN;

  const response = await fetch(
    `https://www.rentalsystems.com/export/v1/properties/index?token=${token}&id=400699`,
    { headers: { Accept: "application/json" } }
  );

  return (await response.json()) as ApiResponse;
}

export const loader: LoaderFunction = async ({ context }) => {
  const data = await getData(context.RS_TOKEN as string);

  return json(data);
};

export default function PropertyPage() {
  const data = useLoaderData<ApiResponse>();

  const property = data.properties[0];
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to="/">Home</Link>
      <h1>Property: {property.basic_information.title}</h1>
      <p>{property.basic_information.local_and_area_description}</p>
    </div>
  );
}
