const { app } = require('@azure/functions');

app.http('hello', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        return {
            headers: {
                'Content-Type': 'application/json'
            },
            body: { message: 'Hello from Azure Functions!' }
        };
    }
});
