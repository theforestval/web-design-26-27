Запрос: Задай ширину и одинаковое расстояние между всеми секциями сайта

Результат:

section {
  padding: 48px 0;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

Результат проверки: между блоками отсутствует расстояние

Самостоятельные изменения: добавление расстояния между блоками контента путем разделения ролей section (отвечает за ширину и горзионтальные отступы) и container (отвечает за вертикальные)

section {
  padding: 24px 0;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}


