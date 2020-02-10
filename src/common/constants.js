import {Dimensions} from 'react-native';

export const C = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  vh: Dimensions.get('window').height / 100,
  vw: Dimensions.get('window').width / 100,
  RECT_DIMENSIONS: Dimensions.get('window').width * 0.65,
  RECT_BORDER_WIDTH: Dimensions.get('window').width * 0.005,
  SCAN_BAR_WIDTH: Dimensions.get('window').width * 0.46,
  SCAN_BAR_HEIGHT: Dimensions.get('window').width * 0.0025,
  STR_My_Wallets: 'My Wallets',
  STR_WALLET: 'WALLET',
  STR_ROOMS: 'ROOMS',
  STR_SHOP: 'SHOP',
  STR_SETTINGS: 'SETTINGS',
  STR_Cur_Balance: 'Current Balance',
  TRANSACTIONS: 'Transactions',
  STR_SEND: 'SEND',
  STR_Send: 'Send',
  STR_RECEIVE: 'RECEIVE',
  STR_Enter_addr: 'Enter an address',
  SCAN_ORSCAN: 'or scan a QR code',
  STR_Enter_Addr: 'Enter Address',
  STR_ENTER_PASSWORD: 'Enter a password:',
  STR_ENTER_PASS_TO_UNLOCK_WALLET: "Enter your wallet's password to unlcok it:",
  STR_CONTINUE: 'CONTINUE',
  STR_PAYMENT_RECEIPIENT: 'PAYMENT RECIPIENT',
  STR_PAYMENT_AMOUNT: 'PAYMENT AMOUNT',
  STR_BTC: 'BTC',
  STR_CONFIRM: 'CONFIRM',
  STR_DONE: 'DONE',
  STR_PAYMENT: 'PAYMENT',
  STR_SENT: 'SENT',
  STR_RECEIVED: 'RECEIVED',
  STR_FEES: 'FEES',
  STR_SENDER: 'SENDER',
  STR_RECEIPIENT: 'RECIPIENT',
  STR_Wait: 'Approximate Wait',
  STR_Manage_Fund: 'MANAGE FUNDS',
  STR_SET_FEES: 'SET FEES',
  OVERLAY_COLOR: 'rgba(0,0,0,0.5)',
  SCAN_BAR_COLOR: '#22ff00',
  STR_SHARE: 'SHARE',
  STR_YOU: 'YOU',
  STR_PAIR_NOW: 'PAIR NOW',
  STR_WELCOME: 'WELCOME',
  STR_SUCCESS: 'SUCCESS',
  STR_FAILED: 'FAILED',
  STR_TRY_AGAIN: 'TRY AGAIN',
  STR_WATCH_ADDR: 'Watch this address',
  STR_AUTH_SUCCESS: 'You are paired with Sifir Service',
  STR_AUTH_INVALID_TOKEN: 'Scanned token is invalid',
  STR_AUTH_PAIR_FAILED: 'Your token is not paired',
  STR_WELCOME_NEW: 'Welcome to Sifir!',
  STR_WELCOME_BACK: 'Welcome Back !',
  STR_WATCH_WALLET_TYPE: 'pub32Watching',
  STR_WATCHING: 'Watching',
  STR_SPEND_WALLET_TYPE: 'btcSpending',
  STR_WATCH_ONLY: 'WATCH ONLY',
  STR_SELECT_ADDRTYPE: 'Select address type',
  STR_ADDR_QR_SHARE: 'QRCode & Address Share',
  STR_ADDR_SHARE: 'Address Share',
  STR_AMOUNT_BENUMBER: 'Amount is not a number',
  STR_SEND_FUND: 'SEND FUNDS',
  STR_REQUEST_FUNDS: 'REQUEST FUNDS',
  STR_MANAGE_FUNDS: 'MANAGE FUNDS',
  STR_TYPE_MSG: 'Type a message',
  STR_TIME: 'TIME',
  STR_COIN_REQUEST: 'COIN_REQUEST',
  STR_COIN_SENT: 'COIN_SENT',
  STR_INVALID_TOKEN_ERR_MSG: 'Invalid token from the QR Code',
  STR_LEGACY: 'Legacy',
  STR_Segwit_Compatible: 'Segwit Compatible',
  STR_Bech32: 'Bech32',
};
