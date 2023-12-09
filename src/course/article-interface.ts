interface Article {
    title: string;
    content: string;
    author: UserInfo;
    timestamp: string; // Date() as string
}

const articles: Article[] = [];

for (let i: number = 0; i < 10; i++) {
    const article: Article = {
        title: '' + i*(i+1),
        content: '' + i*(i+2),
        author: {
            name: '' + i*(i+3),
            age: i * (i+4),
            email: '' + i * (i+5) + '@example.com',
            administrator: i % 2 == 0
        },
        timestamp: '' + new Date()
    }
    articles.push(article);
}

articles.forEach(article => {
    console.log(article);
    console.log(article.author);
})
