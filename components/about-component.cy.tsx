import AboutComponent from './about-component'
/* eslint-disable */
// ESLintを無効にすることで、Next.jsリポジトリ内でのリントの失敗を防ぎます。
// もしあなたのプロジェクトでESLintを使用している場合、代わりにESLint Cypressプラグインをインストールすることをおすすめします：
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress コンポーネント テスト
describe('<AboutComponent />', () => {
  it('期待されるコンテンツを表示してレンダリングする必要があります', () => {
    // AboutページのReactコンポーネントをマウント
    cy.mount(<AboutComponent />)

    // 新しいページには"About Page"というh1が含まれている必要があります
    cy.get('h1').contains('About Page')

    // 期待されるURLのリンクが存在することを検証します
    // リンクを*フォローする*のはE2Eテストにより適しています
    cy.get('a[href="/"]').should('be.visible')
  })
})

// TypeScriptがファイルをレガシースクリプトとして読み取るのを防ぐ
export {}
