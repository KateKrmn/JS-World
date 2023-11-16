let activeChoiceIndex = 0;

const choices = [
    // 0
    {
        title: 'Welcome to the "Travelling around the World" Adventure!',
        instruction: "",
        background: "globe4.jpg",
        button1: {
            title: "Start the Adventure",
            nextChoice: 1,
        },
        button2: {
            title: "Try Local Cuisine",
            nextChoice: 1,
        },
        button3: {
            title: "Meet locals",
            nextChoice: 1,
        },
    },
    // 1
    {
        title: '',
        instruction: "You pack your bags and embark on a journey to explore the world. Where would you like to go first?",
        background: "globe4.jpg",
        button1: {
            title: "Paris",
            nextChoice: 2,
        },
        button2: {
            title: "London",
            nextChoice: 3,
        },
        button3: {
            title: "NewYork",
            nextChoice: 4,
        },
    },
    // 2
    {
        title: "Paris!",
        instruction: "Great choice! What type of activity would you like to do?",
        background: "paris.jpg",
        button1: {
            title: "Visit Landmarks",
            nextChoice: 5,
        },
        button2: {
            title: "Try Local Cuisine",
            nextChoice: 6,
        },
        button3: {
            title: "Meet locals",
            nextChoice: 7,
        },
    },
    // 3
    {
        title: "London!",
        instruction: "Great choice! What landmarks would you like to see?",
        background: "london.jpg",
        button1: {
            title: "Visit Landmarks",
            nextChoice: 8,
        },
        button2: {
            title: "Get on a cruise",
            nextChoice: 8,
        },
        button3: {
            title: "Both of them",
            nextChoice: 8,
        },
    },
    // 4
    {
    title: "New York!",
    instruction: "Great choice! What type of activity would you like to do?",
    background: "new york.png",
    button1: {
        title: "Go Ice-Skating in the Central Park",
        nextChoice: 8,
    },
    button2: {
        title: "Go Shopping",
        nextChoice: 8,
    },
    button3: {
        title: "See the Statue of Liberty",
        nextChoice: 8,
    },
    },
    // 5
    {
    title: "Landmarks!",
    instruction: "Great choice! What landmarks would you like to see?",
    background: "landmarksParis.jpg",
    button1: {
        title: "The Eiffel Tower",
        nextChoice: 8,
    },
    button2: {
        title: "Louvre",
        nextChoice: 8,
    },
    button3: {
        title: "Monmartr",
        nextChoice: 8,
        },
    },
    // 6
    {
    title: "Try Local Cuisine!",
        instruction: "Excellent! What type of food would you like to try?",
        background: "frenchcuisine.jpg",
        button1: {
            title: "Oysters & Champaigne",
            nextChoice: 8,
        },
        button2: {
            title: "Coffee and Bakery",
            nextChoice: 8,
        },
        button3: {
            title: "Cheese & Wine",
            nextChoice: 8,
        },
    },
    // 7
    {
        title: "Meet Locals!",
        instruction: "A lot of new paople are waiting for you!",
        background: "paris.jpg",
        button1: {
            title: "Let's go",
            nextChoice: 8,
        },
        button2: {
            title: "",
            nextChoice: 8,
        },
        button3: {
            title: "Meet locals",
            nextChoice: 8,
        },
    },
    // 8
    {
        title: "Fantastic!",
        instruction: "",
        background: "world.jpg",
        button1: {
            title: "Let's go!",
            nextChoice: 8,
        },
        button2: {
            title: "Try Local Cuisine",
            nextChoice: 9,
        },
        button3: {
            title: "Meet locals",
            nextChoice: 10,
        },
    },
];
