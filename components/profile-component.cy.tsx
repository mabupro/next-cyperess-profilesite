import ProfileComponent from './profile-component'

// Cypress コンポーネント テスト
describe('<ProfileComponent />', () => {
    it('期待されるコンテンツを表示してレンダリングする必要があります', () => {
        // AboutページのReactコンポーネントをマウント
        cy.mount(<ProfileComponent />)

        // 新しいページには"About Page"というh1が含まれている必要があります
        cy.get('h1').contains('Profile Page')

        // 期待されるURLのリンクが存在することを検証します
        // リンクを*フォローする*のはE2Eテストにより適しています
        cy.get('a[href="/"]').should('be.visible')
    })
})

// TypeScriptがファイルをレガシースクリプトとして読み取るのを防ぐ
export { }
