import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	// output: "standalone",
	devIndicators: false,
	typescript: {
		tsconfigPath: "tsconfig.build.json",
	},
}

export default nextConfig
