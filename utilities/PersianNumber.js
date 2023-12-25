export const PersianNumber = (number) => {
    const numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
    return number.toString().replace(/\d/g, x => numbers[parseInt(x)])
}