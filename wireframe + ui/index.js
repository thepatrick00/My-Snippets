function get(elementId) {
    return document.getElementById(elementId);
}

let open = get("menu-button")
let exit = get("exit-button")
let nav = get("nav")

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})
exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})
// associate an emoji to each seperate from the text
// add text for each
// add a link for each

// split into categories with anchor tags
// seo it
const mmoMethods = [
    {
        summary: "Take paid online surveys",
        emoji: "💻",
        details: "Take online surveys to make money online",
        ol: {
            best: "Swagbucks",
            rest: [],
        }
    },
    {
        summary: "Test websites, test software",
        emoji: "👩‍💻",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Train artificial intelligence",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Join online focus groups and 1 on 1 interviews",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Create YouTube Videos",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Livestream on Twitch",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Start a Podcast",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Start Your Own Blog or Website",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Write on Medium.com",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Use Cashback Apps",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Cut out unused subscriptions",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Use cashback credit cards",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Become an online notary",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Be part of a mock jury online",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Be a transcriptionist",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Earn money proofreading and editing",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Be a freelance writer",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Teach enlgish as a foriegn language",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Do online tutoring",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Create your own course",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Start consulting",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Join a remote compnay or freelance site",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Learn to code",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Make an app",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Build a plugin",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Be a web developer",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
    {
        summary: "Invest in fine art",
        emoji: "",
        details: "",
        ol: {
            best: "",
            rest: [],
        }
    },
]

//select where I want to append this create element
const mmoSection = document.getElementById('mmo');

mmoMethods.map(obj => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    details.textContent = obj.details;
    summary.textContent = obj.emoji + ' ' + obj.summary;
    details.appendChild(summary);
    mmoSection.appendChild(details);
})
