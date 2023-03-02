
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { GalleryList } from "./ImageGallery.styled"
export const ImageGallery = ({ images, onClick }) => {
    return (
        <GalleryList>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    onClick={onClick}
                />
            ))}
        </GalleryList>
    )
}

