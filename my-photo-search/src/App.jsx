import React, { useState } from "react";
import PhotoSearchForm from "./components/PhotoSearchForm";
import ImageGallery from "./components/ImageGallery";
import './App.css';

const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const PIXABAY_API_KEY = '47540179-ba76cedd6a917e74ba1f6e094';
    const PEXELS_API_KEY = "Dn7MTFQjcmskYNPUebabFk1agdfpYsrc7DwvCVGlxsAgk9P4dCB7tdzN";

    const fetchImages = async (category, base) => {
        setLoading(true);
        setError("");
        try {
            let response;

            if (base === "pixabay") {
                response = await fetch(
                    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${category}&image_type=photo`
                );
            } else {
                response = await fetch(
                    `https://api.pexels.com/v1/search?query=${category}&per_page=10`,
                    {
                        headers: {
                            Authorization: PEXELS_API_KEY,
                        },
                    }
                );
            }

            if (!response.ok) {
                throw new Error("Błąd podczas pobierania danych");
            }

            const data = await response.json();
            setImages(base === "pixabay" ? data.hits : data.photos);
        } catch (error) {
            setError("Błąd podczas ładowania zdjęć");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Wyszukiwarka zdjęć</h1>
            <PhotoSearchForm onSearch={fetchImages} />
            <ImageGallery images={images} loading={loading} error={error} />
        </div>
    );
};

export default App;
