var reporter=require('allure-mocha/runtime');
describe('Фича', function () {
    it('Новый тест', function () {
        reporter.allure.feature('Фича');
        reporter.allure.issue("jira", "https://jira.somecorp.ru/A-123");
        reporter.allure.tag("Regression");
        reporter.allure.label('AS_ID','27');

        reporter.allure.logStep('зайти на такую то страницу',"passed");
         
        reporter.allure.logStep('нажать такую-то кнопку',"passed");

        reporter.allure.logStep('пойти в БД такую-то',"passed");

        reporter.allure.logStep('проверить значение такое-то - значение должно быть таким то',"passed");
    });

    });