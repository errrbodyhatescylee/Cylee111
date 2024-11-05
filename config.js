//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/nzwtve.mp4";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27849730363";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/k1yfm3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BxR1JsOWlzdUVuWXQ3YXVMZ25lLzdRV0ZvNFU3N1NqNlYyRTFLMUVFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2U1OVA2YmRaWEhXRjBDMDdMYUNPTnBCZmJjMjd6ZWRiNW40S2JtMU1SND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSVVFYWlhQzFaa0VwcW51NVpNbGUyS3Ixako4U2M0NW5BVlMvOVdHWTFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4WDYwT1JXZGRORDh1ZUhEdGhrOVdVTDZnQkJFRys4UEQzRC9oMGRGQmdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOd0VoT09rWXZMUWFFelc0YnBWTHNyM1ZzRmdmVFdNVVp6dDZhelU5bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNLQ0w2bDIrczBMNEJPUEFBQmRlUXFaTGM0YkhmNUFLblVzR2RDM0k5bTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0J4NFNIeWMvTkp4WTQyTUd0SDdoU1dUWDdtblVuYndld2JkZU5jNXRubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUdoUDlnTVc1dFNRWEdHYWNoWi94QmtzdEF3ZFI0UEZacU5kTDA5ZytIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFQnR5V1laVS84WUxQNUZqaXRvMm5GYnZMbExoRThFQWpBdE95ZnFDZkpPbFRaQ3Fqb0NJaEw0N09QcXh2S2dCdnErRFBHZ3NWbmdOMXdFTFdCTkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiI0SU10d1hJNCt0S3F3MkJ2aHhlVWF6YS8xN3ZJcy9pdFRpQXU3TTM5dS93PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqYk5TMl9zbVFEV3JoekFzRDRGZkp3IiwicGhvbmVJZCI6IjQxMjU2Y2U4LTE5MDUtNGJiYS05Zjk3LWZhNDVlNmIwY2Q2NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZkx2OVpIOXlxVXdoTHZGT3FoTDMzNnBtUUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNvSFhYelI0NUYxQ1dUMEJCZGFXWncvN3JnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdOQ0ZNNDVUIiwibWUiOnsiaWQiOiIyNzYxNTA0NTU3Mjo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuWwiuaVrOOBqOOBqOOCguOBq+OCr+OCveOCkuWQm+OBq+iogOOBhiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEN2d29ZRkVKMnJuN2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkZyQWtQQll1WUVlV29vTDg5TEkwSHdZL2dmbjZabERYOTFEN3lPNkFXcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWmpkL2VMaCs0WkNUVFlXbk5nK0RBRHVJSUFCcVlkY3FsWjVFSlJCaWtLMkViNUNlRE1uYk43eTNkK1dZT2FRcy9VN3VYR2NCcEI1L3lYS0hKdEpzQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6InVlaS9aMWtOQjlGZURQZ0lHaVc3NFg0QXNmWU5MdCtpK2dnSldxci9rU3U5ZGpmanFyMi9HbklNYWJQQm54VDgzaDJkdVIwOFdUbDlHYUU1TVA4N0NBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2MTUwNDU1NzI6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaeGF3SkR3V0xtQkhscUtDL1BTeU5COEdQNEg1K21aUTEvZFErOGp1Z0ZyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNjYzODUwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBwaCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`errrbodyhatescylee❤️🧸`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "c y l e e",
  botname: process.env.BOT_NAME || "Sir Cylee ❤️🧸",
  ownername: process.env.OWNER_NAME || "Cadillac Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
