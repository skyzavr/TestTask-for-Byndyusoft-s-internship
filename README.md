# TestTask-for-Byndyusoft-s-internship
Тестовое задание на интернатуру в компанию "Byndyusoft" на позицию Frontend. <br>
Основная задача: через поле ввода получить массив чисел и вывести сумму двух минимальных чисел. <br>
Сделана проверка на пустое значение и на нечисловые значения. <br>
При неправильном значении появится сообщение об ошибке (с помощью модального окна).<br>
<br>
**Основной алгоритм:**<br>
Я выбрала простой обход через цикл, так как он займет O(n).<br>
Если использовать встроенную функцию sort(fn) и метод arr.slice(), то на сортировку уйдет примерно O(n log n).<br>
Разница по скорости между первыми двумя алгоритмами заметна будет при больших данных.<br>
__________________________________________________________________
A test assignment for an internship in the company "Byndyusoft" for the Frontend position. <br>
The main task: to get an array of numbers through the input field and output the sum of two minimum numbers. <br>
A check was made for an empty value and for non-numeric values. <br>
If the value is incorrect, an error message will appear (using a modal window)<br>
<br>
**The main algorithm:**<br>
I chose a simple loop traversal since it will take O(n).<br>
If I’d use the built-in sorting function sort(fn) and the arr.slice() method, then it will take about O(n log n) to sort.<br>
The difference in speed between the first two algorithms will be noticeable when working with big data.<br>
