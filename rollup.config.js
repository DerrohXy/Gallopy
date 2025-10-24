import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import { dts } from "rollup-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

const packageJson = require("./package.json");

const components = [
    "AudioView",
    "NavigationBar",
    "Scroll",
    "Selection",
    "VideoView",
    "Table",
    "SelectionView",
    "Media",
    "Paragraph",
    "Link",
    "Lists",
    "Controls",
    "Canvas",
    "Inputs",
    "ImageView",
    "Progress",
    "Layout",
    "Headings",
    "Button",
    "Label",
    "CollapseView",
    "Application",
    "Activity",
    "Menu",
    "TabbedWindow",
    "FooterBar",
    "IconButton",
];

const plugins = [
    resolve({
        browser: true,
        preferBuiltins: false,
    }),
    commonjs(),
    typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
        declarationMap: false,
    }),
    postcss({
        extract: true,
        minimize: true,
    }),
    terser({
        compress: {
            drop_console: true,
            drop_debugger: true,
        },
    }),
];

export default [
    // Main bundle
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
                sourcemap: true,
                exports: "named",
            },
            {
                file: "dist/index.esm.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            ...plugins,
            visualizer({
                filename: "dist/stats.html",
                open: false,
                gzipSize: true,
                brotliSize: true,
            }),
        ],
        external: ["react", "react-dom", "react/jsx-runtime"],
        treeshake: {
            moduleSideEffects: false,
            propertyReadSideEffects: false,
            unknownGlobalSideEffects: false,
        },
    },
    // Core bundle
    {
        input: "src/core.tsx",
        output: [
            {
                file: "dist/core.js",
                format: "cjs",
                sourcemap: true,
                exports: "named",
            },
            {
                file: "dist/core.esm.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [...plugins],
        external: ["react", "react-dom", "react/jsx-runtime"],
        treeshake: {
            moduleSideEffects: false,
            propertyReadSideEffects: false,
            unknownGlobalSideEffects: false,
        },
    },
    // Utils bundle
    {
        input: "src/utils/index.tsx",
        output: [
            {
                file: "dist/utils/index.js",
                format: "cjs",
                sourcemap: true,
                exports: "named",
            },
            {
                file: "dist/utils/index.esm.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [...plugins],
        external: ["react", "react-dom", "react/jsx-runtime"],
        treeshake: {
            moduleSideEffects: false,
            propertyReadSideEffects: false,
            unknownGlobalSideEffects: false,
        },
    },
    // Component subpath bundles (ESM and CJS per component)
    ...components.map((component) => ({
        input: `src/components/${component}.tsx`,
        output: [
            {
                file: `dist/components/${component}.js`,
                format: "cjs",
                sourcemap: true,
                exports: "named",
            },
            {
                file: `dist/components/${component}.esm.js`,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [...plugins],
        external: ["react", "react-dom", "react/jsx-runtime"],
        treeshake: {
            moduleSideEffects: false,
            propertyReadSideEffects: false,
            unknownGlobalSideEffects: false,
        },
    })),
    // Type definitions
    {
        input: "dist/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
