import { useState, useEffect } from 'react';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  // function currentSlide(n) {
  //   showSlides(n);
  // }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  return (
    <>
      <div className="slideshow-container h-40vh w-90vw mx-14 my-16">
        {/* Full-width images with number and caption text */}
        <div className="mySlides pl-12 pt-8 h-40vh bg-gradient-to-r rounded-2xl from-green-900 via-green-700 to-green-400 relative">
          <div className='pb-10'>
          <img src="https://upload-cdn.careem.com/cplus_logo_f0d0cfe9f5.png" style={{ width: '20%' }} />
          </div>

          <span className='text-white text-5xl '>Enjoy free delivery on quik groceries</span>

          
          <div className='absolute  right-4 '>
          <img src="https://upload-cdn.careem.com/cplus_rebranded_6_1989d714eb.png" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="mySlides pl-12 pt-8 h-40vh bg-gradient-to-r rounded-2xl from-green-900 via-green-700 to-green-400 relative">
          <div className='pb-10'>
          <img src="https://upload-cdn.careem.com/cplus_logo_f0d0cfe9f5.png" style={{ width: '20%' }} />
          </div>

          <span className='text-white text-5xl '>Enjoy free delivery on quik groceries.</span>

          
          <div className='absolute  right-4 '>
          <img src="https://upload-cdn.careem.com/cplus_rebranded_6_1989d714eb.png" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="mySlides pl-12 pt-8 h-40vh bg-gradient-to-r rounded-2xl from-green-900 via-green-700 to-green-400 relative">
          <div className='pb-10'>
          <img src="https://upload-cdn.careem.com/cplus_logo_f0d0cfe9f5.png" style={{ width: '20%' }} />
          </div>

          <span className='text-white text-5xl '>Enjoy free delivery on quik groceries</span>

          
          <div className='absolute  right-4 '>
          <img src="https://upload-cdn.careem.com/cplus_rebranded_6_1989d714eb.png" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="mySlides pl-12 pt-8 h-40vh bg-gradient-to-r rounded-2xl from-green-900 via-green-700 to-green-400 relative">
          <div className='pb-10'>
          <img src="https://upload-cdn.careem.com/cplus_logo_f0d0cfe9f5.png" style={{ width: '20%' }} />
          </div>

          <span className='text-white text-5xl '>Enjoy free delivery on quik groceries</span>

          
          <div className='absolute  right-4 '>
          <img src="https://upload-cdn.careem.com/cplus_rebranded_6_1989d714eb.png" style={{ width: '100%' }} />
          </div>
        </div>

        <div className="mySlides pl-12 pt-8 h-40vh bg-gradient-to-r rounded-2xl from-green-900 via-green-700 to-green-400 relative">
          <div className='pb-10'>
          <img src="https://upload-cdn.careem.com/cplus_logo_f0d0cfe9f5.png" style={{ width: '20%' }} />
          </div>

          <span className='text-white text-5xl '>Enjoy free delivery on quik groceries</span>

          
          <div className='absolute  right-4 '>
          <img src="https://upload-cdn.careem.com/cplus_rebranded_6_1989d714eb.png" style={{ width: '100%' }} />
          </div>
        </div>

        {/* <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="https://upload-cdn.careem.com/cplus_logo_f0d0cfe9f5.png" style={{ width: '100%' }} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="https://upload-cdn.careem.com/cplus_logo_f0d0cfe9f5.png" style={{ width: '100%' }} />
          <div className="text">Caption Three</div>
        </div> */}

        {/* Next and previous buttons */}
        {/* <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a> */}
      </div>

    
    </>
  );
}
