
type Post = {
    title: string;
    content: string;
    picture: string;
}

// Optional parameter
function createPost(title: string, content: string, pictureLink?: string): Post {
    if(!pictureLink) {
        pictureLink = '';
    }

    // noinspection UnnecessaryLocalVariableJS
    let post: Post = {
        title: title,
        content: content,
        picture: pictureLink
    }

    return post;
}

// Default parameter
function createPostDefault(title: string, content: string, pictureLink: string = ''): Post {

    // noinspection UnnecessaryLocalVariableJS
    let article: Post = {
        title: title,
        content: content,
        picture: pictureLink
    }

    return article;
}
console.log(createPost('Oli', 'Hock'));
console.log(createPost('Oli', 'Hock', 'http://localhost:8080/pics/mypic.png'));

console.log(createPostDefault('Oli', 'Hock'));
console.log(createPostDefault('Oli', 'Hock', 'http://localhost:8080/pics/mypic.png'));
