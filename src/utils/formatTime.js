function zeroPad(number, size = 2) {
    let s = String(number);
    while (s.length < size) { s = '0' + s; }
    return s;
}

export default function timeFormat(miliseconds) {

    let rem = miliseconds / 1000;
    // const hh = parseInt(rem/ 3600, 10);
    rem %= 3600;
    const mm = parseInt(rem / 60, 10);
    const ss = parseInt(rem % 60, 10);
    const S = parseInt((miliseconds % 1000) / 100, 10);

    return `${zeroPad(mm)}:${zeroPad(ss)}.${S}`;
}