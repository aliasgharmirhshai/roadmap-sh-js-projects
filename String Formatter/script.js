function cleanText(text)
{
    if (typeof text !== 'string') return '';

    return text.trim();
}

function capitalize(text) 
{
    const clean_text = cleanText(text);

    if (clean_text.length === 0) {
         return '';
    }


    return clean_text[0].toUpperCase() + clean_text.slice(1).toLowerCase();
}

function formatDisplayName(firstName, lastName) 
{
    return `${capitalize(firstName)} ${capitalize(lastName)}`;
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));
console.log(formatDisplayName('    ', ''));
