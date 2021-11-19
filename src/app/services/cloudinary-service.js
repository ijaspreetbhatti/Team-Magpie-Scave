import * as $ from 'jquery';

const cloudName = 'scave2021';
const apiKey = '272538467476669';

export async function uploadImage(image) {
    console.log(image);
    const result = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            file: image.file,
            timestamp: image.timestamp,
            upload_preset: 'q6sujdna',
            api_key: apiKey
        })
    });
    console.log(result);
    return result.json();
}