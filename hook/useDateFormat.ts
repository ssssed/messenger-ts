
export const useDateFormat = (d: string | Date): string => {
    const date = new Date(d);
    const currentDate = new Date();

    let datePrefix = "";

    if (date.getFullYear() === currentDate.getFullYear()) {

        if (currentDate.getMonth() === date.getMonth()) {
            const timeAgo = currentDate.getDate() - date.getDate();

            if (timeAgo === 1) {
                datePrefix = "вчера в"
            }
            if (timeAgo === 2) datePrefix = "позавчера в"
            if (timeAgo >= 3 && timeAgo <= 7) datePrefix = "на этой неделе в"
            if (timeAgo > 7) datePrefix = "менее месяца назад в"
        }
        else {
            datePrefix = "более месяца назад в"
        }

    }
    else {
        datePrefix = "год назад в"
    }

    return `${datePrefix} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
}