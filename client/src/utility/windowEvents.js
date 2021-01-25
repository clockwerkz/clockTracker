export const onBlur = () => {
    console.log("blurring:", new Date())
    //return new Date();
}

export const onFocus = (startDate) => {
    const now = new Date();
    console.log("Focus", now);
    // const calcTime = (now.getHours() - startDate.getHours()) * 60;
    // if (now.getMinutes() < startDate.getMinutes()) {
    //     return calcTime - (startDate.getMinutes() - now.getMinutes());
    // } else {
    //     return calcTime + (now.getMinutes() - startDate.getMinutes());
    // }
}


