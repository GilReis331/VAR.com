const express =
    require("express");

const router =
    express.Router();

const {
    analyzeFootballNews
} = require("../services/aiService");

/* ======================================
   AI ANALYSIS
====================================== */

router.post("/", async (req, res) => {

    try{

        const news =
            req.body;

        const analysis =
            await analyzeFootballNews(news);

        res.json({

            analysis

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            error:
                "Erro IA"

        });

    }

});

module.exports = router;