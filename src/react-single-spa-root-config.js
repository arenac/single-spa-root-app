import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@react-single-spa/navbar",
//   app: () => System.import("@react-single-spa/navbar"),
//   activeWhen: ["/"]
// });
registerApplication(
  "@react-single-spa/react-single-spa",
  () => System.import("@react-single-spa/react-single-spa"),
  (location) => location.pathname.startsWith("/")
);

start();

// start({
//   urlRerouteOnly: true,
// });
