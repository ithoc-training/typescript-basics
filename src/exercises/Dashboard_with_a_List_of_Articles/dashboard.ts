import fs from "fs";
import path from 'path';

type Article = {
    id: number;
    title: string;
    content: string;
    category: string;
}

const fileName: string = path.join(__dirname, '../../../src/exercises/Dashboard_with_a_List_of_Articles/articles.csv');
console.log('Reading file:', fileName);

fs.readFile(fileName, 'utf8', (error, content) => {
    console.log(content);

    // Split file content to separate lines, as one line reflects one article.
    const lines = content.split('\n');
    console.log('Number of Lines:', lines.length);

    // Take each line and create an article object for it. Skip first header line.
    const articles: Article[] = [];
    for (let i = 1; i < lines.length; i++) {
        const line: string[] = lines[i].split(',');
        let article: Article = {
            id: parseInt(line[0]),
            title: line[1],
            content: line[2],
            category: line[3].replace('\r', '') // remove carriage return (Windows)
        };
        articles.push(article);
    }

    // Filter programming topics out of the articles and log them.
    const programmingArticles: Article[] = [];
    for (let i = 0; i < articles.length; i++) {
        let article: Article = articles[i];
        if(article.category === 'programming') {
            programmingArticles.push(article);
        }
    }
    console.log(programmingArticles);
});
