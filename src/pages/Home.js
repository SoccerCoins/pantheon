import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// ... other imports as needed

const Home = () => {
    return (
        <div className="home">
            <Helmet>
                <title>Pantheon Hotel - Authentic Greek Experience in Crete</title>
                <meta name="description" content="Nestled in Atsipopoulo, Pantheon Hotel offers a unique blend of traditional Greek hospitality with modern amenities. Enjoy panoramic views of the Cretan Sea and easy access to Rethymnon city center." />
                <meta name="keywords" content="Pantheon Hotel, hotel in Crete, Greek hospitality, Atsipopoulo, Rethymnon, Crete accommodation, travel Greece" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.pantheon-hotel.gr/" />
                <meta property="og:title" content="Pantheon Hotel - Authentic Greek Experience in Crete" />
                <meta property="og:description" content="Nestled in Atsipopoulo, Pantheon Hotel offers a unique blend of traditional Greek hospitality with modern amenities. Enjoy panoramic views of the Cretan Sea and easy access to Rethymnon city center." />
                <meta property="og:image" content="%PUBLIC_URL%/social-media-image.jpg" /> {/* Replace with your actual image link */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://www.pantheon-hotel.gr/" />
                <meta name="twitter:title" content="Pantheon Hotel - Authentic Greek Experience in Crete" />
                <meta name="twitter:description" content="Nestled in Atsipopoulo, Pantheon Hotel offers a unique blend of traditional Greek hospitality with modern amenities. Enjoy panoramic views of the Cretan Sea and easy access to Rethymnon city center." />
                <meta name="twitter:image" content="%PUBLIC_URL%/social-media-image.jpg" /> {/* Replace with your actual image link */}
            </Helmet>

            {/* Rest of your Home component code */}
        </div>
    );
};

export default Home;
