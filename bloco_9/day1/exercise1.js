const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

// setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const successSend = () => Math.floor(Math.random() * 11);


const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback, erro) => {
  const success = successSend();
  if (success < 7) {
    setTimeout(() => {
      callback(getMarsTemperature());
    }, messageDelay());
  } else {
    erro("falha no envio")
  }
}

// // sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
