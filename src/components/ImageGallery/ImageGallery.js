"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { getImagePath } from "@/app/utils/paths";

export default function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image
          src={getImagePath(currentImage.src)}
          alt={currentImage.alt || `Image ${currentIndex + 1}`}
          fill
          className={styles.image}
          priority={currentIndex === 0}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={`${styles.arrow} ${styles.arrowLeft}`}
            aria-label="Previous image"
          >
            ←
          </button>

          <button
            onClick={goToNext}
            className={`${styles.arrow} ${styles.arrowRight}`}
            aria-label="Next image"
          >
            →
          </button>

          <div className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
