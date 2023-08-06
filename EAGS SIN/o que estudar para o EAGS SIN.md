1 LÍNGUA PORTUGUESA 1.1 TEXTO: Interpretação de textos literários ou não literários. 1.2 GRAMÁTICA: Fonética: sílaba; separação silábica; encontros vocálicos; encontros consonantais; tonicidade; acentuação gráfica; ortografia. Morfologia: processos de formação de palavras; Classes de palavras: substantivo (classificação e flexão); adjetivo (classificação, flexão e locução adjetiva); advérbio (classificação e locução adverbial); conjunções (coordenativas e subordinativas); verbo: flexão verbal (número, pessoa, modo, tempo, voz), classificação (regulares, irregulares, defectivos, abundantes, auxiliares e principais) e conjugação dos tempos simples; pronome (classificação e emprego). Pontuação. Sintaxe: Períodos Simples e Composto (termos essenciais, integrantes e acessórios; coordenação e subordinação; orações reduzidas); Concordâncias verbal e nominal; Regências verbal e nominal; Crase e Colocação Pronominal. Tipos de discurso. Estilística: Figuras de linguagem (metáfora, metonímia, hipérbole, prosopopéia, eufemismo e antítese).

INFORMÁTICA - SIN
	LÓGICA DE PROGRAMÇÃO
	LINGUAGENS DE PROGRAMAÇÃO
		paradigmas da programação
			o que é uma paradigma da prgramação ?
		Linguagens
			Linguagem PHP
				Características. 
					1.é case sensitive
					2.é uma linguagem de **_scripts_ interpretada do lado do servidor**.
				Variáveis. 
					escopo de variaveis
						por padrão a variavel so pode ser acessa no escopo no qual foi definida , não podendo ser acessada em nenhum outro escopo , apenas no escopo local.
						palavra chave global
							é usada para permitir o acesso   a variavel que foi definida no scopo global , então eu poderia acessa-lo em um outro escopo.
						static variable
							a variavel statica não reinicializa o valor ela mantém o último valor atribuida a ela.
							erro ao atribuir uma função a variavel estática 
								tentar atribuir uma função a uma variavel estática causa um erro
								static $int = sqrt(121) // errado é uma expressão 
					variavel variavel
						é a utilização do valor de uma variavel para criar uma nova variavel 
					variavel variavel no array
				Constantes. 
					use of the define method
				Type casting
					conversão explicita (cast)
						exemplo de código
							<?php  
							$foo = 10; // $foo é int  
							$bar = (bool) $foo; // $bar é bool  
							?>
				Expressão
					o que é uma expressão ?
						é tudo aquilo que retorna um valor
						exemplos
							1.$primeira ? $segunda : $terceira
							2. returnFive() // essa fução retorna 5
				Tipos de dados
				Operadores. 
					Precedência de Operadores
					Operadores Aritméticos
						identidade
						módulo
					Operadores de Atribuição
						$a = 3;  
						$a += 5; // define $a para 8, como se disséssemos: $a = $a + 5;  
						$b = "Bom ";  
						$b .= "Dia!"; // define $b para "Bom Dia!", como em $b = $b . "Dia!";
						$d = &$$b //  A atribuição por referência significa que ambas as variáveis apontam para o mesmo dado, e nada é copiado.
					Operadores bit a bit (bitwise)
					Operadores de Comparação
						$a <> $b
							Diferente Verdadeiro se $a não é igual a $b.
						$a !== $b 
							Não idêntico Verdadeiro de $a não é igual a $b, ou eles não são do mesmo tipo (introduzido no PHP4).|
						$a <=> $b
							operador space ship
							- Retorna _0_ se os valores de ambos os lados são **iguais**.
							- Retorna _1_ se o valor à **esquerda** é maior.
							- Retorna _-1_ se o valor à **direita** é maior.
						notes
							comparando string com um núemro
								Se comparar um número com uma string ou com strings numéricas, cada string é convertido para um número
								var_dump("10" == "1e1"); // 10 == 10 -> true  
								var_dump(100 == "1e2"); // 100 == 100 -> true
					Operadores de controle de erro
					Operadores de Execução
						operador de execução acento grave(` ls -al `) ele executa o comando entre o acento grave dentro do shell , A utilização do operador acento grave é idêntica a da função shell_exec()
						exemplo de código
							<?php
								$output = `ls -al`;
								echo "<pre>$output</pre>"; // pre escreve o codigo como ele foi digitado|formatado
								?>
					Operadores de Incremento/Decremento
					Operadores Lógicos
						$a xor $b 
							**`true`** if either $a or $b is **`true`**, but not both.
						&& or and
						|| or or
					Operadores de String						
					Operadores de Arrays
							$a + $b 
								operador de União	 ele une o array não sobrescrevendo os valores das chaves do primeiro
							$a == $b
								operador de igualdade
								true se ele possuem as mesmas pares de chave e valores na mesma ordem e do mesmo tipo
							$a === $b
								operador de identidade
								**`true`** se $a e $b tem os mesmos pares de chave/valor na mesma ordem e do mesmo tipo.
							$a != $b and $a <> $b
								true se
									pares de chaves diferentes
									valores não iguais
									ordem diferentes
								operador de desigualde
							$a !== $b
								operador de não identidade
								true se
									pares de chaves diferentes
									valores de tipos diferentes
									ordem diferentes
					Operadores de tipo
				Estrutura de controle
					operadores condicionais
						if e else
						elseif() ou else if()
					operador ternário
						forma curta ou short form
							(condição) ?: codigo2 
					estrutura de repetição
						for
						foreach
				Formulários : Manipulando dados. 
				Variáveis de ambiente. 
				OOP(object-oriented-programming)
					Class and Objects
						visibility
							Class methods may be defined as public, private, or protected those keywrod modifies the access
							public
								can be accessed anywhere
							protected
								Protected properties and methods can only be used by the class in which the property or method was defined and any classes that derive(A derived class is **a class created or derived from another existing class**.) from it. Any other code cannot use them.
							private
								Private properties and methods can only be used by the class in which the property or method was defined. Derived classes and outside code cannot use them.
						herança de classe
							Por exemplo, ao estender uma classe, a subclasse herda todos os métodos públicos e protegidos mas  não os privados, propriedades e constantes da classe pai. ele não sobrescreve as propriedade , metodos e constantes da subsclasse
						tipos de classes
							o que é uma classe base ou classe pai ou super base ou superclasse ?
								é uma classe da qual as outras são derivadas
							o que é uma classe derivada ou subclasse ?
								é uma classe que herda as propriedades e metodos de uma outras classe quando é extendida
							o que é uma classe abstrata ?
								Uma classe abstrata é uma classe que não pode ser instanciada como um objeto diretamente. Ela tem que ser estendida por alguma classe concreta
							o que é uma classe concreta ?
								são classes derivadas das classes abstratas 
						metodos abstratos
							todo método abstrato precisa ser obrigatoriamente implementado na classe filha , e por isso ela pode ter diferentes funções em diferentes classes
						classe final
							Uma classe final é uma classe que não pode ser estendida por nenhuma outra classe, ou seja, a classe final não tem herdeiros, pois ela é a última de sua hierarquia. Em nosso exemplo temos uma conta do tipo poupança que, pela regra de negócio de um banco, não possui uma derivação, ou seja, não deve ser estendida.
						método final
							métodos finais jamais podem ser reescritos nas classes filhas . em nosso exemplo de agência banária, podemo concluir que o método sacar de uma conta é padrão para todas as contas, independentemente de seu tipo.
						traits and use keywords
							nos permite definir um conjunto de propriedades e metodos que seram herdadas através do uso da palavra chave use
						static methods and static properties
							Declaring class properties or methods as static makes them accessible without needing an instantiation of the class. These can also be accessed statically within an instantiated class object.
					Funções e Orientação a Objetos. 
				Utilização de includes .  
					1. o include inclui e avalia o arquivo
					2. quando o arquivo é incluido o interpretador sai do modo php e entra no modo HTML 
					3. Se os "[empacotadores de inclusão de URL](https://www.php.net/manual/pt_BR/filesystem.configuration.php#ini.allow-url-include)" estiverem habilitados no PHP, pode-se definir um arquivo a ser incluído usando uma URL (via HTTP ou outro protocolo suportado - veja [Protocolos e Wrappers suportados](https://www.php.net/manual/pt_BR/wrappers.php) para uma lista de protocolos)
					include e a instrução return
						a utilização do  return no escopo global faz com o valor seja retornado quando o arquivo php ser incluido pelo include , case não haja valor de retorno especificado o include retorna 1 para uma inclusão bem sucedia e 0 para uma inclusão não bem sucedida e um E_WARNING
				Manipulação de banco de dados. 
				Comandos para manipulação de banco de dados MySQL e controle de transações. Cookies e sessões. 
				Manipulação de arquivos, diretórios, strings, arrays, funções e objetos.
			Linguagem JAVA:
		O Sistema de Gestão de Bases de Dados (_SGBD_) ou Data Base Management System (_DBMS_)
			o que é um banco de dados ?
				é uma coleção organizada de inforamações gerenciada por um sistema de gerenciamentos de banco de dados
			tipos de banco de dados
				banco de dado relacional
					Um banco de dados relacional é um conjunto de informações que organiza dados em relações predefinidas, em que os dados são armazenados em uma ou mais tabelas (ou "relações") de colunas e linhas, facilitando a visualização e a compreensão de como as diferentes estruturas de dados se relacionam.
				banco de dado não relacional
					O que é Banco de Dados Não Relacional? O banco de dados não relacional **é um banco de dados que possibilita a flexibilidade na hora de armazenar os dados, já que não se limita a tabelas com linhas e colunas, como o banco de dados relacional**.
			MySQL
				o que é MySQL
					O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, 
			Linguagem SQL
				o que é o SQL ?
					A Linguagem de consulta estruturada (SQL) é uma linguagem de programação para armazenar e processar informações em um banco de dados relacional. Um banco de dados relacional armazena informações em formato tabular, com linhas e colunas representando diferentes atributos de dados e as várias relações entre os valores dos dados. Você pode usar instruções SQL para armazenar, atualizar, remover, pesquisar e recuperar informações do banco de dados. Também pode usar SQL para manter e otimizar a performance do banco de dados.
				conceitos básicos
				tipos de dados aceitos pelo MySQL e pelo PostgreSQL
				 Criação de banco de dados e tabelas. Inserir, alterar, excluir ou fazer consultas em banco de dados. 
				 Componentes de um BD. Modelos de BD. Normalização. Modelos Navegacionais.
				 
