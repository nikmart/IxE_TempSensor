int lastPot = 0;
int sensorValue = 0;
int val=0;
char inChar;

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // read the input on analog pin 0:
  sensorValue = analogRead(A0);
  // map the value between 0 to 120 :
  val = map(sensorValue,0,1023,0,120);

  // read the character we recieve on the serial port from the RPi
  if(Serial.available()) {
    inChar = (char)Serial.read();
  }

  //if we get a connect message send the temp value, used to start the animation
  if (inChar == 'c'){
    Serial.println(val);
    inChar = ' '; //clear the character to avoid spamming
  }

  //only send out a value if the sensor has changed
  if((val > lastPot + 2) || (val < lastPot - 2)){
    // print out the value :
    Serial.println(val);
    lastPot = val;  //reset the last value to avoid spamming
  }

}
