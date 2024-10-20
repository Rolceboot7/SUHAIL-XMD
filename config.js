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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_06_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDIxLFxuICAgICAgICA5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICA1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9ZMVhZeUlXQWZLYXdMRDRWcGRMNlI1MzQxVmRuT0VjQUphbncyVlpTRkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFjSHZ2SDBFU2JtVHJIUEhtc241TVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzZiM2MyNGYtM2I2OS00OTI5LWFmODktZDY1ZTBhNDhiMDAyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMTAyLFxuICAgICAgOTgsXG4gICAgICAxMyxcbiAgICAgIDIzMyxcbiAgICAgIDgzLFxuICAgICAgMTM0LFxuICAgICAgMjExLFxuICAgICAgMjIsXG4gICAgICAyMzUsXG4gICAgICA2NyxcbiAgICAgIDE0MixcbiAgICAgIDI0NyxcbiAgICAgIDQzLFxuICAgICAgMjAzLFxuICAgICAgMTU4LFxuICAgICAgMTgsXG4gICAgICA3LFxuICAgICAgMzUsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgNDUsXG4gICAgICAxNjEsXG4gICAgICAyNCxcbiAgICAgIDgsXG4gICAgICAxNjcsXG4gICAgICAxMSxcbiAgICAgIDE1NSxcbiAgICAgIDE1LFxuICAgICAgNSxcbiAgICAgIDU3LFxuICAgICAgMjE0LFxuICAgICAgNjQsXG4gICAgICAyMzMsXG4gICAgICAxNjUsXG4gICAgICAxOTAsXG4gICAgICA2OCxcbiAgICAgIDEzMCxcbiAgICAgIDc1LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pGanNFRkVQdXIwN2dHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGSWJFNWJZbW1wcUM0U3RMdDdpMGNSQXdKTHluSDZzak82elF5bU5pSHdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBkWnh3eFA3Z2M2VlpvL21IWnhWd0s4d1NscDN0SkEzQlNlK1Y0N3o4b3Y4eDhkSkYrZGJERCtwcnlIZTF0eDdPNW51LzJLNlczYzJUMDJQbk5oZER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxYeDc1cDlSNHh1M2JKbHlpK0w2SUl5UGpVUWc4ODUvRmlLNkVWaU96aUZJOVZQMXVzTUhRVjlscm50OGU1eVJKZE8wNzVOenkvYjg4SVRHSklWcUFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQyMDY0MDEwMTI1OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4KaUUm9sY2Xjg7tKb2NyaXNzZeCmlOCno+qngvCWo5hcIixcbiAgICBcImxpZFwiOiBcIjIxNjQxOTEwNzEwNzA1NzoyMUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MjA2NDAxMDEyNToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTQxODc1M1xufSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
