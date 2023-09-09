/// <reference types="cypress" />
// ***********************************************
// この例の commands.ts は、さまざまなカスタムコマンドの
// 作成方法や既存のコマンドの上書き方法を示しています。
//
// カスタムコマンドのより包括的な例については、
// 以下を参照してください：
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- これは親コマンドです --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- これは子コマンドです --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- これは二重コマンドです --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- これは既存のコマンドを上書きします --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//  namespace Cypress {
//   interface Chainable {
//    login(email: string, password: string): Chainable<void>
//    drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//    dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//    visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//   }
//  }
// }

// TypeScriptがファイルをレガシースクリプトとして読み取るのを防ぐ
export {}