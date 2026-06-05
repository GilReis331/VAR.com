const NodeCache =
    require("node-cache");

/* ======================================
   CACHE
====================================== */

const cache =
    new NodeCache({

        stdTTL: 600

    });

module.exports = cache;