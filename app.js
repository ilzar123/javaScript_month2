//1
var user = {
    name: 'ученик чародея',
    releaseDate: '16.07.10',
    mainActor: 'Николас Кейдж, Джей Барушель, Альфред Молина, Тереза Палмер',
    episodes: {
        movie: 'полнометражный фильм'}

}
console.log('Название сериала: ' + user.name + ' ' + 'Дата выхода: ' + user.releaseDate + ' ' + 'Имена актеров: ' + user.mainActor + ' ' + 'Эпизод: ' + user.episodes.movie)
//2
var daysOfTheWeek = prompt('Введите день недели')
switch (daysOfTheWeek){
    case "Monday":
    case 'monday':
        console.log('понедельник')
        break
    case "Tuesday":
    case 'tuesday':
        console.log('вторник')
        break
    case "Wednesday":
    case 'wednesday':
        console.log('среда')
        break
    case "Thursday":
    case 'thursday':
        console.log('четверг')
        break
    case "Friday":
    case 'friday':
        console.log('пятница')
        break
    case "Saturday":
    case 'saturday':
        console.log('суббота')
        break
    case "Sunday":
    case 'sunday':
        console.log('воскресенье')
        break
    default:
        console.log('unknown size')
}
