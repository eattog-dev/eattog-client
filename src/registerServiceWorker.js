import { Workbox } from "workbox-window";

const serviceWorkerURL = `${window.location.origin}/service-worker.js`;

let wb;

if ("serviceWorker" in navigator) {
  wb = new Workbox(serviceWorkerURL);

  wb.addEventListener("controlling", () => {
    window.location.reload();
  });

  wb.register();
} else {
  wb = null;
}

export default wb;
