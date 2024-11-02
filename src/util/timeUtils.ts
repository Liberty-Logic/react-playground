export function getCurrentTime() {
    const dateTime = new Date();
    const hours = dateTime.getHours();

    return {
        hour: ((hours + 11) % 12) + 1,
        minute: dateTime.getMinutes(),
        second: dateTime.getSeconds(),
        isAM: hours < 12,
    };
}