int pinoSensor = 5;/// declarando que a variavel vale 5
int valorLido = 0;/// variavel declarando que inicialmente é 0
float temperatura =0;/// variavel declarando que inicialmente é 0
int linha = 0;/// variavel declarando que inicialmente é 0
void setup() {///acontece so uma vez
Serial.begin(9600);//// velocidade de leitura do arduino
Serial.println("CLEARDATA");//// print= para mostrar no serial print ln=pular linha mostrar dps pular linha
Serial.println("Temperatura");////msm coisa q outro 
}
void loop() {
  valorLido = analogRead(pinoSensor);//// declarando que a variavel valorLido é igual ao pino analogico(5) pois pinoSensor = 5 como dito no começo
  temperatura = (valorLido * 0.00488);// o valor 0.00488 é para transformar o valor lido em uma parte pequena de e binaria de 1/1023,algo assim em mV
  temperatura = temperatura * 100;//O valor da temperatura agr é multiplicado por 100 para transformar o numero q estava em °C pois a cada 10mv equivale a 1°C
  ~linha++;// acrescentar mais 1 na variavel linha
  Serial.println(temperatura);///escrever e pular linha
  if(linha > 100)// vai comparar se a variavel linha é maior que 100
  {// se sim
    linha = 0;// vai transformar fazer com que a variavel volte a ser 0
    Serial.println("ROW,SET,2");// e aparecerá essa mensagem
  }
  delay(1000);//caso não ela da um delay e volta pro começo do loop.
}
