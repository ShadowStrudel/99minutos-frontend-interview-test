export function validateType(arg: boolean | string, rocketId: string) {
    return typeof arg === 'string' ?
        arg === rocketId ?
            "selected" : ""
        : arg ? "selected" : ""
}