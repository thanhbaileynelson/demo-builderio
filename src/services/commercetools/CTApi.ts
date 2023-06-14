import { ctpClient } from "./BuildClient";
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from "@commercetools/platform-sdk";

// Create apiRoot from the imported ClientBuilder and include your Project key
const CTAPI = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: "dev1-baileynelson",
});

export default CTAPI;
