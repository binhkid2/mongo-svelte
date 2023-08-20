import type { PageServerLoad } from './$types';
import db from "$lib/Mongo/mongo"
export const load = (async () => {
    const movies = await db.collection('movies').find({}, { projection: { _id: 0, poster: 1, title: 1 } }).limit(5).toArray();


    return {
       movies: movies
    }
}) satisfies PageServerLoad;




