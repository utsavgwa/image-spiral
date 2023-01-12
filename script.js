// unsplash api

const count = 10;
const apiKey = `UBrgUJBx7MwWckljBz_BeFPUUmc0sKKvMtvwLwV4IiM`;

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // catch error here
  }
}

// on load
getPhotos();
