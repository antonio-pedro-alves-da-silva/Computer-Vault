### 3.1. Detecção de erros

A transmissão de um sinal ao longo da rede sofre interferências por vários motivos. Independentemente do motivo, essas interferências podem fazer com que valores transmitidos cheguem trocados em seu destino. É preciso, portanto, uma técnica que determine se a mensagem recebida possui ou não erros para que o receptor da mesma possa tratá-la convenientemente. As formas de se fazer isso são:

1. Bits de paridade e paridade transversal
    
2. Códigos de Redundância Cíclica (CRC)
    

Em paralelo à detecção de erros existem formas de recuperar erros que não sejam de grandes proporções, tal como é feito usando-se o Código de Hamming.

### 3.2. Sincronismo de mensagens

Um problema comum em qualquer processo de comunicação é identificar quem e quando cada processo "fala". Esse problema é agravado na comunicação entre duas máquinas, pois podem ocorrer erros na transmissão dos bits que compõe os dados. Esses erros implicam na necessidade da máquina que transmite ter conhecimento sobre o sucesso ou não da transmissão para que possa dar continuidade ao processo de comunicação. Isso pode ser feito através de vários protocolos distintos de controle de fluxo, entre os quais temos:

1. _Stop-and-wait_
    
2. _Sliding window_ (janela deslizante)
    

## 4. Controle de acesso ao meio

Até agora examinamos a transmissão de mensagens de forma não concorrente, isso é, uma máquina usa o suporte físico sem ter que disputá-lo com outras máquinas. Isso, no entanto, é completamente irreal (e ineficiente ou muito caro, dependendo da topologia usada).  
A prática é fazer com que o suporte físico seja usado de modo concorrente, com técnicas para controle de seu acesso dependendo da topologia usada na rede. Examinaremos aqui apenas protocolos para redes em barramento, anel e sem-fio, deixando as demais topologias entendidas como casos particulares dessas, que podem ser resolvidos pelas mesmas técnicas ou por técnicas de roteamento.

1. Redes em barramento
    
    1. Aloha
        
    2. Família CSMA
        
    3. Token bus
        
2. Redes em anel
    
    1. Token
        
    2. Slotted
        
3. Redes sem-fio
    
    1. MACAW
        

## 5. _Bridges_

Para concluir esse capítulo é preciso que se fale em dispositivos que permitem a interconexão de redes. Aqui, em particular, falaremos de um dispositivo chamado _bridge_, que nada mais é do que um conversor de protocolos que permite que os endereços de máquinas tratados possam ser de redes vizinhas, bastando que esses endereços sejam conhecidos pela _bridge_ (e não por todas as máquinas da rede. O uso de _bridges_ permite também a conversão de protocolos, permitindo que uma máquina localizada em uma rede em anel "converse" com outra localizada numa rede em barramento.

Um cuidado especial com o uso de bridges é evitar a formação de laços na conexão entre sub-redes. Na realidade é impossível evitar a formação física de tais laços, uma vez que não temos como controlar quais redes estarão conectadas a quais outras redes. O que se faz é evitar a formação lógica desses laços, com a aplicação de algoritmos de árvores geradoras (**_spanning tree_**).