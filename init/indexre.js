const review = require('./path_to_review_model'); // your review model

// Helper function to generate random past date within last 6 months
function randomPastDate() {
    const today = new Date();
    const pastTime = today.getTime() - Math.floor(Math.random() * 180 * 24 * 60 * 60 * 1000); // last 180 days
    return new Date(pastTime);
}

const fakeReviews = [
    { comment: "Excellent service and very polite staff.", rating: 5, created: randomPastDate() },
    { comment: "Good experience overall, will visit again.", rating: 4, created: randomPastDate() },
    { comment: "Average service, waiting time was long.", rating: 3, created: randomPastDate() },
    { comment: "Not satisfied with the service quality.", rating: 2, created: randomPastDate() },
    { comment: "Staff was helpful but pricing felt high.", rating: 3, created: randomPastDate() },
    { comment: "Very bad experience, would not recommend.", rating: 1, created: randomPastDate() },
    { comment: "Quick service and friendly behavior.", rating: 4, created: randomPastDate() },
    { comment: "Great experience, clean place and professional staff.", rating: 5, created: randomPastDate() },
    { comment: "Decent service, but can be improved.", rating: 3, created: randomPastDate() }
];

// Insert into MongoDB
review.insertMany(fakeReviews)
    .then(() => {
        console.log("9 fake reviews inserted successfully!");
    })
    .catch(err => console.error(err));