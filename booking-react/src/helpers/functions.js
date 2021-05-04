export const capitalize = (value) => {
    // eslint-disable-next-line
    if(!value || typeof value !== 'string ') {
        return '';
    }
    return value.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}
