import http from "k6/http";
import { sleep } from "k6";
export const options = {
  vus: 1000,
  duration: "30s",
};
export default function () {
  http.get("http://host.docker.internal:4000/api/ticketings");
  sleep(1);
}
