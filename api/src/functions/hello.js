const { app } = require('@azure/functions');

app.http('hello', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Return the message as a plain string
        return {
            body: 'Hello from Azure Functions!',
            headers: {
                'Content-Type': 'text/plain' // Ensure the content type is plain text
            }
        };
    }
});

