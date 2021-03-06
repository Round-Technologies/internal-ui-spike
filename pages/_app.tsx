/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";
import "@ionic/core/css/display.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/typography.css";
import { defineCustomElements as ionDefineCustomElements } from "@ionic/core/loader";
import { useEffect } from "react";
import "../styles/theme/variables.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ionDefineCustomElements(window);
  });
  return (
    <ion-app>
      <Component {...pageProps} />
    </ion-app>
  );
}

export default MyApp;
