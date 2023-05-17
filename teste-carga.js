import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "src/summary.html": htmlReport(data),
    };
  }

export default function () {
    // Lógica do teste aqui
    http.get('https://glowapp-staging.netlify.app/');
    sleep(1); // Espera de 1 segundo entre as iterações
}

