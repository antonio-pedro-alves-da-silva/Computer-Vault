
**pré-requisitos**
	[[encapsular dados]]

Quadros, no contexto das redes de computadores, referem-se a unidades de dados que são utilizadas na camada de enlace para encapsular os dados da camada superior (geralmente a camada de rede) antes de serem transmitidos através do meio de comunicação, como cabos, fibras ópticas ou redes sem fio.

Cada quadro consiste em um cabeçalho e um trailer que envolvem os dados da camada superior. O cabeçalho do quadro contém informações importantes para a transmissão, como endereços MAC (endereços físicos das placas de rede), controle de fluxo, controle de erros, informações de roteamento e outros campos relevantes para o funcionamento da camada de enlace. O trailer, por sua vez, pode conter informações adicionais, como códigos de detecção de erros (checksum) para garantir a integridade dos dados durante a transmissão.

Ao utilizar quadros, a camada de enlace realiza várias funções cruciais para a comunicação confiável e eficiente entre dispositivos em uma rede:

1. **Framing (Empacotamento)**: A camada de enlace divide os dados vindos da camada de rede em quadros, que são unidades menores e mais gerenciáveis para transmissão. Isso permite que o meio de comunicação seja compartilhado entre vários dispositivos.
    
2. **Endereçamento e Controle**: Os cabeçalhos dos quadros contêm endereços MAC, que identificam os dispositivos na rede e também contém endereço de destino. Além disso, informações de controle, como confirmações de recebimento e controle de fluxo, podem ser incluídas no cabeçalho para gerenciar a comunicação entre emissor e receptor.
    
3. **Detecção e Correção de Erros**: Os quadros podem conter informações de detecção de erros, como checksums, que permitem que o receptor verifique se os dados foram corrompidos durante a transmissão. Se um erro for detectado, medidas apropriadas podem ser tomadas, como retransmissão do quadro.
    
4. **Sincronização**: A camada de enlace também é responsável por sincronizar a transmissão e a recepção dos dados entre os dispositivos. Isso envolve garantir que os dispositivos estejam alinhados temporalmente para que os dados possam ser transmitidos e recebidos de maneira eficaz.
    

Em resumo, os quadros são pacotes de dados encapsulados na camada de enlace que incluem informações de controle, endereçamento e detecção de erros, permitindo a comunicação confiável e eficiente entre dispositivos em uma rede de computadores.