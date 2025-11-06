import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import './EventCarousel.css';

const events = [
    {
        id: '1',
        title: 'Live Guitar Performance',
        image: '/images/event1.jpg',
        date: 'Nov 10, 2025 – 7:00 PM',
        description: 'Experience an intimate acoustic set with top local talent.',
    },
    {
        id: '2',
        title: 'Orchestra Night',
        image: '/images/event2.jpg',
        date: 'Nov 12, 2025 – 8:00 PM',
        description: 'A classical evening led by Maestro Lavigne and his ensemble.',
    },
    {
        id: '3',
        title: 'Formal Recital',
        image: '/images/event3.jpg',
        date: 'Nov 15, 2025 – 6:30 PM',
        description: 'A refined performance in a historic venue with string musicians.',
    },
    {
        id: '4',
        title: 'Live Guitar Performance',
        image: '/images/event4.jpg',
        date: 'Nov 10, 2025 – 7:00 PM',
        description: 'Experience an intimate acoustic set with top local talent.',
    },
    {
        id: '5',
        title: 'Orchestra Night',
        image: '/images/event2.jpg',
        date: 'Nov 12, 2025 – 8:00 PM',
        description: 'A classical evening led by Maestro Lavigne and his ensemble.',
    }
];

export default function EventCarousel() {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                document.querySelector('.custom-prev')?.click();
            } else if (e.key === 'ArrowRight') {
                document.querySelector('.custom-next')?.click();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                const activeSlide = document.querySelector('.swiper-slide-active .event-card');
                activeSlide?.click();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);


    return (
        <div className="carousel-container">
            <h2>Upcoming Concerts & Events</h2>

            <div className="carousel-wrapper">
                <button className="custom-prev" tabIndex={0}>←</button>
                <Swiper
                    centeredSlides={true}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <Link to={`/events/${event.id.replace(/\s+/g, '-').toLowerCase()}`} className="event-link" role="link" tabIndex={0}>
                                <div className="event-card">
                                    <p className="date">{event.date}</p>
                                    <img src={event.image} alt={event.title} />
                                    <h3>{event.title}</h3>
                                    <p className="description">{event.description}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="custom-next" tabIndex={0}>→</button>
            </div>
            <div className="view-all">
                <button>VIEW ALL</button>
            </div>
        </div>
    );
}
