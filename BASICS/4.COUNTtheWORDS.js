function count (text) {

    text = String(text);
    let wordsCount = 1;


    for (let i = 0; i < text.length; i++) {


        let current = text[i];

        if (current === " ") {
            wordsCount++
        }
    }


    if (wordsCount > 10) {
        console.log(`The message is too long to be send! Has ${wordsCount} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }



}

count ("This ");