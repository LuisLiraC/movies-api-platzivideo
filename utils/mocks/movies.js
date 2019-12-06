const moviesMock = [{
        "id": "b451d487-e1c5-4c65-856f-1a14f5722d21",
        "title": "Results",
        "year": 1992,
        "cover": "http://dummyimage.com/129x240.png/ff4444/ffffff",
        "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "duration": 2003,
        "contentRating": "R",
        "tags": [
            "Drama",
            "Comedy|Drama",
            "Documentary"
        ]
    },
    {
        "id": "934b3f86-6a5b-4269-a368-63f115257037",
        "title": "Bridal Party in Hardanger, The (Brudeferden i Hardanger)",
        "year": 2011,
        "cover": "http://dummyimage.com/178x218.jpg/ff4444/ffffff",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "duration": 2004,
        "contentRating": "R",
        "tags": [
            "Comedy",
            "Drama|War",
            "Drama|War",
            "Drama|Thriller"
        ]
    },
    {
        "id": "687aae09-9bb7-4c4b-9494-b12397062b24",
        "title": "Seconds Apart ",
        "year": 1995,
        "cover": "http://dummyimage.com/131x142.png/cc0000/ffffff",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "duration": 1977,
        "contentRating": "PG",
        "tags": [
            "Drama",
            "Action|Sci-Fi"
        ]
    },
    {
        "id": "f0fda4d8-12bb-49fe-99eb-97b68f93f564",
        "title": "Megiddo: The Omega Code 2",
        "year": 2010,
        "cover": "http://dummyimage.com/129x165.bmp/5fa2dd/ffffff",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "duration": 1955,
        "contentRating": "G",
        "tags": [
            "Comedy|Romance",
            "Drama",
            "Drama|Mystery|Thriller",
            "Drama",
            "Documentary"
        ]
    },
    {
        "id": "0a5ff018-202b-4e60-8c05-197175a0cace",
        "title": "Ghost from the Machine (Phasma Ex Machina)",
        "year": 1992,
        "cover": "http://dummyimage.com/174x178.jpg/cc0000/ffffff",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "duration": 1958,
        "contentRating": "G",
        "tags": [
            "Comedy",
            "Drama|War",
            "Crime|Mystery|Thriller",
            "Comedy|Drama",
            "Comedy"
        ]
    },
    {
        "id": "35dfa9f9-a7c4-44df-8fff-b6ce441f162e",
        "title": "Only the Strong Survive - A Celebration of Soul",
        "year": 1969,
        "cover": "http://dummyimage.com/172x143.jpg/ff4444/ffffff",
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "duration": 1904,
        "contentRating": "G",
        "tags": [
            "Horror|Mystery|Thriller",
            "Drama|Romance"
        ]
    },
    {
        "id": "e0746feb-3474-4108-86a6-3295728b924d",
        "title": "Forever Strong",
        "year": 1983,
        "cover": "http://dummyimage.com/175x169.jpg/cc0000/ffffff",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "duration": 1944,
        "contentRating": "R",
        "tags": [
            "Adventure|Fantasy",
            "Comedy",
            "Comedy",
            "Drama|Fantasy",
            "Action|Drama|Romance|Western"
        ]
    },
    {
        "id": "a7e6e8e8-0de1-4062-8f4a-a6b056ce2dd7",
        "title": "Last Orders",
        "year": 1993,
        "cover": "http://dummyimage.com/234x103.png/5fa2dd/ffffff",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "duration": 1980,
        "contentRating": "R",
        "tags": [
            "Drama",
            "Comedy|War",
            "Documentary",
            "Action|Adventure|Crime|Drama|Sci-Fi|Thriller|War",
            "Comedy|Drama|Fantasy"
        ]
    },
    {
        "id": "6a4578c5-d476-4ad3-97b8-fe0d7f808640",
        "title": "City of the Living Dead (a.k.a. Gates of Hell, The) (Paura nella città dei morti viventi)",
        "year": 2005,
        "cover": "http://dummyimage.com/116x200.jpg/ff4444/ffffff",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "duration": 1918,
        "contentRating": "PG",
        "tags": [
            "Drama"
        ]
    },
    {
        "id": "9a5033d5-6e4a-47a2-8098-71f37f591384",
        "title": "Raise Your Voice",
        "year": 1997,
        "cover": "http://dummyimage.com/105x206.png/dddddd/000000",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "duration": 1888,
        "contentRating": "NC-17",
        "tags": [
            "Drama|Horror",
            "Action|Crime|Mystery|Thriller",
            "Documentary",
            "Documentary|Drama",
            "Children|Drama"
        ]
    }
]

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag))
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock)
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0])
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock
}