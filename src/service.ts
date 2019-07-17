import ServiceConfig from "./service-config";
import express from "express";
import router from "./router";

const app = express();
app.use(express.static(ServiceConfig.justshowitUiBaseApplicationPath));

router(app);

app.listen(ServiceConfig.port, function () {
  console.log('Service is listening to http://localhost:' + ServiceConfig.port);
});
