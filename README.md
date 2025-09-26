# README - Password Generator

## 📋 Descrição do Projeto

Password Generator é uma aplicação web simples e eficiente para gerar senhas aleatórias personalizáveis. Desenvolvido com HTML, CSS e JavaScript puro, permite aos usuários criar senhas seguras com base em critérios específicos.

## ✨ Funcionalidades

- 🔢 **Comprimento personalizável**: Senhas de 1 a 24 caracteres
- 🎯 **Critérios personalizáveis**:
  - Letras maiúsculas (A-Z)
  - Letras minúsculas (a-z)
  - Números (0-9)
  - Caracteres especiais (!@#$%&\*()-\_)
- 📱 **Interface responsiva**
- 📋 **Cópia fácil para área de transferência**
- ⚡ **Validação em tempo real**

## 🚀 Como Usar

1. **Defina o comprimento da senha**: Digite o número desejado (máximo 24 caracteres)
2. **Selecione os critérios**: Marque as caixas conforme suas necessidades
3. **Gere a senha**: Clique em "Generate Random Password"
4. **Copie a senha**: Use o ícone de cópia ao lado da senha gerada

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização e design responsivo
- **JavaScript**: Lógica de geração e validação
- **Font Awesome**: Ícones modernos e intuitivos

## 📁 Estrutura do Projeto

```
password-generator/
│
├── index.html          # Estrutura principal da aplicação
├── style.css           # Estilos e design responsivo
├── index.js            # Lógica de geração de senhas
└── README.md           # Documentação do projeto
```

## 🔧 Funcionalidades Técnicas

### Geração de Senhas

- Algoritmo aleatório seguro usando `Math.random()`
- Combinação personalizável de caracteres
- Validação de entrada do usuário

### Validações

- Comprimento máximo de 18 caracteres
- Verificação de pelo menos um critério selecionado
- Feedback visual em tempo real

### Experiência do Usuário

- Ícone de confirmação ao copiar senha
- Mensagens de erro claras
- Interface intuitiva e amigável

## 🎨 Personalização

O projeto pode ser facilmente personalizado modificando:

- **Comprimento máximo**: Altere `MAX_LENGTH` em `index.js`
- **Caracteres disponíveis**: Modifique as strings em `generatePassword()`
- **Estilos**: Ajuste cores e layout em `style.css`

## 🌐 Compatibilidade

- ✅ Chrome (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Edge (versões recentes)

## 👨‍💻 Desenvolvimento

### Próximas Melhorias Possíveis

- Força meter para avaliar a segurança da senha
- Histórico de senhas geradas
- Modo escuro/claro
- Exportação de senhas
- Geração de frases-senha (passphrases)

### Para Executar Localmente

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html` em seu navegador
3. Não requer servidor - funciona localmente

---

**Desenvolvido com Thiago Figueiredo**
