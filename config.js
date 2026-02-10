// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Rush",

    pageTitle: "Will you be my valentine? 💜",

    floatingEmojis: {
        hearts: ['♥️','🥰','🫶🏻'],
        bears: ['🐥','😋','🫦','👉🏻👈🏻']
    },

    questions: {
        first: {
            text: "Do you like me? 👉🏻👈🏻",
            yesBtn: "Yes 😋",
            noBtn: "No 🫦",
            secretAnswer: "I don't like you… I love you 🫶🏻♥️"
        },
        second: {
            text: "How much do you love me? 🥰",
            startText: "This much! 🫶🏻",
            nextBtn: "Next ♥️"
        },
        third: {
            text: "Will you be my Valentine? 🥰♥️",
            yesBtn: "Yes! 🫶🏻",
            noBtn: "No 😋"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🫶🏻♥️",
        high: "To infinity and beyond! 🫶🏻🥰",
        normal: "And beyond! 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world 🥰♥️",
        message: "Now come get your hug and kiss 😋🫦",
        emojis: "🫶🏻🥰♥️🐥😋"
    },

    colors: {
        backgroundStart: "#E6E6FA",
        backgroundEnd: "#D8BFD8",
        buttonBackground: "#C8A2C8",
        buttonHover: "#B57EDC",
        textColor: "#6A5ACD"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Disable template music player since we use YouTube
    music: {
        enabled: false,
        autoplay: false,
        musicUrl: "",
        startText: "",
        stopText: "",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
