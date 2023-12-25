export const ToPersianDate = (currentDate) => {
    const date = new Date(currentDate)
    const option = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }
    const persianDate = date.toLocaleDateString('fa-IR', option)

    return persianDate
}