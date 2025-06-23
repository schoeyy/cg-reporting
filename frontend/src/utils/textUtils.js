export const formatCamelCase = (text) => {
    return text
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
};
