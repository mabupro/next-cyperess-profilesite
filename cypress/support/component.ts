/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************************
// この例の support/component.ts は処理され、
// テストファイルの前に自動的にロードされます。
//
// これは、Cypressを変更するグローバルな設定や
// 振る舞いを置くのに適しています。
//
// このファイルの場所を変更するか、
// 'supportFile' 設定オプションでサポートファイルの自動提供を
// オフにすることができます。
//
// 詳細はこちらで読むことができます：
// https://on.cypress.io/configuration
// ***********************************************************

// ES2015の構文を使用して commands.js をインポートします：
import './commands'

// あるいは、CommonJSの構文を使用することもできます：
// require('./commands')

import { mount } from 'cypress/react18'

// Cypressの名前空間を拡張して、
// カスタムコマンドの型定義を含めます。
// あるいは、cypress/support/component.d.ts で定義することができ、
// 仕様のトップに <reference path="./component" /> を持つことができます。
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

// 使用例：
// cy.mount(<MyComponent />)