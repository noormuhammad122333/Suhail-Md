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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923419159670";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_15_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM0LFxuICAgICAgICA4LFxuICAgICAgICA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjTUFQWFp4eGwrbzVPeUJIRDFQcHFBMit6QWU4ZDZzRXJEbHkyZ2c2L24wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxRkFSMGhsV1NqNjNTdzFKMTRweG1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljODUyNDMxLThjMGEtNGMxMy04Mjg1LWRjYjI0NTA5MzAxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDI0OCxcbiAgICAgIDIxNixcbiAgICAgIDY1LFxuICAgICAgNDEsXG4gICAgICAyMTksXG4gICAgICA3NyxcbiAgICAgIDE1NCxcbiAgICAgIDU5LFxuICAgICAgMTI3LFxuICAgICAgMjI3LFxuICAgICAgMTksXG4gICAgICAxNjUsXG4gICAgICA5NixcbiAgICAgIDIyMCxcbiAgICAgIDg0LFxuICAgICAgMTMyLFxuICAgICAgOTgsXG4gICAgICAxNzMsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA2NSxcbiAgICAgIDE2NyxcbiAgICAgIDUsXG4gICAgICAyMjEsXG4gICAgICA1NSxcbiAgICAgIDksXG4gICAgICAxNixcbiAgICAgIDQxLFxuICAgICAgMTE2LFxuICAgICAgMTIyLFxuICAgICAgNDAsXG4gICAgICA0OCxcbiAgICAgIDEzOSxcbiAgICAgIDEyNyxcbiAgICAgIDE3MyxcbiAgICAgIDE2NixcbiAgICAgIDUxLFxuICAgICAgOTEsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlpEVzgxRVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQxOTE1OTY3MDo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzM2NTA1ODU3Njc5Mzg6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1g2dmM0RkVQYlF0clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKOTFmR1MzSkdTamJzYlhsVHVYVHgyRkR1bmZ1WW5qUCtvUWN5eGZZS1NJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlQwdFh3Q1QwQ0Vub2E3RWVnZStoUmZhSWpxck10RWVLL1ptQmZIWnpTa2Y0bHd6YW5RMGVScGNKN1RPaW5qSWNDVlhsQWlGWStZbWYrdCs3aC94VURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZMbWtiZzFWQzhMUWFBSXhSVzdBdHQwc3V1VVcrZVNZcEVsSlJXSHUrZ3QvQi85MmJMVSsyeDU3Si9Sb0pYUGVhcWh6MTNsNUwxMXZXbUpBcUUwS0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxOTE1OTY3MDo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1NTk3MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIa1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhrWC5qc29uIjogIntcImtleURhdGFcIjpcIlAvZUpxWlh0dmNDcTlVb1krYXBZZFBDYXdockpmaStPdUNBclZnZWFnRU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwNjc3MDI3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQyNDYxMTQ1NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ASWAD ARAIN』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
ahor : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "M ASWAD",
  ownername:process.env.OWNER_NAME|| "M ASWAD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
