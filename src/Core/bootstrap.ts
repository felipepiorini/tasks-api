require('source-map-support').install();

import { app } from '@Core/server'

import Routes from "@Core/routes/routes";

new Routes(app);

app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port ${process.env.APP_PORT}`.yellow.bold)
});