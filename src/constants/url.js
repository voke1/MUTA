export const API_BASE_URL = "https://thrybeapi.azurewebsites.net";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

///Account

export const HEALTHCHECK = getApiUrl("/api/Account/HealthCheck");
export const ADVSETTINGS = getApiUrl("/api/Account/GetAdvancedSettingsDetails");
export const BOOSTPROFILE = getApiUrl("/api/Account/BoostProfile");
export const UPGRADEACCOUNT = getApiUrl("/api/Account/UpgradeAccount");
export const GETALLUSERS = getApiUrl("/api/Account/GetAllUsers");
export const SHOWLASTACTIVE = getApiUrl("/api/Account/ShowLastActive");
export const PAUSEPROFILE = getApiUrl("/api/Account/PauseProfile");
export const CREATEPHONEACCOUNT = getApiUrl("/api/Account/CreatePhoneAccount");
export const FACEBOOKLOGIN = getApiUrl("/api/Account/FacebookLogin");
export const GMAILLOGIN = getApiUrl("/api/Account/GmailLogin");
export const GMAILSIGNUP = getApiUrl("/api/Account/GmailSignUp");
export const AUTHORIZEINSTAGRAM = getApiUrl("/api/Account/AuthorizeInstagram");
export const FACEBOOKSIGNUP = getApiUrl("/api/Account/FacebookSignUp");
export const GENERATETOKEN = getApiUrl("/api/Account/GenerateToken");
export const ZODIACSIGN = getApiUrl("/api/Account/ZodiacSign");
export const CREATEACCOUNTDETAILS = getApiUrl(
  "/api/Account/CreateAccountDetails"
);
export const CREATEACCOUNTPROFILE = getApiUrl(
  "/api/Account/CreateAccountProfile"
);
export const UPLOAD = getApiUrl("/api/Account/UploadProfileImage");
export const UPLOADS = getApiUrl("/api/Account/Upload");
export const GETLISTOFCOUNTRIES = getApiUrl("/api/Account/GetListOfCountries");
export const UPDATEPROFILE = getApiUrl("/api/Account/UpdateProfile");
export const VERIFYTOKEN = getApiUrl("/api/Account/VerifyToken");
export const GETSTATESCOUNTRY = getApiUrl("/api/Account/GetStatesCountry");
export const GETCITIESSTATE = getApiUrl("/api/Account/GetCitiesState");
export const DASHBOARDBYID = getApiUrl("/api/Account/Dashboard");
export const DASHBOARD = getApiUrl("/api/Account/Dashboard");
export const LOGIN = getApiUrl("/api/Account/Login");
export const LOGOUT = getApiUrl("/api/Account/LogOut");
export const FILTER = getApiUrl("/api/Account/Filter");

////Dating
export const LIKE = getApiUrl("/api/Dating/Like");
export const FEEDS = getApiUrl("/api/Dating/Feeds");
export const SENDMESSAGE_DATING = getApiUrl("/api/Dating/SendMessage");
export const GETMYCHATTERS = getApiUrl("/api/Dating/GetMyChatters");
export const MYMESSAGES_DATING = getApiUrl("/api/Dating/MyMessages");
export const MATCHPROFILE = getApiUrl("/api/Dating/MatchProfile");
export const SWIPE = getApiUrl("/api/Dating/Swipe");
export const DISLIKE = getApiUrl("/api/Dating/DisLike");
export const SEARCHUSER = getApiUrl("/api/Dating/SearchUser");
export const GETMYLIKES = getApiUrl("/api/Dating/GetMyLikes");
export const MYMATCHES = getApiUrl("/api/Dating/MyMatches");

////Gift
export const BUYGIFT = getApiUrl("/api/Gift/BuyGift");
export const GETALLGIFT = getApiUrl("/api/Gift/GetAllGift");
export const SELLGIFT = getApiUrl("/api/Gift/SellGift");
export const GETALLMYGIFT = getApiUrl("/api/Gift/GetAllMyGift");
export const GETMYGIFTTOKEN = getApiUrl("/api/Gift/GetMyGiftToken");
export const SENDGIFT = getApiUrl("/api/Gift/SendGift");
export const GETMYGIFT = getApiUrl("/api/Gift/GetMyGift");

////Hobby
export const ADDHOBBY = getApiUrl("/api/Hobby/AddHobby");
export const GETHOBBIES = getApiUrl("/api/Hobby/GetHobbies");
export const GETALLHOBBIES = getApiUrl("/api/Hobby/GetAllHobbies");
export const GETHOBBIESBYCATEGORY = getApiUrl(
  "/api/Hobby/GetHobbiesByCategory"
);
export const GETHOBBIESBYUSERID = getApiUrl("/api/Hobby/GetHobbiesByUserId");
export const ADDHOBBYCATEGORY = getApiUrl("/api/Hobby/AddHobbyCategory");
export const GETHOBBIESCATEGORY = getApiUrl("/api/Hobby/GetHobbiesCategory");

////Message
export const SENDMESSAGE = getApiUrl("/api/Message/SendMessage");
export const MYMESSAGES = getApiUrl("/api/Message/MyMessages");

////Notification
export const GETNOTIFICATION = getApiUrl("/api/Notification/GetNotification");
export const VIEWNOTIFICATION = getApiUrl(
  "/api/Notification/GetAllNotification"
);
export const JOINROOM = getApiUrl("/api/Notification/JoinRoom");

////SMS
export const QUEUESMS = getApiUrl("/api/Sms/QueueSms");
export const SENDSMS = getApiUrl("/api/Sms/SendSms");
export const SENDQUEUEDSMS = getApiUrl("/api/Sms/SendQueuedSms");

////Special Request
export const ADDSPECIALREQUEST = getApiUrl(
  "/api/SpecialRequest/AddSpecialRequest"
);
export const SUBMITPROFILE = getApiUrl("/api/SpecialRequest/SubmitProfile");
export const GETALLSPECIALREQUEST = getApiUrl(
  "/api/SpecialRequest/GellAllSpecialRequest"
);
export const GETPROFILESUBMITTERS = getApiUrl(
  "/api/SpecialRequest/GetProfileSubmitters"
);

////Wallet
export const CREATEWALLET = getApiUrl("/api/Wallet/CreateWallet");
export const CREDITACCOUNT = getApiUrl("/api/Wallet/CreditAccount");
export const WALLETINFO = getApiUrl("/api/Wallet/WalletInfo");
export const WALLETTRANSACTIONS = getApiUrl("/api/Wallet/WalletTransactions");
export const FUNDWALLETWITHCARD = getApiUrl("/api/Wallet/FundWalletWithCard");
export const FUNDWALLETWITHBTC = getApiUrl("/api/Wallet/FundWalletWithBtc");
export const WITHDRAWTOBTCFROMWALLET = getApiUrl(
  "/api/Wallet/WithdrawToBtcFromWallet"
);
export const APPROVEBTCTRANSACTION = getApiUrl(
  "/api/Wallet/ApproveBtcTransaction"
);

const urlData = {
  ///Account
  MYMATCHES,
  HEALTHCHECK,
  BOOSTPROFILE,
  UPGRADEACCOUNT,
  GETALLUSERS,
  SHOWLASTACTIVE,
  PAUSEPROFILE,
  CREATEPHONEACCOUNT,
  FACEBOOKLOGIN,
  GMAILLOGIN,
  GMAILSIGNUP,
  AUTHORIZEINSTAGRAM,
  FACEBOOKSIGNUP,
  GENERATETOKEN,
  ZODIACSIGN,
  CREATEACCOUNTDETAILS,
  CREATEACCOUNTPROFILE,
  UPLOAD,
  UPLOADS,
  ADVSETTINGS,
  GETLISTOFCOUNTRIES,
  UPDATEPROFILE,
  VERIFYTOKEN,
  GETSTATESCOUNTRY,
  GETCITIESSTATE,
  DASHBOARDBYID,
  DASHBOARD,
  LOGIN,
  LOGOUT,
  FILTER,

  ////Dating
  LIKE,
  FEEDS,
  SENDMESSAGE_DATING,
  GETMYCHATTERS,
  MYMESSAGES_DATING,
  MATCHPROFILE,
  SWIPE,
  DISLIKE,
  SEARCHUSER,
  GETMYLIKES,

  ////Gift
  BUYGIFT,
  GETALLGIFT,
  SELLGIFT,
  GETALLMYGIFT,
  GETMYGIFTTOKEN,
  SENDGIFT,
  GETMYGIFT,

  ////Hobby
  ADDHOBBY,
  GETHOBBIES,
  GETHOBBIESBYCATEGORY,
  GETHOBBIESBYUSERID,
  ADDHOBBYCATEGORY,
  GETHOBBIESCATEGORY,
  GETALLHOBBIES,

  ////Message
  SENDMESSAGE,
  MYMESSAGES,

  ////Notification
  GETNOTIFICATION,
  VIEWNOTIFICATION,
  JOINROOM,

  ////SMS
  QUEUESMS,
  SENDSMS,
  SENDQUEUEDSMS,

  ////Special Request
  ADDSPECIALREQUEST,
  SUBMITPROFILE,
  GETALLSPECIALREQUEST,
  GETPROFILESUBMITTERS,

  ////Wallet
  CREATEWALLET,
  CREDITACCOUNT,
  WALLETINFO,
  WALLETTRANSACTIONS,
  FUNDWALLETWITHCARD,
  FUNDWALLETWITHBTC,
  WITHDRAWTOBTCFROMWALLET,
  APPROVEBTCTRANSACTION,
};

export default urlData;
