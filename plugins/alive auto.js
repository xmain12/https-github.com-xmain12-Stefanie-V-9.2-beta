const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'alive', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "โค";
r_text[1] = "๐งก";
r_text[2] = "๐";
r_text[3] = "๐";
r_text[4] = "๐";
r_text[5] = "๐";
r_text[6] = "๐ค";
r_text[7] = "๐ค";
r_text[8] = "๐ค";
r_text[9] = "๐ฉโ๐ผ";
r_text[10] = "๐ง";
r_text[11] = "๐ธ";
r_text[12] = "๐งโโ๏ธ";
r_text[13] = "๐ฅฐ";
r_text[14] = "โข";
r_text[15] = "๐";

var i = Math.floor(16*Math.random())

await message.sendMessage(r_text[i]);

}));
