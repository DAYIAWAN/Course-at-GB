import musicCollection from './musicCollection.js';

// Использование цикла for...of для перебора альбомов
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}
