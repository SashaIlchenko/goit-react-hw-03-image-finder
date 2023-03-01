export const ImageGalleryItem = ({ webformatURL,
    largeImageURL,
    tags, onClick }) => {

    return (< li class="gallery-item" >
        <img src={webformatURL} alt={tags} onClick={() => onClick(largeImageURL, tags)} />
    </li >
    )
}



