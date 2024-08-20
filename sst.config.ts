/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
    app(input) {
        return {
            // aws setup
            name: "lambda-sst-webapp",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
            providers: { aws: true },
        };
    },
    async run() {
        // Declaring a lambda func
        const hono = new sst.aws.Function("Hono", {
            url: true,
            handler: "index.handler",
        });
        return {
            api: hono.url
        }
    },
});
