// Определение объекта музыкальной коллекции с использованием Symbol.iterator
const musicCollection = {
    albums: [
        { title: "Album 1", artist: "Artist 1", year: "2001" },
        { title: "Album 2", artist: "Artist 2", year: "2002" },
        { title: "Album 3", artist: "Artist 3", year: "2003" }
    ],
    [Symbol.iterator]: function() {
        let index = 0;
        const albums = this.albums;
        return {
            next() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// Экспортируем объект для использования в других файлах
export default musicCollection;
