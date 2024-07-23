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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_28_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgODYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA1LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJYSXo3QmluWXJvdWN5MVRBL05xbE1TQStCUVN0Z0QvZXQ4ZHdFTDZjb2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInh3c1ItWHNEVG4tZ3FoQWlUc1YyOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzU1MDBhYTUtYzE4NC00Mzg0LWJkMjQtY2FiZTUzZGMzZDQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDIxMyxcbiAgICAgIDg3LFxuICAgICAgMTA2LFxuICAgICAgNDEsXG4gICAgICAxMzQsXG4gICAgICAxMzUsXG4gICAgICAxNzIsXG4gICAgICAyMjMsXG4gICAgICAzOSxcbiAgICAgIDIzLFxuICAgICAgMTcxLFxuICAgICAgMTMyLFxuICAgICAgOTYsXG4gICAgICA3NSxcbiAgICAgIDIzNixcbiAgICAgIDE2MyxcbiAgICAgIDQ3LFxuICAgICAgMTU1LFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMjA5LFxuICAgICAgNSxcbiAgICAgIDExMixcbiAgICAgIDEzNCxcbiAgICAgIDE2MyxcbiAgICAgIDY2LFxuICAgICAgNjEsXG4gICAgICAxNjksXG4gICAgICAxNzUsXG4gICAgICAyLFxuICAgICAgNDUsXG4gICAgICAyNTUsXG4gICAgICAxMyxcbiAgICAgIDUwLFxuICAgICAgMTk3LFxuICAgICAgMTcyLFxuICAgICAgNzcsXG4gICAgICA0OCxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNNFFBWDE5TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzYyOTAxNzA6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NjYyNjMxMDk4Nzc3Njo0MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKeUo4dThHRUxhbi9yUUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVyWDhYczEvZFRPVXlwdmM1bFN0bUl6a2MwbDF2cEJ0WDg5NjNxN1E3Uzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic0Y0MXEySHRrYlArOEhxcWl0Ni94Q2ZhTzBXcWI3MGlRRFZITGNobnI4emxidnJ0VTlmVkhyYnNPT3JTMlFrMDlCNFEwV09PVU45b0dReFVGaUlUQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRjZzNGFlcTVraGJpcWM1NEFvV0UrWXRLMy9ab3NjenBpaEcwTko5eXB1T1MrY3lUYnJUcnZkcEpOWUg4eFZMWHIwSG1nbVZUbldkK3FyMkRsWGhjaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzYyOTAxNzA6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MzQwNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDK3RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMrdC5qc29uIjogIntcImtleURhdGFcIjpcIk1yd1NnUFVTdXpDZGpHeDQ3YzR4bkJPd2NkRmRmUlFnYlVRdFAyMXRWdGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NTI2NTU2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDQ0MTc1MjY5XCJ9Igp9" // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
