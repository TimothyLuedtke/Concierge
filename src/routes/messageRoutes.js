const express = require('express');
const router = express.Router();
const utils = require('../utils');
const messageGenerator = require('../messageGenerator');

router.get('/', (req, res) => {
    const companies = utils.loadCompanies();
    const guests = utils.loadGuests();
    const templates = utils.loadTemplates();
    const message = null;
    res.render('index', { companies, guests, templates, message });
});

router.post('/message', (req, res) => {
    const { templateId, guestId, companyId, customTemplate } = req.body;
    const message = messageGenerator(templateId, guestId, companyId, customTemplate);

    const companies = utils.loadCompanies();
    const guests = utils.loadGuests();
    const templates = utils.loadTemplates();
    res.render('index', { companies, guests, templates, message });
});

module.exports = router;