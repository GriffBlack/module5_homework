let x;
switch (typeof x) {
    case 'boolean':
        console.log('x - булевое значение');
        break;
    case 'number':
        console.log('x - число');
        break;
    case 'string':
        console.log('x - строка');
        break;
    default:
        console.log('Тип x не определён');
        break;
}
