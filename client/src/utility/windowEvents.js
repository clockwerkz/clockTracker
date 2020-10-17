export const onBlur = () => new Date();

export const onFocus = (startDate) => {
    const now = new Date();
    const calcTime = (now.getHours() - startDate.getHours()) * 60;
    if (now.getMinutes() < startDate.getMinutes()) {
        return calcTime - (startDate.getMinutes() - now.getMinutes());
    } else {
        return calcTime + (now.getMinutes() - startDate.getMinutes());
    }
}


