function calculateNewsScore(news){

    let score = 0;

    const title =
        news.title?.toLowerCase() || "";

    if(title.includes("transfer")){

        score += 30;

    }

    if(title.includes("breaking")){

        score += 40;

    }

    score += Math.floor(Math.random() * 20);

    return score;

}

function getSentiment(news){

    const text = `

        ${news.title}
        ${news.description}

    `.toLowerCase();

    if(text.includes("injury")){

        return "Negative";

    }

    if(text.includes("win")){

        return "Positive";

    }

    return "Neutral";

}