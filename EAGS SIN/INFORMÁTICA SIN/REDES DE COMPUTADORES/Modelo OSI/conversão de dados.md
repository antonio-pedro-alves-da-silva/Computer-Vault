Nas redes de computadores, existem várias unidades de dados que desempenham papéis importantes em diferentes camadas do modelo OSI. Cada camada adiciona informações específicas ao pacote à medida que ele é transmitido pela rede. Aqui estão as principais unidades de dados associadas a cada camada:

1. **Camada de Aplicação**:
    
    - Dados ou Mensagens: São os dados brutos ou as mensagens que são geradas pelas aplicações do usuário. Eles podem ser textos, imagens, vídeos, comandos, etc.
2. **Camada de Transporte**:
    
    - Segmento (TCP) ou Datagrama (UDP): Os dados da camada de aplicação são divididos em segmentos (no caso do TCP) ou datagramas (no caso do UDP). Eles incluem informações de controle, portas de origem e destino, e números de sequência para controle de fluxo e detecção de erros (no caso do TCP).
3. **Camada de Rede**:
    
    - Pacote: Os segmentos ou datagramas são encapsulados em pacotes de dados da camada de rede. Isso inclui informações de roteamento, endereço de origem e destino (endereços IP) e possivelmente informações de qualidade de serviço.
4. **Camada de Enlace (Dados)**:
    
    - Quadro: Os pacotes da camada de rede são encapsulados em quadros. Cada quadro contém informações de endereçamento físico (endereços MAC), controle de fluxo, detecção de erros e outras informações necessárias para a comunicação entre dispositivos diretamente conectados.
5. **Camada Física**:
    
    - Bits: Os quadros da camada de enlace são convertidos em sequências de bits, que são transmitidos fisicamente por meio de sinais elétricos, ópticos ou de radiofrequência.

Essas unidades de dados se acumulam à medida que os dados viajam pelas diferentes camadas da rede, e cada camada adiciona suas informações específicas para garantir a transmissão e entrega adequadas dos dados. Cada unidade de dados tem um papel vital no processo de comunicação e na integridade dos dados durante a transmissão.