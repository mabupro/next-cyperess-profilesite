describe('Header component', () => {

    // Before each test, visit the page where the Header is displayed
    // この例では "/" としていますが、Headerコンポーネントが表示される正確なページのURLを設定してください。
    beforeEach(() => {
        cy.visit('/');
    });

    it('should render the Header component correctly', () => {
        // headerタグが存在することを確認
        cy.get('header').should('exist');
    });

    it('should display the correct title', () => {
        // h1タグの中に指定されたタイトルが表示されていることを確認
        // この例では "Sample Title" としていますが、実際のテスト対象のタイトルに変更してください。
        cy.get('h1').should('contain', 'Sample Title');
    });

    it('should display the back arrow and menu icons', () => {
        // ArrowBackIosアイコンが表示されていることを確認
        cy.get('[data-testid="back-arrow-icon"]').should('exist');

        // Menuアイコンが表示されていることを確認
        cy.get('[data-testid="menuicon"]').should('exist');
    });

});

