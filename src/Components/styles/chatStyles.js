const mainStyle = { display: 'flex', flexDirection: 'column', height: '100%' };

exports.mainStyle =mainStyle;

const mystyle = require('../MainStyles');

const contbar = { display: 'flex', flexDirection: 'row', flex: 1, ...mystyle.barStyle };

exports.contbar = contbar;

const chat = { flex: 10.5, display: 'flex', flexDirection: 'column' };

exports.chat = chat;

const msgbar = { display: 'flex', flexDirection: 'row', flex: 1, ...mystyle.barStyle };
exports.msgbar =msgbar;
