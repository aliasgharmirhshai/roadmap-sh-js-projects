
function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

function getGreeting(timeOfDay) {
    switch (timeOfDay) {
        case "morning":
            return "Good morning";
            break;
        case "afternoon":
            return "Good afternoon"
            break;
        case "evening":
            return "Good evening"
            break;
    }
}

function createGreeting(lastName, firstName, timeOfDay) {
    const greeting = getGreeting(timeOfDay);
    const name = formatName(firstName, lastName)

    return `${greeting}, ${name}`
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
