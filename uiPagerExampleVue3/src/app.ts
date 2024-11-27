import { createApp } from "nativescript-vue";
import Home from "./components/Home.vue";

const app = createApp(Home);

app.registerElement(
  "Pager",
  () => require("@nativescript-community/ui-pager").Pager
);
app.registerElement(
  "PagerItem",
  () => require("@nativescript-community/ui-pager").PagerItem
);
app.registerElement(
  "PagerIndicator",
  () => require("@nativescript-community/ui-pager-indicator").PagerIndicator
);

app.start();
