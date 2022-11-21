console.log('test');

fetch('https://picsum.photos/v2/list')
.then((response) => response.json())
.then((meins) => {
    console.log(meins);

    meins.forEach(element => {
        const pic = element.download_url;
        const author = element.author;
        // console.log(pic);
        // console.log(author);

        const figureElement = document.createElement('figure');
        const imgElement = document.createElement('img');
        const authorElement = document.createElement('figcaption');

        imgElement.src = pic;
        authorElement.innerText = author;

        figureElement.appendChild(imgElement);
        figureElement.appendChild(authorElement);
        document.body.appendChild(figureElement);

    });
});