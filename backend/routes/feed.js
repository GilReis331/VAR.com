const express =
    require("express");

const router =
    express.Router();

const {
    getHomeFeed
} = require("../services/feedService");

/* ======================================
   HOME FEED
====================================== */

router.get("/", async (req, res) => {

    const feed =
        await getHomeFeed();

    res.json(feed);

});

module.exports = router;