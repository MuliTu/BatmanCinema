export const isValidInput = (field) => field.length <= 0 ? {border: 'solid 1px red'} : {border: 'solid 1px green'};

export const fixTitle = (title) => {
    return title
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .split(' ')
        .map(word => word.slice().charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
};

export const isTitleExist = (value, list) => {
    return !list.some(title => title === value)
};

export const isTitleEqual = (value, oldTitle) => {
    return (value === oldTitle)
};