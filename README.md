
# 🌱 Site da Pré-Incubação | Vale do Sol - Assaí/PR

Este repositório contém o código-fonte do **site institucional da Pré-Incubação Vale do Sol**, um programa da **Secretaria de Ciência, Tecnologia e Inovação de Assaí/PR**, criado para apoiar projetos inovadores em celebração aos **93 anos de Assaí**.

---

## 🎯 Objetivo

Divulgar o programa de **pré-incubação de projetos**, seus processos, premiações e resultados, com um site moderno, responsivo e com foco em acessibilidade, interatividade e identidade visual alinhada ao município.

---

## 📌 Principais Tecnologias

- **HTML5** com estrutura semântica
- **Tailwind CSS** para estilização rápida, responsiva e com design modular
- **JavaScript Vanilla** para interações (menu mobile, lightbox, animações)
- **ScrollReveal.js** para efeitos de entrada suave
- **Schema.org (JSON-LD)** para SEO estruturado

---

## 🧱 Estrutura do Projeto

```
.
├── index.html              # Página principal
├── formulario.html         # Página de submissão de projeto
├── comoFunciona.html       # Explicação do processo de pré-incubação
├── style.css               # Estilos adicionais (quando necessário)
├── script.js               # Funcionalidades JS (menu, lightbox, animações)
├── tailwind.config.js      # Configuração do Tailwind CSS
├── postcss.config.js       # Configuração do PostCSS
├── /src                    # Imagens, ícones e ativos visuais
│   ├── logo_93anos_icone.png
│   └── Logo_VDS_NaoVazado.png
└── README.md               # Documentação do projeto
```

---

## 🌈 Recursos Visuais

- Layout **100% responsivo** via Tailwind
- Componentes com **hover effects** e **scale transitions**
- Animações ao rolar a página (ScrollReveal + Tailwind utilities)
- **Lightbox** personalizado para imagens da galeria e prêmios
- Tipografia e espaçamentos baseados em **utilitários Tailwind**

---

## 🛠️ Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
   ```

2. Instale as dependências do Tailwind (se aplicável):
   ```bash
   npm install
   ```

3. Execute o processo de build do Tailwind (modo dev ou produção):
   ```bash
   npx tailwindcss -i ./input.css -o ./style.css --watch
   ```

4. Abra o `index.html` no navegador.

---

## ✨ Funcionalidades JS

- **Menu mobile:** Botão hamburguer com animação de abertura/fechamento.
- **Lightbox:** Visualização ampliada de imagens.
- **ScrollReveal:** Animações de entrada ao rolar.
- **Atualização dinâmica:** Ano de copyright.
- **Fechamento automático do menu:** Ao clicar em um link.

---

## 🔍 SEO & Acessibilidade

- **Estrutura SEO-friendly:** Uso de tags semânticas e metadados JSON-LD.
- **Responsivo:** Mobile-first com Tailwind.
- **Acessibilidade:** Uso de ARIA, alt em imagens e boa hierarquia de navegação.

---

## 🤝 Como Contribuir

1. Faça um fork deste repositório
2. Crie uma branch com sua feature/fix:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "feat: Minha contribuição"
   ```
4. Push para o seu repositório:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**

---

## 📬 Contato

**Secretaria de Ciência, Tecnologia e Inovação - Assaí/PR**  
📧 E-mail: secti@assai.pr.gov.br  
📞 Telefone: (43) 3262-8306  
🌐 [Site oficial](https://valedosol.assai.pr.gov.br)

---

## 📝 Licença

Projeto institucional e de uso público para fins informativos e de divulgação científica e tecnológica da cidade de Assaí/PR.
