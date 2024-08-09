import { createClient } from "next-sanity";
import ImageBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: '01i001d9',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true, 
});

const imageBuilder = ImageBuilder(client);

export function urlFor(source){
    return imageBuilder.image(source); 
}