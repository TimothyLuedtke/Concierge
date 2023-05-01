// Message template object
function createMessageTemplate(id, name, content) {

    if (typeof content !== 'string') {
        throw new TypeError('The content of the template must be a string');
    }

    return {
        id,
        name,
        content,
        fillTemplate(placeholders) {
            let result = content;
            for (const key in placeholders) {
                const value = placeholders[key];
                result = result.replace(`{${key}}`, value);
            }
            return result;
        },
    };
}

module.exports = createMessageTemplate;
