# О проекте

Пагинация списка товаров на Next js.

## Техническое задание

1. Список товаров должен выглядеть в виде сетки
2. Каждый товар имеет:
   - Фоновую картинку товара
   - Название товара
   - Название бренда товара
   - Badge (пример) с текстом “new” или “top”
3. Отобразить пагинацию с двумя кнопками (вперед и назад) и инпутом с текущей страницей и добавить функционал перелистывания
4. Разбить все на чистые компоненты и композиции компонентов, так чтобы можно было переиспользовать их в разных местах проекта
5. Использовать локальные стили компонентов (пример: button.module.css)
6. Компонент кнопки должен иметь функционал отображения в разных стилях (например в библиотеке Bootstrap):
   - минимум 3 цвета - Default, Success и Danger
   - кнопка может быть как кнопкой так и ссылкой в виде кнопки
   - может быть по размеру стандартной или большой
   - может быть блочной занимающей все пространство по горизонтали или строчной
   - отображение определенного стиля кнопки контролируется его родителем с помощью передачи props
7. Реализовать в фреймворке Next.js
8. Адаптивность Mobile-first.
9. Не использовать сторонние библиотеки/фреймворки кроме react.js, next.js, clsx и расширений css.

### Слабые места проекта

#### _Отсутствие динамической пагинации_

##### Как можно решить?

    - В новой версии Next нельзя использовать хуки React внутри серверных компонентов.
    Самое простое решение, что я смог найти по 13ой версии - использование различных стейт менеджеров, что
    противоречит ТЗ

##### Почему я этого не сделал?

    - В ТЗ указана пагинация, но не указано, что она должна быть динамической

#### _Sass вместо css_

##### С чем связано?

    - Осознанно нарушил этот пункт ТЗ. Это связано с тем, что я решил
    заморочиться над оформлением и на sass мне просто пришлось писать
    меньше кода и media запросов. Плюс использовал свои готовые миксины
    для адаптива. Не считаю этот пункт критичным.

## При разработке испольовались

- [NextJs](https://beta.nextjs.org/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [ClassNames](https://www.npmjs.com/package/classnames)
- [Sass](https://www.npmjs.com/package/sass)
