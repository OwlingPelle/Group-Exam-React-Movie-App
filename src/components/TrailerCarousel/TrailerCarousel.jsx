import './trailerCarousel.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';

const TrailerCarousel = ({ movies }) => {
    const trailers = movies.map((movie) => movie.Trailer_link);

    const slides = trailers.map((url) => {
        return (
            <Carousel.Slide key={url}>
                <iframe
                    src={url}
                    className="trailer-frame"
                    allowFullScreen
                ></iframe>
            </Carousel.Slide>
        );
    });

    return (
        <section className="carousel-wrapper">
            <Carousel
                className="trailer-carousel"
                classNames={{
                    slide: 'trailer-slide',
                }}
                slideSize={{ base: '100%', sm: '80%', md: '60%' }}
                slideGap={{ base: 0, sm: 'xs', md: 'md' }}
                controlSize={40}
                controlsOffset="xs"
                withControls
                emblaOptions={{
                    loop: true,
                    dragFree: false,
                    align: 'center',
                }}
            >
                {slides}
            </Carousel>
        </section>
    );
};

export default TrailerCarousel;
