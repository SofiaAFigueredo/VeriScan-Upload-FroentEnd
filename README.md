# VeriScan - Frontend Interface

Esta é a aplicação cliente do projeto **VeriScan**. [cite_start]Uma interface gráfica interativa projetada para democratizar o acesso a ferramentas complexas de perícia digital, permitindo a visualização dos resultados obtidos pelos métodos de detecção de forma simples e direta[cite: 334].

## 🛠️ Tecnologias Utilizadas

* **Next.js**: Framework React com renderização otimizada e roteamento baseado em arquivos.
* **Tailwind CSS**: Estilização responsiva e moderna.

## 🎨 Funcionalidades Planejadas

[cite_start]Em conformidade com o plano de trabalho de Interface Gráfica (Estudante 4), o painel provê[cite: 331, 334]:
* **Área de Upload Interativa:** Sistema para submissão rápida de arquivos de imagem suspeitos.
* [cite_start]**Visualizador de Resultados:** Exibição clara e interativa para a visualização dos resultados obtidos pelos métodos de detecção[cite: 334].
* [cite_start]**Painel Comparativo:** Permite a comparação clara entre as diferentes abordagens avaliadas no projeto (Métodos Clássicos vs. Deep Learning)[cite: 334].

## 🏃 Como Rodar

1. Instale as dependências:
   ```bash
   npm install

```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev

```


A interface estará disponível em `http://localhost:3001`.

## 🔄 Proxy Reverso Integrado

Para simplificar a comunicação com o servidor local e contornar restrições de CORS sem a necessidade de configurações adicionais, o Next.js está configurado com um proxy reverso para mapear as chamadas internas de forma automatizada:

```javascript
// Requisições feitas para este padrão:
/api/* // São redirecionadas automaticamente para:
http://localhost:4000/*
