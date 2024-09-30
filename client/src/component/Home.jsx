import React from 'react';
import backgroundImage from '../assets/home.jpg'; 

const randomCards = [
    {
        id: 1,
        title: "Book Issuing System",
        description: "Easily issue books to users and manage their transactions effectively.",
    },
    {
        id: 2,
        title: "Return Management",
        description: "Streamline the return process with notifications and reminders.",
    },
    {
        id: 3,
        title: "View Issued Books",
        description: "Get a comprehensive view of all issued books and their statuses.",
    },
    {
        id: 4,
        title: "Rental History",
        description: "Access detailed rental history for each user to analyze trends.",
    },
    {
        id: 5,
        title: "Search Functionality",
        description: "Quickly search for books by title, author, or genre.",
    },
    {
        id: 6,
        title: "User Profiles",
        description: "Create and manage user profiles with preferences and history.",
    },
    {
        id: 7,
        title: "Notifications",
        description: "Receive notifications for overdue books and reminders.",
    },
    {
        id: 8,
        title: "Reports",
        description: "Generate reports on book rentals, user activity, and more.",
    },
];


function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative flex flex-col md:flex-row justify-center items-center p-8 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Website</h1>
                    <p className="text-lg text-white mb-6">Explore a variety of resources and tools designed to enhance your experience.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300">Get Started</button>
                </div>
            </div>

            {/* Random Card Section */}
            <div className="p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Explore Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {randomCards.map(card => (
                        <div key={card.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-700 mb-4">{card.description}</p>
                            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300">Learn More</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Section */}
            <div className="p-8 bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Welcome to our Book Management System! Our mission is to provide an easy and efficient way to manage book transactions, ensuring that users can easily issue, return, and view their books.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700">
                            Our mission is to simplify the book management process for libraries and educational institutions. We aim to enhance user experience by providing a seamless platform for managing book transactions.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Features</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Easy book issuing and returning system</li>
                            <li>Search functionality for books</li>
                            <li>User profiles for tracking rentals</li>
                            <li>Notifications for overdue books</li>
                            <li>Detailed reports and analytics</li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
                        <p className="text-gray-700">
                            Join us in revolutionizing book management! We welcome contributions, feedback, and suggestions to improve our system.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-700">
                            Have questions or need support? Reach out to us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;