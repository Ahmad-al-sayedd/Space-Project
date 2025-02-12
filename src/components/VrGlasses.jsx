import image1 from "./../assets/image1.jpg";
import image2 from "./../assets/image2.jpg";
import image3 from "./../assets/image3.jpg";
import image4 from "./../assets/image4.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const VrGlasses = () => {
  const images = [image1, image2, image3, image4];
  const [imagePosition, setImagePosition] = useState(0);

  console.log(imagePosition);

  function moveRight() {
    if (imagePosition === -300) {
      setImagePosition(0);
    } else {
      setImagePosition((prev) => prev - 100);
    }
  }

  function moveLeft() {
    if (imagePosition === 0) {
      setImagePosition(-300);
    } else {
      setImagePosition((prev) => prev + 100);
    }
  }

  return (
    <main>
      <section>
        <h1>Welcome to VR Glasses.</h1>
        <p>
          Experience the future with cutting-edge VR technology. Step into
          immersive worlds and feel the thrill of new adventures at the tip of
          your fingers. Whether it's gaming, education, or exploring new
          realities.
        </p>
        <button>Learn More</button>
      </section>

      <article>
        <button onClick={moveLeft} className="left-button">
          <FaArrowLeft />
        </button>

        {images.map((img, index) => (
          <img
            style={{ transform: `translateX(${imagePosition}%)` }}
            key={index}
            src={img}
            alt={`VR Glass`}
          />
        ))}

        <button onClick={moveRight} className="right-button">
          <FaArrowRight />
        </button>
      </article>
    </main>
  );
};

export default VrGlasses;
