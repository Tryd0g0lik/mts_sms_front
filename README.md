# Review
Проект на:
- *Webpack*;
- *TypeScript*;
- *Flask*.

*Проект имеет [back](https://github.com/Tryd0g0lik/mts_sms_back).*\
*Back настроен через `poetry`. *\

## Tree of project
Для дальнейшей работы с front и back в корне создайте `sms_front` и \
`sms-project`. Директории являются sub-root в основном проекта \
для работы с front и back.    

Из `webpack` сборка проходит:

|||
|:---|:---|
|`sms_postman/static/styles/style.css`|`sms_postman/templates/index.html`|
|`sms_postman/static/scripts/main-792-51352717b8978e745511.js`|`sms_postman/static/scripts/manifest.json`|
|||

Файл *.js , при каждой сборке имеет разные имена. \
Например `main-792-51352717b8978e745511.js`. Сделано для отслеживания версий. \
В шаблон вставляется через дополнительный код `receive_pathname_js_file()`.

## .ENV
```text
// Для сборки в режиме "development"
yarn run `build:dev` 
or
npm run `build:dev` 


// Для сборки в режиме "production"
yarn run `build` 
or
npm run `build` 
```

## And last
Проект имеет настроенный front. В начале логику формы хотел пустить через JS. 
Но после сделал через формы от flask.

## And more
Больше информации [back](https://github.com/Tryd0g0lik/mts_sms_back).
