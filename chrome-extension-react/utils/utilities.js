export const getAgeDistributionLabel = (age) => {
    if (age >= 18 && age <= 25) {
        return '18-25';
    } else if (age >= 26 && age <= 35) {
        return '26-35';
    } else if (age >= 36 && age <= 45) {
        return '36-45';
    } else if (age >= 46 && age <= 55) {
        return '46-55';
    } else if (age >= 56) {
        return '56+';
    }
    return 'notfound';
}