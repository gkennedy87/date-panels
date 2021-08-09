const generateDayKanji = (x) => {
    const date = new Date(x)
    const day = date.getDay(date);
    switch(day) {
        case 0:
            setDayKanji('日');
            break;
        case 1:
            setDayKanji('月');
            break;
        case 2:
            setDayKanji('火');
            break;
        case 3:
            setDayKanji('水');
            break;
        case 4:
            setDayKanji('木');
            break;
        case 5:
            setDayKanji('金');
            break;
        case 6:
            setDayKanji('土');
            break;
        default:
            setErrorMsg('There is something wrong with the date')
    }
}