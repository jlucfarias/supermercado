import Header from "@/components/header";

type CommonLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function CommonLayout({
  children,
}: CommonLayoutProps) {
  return (
    <article>
      <Header />
      <main>
        {children}
      </main>
      <footer>
        <nav>
          <a>Sobre a X</a>
          <a>Políticas de privacidade</a>
          <a>Condições de uso</a>
          <a>Forneça para a X</a>
          <a>Frete e entrega</a>
          <a>Devoluções e reembolsos</a>
          <a>Ajuda</a>
        </nav>
        <nav>
          <h4>Metodos de pagamento</h4>
          <a>Pix</a>
        </nav>
        <nav>
          <h4>Meios de contato</h4>
          <a>Telefone</a>
          <a>Whatsapp</a>
          <a>Telegram</a>
          <a>E-mail</a>
        </nav>
        <nav>
          <h4>Redes sociais</h4>
          <a>Instagram</a>
          <a>Youtube</a>
        </nav>
        <p>Copyright 2025 Empresa 01.001.001/0001 </p>
        <a>Luc</a>
      </footer>
    </article>
  );
}
