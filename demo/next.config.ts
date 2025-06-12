import type { NextConfig } from "next";
import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";

// Extract only the repo name
const repoName = "rust-pdfguard";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  output: "export",

  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",
    });

    if (!isServer) {
      config.plugins?.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "src/rust/rf_validator_bg.wasm"),
              to: path.resolve(__dirname, "public/rf_validator_bg.wasm"),
            },
          ],
        })
      );
    }

    return config;
  },
};

export default nextConfig;