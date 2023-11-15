let activeChoiceIndex = 0;

const choices = [
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
            nextChoice: 2,
        },
        button3: {
            title: "Meet locals",
            nextChoice: 3,
        },
        },
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

    {
        title: "London!",
        instruction: "Great choice! What landmarks would you like to see?",
        background: "london.jpg",
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
    {
    title: "New York!",
    instruction: "Great choice! What type of activity would you like to do?",
    background: "new york.png",
    button1: {
        title: "Go Ice-Skating in the Central Park",
        nextChoice: 11,
    },
    button2: {
        title: "Go Shopping",
        nextChoice: 12,
    },
    button3: {
        title: "See the Statue of Liberty",
        nextChoice: 13,
    },
    },
];
