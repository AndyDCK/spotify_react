import { Price } from '../types';

// Définition de l'URL de base en dur
const baseURL = "https://www.monspotify.eu";

// Fonction pour effectuer une requête POST avec l'URL en dur
export const postData = async ({
    url,
    data
}: {
    url: string;
    data?: { price: Price }
}) => {
    // Concaténation de l'URL de base avec l'URL spécifiée
    const fullURL = baseURL + url;
    
    console.log('POST REQUEST: ', fullURL, data);

    const res = await fetch(fullURL, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        console.log('Error in POST', { url: fullURL, data, res });

        throw new Error(res.statusText);
    }

    return res.json();
};
