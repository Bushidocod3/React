const ImageGallery = ({images, loading, error}) => {

    if(loading) {
        return <p>Ładowanie zdjęć...</p>;
    }

    if(error) {
        return <p style={{color:'red'}}>{error}</p>;
    }

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image.webformatURL || image.src.original}
                         alt={image.alt}
                         style={{width: "100px", height: "auto", borderRadius: "10px"}} />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;