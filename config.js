const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "242064010125";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_04_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA4NixcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk50WFMvdGtSUkxlVHZsTGttZlBIa0kzbEMrUUgvS09NUnROVWlQN3EwUlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkc0X0JXSmxzVDF1UnJVanJJU21jS0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjg0YTdhNWItMzUxYy00ZTZiLWJkYTctNGU1OTZmMzQyOTRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTQxLFxuICAgICAgMjM3LFxuICAgICAgMTgxLFxuICAgICAgMjUyLFxuICAgICAgMTY0LFxuICAgICAgMjI0LFxuICAgICAgMjMwLFxuICAgICAgNjMsXG4gICAgICA4MCxcbiAgICAgIDEyMyxcbiAgICAgIDI0MSxcbiAgICAgIDIwMSxcbiAgICAgIDEyLFxuICAgICAgMjA1LFxuICAgICAgMjcsXG4gICAgICAxNzgsXG4gICAgICA0OCxcbiAgICAgIDIxMSxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAzMyxcbiAgICAgIDIxMSxcbiAgICAgIDEzNixcbiAgICAgIDE5NSxcbiAgICAgIDU1LFxuICAgICAgMTYzLFxuICAgICAgMCxcbiAgICAgIDIyMixcbiAgICAgIDEyNCxcbiAgICAgIDEwNixcbiAgICAgIDIwNyxcbiAgICAgIDI1LFxuICAgICAgOTgsXG4gICAgICAyMixcbiAgICAgIDIwOSxcbiAgICAgIDIyNSxcbiAgICAgIDIwNSxcbiAgICAgIDcyLFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPekZqc0VGRU5YTzliZ0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZJYkU1YlltbXBxQzRTdEx0N2kwY1JBd0pMeW5INnNqTzZ6UXltTmlId0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicTdwdVhnaERyRDB3dEZJVEFvTCtsS3oyS3g3Mk4zTy9Lc0FHb0ZsNmF1d1lLQVN0Y294REEyNng3SE1OSTlQRG8rMWpONzNuZWo4SVBTa2xEQ2tSQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQmduYkVPaUR6b1N2aTl4T2k2VzFqcFBCV3V5K1JHWmJ3ek5vSk1Cc1cvYzgwVUpuWWd5STRrWFIzckxyNGVBZ0ZWd2hUNGJDSUpxMVl6QUZZdzZQQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDIwNjQwMTAxMjU6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLqp4HgppRSb2xjZeODu0pvY3Jpc3Nl4KaU4Kej6qeC8JajmFwiLFxuICAgIFwibGlkXCI6IFwiMjE2NDE5MTA3MTA3MDU3OjIzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQyMDY0MDEwMTI1OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5OTgwMjUwXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
