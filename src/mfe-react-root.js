import { registerApplication, start } from "single-spa";

registerApplication(
  "@mfe/react-home",
  () => System.import("@mfe/react-home"),
  (location) => location.pathname.startsWith("/")
);

start({
  urlRerouteOnly: true,
});
