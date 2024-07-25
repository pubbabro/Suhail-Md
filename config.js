const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776290170";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_32_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDczLFxuICAgICAgICA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYzJSbXYwVDE4bW9Zd2M5UERCVmhpSENXTWNPTHNXWVBYMXRFdkdJQkowbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOXZHWHk0YUdTWnVNZ0Y2SXNkTTEzQVwiLFxuICBcInBob25lSWRcIjogXCI3NGY1Njk3My04NDQxLTQ3YTgtYjlmZi02NmEyMjIyYTM3ZDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAyNCxcbiAgICAgIDI0NCxcbiAgICAgIDExMSxcbiAgICAgIDIxNyxcbiAgICAgIDE2OCxcbiAgICAgIDc1LFxuICAgICAgNTYsXG4gICAgICA5MyxcbiAgICAgIDgxLFxuICAgICAgMjI0LFxuICAgICAgOTAsXG4gICAgICAzNSxcbiAgICAgIDEzNyxcbiAgICAgIDIyOSxcbiAgICAgIDI0MyxcbiAgICAgIDE1LFxuICAgICAgMTE1LFxuICAgICAgMTY2LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDI3LFxuICAgICAgMjEsXG4gICAgICAxMjUsXG4gICAgICAxNjYsXG4gICAgICA0NSxcbiAgICAgIDE5LFxuICAgICAgMTU3LFxuICAgICAgNzUsXG4gICAgICAxNTQsXG4gICAgICAzNCxcbiAgICAgIDEyOCxcbiAgICAgIDIyOCxcbiAgICAgIDE5NSxcbiAgICAgIDEsXG4gICAgICAyNDcsXG4gICAgICA3NyxcbiAgICAgIDIwLFxuICAgICAgOTgsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlk5NlRZV01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc2MjkwMTcwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzY2MjYzMTA5ODc3NzY6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnlKOHU4R0VNRFRpTFVHR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlclg4WHMxL2RUT1V5cHZjNWxTdG1JemtjMGwxdnBCdFg4OTYzcTdRN1M4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlF6Q0xOeGZZOWJ4ajNnTmVKeVVBQ0xteW9ycjFqclZFTUc1T0NxeTBmbDhJckNlWm9lRVF5VG9YaFdPazNoMnBMK3ZUbTNPWjFuSkk5SFVrb3VoR0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNxWllaNEk5UzBMNjFyZWNQa3huWmRCa0hiK1ZNSWZTZTNiMzEwVTEvT0xwYXB2WjhtbGdRM1l4cmpuUStWR0JzSXJQcnl2Y3N1cGZDNWpXRmx2QURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc2MjkwMTcwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTAzNTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQyszXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDKzMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJSFlzTVpGeUNKU0U5Y0c1ZTJFYjg3S3Ryd01qdzlPQk12SFBvUzViZkVzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDUyNjU1NjQsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwxMSwxMiwxM119LFwidGltZXN0YW1wXCI6XCIxNzIxOTAzNDkxNzQ5XCJ9Igp9" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SP-MD",
  ownername:process.env.OWNER_NAME|| "SP-MD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SP"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
