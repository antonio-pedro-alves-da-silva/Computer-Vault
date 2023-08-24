o que é controle de fluxo ?
	1.o controle de fluxo de dados regula o fluxo de dados de tal forma que os recepetores lentos não sejam atropelados por informações vindo dos transmissores(servidor) rápidos. 
	2.Mesmo que a trasmissão não tenha erros , o receptor pode não conseguir lidar com os quadros com a rapidez com que chegam.por isso ele poderá perder alguns quadros
	3. abortagens para que os recepetores não sejam atropelados pelas informações
		Abortagem de Velocidade:
			 1.utilizada na camada de transporte
		Abortagem de Feedback:
			1.é utilizada na camada de enlace de dados e possui dois protocolos stop-and-wait e sliding window(janela deslizante)
			2.no uso do protocolo stop-and-wait o 
				1.transmissor envia um quadro  ao recepetor 
				2.o recepetor recebe o quadro depois ele envia um quadro de confirmação de que ele recebeu o quadro
				3.depois dessa confirmação o trasmissor envia o próximo quadro
			3.no uso do protocolo sliding window(janela deslizante)
			    ![[print_screen.png]]
				1.o trasmissor envia uma janela de quadro ou seja uma quantidade de quadros de uma vez e ele vai deslizando conforme vai enviando os quadros pode ser que essa janela fique travada por que o transmissor não recebeu a confirmação de um quadro
	
				