interface IOptions {
    firstOption : String,
    secondOption : String,
    thirdOption : String,
    fourthOption : String,
}

export interface IQuiz {
    id: String;
    question: String;
    options: [ IOptions ],
    answer: String;
}