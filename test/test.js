var assert = require('assert');
require("mocha-allure-reporter");

describe('Микросервис обработки анкет партнеров', function () {
  const testStep = allure.createStep("#1 initial",()=> {
    //something
    assert.equal([1, 2, 3].indexOf(4), -1);
  })
    it('правильный /POST запрос на создание анкеты от партнера такого-то должен быть принят', function () {
      testStep();
    });
});