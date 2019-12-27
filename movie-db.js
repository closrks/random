class Collection {
    constructor() {
        this.items = [];
        this.titleIndex = {};
        this.yearIndex = {};
    }

    add(item) {
        // add item to collection
        this.items.push(item);
        this.addMovieToTitleIndex(item);
        this.addMovieToYearIndex(item);
    }

    addMovieToTitleIndex(item) {
        if (!this.titleIndex[item.title]) {
            this.titleIndex[item.title] = [];
        }
        this.titleIndex[item.title].push(item);
    }

    addMovieToYearIndex(item) {
        if (!this.yearIndex[item.year]) {
            this.yearIndex[item.year] = [];
        }
        this.yearIndex[item.year].push(item);
    }

    findByTitle(title) {
        return this.titleIndex[title];
    }

    findByYear(year) {
        return this.yearIndex[year];
    }

    print() {
        return JSON.stringify(this.items);
    }
}

class Movie {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.starring = [];
    }

    hasActor() {

    }

    addActor(actor) {
        this.starring.push(actor);
        // add movie to actor
    }
}

class Actor {
    constructor() {
        this.movies = [];
    }

    hasMovie() {

    }

    addMovie() {
        
    }
}

const movieCollection = new Collection();
const aMovie = new Movie("a", 2000);
const bMovie = new Movie("b", 2001);
const cMovie = new Movie("c", 2002);
movieCollection.add(aMovie);
movieCollection.add(bMovie);
movieCollection.add(cMovie);
console.log(movieCollection.findByTitle("a"));
console.log(movieCollection.findByYear(2001));
console.log(movieCollection.print());