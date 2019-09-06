module.exports = {
  presets: [
    [
      "@vue/app"
      // {
      //   // useBuiltIns: "usage"
      //   useBuiltIns: "entry",
      //   corejs: 2
      // }
    ],
    ["@babel/env", { targets: { node: 6 } }]
  ],
  plugins: [
    "lodash",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ]
};
