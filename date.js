function dtime_nums(e) {
    const n = new Date();
    n.setDate(n.getDate() + e);
    return `${n.getDate() + e}.${n.getMonth() + e}.${n.getFullYear()}`;;
  }
  
  function writeDate(){
    let date = document.getElementById('date')
    date.textContent = dtime_nums(1)
  }
  writeDate()


  /*<script>
    var appendNull = function (t) { return t < 10 ? 0 + t.toString() : t };
     function dtime_nums(t) { d = new Date, p = new Date(d.getTime() + 864e5 * (t + 1)), monthb = "01,02,03,04,05,06,07,08,09,10,11,12".split(","), document.write(appendNull(p.getDate()) + "." + monthb[p.getMonth()] + "." + p.getFullYear()) }
  </script>

  <script>
                                    // Получаем текущую дату
                                    var today = new Date();

                                    // Увеличиваем дату на 1 день
                                    var tomorrow = new Date(today);
                                    tomorrow.setDate(today.getDate() + 1);

                                    // Получаем год, месяц и день завтрашней даты
                                    var year = tomorrow.getFullYear();
                                    var month = tomorrow.getMonth() + 1; // Обратите внимание, что месяцы в JavaScript начинаются с 0
                                    var day = tomorrow.getDate();

                                    // Форматируем месяц и день, чтобы добавить ведущий 0 при необходимости
                                    if (month < 10) {
                                      month = '0' + month;
                                    }
                                    if (day < 10) {
                                      day = '0' + day;
                                    }

                                    // Создаем строку с завтрашней датой в формате 'YYYY-MM-DD'
                                    var tomorrowDate = year + '-' + month + '-' + day;

                                    // Получаем элемент с id "tomorrow-date" из HTML
                                    var dateElement = document.getElementById('tomorrow-date');

                                    // Вставляем завтрашнюю дату в HTML-код элемента
                                    dateElement.textContent = tomorrowDate;

                                  </script>*/