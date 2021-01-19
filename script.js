var age = +prompt('введите свой возраст');
if(age <= 18){
    console.log('Вы еще молоды.Вам нужно учиться');
    alert('Вы еще молоды.Вам нужно учиться');
}
else if(age <= 50){
    console.log('Вам нужно работать');
    alert('Вам нужно работать');
}

else if(age <= 59){
    console.log('Скоро на пенсию');
    alert('Скоро на пенсию');
}
else if(age <= 150){
    console.log('Вы пенсионер');
    alert('Вы пенсионер');
}
else{
    console.log('ошибка');
    alert('ошибка')
}
