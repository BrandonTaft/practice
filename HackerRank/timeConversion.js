function timeConversion(s) {
    let _hour = parseInt(s.split(':')[0]);
    let dayNight = (s.includes('AM')) ? 'AM' : 'PM';
    _hour =
    (_hour < 12 && dayNight === 'PM') ? '' + (12 + _hour) + ':' :
    (_hour == 12 && dayNight === 'PM') ? _hour + ':' :
    (_hour < 12 && dayNight === 'AM') ? _hour + ':' :
    '00:';
    return `${_hour.padStart(3, 0)}${s.substring(3)}`.replace(dayNight, '');
}