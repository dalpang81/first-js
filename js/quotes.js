const quotes = [
    {
        quote: "알아서 잘 딱 깔끔하고 센스있게.",
        author: "WooWakGood",
    },
    {
        quote: "깨지고 부서져라.",
        author: "WooWakGood",
    },
    {
        quote: "꽃이 피고 질때가 있듯이 모든 일에는 때가 있다.",
        author: "WooWakGood",
    },
    {
        quote: "세상은 맞냐 틀리냐로 돌아가지 않는다.",
        author: "WooWakGood",
    },
    {
        quote: "어깨를 펴고 당당히 살아. 넌 멋있는 놈이야.",
        author: "WooWakGood",
    },
    {
        quote: "시간은 거스를 수 없다.",
        author: "WooWakGood",
    },
    {
        quote: "인생은 지나고 나서야 깨닫는다.",
        author: "WooWakGood",
    },
    {
        quote: "맞는 말은 졸리고 거짓말은 달콤하다.",
        author: "WooWakGood",
    },
    {
        quote: "너의 장점을 찾아주는 사람을 만나라.",
        author: "WooWakGood",
    },
    {
        quote: "포기하면 이미 진거다.",
        author: "WooWakGood",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;