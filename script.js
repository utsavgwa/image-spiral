const imgContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let photosArray = [];

// unsplash api
const count = 10;
const apiKey = `UBrgUJBx7MwWckljBz_BeFPUUmc0sKKvMtvwLwV4IiM`;

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

// helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
  // here key is href, target, src, alt, title
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// create elements for links and photos,n adding to DOM
// for each item in this array we are going to run inside this every time, create an item, create an image,put image into item, put item in image container
function displayPhotos() {
  // run forEach method in photosArray
  photosArray.forEach((photo) => {
    // creating <a> to link to unsplash
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    // put <img> inside <a> and then, both inside img-container element
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

// get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch error here
  }
}

// on load
getPhotos();
