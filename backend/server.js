/* ======================================
   IMPORTS
====================================== */

require("dotenv").config();

const express = require("express");

const cors = require("cors");


/* ======================================
   APP
====================================== */

const app = express();

/* ======================================
   MIDDLEWARES
====================================== */

app.use(cors());

app.use(express.json());

/* ======================================
   ROUTES
====================================== */

const newsRoutes =
    require("./routes/news");

const youtubeRoutes =
    require("./routes/youtube");
   
const aiRoutes =
    require("./routes/ai");

const feedRoutes =
    require("./routes/feed");

app.use("/api/news", newsRoutes);

app.use("/api/youtube", youtubeRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/feed", feedRoutes);

/* ======================================
   SERVER
====================================== */

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `🚀 VAR.com Backend running on port ${PORT}`
);

});