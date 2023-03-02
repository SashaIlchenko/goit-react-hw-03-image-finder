import { GalleryListItem, ImgItem } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ webformatURL,
    largeImageURL,
    tags, onClick }) => {

    return (<GalleryListItem>
        <ImgItem src={webformatURL} alt={tags} onClick={() => onClick(largeImageURL, tags)} />
    </GalleryListItem>
    )
}



