const express = require('express');
const app = express();
const dfff = require('dialogflow-fulfillment')


app.get('/', (req, res) => {
    res.send("we are live")
});

app.post('/', express.json(), (req, res) => {
    const agent = new dfff.WebhookClient({
        request: req,
        response: res

    });

    function demo(agent) {
        agent.add("sending response from webhook server")
    }

    var intentMap = new Map();
    intentMap.set('webhookDemo', demo)

    agent.handleRequest(intentMap);
});

app.listen(3333, () => console.log("Server is live at port 3333"));