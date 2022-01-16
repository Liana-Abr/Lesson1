`1 чтение с клавиатуры и вывод в терминал 
и
2 чтение из файла и вывод в терминал`;
function processing(isFile: boolean): void {
  let message: string;
  if (isFile) {
    message = "Зачитали из файла";
  } else {
    message = "Зачитали с клавиатуры";
  }
  console.log(`Задание 1,2: ${message}`);
}
processing(true);
processing(false);

`3 чтение с клавиатуры и отправка данных по сети
и 
4 чтение из файла и отправка данных по сети`;

function klavset(isFile: boolean) {
  if (isFile) {
    return "Зачитали с клавиатуры и отправили данные по сети";
  } else {
    return "Зачитали из файла, и отправили данны сети";
  }
}
klavset(true);
klavset(false);

//5 чтение с клавиатуры и запись в файл
function kvfile(isFile: boolean) {
  if (isFile) {
    return "Зачитали с клавиатуры и записали в файл";
  } else {
    return "Зачитали с клавиатуры, но записать не получилось";
  }
}
kvfile(true);

`6 получение данных из сети и вывод в терминал
и 
7 получение данных из сети и запись в файл`;

function ss(isFile: boolean): void {
  let message: string;
  if (isFile) {
    message = "Получили данные из сети и вывели в терминал";
    console.log(`Задание 6: ${message}`);
  } else {
    message = "Получили данные из сети и записали в файл";
  }
}
ss(true);
