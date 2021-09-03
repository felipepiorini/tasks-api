export default class Util {
    public static isEmail(str: string): Boolean {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(str).toLowerCase());
    }

    public static hasUppercase(value: string) {
        return /[A-Z]/.test(value);
    }

    public static hasLowercase(value: string) {
        return /[a-z]/.test(value);
    }

    public static hasMinLengthRequired(value: string, minLength: number) {
        return value && value.length >= minLength;
    }

    public static isAllFilled(arr: Array<string | number>) {
        return arr.every((item: string)=> !!item);
    }
}
