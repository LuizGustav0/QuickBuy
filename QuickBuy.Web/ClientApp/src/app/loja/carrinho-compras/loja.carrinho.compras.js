"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LojaCarrinhoCompras = /** @class */ (function () {
    function LojaCarrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrinhoCompras.prototype.adicionar = function (produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (!produtoLocalStorage) {
            this.produtos.push(produto);
        }
        else {
            //se já existir um ou mais  produtos no localSorage
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            return JSON.parse(produtoLocalStorage);
        }
        return this.produtos;
    };
    LojaCarrinhoCompras.prototype.removerProduto = function (produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
        }
    };
    LojaCarrinhoCompras.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
    };
    LojaCarrinhoCompras.prototype.temItensCarrinho = function () {
        var itens = this.obterProdutos();
        if (itens) {
            return (itens.length > 0);
        }
    };
    LojaCarrinhoCompras.prototype.limparCarrinhoCompras = function () {
        localStorage.setItem("produtoLocalStorage", "");
    };
    return LojaCarrinhoCompras;
}());
exports.LojaCarrinhoCompras = LojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.compras.js.map