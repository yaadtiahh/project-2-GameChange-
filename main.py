from jinja2 import Environment, FileSystemLoader, select_autoescape
from livereload import Server, shell


server = Server() # Создание сервера
server.watch('main.html') # Команда которая следит за изменениями в файлах и после каждого изменения запускает консольную программу.
server.serve(root='.') # Запуск сервера.
