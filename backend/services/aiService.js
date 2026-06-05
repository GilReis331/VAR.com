const {
    GoogleGenerativeAI
} = require("@google/generative-ai");

const genAI =
    new GoogleGenerativeAI(

        process.env.GEMINI_API_KEY

    );

const model =
    genAI.getGenerativeModel({

        model:
            "gemini-2.0-flash"

    });

/* ======================================
   FALLBACK AI
====================================== */

function fakeFootballAI(news){

    return {

        summary:
            `Grande movimentação envolvendo ${news.title}`,

        sentiment:
            "Positive",

        marketImpact:
            "High",

        rumorProbability:
            Math.floor(

                Math.random() * 30 + 70

            ) + "%",

        relevanceScore:
            Math.floor(

                Math.random() * 15 + 85

            )

    };

}

/* ======================================
   AI ANALYSIS
====================================== */

async function analyzeFootballNews(news){

    try{

        const prompt = `

            Analise esta notícia de futebol:

            ${news.title}

            ${news.description}

            Gere:
            resumo,
            sentimento,
            score,
            rumor probability.

        `;

        const result =
            await model.generateContent(

                prompt

            );

        const response =
            result.response.text();

        return JSON.parse(response);

    }

    catch(error){

        console.log(

            "GEMINI ERROR:",
            error.message

        );

        /* FALLBACK */

        return fakeFootballAI(news);

    }

}

module.exports = {

    analyzeFootballNews

};