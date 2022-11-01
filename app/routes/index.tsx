import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix on Cloudflare workers</h1>
      <ul>
        <li>
          <Link to="/property">Property</Link>
        </li>
      </ul>
    </div>
  );
}
