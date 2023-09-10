// cypress/integration/articlepost-component.cy.tsx

import React from 'react';
import ArticlePost from '../components/articlepost-component'

describe('<ArticlePost />', () => {
    beforeEach(() => {
        // ArticlePostコンポーネントをテストのためにマウント
        cy.mount(<ArticlePost />);
    });

    it('期待されるコンテンツを正しくレンダリングすること', () => {
        // "記事を投稿"というh2のテキストが存在するか確認
        cy.get('h2').contains('記事を投稿');

        // タイトル入力フィールドが存在するか確認
        cy.get('input').should('be.visible').and('have.attr', 'placeholder', 'タイトルを入力...');

        // 本文入力エリアが存在するか確認
        cy.get('textarea').should('be.visible').and('have.attr', 'placeholder', '記事の本文を入力...');

        // 投稿ボタンが存在するか確認
        cy.get('button').contains('記事を投稿').should('be.visible');
    });

    it('タイトルと本文が未記入の場合、投稿ボタンが無効になっていること', () => {
        cy.get('button').should('be.disabled');
    });

    it('タイトルと本文が記入された場合、投稿ボタンが有効になること', () => {
        cy.get('input').type('テストタイトル');
        cy.get('textarea').type('これはテストの記事本文です。');
        cy.get('button').should('not.be.disabled');
    });

    // 必要に応じて、コンポーネントの他の内容に基づいてさらにアサーションを追加できます
});

// TypeScriptがファイルをレガシースクリプトとして解釈するのを防ぐ
export { };
