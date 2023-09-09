/* eslint-disable */
// ESLintを無効にすることで、Next.jsリポジトリ内でのリントの失敗を防ぎます。
// もしあなたのプロジェクトでESLintを使用している場合、代わりにESLint Cypressプラグインをインストールすることをおすすめします：
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E テスト
describe('ナビゲーション', () => {
  it('aboutページに移動する必要があります', () => {
    // indexページから開始
    cy.visit('http://localhost:3000/')

    // "about"を含むhref属性を持つリンクを見つけてクリック
    cy.get('a[href*="about"]').click()

    // 新しいurlには"/about"が含まれている必要があります
    cy.url().should('include', '/about')

    // 新しいページには"About Page"というh1が含まれている必要があります
    cy.get('h1').contains('About Page')
  })
})

// TypeScriptがファイルをレガシースクリプトとして読み取るのを防ぐ
export {}
