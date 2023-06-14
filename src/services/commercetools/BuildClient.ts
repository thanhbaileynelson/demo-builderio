import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from "@commercetools/sdk-client-v2";

const projectKey = "dev1-baileynelson";
const scopes = [
  "create_anonymous_token:dev1-baileynelson view_products:dev1-baileynelson view_published_products:dev1-baileynelson manage_my_shopping_lists:dev1-baileynelson manage_my_quotes:dev1-baileynelson manage_my_payments:dev1-baileynelson manage_my_orders:dev1-baileynelson manage_my_quote_requests:dev1-baileynelson manage_my_business_units:dev1-baileynelson manage_my_profile:dev1-baileynelson view_categories:dev1-baileynelson",
];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: "https://auth.australia-southeast1.gcp.commercetools.com",
  projectKey: projectKey,
  credentials: {
    clientId: "cQSOjXpQkUisisSTb9ACMt8O",
    clientSecret: "U5d4suUpGdkuSGCDOvajL9t27A4hi_7m",
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: "https://api.australia-southeast1.gcp.commercetools.com",
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
