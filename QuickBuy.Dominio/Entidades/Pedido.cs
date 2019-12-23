
using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido  { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public string NumeroEndereco { get; set; }
        public int FormaPagamentoId { get; set; }
        public FormaPagamento FormaPagamento { get; set; }


        /// <summary>
        /// Pedido deve ter pelo menos um item de pedido ou muitos itens pedidos
        /// </summary>
        public ICollection<ItemPedido> ItensPedidos { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (!ItensPedidos.Any())
                AdicionarCritica("Crítica - Pedido não pode ficar sem item de pedido");

            if (string.IsNullOrEmpty(CEP))
                AdicionarCritica("Crítica - CEP deve estar preenchido");

            if (string.IsNullOrEmpty(Estado))
                AdicionarCritica("Crítica - Estado deve estar preenchido");

            if (string.IsNullOrEmpty(Cidade))
                AdicionarCritica("Crítica - Cidade deve estar preenchido");


            if (string.IsNullOrEmpty(EnderecoCompleto))
                AdicionarCritica("Crítica - Endereço deve estar preenchido");

            if (string.IsNullOrEmpty(NumeroEndereco))
                AdicionarCritica("Crítica - Número deve estar preenchido");

            if (FormaPagamentoId == 0)
                AdicionarCritica("Crítica - Não foi informado a forma de pagamento");
        }
    }
}
