import ProfileComponent from './profile-component';

// ProfileComponentのCypressコンポーネントテストを記述
describe('<ProfileComponent />', () => {
    it('期待されるコンテンツを正しくレンダリングすること', () => {
        // ProfileComponentをテストのためにマウント
        cy.mount(<ProfileComponent />);
        
        // "Profile Page"というh1のテキストが存在するか確認
        cy.get('h1').contains('Profile Page');
        
        // ユーザーの名前"眞野慎也"が表示されているか確認
        cy.get('p').contains('名前: 眞野慎也');
        
        // 期待されるURLリンクが存在するか検証
        cy.get('a[href="/"]').should('be.visible');
        cy.get('a[href="https://twitter.com/mabupro_tec"]').should('be.visible');
        cy.get('a[href="https://qiita.com/mabupro"]').should('be.visible');
        cy.get('a[href="https://github.com/mabupro"]').should('be.visible');
        
        // 必要に応じて、コンポーネントの他の内容に基づいてさらにアサーションを追加できます
    });
});

// TypeScriptがファイルをレガシースクリプトとして解釈するのを防ぐ
export { };
