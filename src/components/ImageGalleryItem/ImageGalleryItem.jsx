import { GalleryListItem, ImgItem } from './ImageGalleryItem.styled'
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ webformatURL,
    largeImageURL,
    tags, onClick }) => {

    return (<GalleryListItem>
        <ImgItem src={webformatURL} alt={tags} onClick={() => onClick(largeImageURL, tags)} />
    </GalleryListItem>
    )
}



ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};