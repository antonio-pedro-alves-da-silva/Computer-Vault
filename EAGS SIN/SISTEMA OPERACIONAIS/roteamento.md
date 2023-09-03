## O que é roteamento?
1.Roteamento é o processo de selecionar o melhor caminho usando algumas regras predeterminadas.
2.A comunicação entre dois nós em uma rede interconectada pode ocorrer por meio de muitos caminhos diferentes. 

## Por que o roteamento é importante?

	
1.O roteamento cria eficiência na comunicação de rede. 

2.Falhas de comunicação na rede fazem com que os usuários passem por longos tempos de espera para o carregamento das páginas do site. 
Também podem causar falhas nos servidores do site por não conseguirem lidar com um grande número de usuários. 

3.O roteamento ajuda a minimizar falhas de rede gerenciando o tráfego de dados para que a rede possa usar o máximo de sua capacidade possível sem gerar congestionamento.

## O que é um roteador?

1. o roteador enchaminha pacotes de dados entre redes diferentes analisando o endereço IP dos pacotes recebidos e encaminhando os  pacote com base nas tabelas de roteamento que os pacotes possuem . isso permite que os pacotes alcancem seu destino através do caminho mais eficiente 
    
2.Um roteador atua como um ponto de conexão entre diferentes redes, como a conexão entre uma rede doméstica e a Internet. Ele permite que dispositivos de uma rede se comuniquem com dispositivos de outra rede, efetuando a tradução de endereços e gerenciando as solicitações de comunicação.
    
3. **NAT (Network Address Translation):** A função de NAT é comum em roteadores usados em redes domésticas e pequenos escritórios. Ela permite que vários dispositivos compartilhem um único endereço IP público. Quando os dispositivos internos enviam pacotes para a Internet, o roteador modifica os endereços de origem dos pacotes para seu próprio endereço IP público, permitindo que as respostas da Internet retornem ao roteador, que então encaminha essas respostas para o dispositivo interno correto.


Essas três funções são essenciais para garantir o encaminhamento eficiente de dados entre redes e para possibilitar a conexão de dispositivos em diferentes redes de maneira transparente.

### Balanceamento de carga

Às vezes, o roteador pode enviar cópias do mesmo pacote de dados por vários caminhos diferentes. Ele faz isso para reduzir erros devido a perdas de dados, criar redundância e gerenciar o volume de tráfego. 

## Como o roteamento funciona?

Os dados se movem ao longo de qualquer rede na forma de pacotes de dados. 
Cada pacote de dados tem um cabeçalho com informações sobre o destino pretendido do pacote. Enquanto o pacote viaja para seu destino, vários roteadores podem roteá-lo muitas vezes. 
Os roteadores executam esse processo milhões de vezes por segundo com milhões de pacotes.

Quando um pacote de dados chega, o roteador primeiro procura o endereço em uma tabela de roteamento. Isso é semelhante a um passageiro que consulta os horários dos ônibus para encontrar o melhor trajeto para seu destino. Então, o roteador encaminha ou move o pacote ao próximo ponto na rede.

Por exemplo, quando você acessa um site em um computador na rede do escritório, os pacotes de dados vão primeiro para o roteador da rede do escritório. O roteador procura o pacote de cabeçalho e determina o destino do pacote. Em seguida, procura a tabela interna e encaminha o pacote ao próximo roteador ou a outro dispositivo, como uma impressora, dentro da própria rede.

## Quais são os tipos de roteamento?

Há dois tipos diferentes de roteamento, que se baseiam em como o roteador cria suas tabelas de roteamento:

### Roteamento estático

No roteamento estático, um administrador de rede usa tabelas estáticas para configurar e selecionar rotas de rede manualmente. O roteamento estático é útil em situações em que se espera que o design ou os parâmetros da rede permaneçam constantes.

A natureza estática dessa técnica de roteamento traz desvantagens esperadas, como congestionamento de rede. Embora os administradores sejam capazes de configurar caminhos de fallback caso um link falhe, o roteamento estático geralmente diminui a adaptabilidade e a flexibilidade das redes, resultando em performance limitada da rede.

### Roteamento dinâmico

No roteamento dinâmico, os roteadores criam e atualizam tabelas de roteamento em tempo de execução de acordo com as condições reais da rede. Eles tentam encontrar o caminho mais rápido da origem até o destino usando um protocolo de roteamento dinâmico, que é um conjunto de regras que criam, mantêm e atualizam a tabela de roteamento dinâmico.

A maior vantagem do roteamento dinâmico é se adaptar às alterações nas condições da rede, como volume de tráfego, largura de banda e falha de rede.

## Quais são os principais protocolos de roteamento?

Um protocolo de roteamento é um conjunto de regras que especificam como os roteadores identificam e encaminham pacotes por um caminho de rede. Os protocolos de roteamento são agrupados em duas categorias distintas: protocolos de gateway interno e protocolos de gateway externo.

Os protocolos de gateway interno funcionam melhor em um sistema autônomo, que é uma rede controlada administrativamente por uma única organização. Os protocolos de gateway externo gerenciam melhor a transferência de informações entre dois sistemas autônomos.

### Protocolos de gateway interno

Esses protocolos avaliam o sistema autônomo e tomam decisões de roteamento com base em diferentes métricas, como:

- Contagens de saltos ou número de roteadores entre a origem e o destino
- Atraso ou o tempo necessário para enviar os dados da origem ao destino
- Largura de banda ou a capacidade do link entre a origem e o destino

Veja a seguir alguns exemplos de protocolos de gateway interno.

#### Protocolo de informações de roteamento

O protocolo de informações de roteamento (RIP) depende da contagem de saltos para determinar o caminho mais curto entre as redes. O RIP é um protocolo herdado que ninguém utiliza atualmente porque não escala bem para uma implementação de rede maior.

#### Protocolo Open Shortest Path First

O protocolo Open Shortest Path First (OSPF) coleta informações de todos os outros roteadores no sistema autônomo para identificar o caminho mais curto e mais rápido para o destino de um pacote de dados. É possível implementar o OSPF usando vários algoritmos de roteamento ou processos de computação.

### Protocolos de gateway externo

O Protocolo de Gateway da Borda (BGP) é o único protocolo de gateway externo.

#### Protocolo de Gateway da Borda

O BGP determina a comunicação pela Internet. A Internet é uma grande coleção de sistemas autônomos, todos conectados. Todo sistema autônomo tem um número de sistema autônomo (ASN) obtido por meio do registro na Internet Assigned Numbers Authority.

O BGP funciona acompanhando os ASNs mais próximos e mapeando os endereços de destino para seus respectivos ASNs.

## O que são algoritmos de roteamento?

Os algoritmos de roteamento são programas de software que implementam diferentes protocolos de roteamento. Funcionam atribuindo um número de custo a cada link, e o número de custo é calculado usando várias métricas de rede. Cada roteador tenta encaminhar o pacote de dados ao próximo melhor link com o menor custo.

Veja alguns exemplos de algoritmos a seguir.

### Roteamento vetorial de distância

O algoritmo de roteamento vetorial de distância exige que todos os roteadores se atualizem periodicamente sobre as melhores informações de caminho que encontraram. Cada roteador envia informações sobre a avaliação atual do custo total a todos os destinos conhecidos.

Finalmente, cada roteador na rede descobre as melhores informações de caminho para todos os destinos possíveis.

### Roteamento do estado do link

No roteamento do estado do link, cada roteador detecta todos os outros roteadores da rede. Com essas informações, o roteador cria um mapa de toda a rede e calcula o caminho mais curto para qualquer pacote de dados.

## Como o roteamento evoluiu?

O roteamento evoluiu de modo a atender aos requisitos dos avanços na tecnologia de rede. O roteamento não se trata mais de apenas alternar pacotes de dados entre sistemas autônomos e a Internet.

Agora temos infraestrutura de nuvem com recursos de computação e hardware hospedados por provedores de nuvem terceirizados. Esses recursos de nuvem são conectados virtualmente para criar uma rede virtual de recursos que as empresas podem usar para hospedar e executar aplicações. Muitas organizações agora contam com redes híbridas que consistem em redes on-premises com hardware interno e redes em nuvem. Os roteadores devem rotear o tráfego entre essas redes internas, a Internet e a nuvem.

## O que é roteamento em nuvem?

O roteamento em nuvem gerencia dinamicamente as conexões entre duas redes de nuvem virtual ou entre uma rede em nuvem e uma rede on-premises usando o Protocolo de Gateway da Borda (BGP). O roteamento em nuvem se adapta automaticamente às alterações nas condições de rede na nuvem.  Um roteador em nuvem (software que virtualiza as funções de um roteador) permite o roteamento em nuvem.

## O que é roteamento DNS?

O [DNS](https://aws.amazon.com/route53/what-is-dns/), ou Sistema de Nome de Domínio, converte nomes de domínio legíveis por humanos (por exemplo, [www.amazon.com](https://www.amazon.com/)) em endereços IP legíveis por máquina (por exemplo, 192.0.2.44). Os dados que mapeiam essas informações de nome para as informações da máquina são armazenados separadamente nos servidores DNS. Antes de enviar dados a qualquer site, os roteadores devem se comunicar com o servidor DNS para identificar o endereço exato da máquina para os pacotes de dados.

A comunicação do servidor DNS pode se tornar um gargalo, sobretudo quando muitos usuários desejam acessar um site ao mesmo tempo. O roteamento DNS refere-se às várias estratégias e algoritmos de roteamento que gerenciam a comunicação com o servidor DNS. Várias estratégias, como roteamento baseado em latência e roteamento baseado em localização geográfica, ajudam a gerenciar a carga de comunicação do servidor DNS.