const { loadGuests, loadCompanies, loadTemplates, getGreeting } = require('./utils');
const createMessageTemplate = require('./messageTemplate');

const messageGenerator = (templateId, guestId, companyId, customTemplate) => {
    // Load data from JSON files.
    const guests = loadGuests();
    const companies = loadCompanies();
    const templates = loadTemplates();

    // Convert string IDs to numbers.
    templateId = parseInt(templateId);
    guestId = parseInt(guestId);
    companyId = parseInt(companyId);

    // Find the guest, company and template based on the IDs.
    const guest = guests.find(g => g.id === guestId);
    const company = companies.find(c => c.id === companyId);
    const template = customTemplate
        ? createMessageTemplate('custom', 'custom Template', customTemplate)
        : templates.find(t => t.id === templateId);

    // Check if the data is valid, console.log an error message and return null if not.
    if (!guest || !company || !template) {
        console.log('Invalid data provided');
        return null;
    }

    // Fill the template with the data and return the message.
    const placeholders = {
        greeting: getGreeting(),
        firstName: guest.firstName,
        lastName: guest.lastName,
        roomNumber: guest.reservation.roomNumber,
        company: company.company,
    };
    const message = template.fillTemplate(placeholders);

    return message;
};

module.exports = messageGenerator;
