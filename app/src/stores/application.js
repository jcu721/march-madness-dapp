import {action, observable, computed} from 'mobx';
import React from 'react';

import * as ipfs from '../ipfs';
import web3 from '../web3';


class ApplicationStore {
  @observable error;
  @observable ethereumNodeConnected;
  @observable ipfsNodeConnected;
  @observable screen = 'StartScreen';
  @observable resultsBracket = false;

  checkEthereumConnection() {
    this.ethereumNodeConnected = web3.isConnected();
    return Promise.resolve();
  }

  checkIpfsConnection() {
    return ipfs.isGatewayAvailable()
      .then((isAvailable) => this.ipfsNodeConnected = isAvailable);
  }

  @computed get errorMessage() {
    if (this.error) {
      return this.error.message;
    }
  }
}

export default new ApplicationStore();