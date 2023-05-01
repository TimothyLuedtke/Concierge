const { readFileSync } = require('fs');
const createMessageTemplate = require('./messageTemplate');

const loadCompanies = () => {
    const rawData = readFileSync('data/companies.json');
    // console.log(JSON.parse(rawData));
    return JSON.parse(rawData);
};

const loadGuests = () => {
    const rawData = readFileSync('data/guests.json');
    // console.log(JSON.parse(rawData));
    return JSON.parse(rawData);
};

const loadTemplates = () => {
    const rawData = readFileSync('data/templates.json');
    const templatesData = JSON.parse(rawData);

    // Convert each plain object to an instance created by the factory function
    const templates = templatesData.map(t => createMessageTemplate(t.id, t.name, t.content));

    return templates;
};

const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
        return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Good afternoon';
    } else {
        return 'Good evening';
    }
};

module.exports = {
    loadCompanies,
    loadGuests,
    loadTemplates,
    getGreeting
};