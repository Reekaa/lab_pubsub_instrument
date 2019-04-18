const PubSub = require('../helpers/pub_sub.js');

class DisplaySelection {

  constructor(){
    this.container = document.querySelector('#instrument-info');
  }
  displayInstrumentInfoForTheUserSelection(){
    PubSub.subscribe('Instruments:selected-instrument-ready', (event) =>{
      const instrument = event.detail;
      this.render(instrument)
    })
  }

  render(instrument){

    const infoName = document.createElement('h2');
    infoName.textContent = instrument.name;
    this.container.innerHTHML = " ";
    this.container.appendChild(infoName);

    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = instrument.description;
    this.container.innerHTHML = " ";
    this.container.appendChild(infoParagraph);
 }
}

module.exports = DisplaySelection;
