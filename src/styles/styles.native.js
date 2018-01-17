import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

module.exports = StyleSheet.create({

  w25: {width: 25},
  w50: {width: 50},
  w00: {width: 100},
  w200: {width: 200},
  w250: {width: 250},
  w300: {width: 300},
  wMax: {width: width - 20},

  h45: {height: 45},
  h50: {height: 50},
  h55: {height: 55},
  h100: {height: 100},
  h120: {height: 120},
  h150: {height: 150},
  h200: {height: 200},
  h250: {height: 250},

  m0: {margin: 0},
  m2: {margin: 2},
  m5: {margin: 5},
  m10: {margin: 10},
  m20: {margin: 20},
  m25: {margin: 25},
  m30: {margin: 30},

  mh0: {marginHorizontal: 0},
  mh5: {marginHorizontal: 5},
  mh10: {marginHorizontal: 10},
  mh15: {marginHorizontal: 15},
  mh20: {marginHorizontal: 20},
  mh25: {marginHorizontal: 25},
  mh30: {marginHorizontal: 30},

  mv5: {marginVertical: 5},
  mv10: {marginVertical: 10},
  mv15: {marginVertical: 15},
  mv20: {marginVertical: 20},
  mv25: {marginVertical: 25},
  mv30: {marginVertical: 30},

  mt0: {marginTop: 0},
  mt2: {marginTop: 2},
  mt3: {marginTop: 3},
  mt5: {marginTop: 5},
  mt10: {marginTop: 10},
  mt15: {marginTop: 15},
  mt20: {marginTop: 20},
  mt30: {marginTop: 30},
  mt40: {marginTop: 40},

  mb0: {marginBottom: 0},
  mb2: {marginBottom: 2},
  mb3: {marginBottom: 3},
  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  mb15: {marginBottom: 15},
  mb20: {marginBottom: 20},

  ml0: {marginLeft: 0},
  ml5: {marginLeft: 5},
  ml10: {marginLeft: 10},
  ml15: {marginLeft: 15},
  ml20: {marginLeft: 20},

  mr0: {marginRight: 0},
  mr5: {marginRight: 5},
  mr10: {marginRight: 10},
  mr15: {marginRight: 15},
  mr20: {marginRight: 20},

  p0: {padding: 0},
  p5: {padding: 5},
  p10: {padding: 10},
  p15: {padding: 15},
  p20: {padding: 20},

  ph0: {paddingHorizontal: 0},
  ph5: {paddingHorizontal: 5},
  ph10: {paddingHorizontal: 10},
  ph15: {paddingHorizontal: 15},
  ph16: {paddingHorizontal: 16},
  ph20: {paddingHorizontal: 20},
  ph24: {paddingHorizontal: 24},
  ph25: {paddingHorizontal: 25},
  ph30: {paddingHorizontal: 30},

  pv0: {paddingVertical: 0},
  pv5: {paddingVertical: 5},
  pv10: {paddingVertical: 10},
  pv15: {paddingVertical: 15},
  pv16: {paddingVertical: 16},
  pv20: {paddingVertical: 20},
  pv24: {paddingVertical: 24},
  pv25: {paddingVertical: 25},
  pv30: {paddingVertical: 30},

  pt0: {paddingTop: 0},
  pt5: {paddingTop: 5},
  pt10: {paddingTop: 10},
  pt15: {paddingTop: 15},
  pt20: {paddingTop: 20},

  pb0: {paddingBottom: 0},
  pb5: {paddingBottom: 5},
  pb2: {paddingBottom: 2},
  pb10: {paddingBottom: 10},
  pb15: {paddingBottom: 15},

  pl0: {paddingLeft: 0},
  pl5: {paddingLeft: 5},
  pl10: {paddingLeft: 10},
  pl15: {paddingLeft: 15},
  pl20: {paddingLeft: 20},

  pr0: {paddingRight: 0},
  pr5: {paddingRight: 5},
  pr10: {paddingRight: 10},
  pr15: {paddingRight: 15},
  pr20: {paddingRight: 20},

  opacity100: {opacity: 1},
  opacity95: {opacity: 0.95},
  opacity90: {opacity: 0.90},
  opacity40: {opacity: 0.4},
  opacity0: {opacity: 0},

  font12: {fontSize: 12},
  font13: {fontSize: 13},
  font14: {fontSize: 14},
  font16: {fontSize: 16},
  font18: {fontSize: 18},
  font20: {fontSize: 20},
  font24: {fontSize: 24},
  font26: {fontSize: 26},
  font28: {fontSize: 28},

  f1: {flex: 1},
  f2: {flex: 2},
  f3: {flex: 3},
  f4: {flex: 4},

  bold: {fontWeight: 'bold'},

  cBlack: {color: '#000000'},
  cBlue: {color: '#2196f3'},
  cWhite: {color: '#FFFFFF'},
  cGrey: {color: '#e6e6e6'},
  cRed: {color: '#eb0a0a'},
  cApp: {color: '#46407B'},
  cAppDark: {color: '#48487B'},

  bgApp: {backgroundColor: '#46407B'},
  bgAppDark: {backgroundColor: '#48487B'},
  bgTransparent: {backgroundColor: 'transparent'},
  bgWhite: {backgroundColor: 'white'},
  bgRed: {backgroundColor: '#eb0a0a'},
  bgBlue: {backgroundColor: '#2196f3'},
  bgLightBlue: {backgroundColor: '#F5FCFF'},
  bgLightGray: {backgroundColor: '#F1F1F1'},

  textCenter: {textAlign: 'center'},
  textRight: {textAlign: 'right'},

  center: {justifyContent: 'center', alignItems: 'center'},
  aCenter: {alignItems: 'center'},
  jCenter: {justifyContent: 'center'},
  jEnd: {justifyContent: 'flex-end'},
  jSpace: {justifyContent: 'space-between'},
  jSpaceAround: {justifyContent: 'space-around'},
  flexRow: {flexDirection: 'row'},
  flexColumn: {flexDirection: 'column'},

  right0: {position: 'absolute', right: 0},
  right10: {position: 'absolute', right: 10},
  right15: {position: 'absolute', right: 15},

  absolute: {position: 'absolute'},

  l0: {left: 0},
  l10: {left: 10},
  l20: {left: 20},
  l30: {left: 30},
  l40: {left: 40},

  r0: {right: 0},
  r10: {right: 10},
  r20: {right: 20},

  t0: {top: 0},
  t5: {top: 5},
  t20: {top: 20},
  t_5: {top: -5},

  b0: {bottom: 0},
  b10: {bottom: 10},

  circle20: {
    height: 20, width: 20, borderRadius: 20 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle25: {
    height: 25, width: 25, borderRadius: 25 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle30: {
    height: 30, width: 30, borderRadius: 30 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle35: {
    height: 35, width: 35, borderRadius: 35 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle40: {
    height: 40, width: 40, borderRadius: 40 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle45: {
    height: 45, width: 45, borderRadius: 45 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle50: {
    height: 50, width: 50, borderRadius: 50 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle60: {
    height: 60, width: 60, borderRadius: 60 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle70: {
    height: 70, width: 70, borderRadius: 70 / 2,
    alignItems: 'center', justifyContent: 'center'
  },
  circle80: {
    height: 80, width: 80, borderRadius: 80 / 2,
    alignItems: 'center', justifyContent: 'center'
  },

  triangleDown10: {
    width: 0, height: 0, backgroundColor: 'transparent', borderStyle: 'solid',
    borderTopWidth: 10, borderTopColor: '#46407B',
    borderLeftWidth: 10 / 2, borderLeftColor: 'transparent',
    borderRightWidth: 10 / 2, borderRightColor: 'transparent',
  },

  triangleDown20: {
    width: 0, height: 0, backgroundColor: 'transparent', borderStyle: 'solid',
    borderTopWidth: 20, borderTopColor: '#46407B',
    borderLeftWidth: 20 / 2, borderLeftColor: 'transparent',
    borderRightWidth: 20 / 2, borderRightColor: 'transparent',
  },

  squareUndefined: {width: undefined, height: undefined},
  square10: {width: 10, height: 10},
  square20: {width: 20, height: 20},
  square30: {width: 30, height: 30},
  square40: {width: 40, height: 40},
  square50: {width: 50, height: 50},
  square60: {width: 60, height: 60},
  square70: {width: 70, height: 70},
  square80: {width: 80, height: 80},
  square90: {width: 90, height: 90},
  square100: {width: 100, height: 100},

  clear: {height: 1, backgroundColor: '#46407B', marginVertical: 2},

  header: {
    backgroundColor: "#46407B",
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between"
  }
});