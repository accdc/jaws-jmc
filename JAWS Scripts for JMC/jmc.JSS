/*
JAWS Scripts for JMC - Version 5.1.1 (Last Modified September 5, 2017)
For use with JMC the Java MUD Client version 3.6.1
GitHub download: https://github.com/accdc/jaws-jmc
Developed by Bryan Garaventa, WhatSock.com
*/

include "hjConst.jsh"
include "hjGlobal.jsh"
include "common.jsm"
include "jmc.jsm"
use "jFetchUpdater.jsb"

const
csVer = "5.1.1",
slIni = "wndmg.ini",
kSec = "kSlots",
totalSlots = 20

globals
int mBar,
handle g_FocusWindow,
int quickNav,
string targ,
string ag0,
string ag1,
string ag2,
string ag3,
string ag4,
string ag5,
string ag6,
string ag7,
string ag8,
string ag9,
string kFilter,
int isK,
string kTemp,
string k1,
string k2,
string k3,
string k4,
string k5,
string k6,
string k7,
string k8,
string k9,
string k0,
string msg2,
string msg3,
string msg4,
string msg5,
string msgr2,
string msgr3,
string msgr4,
string msgr5,
int spinner,
string ntSpinner,
string ntSpinnerString,
string grbStr,
int pfls

globals

int tms,
int delAction,
int delDelay,
int delTimes,
string delString,
string delSearch,
int stptmr,
int stp,

handle prevMainE,
int ccLen,
int passSp,
string commandChar,

string loadF,
int loadR,

int ampDel,
int ampDelVl,
int drnmft,

int activeVir,
int activeCur,

int tEcho,
int tEchoM,
int rInterrupt,
int rInterruptM,
int tInterrupt,
int tInterruptM,
int punct,
int punctM,

string wUp,
string wPUp,
string wRight,
string wPDown,
string wDown,
string wEnd,
string wLeft,
string wHome,
string wNP5,
string wNPSlash,
string wNPStar,
string wNPIns,

int trimToggle,
int trimCh,
int trim,
int trimL,
int trimT,

string compT1a,
string compT1b,
string compT2a,
string compT2b,
string compT3a,
string compT3b,
string compT4a,
string compT4b,
string compT5a,
string compT5b,

string comp1a,
string comp1b,
string comp2a,
string comp2b,
string comp3a,
string comp3b,
string comp4a,
string comp4b,
string comp5a,
string comp5b,

int spamLt,
int spamEnt,
int spamRefresh,
string sp0,
string sp1,
string sp2,
string sp3,
string sp4,
string sp5,
string sp6,
string sp7,
string sp8,
string sp9,
string sv0,
string sv1,
string sv2,
string sv3,
string sv4,
string sv5,
string sv6,
string sv7,
string sv8,
string sv9,
string spamP,
int spamF,
string macVs,
string navVs,
int escKvl,
string fRoute,
string bRoute,
int drToggle,
string autoMapDr,
string ampCs,
int autoMap,
int ampCapture,
string am0,
string am1,
string am2,
string am3,
string am4,
string am5,
string am6,
string am7,
string am8,
string am9,
int fbfrLen,
int rbfrLen,
string mEscK,
string mTabK,
string mInsK,

string navN,
string navNE,
string navE,
string navSE,
string navS,
string navSW,
string navW,
string navNW,
string navU,
string navD,
int navMode,
int msgBfrRefresh,
int iTB,
int iBT,
string bfrTb,
string bfrBt,
int clearIniVerD,
int toggleIsIg,
int ignorCs,
string ignor0,
string ignor1,
string ignor2,
string ignor3,
string ignor4,
string ignor5,
string ignor6,
string ignor7,
string ignor8,
string ignor9,
string ignor10,
string ignor11,
string ignor12,
string ignor13,
string ignor14,
string ignor15,
string ignor16,
string ignor17,
string ignor18,
string ignor19,
int clearIniVer,
int cntPflDiv,
string bfr,
int isDmToFT,
int wasSlSecHalf,
int isDmTO,
string ptmv,
int prevVlhh,
int slFirstHalf,
int gmft,
int vlhh,
int extVlhh,
int vlmm,
int interCS,
int clipBoardTextChanged,
int windowClosed,
int entKP,
int toggleIs,
int interToggle,
string inter0,
string inter1,
string inter2,
string inter3,
string inter4,
string inter5,
string inter6,
string inter7,
string inter8,
string inter9,
string inter10,
string inter11,
string inter12,
string inter13,
string inter14,
string inter15,
string inter16,
string inter17,
string inter18,
string inter19,
string pfl,
string mainET,
handle mainE,
int tspk,
handle mainW,
int chngFromMainW,
int GISuppressStartMenu,
int iWin95

messages
@notesEr1
The jmc notes file cannot be found. 

The name may have been changed, or the file may have been moved. Try reinstalling the jmc Scripts to 
solve this problem.
@@
@changeNav
Type the string you wish quick navigation to use.
@@
@changeMac
Type the string you wish to assign to the macro.
@@
EndMessages

const
hostLst = "Host List",
wKeys = "Extra Window Hotkeys",
trimLt = "Trim Leading Trailing Strs",
compStrt = "Interrupt Comparison string values",
compStr = "Ignore Comparison string values",
spam = "SpamFiltering",
macV = "MacroValues",
nav = "NavigationValues",
ini = "jmc.ini",
amp = "AMNullifyStrings",
inter = "Interrupt Values",
ignor = "Ignore Values",
pfll = "Profile List",
cpfl = "Current Profile",
abb = "Abbreviated strings",
def = "Default Variables"
globals
int isMessageWin,
string strTmp

Function AutoStartEvent ()
if (!interToggle) then
setGlobalValues ()
let interToggle = 1
endIf

if (!gmft) then
var string rP, string rV
let rP = "https://gutterstar.bizland.com/whatsock/jaws-scripts/jmc/"
let rV = getRemoteFile (rP + "version.txt", "", "GET", "", false, false)
if StringContains (rV, "CurrentJMC-Version=") then
if not StringContains (rV, "CurrentJMC-Version=\"" + csVer + "\"") then
var int u
let u = ExMessageBox ("There is a newer release of the JAWS Scripts for JMC currently available, would you like to load them now? Updating is recommended to apply bug fixes and feature enhancements. All of your current settings will be saved automatically.", "JAWS Scripts Update Available", mb_yesno)
if u == 6 then
Say ("Updating, please wait.", 0, false)
getRemoteFile (rP + "jFetchUpdater.JSS", GetJAWSSettingsDirectory () + "\\jFetchUpdater.JSS", "GET", "", true, true)
getRemoteFile (rP + "jFetchUpdater.JSD", GetJAWSSettingsDirectory () + "\\jFetchUpdater.JSD", "GET", "", true, true)
getRemoteFile (rP + "jFetchUpdater.jsb", GetJAWSSettingsDirectory () + "\\jFetchUpdater.jsb", "GET", "", true, true)
getRemoteFile (rP + "jmc.JSS", GetJAWSSettingsDirectory () + "\\jmc.JSS", "GET", "", true, true)
getRemoteFile (rP + "jmc.jsm", GetJAWSSettingsDirectory () + "\\jmc.jsm", "GET", "", true, true)
getRemoteFile (rP + "jmc.jsd", GetJAWSSettingsDirectory () + "\\jmc.jsd", "GET", "", true, true)
getRemoteFile (rP + "jmc.jsb", GetJAWSSettingsDirectory () + "\\jmc.jsb", "GET", "", true, true)
getRemoteFile (rP + "jmc.jkm", GetJAWSSettingsDirectory () + "\\jmc.jkm", "GET", "", true, true)
let interToggle = 0
Say ("Update complete.", 0, false)
Run (rP + "jmcChangeLog.txt")
Return
endIf
endIf
endIf
let gmft = 1
let prevMainE = StringToHandle ("0")
Say ("To hear the help topic for jmc, press Insert+H.", 0, false)
Say ("Currently running JAWS Scripts for JMC version " + csVer, 0, false)
endIf

var int rslt
SendMessage (GetAppMainWindow (GetFocus ()), 274, 61488, Rslt)
EndFunction

Function AutoFinishEvent ()
let interToggle = 0
;var object o
;let jmc = o
EndFunction

Function setGlobalValues ()
let kFilter = IniReadString (kSec, "kFilter", "", ini)
let tEcho = IniReadInteger ("msgBfr", "tEcho", 1, ini)
let tEchoM = IniReadInteger ("msgBfr", "tEchoM", 0, ini)
let rInterrupt = IniReadInteger ("msgBfr", "rInterrupt", 1, ini)
let rInterruptM = IniReadInteger ("msgBfr", "rInterruptM", 0, ini)
let tInterrupt = IniReadInteger ("msgBfr", "tInterrupt", 1, ini)
let tInterruptM = IniReadInteger ("msgBfr", "tInterruptM", 0, ini)
let punct = IniReadInteger ("msgBfr", "punct", 1, ini)
let punctM = IniReadInteger ("msgBfr", "punctM", 0, ini)

let msgBfrRefresh = IniReadInteger ("MsgBfr", "entKRefreshVal", 3, ini)
let iBt = IniReadInteger ("MsgBfr", "iBt", 0, ini)
let iTb = IniReadInteger ("MsgBfr", "iTb", 0, ini)
let fbfrLen = IniReadInteger ("MsgBfr", "fbfrLen", 1250, ini)
let rbfrLen = IniReadInteger ("MsgBfr", "rbfrLen", 1250, ini)
let pfl = IniReadString (cpfl, "cpfl", abb, ini)
let interCs = IniReadInteger (getInterCs (""), "interCs", 0, ini)
getInterValues ()
getIgnorValues ()
getAmpValues ()
let chngFromMainW = 0
let mainE = StringToHandle ("0")
getNavVs ()
EndFunction

Void Function FocusChangedEvent (handle FocusWindow, handle PrevWindow)
let g_FocusWindow = FocusWindow
if focusChangedValues (g_FocusWindow) then
Return
endIf
FocusChangedEvent (FocusWindow, PrevWindow)
EndFunction

Int Function focusChangedValues (handle FocusWindow)
let chngFromMainW = 0
let mainE = StringToHandle ("0")
if ((GetControlID (FocusWindow) == 1000) ||
(GetControlID (FocusWindow) == 100)) &&
(!MenusActive ()) &&
((GetWindowSubtypeCode (FocusWindow) == 3) ||
(GetWindowSubtypeCode (FocusWindow) == 65)) &&
(!IsVirtualPCCursor ()) &&
IsPCCursor () &&
(!DialogActive ()) then

let mainW = getMainWHndl ()
let mainE = getMainEHndl ()
SetJCFOption (opt_reading_interrupt, rInterruptM)
SetJCFOption (OPT_TYPING_ECHO, tEchoM)
SetJCFOption (OPT_TYPING_INTERRUPT, tInterruptM)
SetJCFOption (opt_punctuation, punctM)

if (!prevMainE) then
let prevMainE = mainE
elIf (prevMainE != mainE) then
let autoMap = 0
let fRoute = ""
let bRoute = ""
let prevMainE = mainE
endIf
let isMessageWin = true

Return false
else

SetJCFOption (opt_reading_interrupt, rInterrupt)
SetJCFOption (OPT_TYPING_ECHO, tEcho)
SetJCFOption (OPT_TYPING_INTERRUPT, tInterrupt)
SetJCFOption (opt_punctuation, punct)
let isMessageWin = false

Return false
endIf
EndFunction

HANDLE Function getMainWHndl ()
var
handle mw
let mw = GetFirstChild (GetFirstWindow (GetParent (GetFocus ())))
if (GetControlID (mw) == 59648) then
let chngFromMainW = 1
Return mw
else
let chngFromMainW = 0
Return StringToHandle ("0")
endIf
EndFunction

Function parseIncomingString (string bfr)
let bfr = StringReplaceSubstrings (bfr, "&quat;", "\"")
if passSp ||
StringContains (bfr, "Last move forgotten.") then
Return
endIf

;if (hwnd == mainW) &&
;chngFromMainW then

if ampCapture then
let ampCapture = 0
var
string cptr
if (StringLength (bfr) > 70) then
let cptr = StringLeft (bfr, 70)
else
let cptr = bfr
endIf
Say (cptr, 0)
addAmpString (cptr)
Return
endIf

if autoMap &&
drToggle then
let drToggle = 0
ampRcd (bfr, autoMapDr)
let autoMapDr = ""
endIf

;endIf

;if (hwnd == mainW) && chngFromMainW &&
if (!tspk) then

if (!toggleIs) then
if isImportant (bfr) &&
(!stp) then
let stp = 1
StopSpeech ()
;setStptmr (20)
endIf
endIf

if (!toggleIsIg) then
var
int iii
let iii = isImportantIg (bfr)
if (iii == 1) then
Return
elIf (iii == 2) then
let bfr = trimString (bfr, trimToggle, trimL, trimT)
endIf
endIf

if (!spamEnt) then

if (spamF == 1) then
spamF (bfr, spamP)
Return
elIf (spamF == 2) then
if spamSuppress (bfr) then
Return
endIf
spamF (bfr, spamP)
Return
elIf (spamF == 3) then
if spamSuppress (bfr) then
Return
endIf

endIf

endIf

let spamEnt = 0

Say (bfr, 0)

endIf

; virtual buffer
;if (hwnd == mainW) &&
;chngFromMainW then

var
int bv

if iBt then
let bfrBt = (bfr + " \n " + bfrBt)
if (StringLength (bfrBt) > rbfrLen) then
let bv = (StringLength (bfrBt) - 250)
let bfrBt = StringLeft (bfrBt, bv)
endIf
endIf

if iTb then
let bfrTb = (bfrTb + " \n " + bfr)
if (StringLength (bfrTb) > fbfrLen) then
let bv = (StringLength (bfrTb) - 250)
let bfrTb = StringRight (bfrTb, bv)
endIf
endIf

;endIf
; end virtual buffer
EndFunction

Int Function isImportant (string bfr) if (tms) then
dSearch (bfr, delSearch)
endIf

if interCs then
let bfr = StringLower (bfr)
endIf

if isCompTString (bfr) then
Return 1
endIf

if (!StringIsBlank (inter0)) &&
(StringContains (bfr, inter0)) then
Return 1

elIf (!StringIsBlank (inter1)) &&
(StringContains (bfr, inter1)) then
Return 1

elIf (!StringIsBlank (inter2)) &&
(StringContains (bfr, inter2)) then
Return 1

elIf (!StringIsBlank (inter3)) &&
(StringContains (bfr, inter3)) then
Return 1

elIf (!StringIsBlank (inter4)) &&
(StringContains (bfr, inter4)) then
Return 1

elIf (!StringIsBlank (inter5)) &&
(StringContains (bfr, inter5)) then
Return 1

elIf (!StringIsBlank (inter6)) &&
(StringContains (bfr, inter6)) then
Return 1

elIf (!StringIsBlank (inter7)) &&
(StringContains (bfr, inter7)) then
Return 1

elIf (!StringIsBlank (inter8)) &&
(StringContains (bfr, inter8)) then
Return 1

elIf (!StringIsBlank (inter9)) &&
(StringContains (bfr, inter9)) then
Return 1

elIf (!StringIsBlank (inter10)) &&
(StringContains (bfr, inter10)) then
Return 1

elIf (!StringIsBlank (inter11)) &&
(StringContains (bfr, inter11)) then
Return 1

elIf (!StringIsBlank (inter12)) &&
(StringContains (bfr, inter12)) then
Return 1

elIf (!StringIsBlank (inter13)) &&
(StringContains (bfr, inter13)) then
Return 1

elIf (!StringIsBlank (inter14)) &&
(StringContains (bfr, inter14)) then
Return 1

;/*
elIf (!StringIsBlank (inter15)) &&
(StringContains (bfr, inter15)) then
Return 1

elIf (!StringIsBlank (inter16)) &&
(StringContains (bfr, inter16)) then
Return 1

elIf (!StringIsBlank (inter17)) &&
(StringContains (bfr, inter17)) then
Return 1

elIf (!StringIsBlank (inter18)) &&
(StringContains (bfr, inter18)) then
Return 1

elIf (!StringIsBlank (inter19)) &&
(StringContains (bfr, inter19)) then
Return 1
;*/

else
Return 0
endIf
EndFunction

Script toggleSpeach ()
if tspk then
let tspk = 0
Say ("messages will be spoken", 0)
else
let tspk = 1
Say ("messages will not be spoken", 0)
 endIf
EndScript

HANDLE Function getMainEHndl ()
var
handle me
let me = GetFocus ()
Return me
EndFunction

Script makeVirtualCopy ()
if isMainWndw () then
PerformScript VirtualizeWindow()
else
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
endIf
EndScript

Script copyCurrentWord ()
var
string cw
let cw = GetWord ()
if StringIsBlank (cw) then SayUsingVoice (vctx_global, "there is no word at the cursor", 0)
else
let kTemp = cw
let isK = 1
CopyToClipboard (cw)
SayUsingVoice (vctx_global, cw, 0)
SayUsingVoice (vctx_global, "has been copied", 0)
endIf
EndScript

Script copyCurrentLine ()
var
string cl
let cl = GetLine ()
if StringIsBlank (cl) then
SayUsingVoice (vctx_global, "there is no line at the cursor", 0)
else
let kTemp = cl
let isK = 1
CopyToClipboard (cl)
SayUsingVoice (vctx_global, cl, 0)
SayUsingVoice (vctx_global, "has been copied", 0)
endIf
EndScript

Script virtualizeWindow ()
var
string sText,
handle hwnd,
int tlx,
int tly,
int brx,
int bry

;let hwnd=GetRealWindow(GetCurrentWindow())
let hwnd = mainW

let tlx=GetWindowLeft(hwnd)
let tly=getWindowTop(hwnd)
let brx=GetWindowRight(hwnd)
let bry=getWindowBottom(hwnd)
let sText=GetTextInRect(tlx,tly,brx,bry,0,IgnoreColor,IgnoreColor,1)
if (sText!=cscNull) then
	SayFormattedMessage(ot_JAWS_Message, "")
	UserBufferClear() 	UserBufferAddText(sText)
	UserBufferActivate()
sayLine()
else
	SayFormattedMessage(OT_ERROR, "")
endIf
EndScript

Script copyMainWindow ()
var
string sText,
handle hwnd,
int tlx,
int tly,
int brx,
int bry

;let hwnd=GetRealWindow(GetCurrentWindow()) let hwnd = mainW

let tlx=GetWindowLeft(hwnd)
let tly=getWindowTop(hwnd)
let brx=GetWindowRight(hwnd)
let bry=getWindowBottom(hwnd)
let sText=GetTextInRect(tlx,tly,brx,bry,0,IgnoreColor,IgnoreColor,1) if (sText!=cscNull) then
CopyToClipboard (sText)
Say ("window copied", 0)
else
Say ("window is empty", 0)
endIf
EndScript

Script switchProfile ()
var
string tmpl,
string msgp

let tmpl = getProfiles () UserBufferClear ()

if StringIsBlank (tmpl) then

let msgp = ("There are no alternate profiles currently listed.\n\n"+
"To create a new profile, press Control+Shift+N.\n\n"+
"Press escape to close the window")

else

let msgp = ("The following profiles are currently available:\n\n"+
tmpl + "\n\n"+
"To remove a profile, press Control+Shift+R.\n"+
"To switch your profiles on the fly, press Alt+P.\n"+
"To hear which profile you are currently using, press Control+P.\n"+
"To reset your profile to the default, press Control+Shift+D.\n"+
"To create a new profile, press Control+Shift+N.\n\n"+
"Press escape to close the window")

endIf

UserBufferAddText (msgp)
UserBufferActivate ()
SayAll ()
EndScript

String Function getProfiles () if UserBufferIsActive () then
UserBufferClear ()
UserBufferDeactivate ()
endIf
 
var
 string lst,
string chk,
string cts,
int ct

let lst = ""
let ct = 1
let cts = IntToString (ct)
let chk = IniReadString (pfll, cts, "InvalidKey", ini)

While (chk != "InvalidKey")

if (chk != "EmptyString") then
let lst = (lst + cts + " " + chk + ", \n")
endIf

let ct = (ct + 1)
let cts = IntToString (ct)
let chk = IniReadString (pfll, cts, "InvalidKey", ini)

EndWhile

if (!StringIsBlank (lst)) then
let lst = StringTrimTrailingBlanks (lst)
let lst = stringChopRight (lst, 1)
endIf

Return lst
EndFunction

Script swPfl ()
if isMainWndw () then
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string smsg,
string sint
let smsg = ("Enter the number of the profile that " +
"you wish to switch to. As seen when pressing Control-Shift-P.")

if InputBox (smsg, "Switch Profile", sint) then
if (IniReadString (pfll, sint, "InvalidString", ini) == "InvalidString") ||
(IniReadString (pfll, sint, "InvalidString", ini) == "EmptyString") then
Say ("No profile is associated with that number, please try again", 0)
Return
endIf

Say ("please wait", 0)
let pfl = IniReadString (pfll, sint, abb, ini)
IniWriteString (cpfl, "cpfl", pfl, ini)
validateIni ()
integrateNav ()
Say ("Your current profile is now set to ", 0)
 Say (pfl, 0)
endIf
else
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
endIf
EndScript

Script curPfl ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

Say ("Your current profile is set to ", 0)
if (pfl != abb) then
Say (pfl, 0)
else
Say ("Default", 0)
endIf
EndScript

Script rsDefault ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf 
Say ("please wait", 0)
IniWriteString (cpfl, "cpfl", abb, ini)
let pfl = abb
validateIni ()
integrateNav ()
Say ("Your profile is now set to the default", 0)
EndScript

Script newPfl ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string rep,
string resSt

let rep = ("Type the profile name you wish " +
"to use. Spaces will not be included. " +
"For example: if playing a mud called \"Mume\", a good profile name may be " +
"\"Mume\" to make the profile game specific.")

if InputBox (rep, "Profile Name", resSt) then
let resSt = stringStripAllBlanks (resSt)
if StringIsBlank (resSt) then
Say ("The string may not be blank, please try again", 0)
Return
elIf (StringLength (resSt) > 30) then
Say ("A profile name may not exceed 30 characters in length, please try again", 0)
Return
endIf

Say ("please wait", 0)
IniWriteString (pfll, selectPflSlot (resSt), resSt, ini)

let pfl = resSt
IniWriteString (cpfl, "cpfl", pfl, ini)

IniWriteString (cpfl, "cpfl", resSt, ini)
validateIni ()
integrateNav ()
Say ("your new profile has been added", 0)
PerformScript curPfl()
endIf
EndScript

String Function selectPflSlot (string checkNm)
var
string chk,
string cts,
int ct,
string empt,
string double
let empt = ""
let double = ""

let ct = 1
let cts = IntToString (ct)
let chk = IniReadString (pfll, cts, "InvalidKey", ini)

While (chk != "InvalidKey")

if (chk == "EmptyString") ||
(chk == checkNm) then

if (chk == checkNm) then
let double = cts
elIf ((chk == "EmptyString") &&
(empt == "")) then
let empt = cts
 endIf

endIf

let ct = (ct + 1)
let cts = IntToString (ct)
let chk = IniReadString (pfll, cts, "InvalidKey", ini)

EndWhile

if (!StringIsBlank (double)) then
let cts = double
elIf (!StringIsBlank (empt)) then
let cts = empt
endIf

Return cts
 EndFunction

Script remPfl ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string rmsg,
string rint
let rmsg = ("Just type the number of the profile " +
"that you wish to remove. As seen when pressing Control-Shift-P.")

if InputBox (rmsg, "Remove Profile", rint) then let rint = stringStripAllBlanks (rint)

if (IniReadString (pfll, rint, "EmptyString", ini) == "EmptyString") then
Say ("There is no profile associated with that number", 0)
else removePflSections (rint)
IniRemoveSection (IniReadString (pfll, rint, "InvalidString", ini), ini)
if (IniReadString (pfll, rint, "InvalidString", ini) == pfl) then PerformScript rsDefault()
endIf
IniWriteString (pfll, rint, "EmptyString", ini)
validateIni ()
Say ("The profile has successfully been removed", 0)
endIf
endIf
EndScript

Void Function removePflSections (string rint)
var
string rt
let rt = IniReadString (pfll, rint, "InvalidString", ini)

rtnStrRemSection (rt, "CaseNF")
rtnStrRemSection (rt, "IgCaseNF")
rtnStrRemSection (rt, inter)
rtnStrRemSection (rt, ignor)
rtnStrRemSection (rt, compStr)
rtnStrRemSection (rt, compStrt)
rtnStrRemSection (rt, spam)
rtnStrRemSection (rt, amp)
rtnStrRemSection (rt, nav)
rtnStrRemSection (rt, macV)
rtnStrRemSection (rt, trimLt)
rtnStrRemSection (rt, wKeys)
EndFunction

Void Function getInterValues ()
var
string val,
string t,
int tI,
int blnk

let tI = 0
let t = IntToString (tI)

let val = IniReadString (interP (""), t, "InvalidStr", ini)
if interCs then
let val = interToLowerCase (val)
endIf

While (tI != 10)

if ((val != "InvalidStr") &&
(val != "EmptyString")) then
let blnk = 0
else
let blnk = 1
endIf

if (!blnk) then
if (StringLeft (val, 1) == "'") then
let val = stringChopLeft (val, 1)
endIf
if (StringRight (val, 1) == "'") then
let val = stringChopRight (val, 1)
endIf
endIf

if (!blnk) &&
(tI == 0) then
let inter0 = val
elIf (tI == 0) then
let inter0 = ""
endIf
if (!blnk) &&
(tI == 1) then
let inter1 = val
elIf (tI == 1) then
let inter1 = ""
endIf
if (!blnk) &&
(tI == 2) then
let inter2 = val
elIf (tI == 2) then
let inter2 = ""
endIf
if (!blnk) &&
(tI == 3) then
let inter3 = val
elIf (tI == 3) then
let inter3 = ""
endIf
if (!blnk) &&
(tI == 4) then
let inter4 = val
elIf (tI == 4) then
let inter4 = ""
endIf
if (!blnk) &&
(tI == 5) then
let inter5 = val
elIf (tI == 5) then
let inter5 = ""
endIf
if (!blnk) && (tI == 6) then
let inter6 = val
elIf (tI == 6) then
let inter6 = ""
endIf
if (!blnk) &&
(tI == 7) then
let inter7 = val elIf (tI == 7) then
let inter7 = ""
endIf
if (!blnk) &&
(tI == 8) then
let inter8 = val
elIf (tI == 8) then
let inter8 = ""
endIf

if (!blnk) &&
(tI == 9) then
let inter9 = val
elIf (tI == 9) then
let inter9 = "" endIf

if (!blnk) &&
(tI == 10) then
let inter10 = val
elIf (tI == 10) then
let inter10 = "" 
endIf

if (!blnk) &&
(tI == 11) then
let inter11 = val
elIf (tI == 11) then
let inter11 = "" 
endIf

if (!blnk) &&
(tI == 12) then
let inter12 = val
elIf (tI == 12) then
let inter12 = "" 
endIf

if (!blnk) &&
(tI == 13) then
let inter13 = val
elIf (tI == 13) then
let inter13 = "" 
endIf

if (!blnk) &&
(tI == 14) then
let inter14 = val
elIf (tI == 14) then
let inter14 = "" 
endIf

/*
if (!blnk) &&
(tI == 15) then
let inter15 = val
elIf (tI == 15) then
let inter15 = "" 
endIf

if (!blnk) &&
(tI == 16) then
let inter16 = val
elIf (tI == 16) then
let inter16 = "" 
endIf

if (!blnk) &&
(tI == 17) then
let inter17 = val
elIf (tI == 17) then
let inter17 = "" 
endIf

if (!blnk) &&
(tI == 18) then
let inter18 = val
elIf (tI == 18) then
let inter18 = "" 
endIf

if (!blnk) &&
(tI == 19) then
let inter19 = val
elIf (tI == 19) then
let inter19 = "" 
endIf
*/

let tI = (tI + 1)
let t = IntToString (tI)
let val = IniReadString (interP (""), t, "InvalidStr", ini)
if interCs then
let val = interToLowerCase (val)
endIf

EndWhile
Return
 EndFunction
 
Script addInterruptValue ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string amsg,
string vl
let amsg = ("Type the string that you wish to " +
"use for interrupting speech during game-play. ")

if InputBox (amsg, "Add Interrupt String", vl) then

if (StringLength (vl) > 60) then
Say ("The string may not exceed 60 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("The string must contain some visible characters, please try again", 0)
Return
endIf

var
int ii,
string ist,
string fl,
string blnk,
string dbl
 let dbl = ""
let blnk = ""
let vl = ("'" + vl + "'")

let ii = 0
let ist = IntToString (ii)
let fl = IniReadString (interP (""), ist, "InvalidKey", ini)

While (fl != "InvalidKey")

if (fl == vl) then
let dbl = ist
elIf ((fl == "EmptyString") &&
(StringIsBlank (blnk))) then
let blnk = ist
endIf

let ii = (ii + 1)
let ist = IntToString (ii)
let fl = IniReadString (interP (""), ist, "InvalidKey", ini)
EndWhile

if (!StringIsBlank (dbl)) then
let ist = dbl
elIf (!StringIsBlank (blnk)) then
let ist = blnk
endIf

if (StringToInt (ist) >= totalSlots) then
Say ("All available slots are taken, no more values may be added. " +
"Press Alt+F3 if you wish to remove any pre-existing strings", 0)
Return
endIf
 
IniWriteString (interP (""), ist, vl, ini)
validateIni ()
Say ("Your interrupt string has successfully been added", 0) 
endIf
EndScript
 
String Function interP (string pVal)
let pVal = (inter + " " + pfl)
Return pVal
EndFunction

Script remInterruptValue () if UserBufferIsActive () then UserBufferDeactivate ()
endIf

var
string rmsg,
string nm
let rmsg = ("Type the number of the Interrupt String that " +
"you wish to remove. As seen when pressing Alt+F1")

if InputBox (rmsg, "Remove Interrupt String", nm) then
let nm = stringStripAllBlanks (nm)

if (IniReadString (interP (""), nm, "EmptyString", ini) == "EmptyString") then
Say ("There is no interrupt string associated with that slot", 0)
Return
endIf

IniWriteString (interP (""), nm, "EmptyString", ini)
validateIni ()
Say ("The interrupt string has successfully been removed", 0)

endIf
EndScript

Script viewInterruptValues ()
var
string isv,
string msgIs

let isv = getInterruptStrings ()
UserBufferClear ()

if StringIsBlank (isv) then

let msgIs = ("There are no Interrupt Strings currently listed.\n\n"+
"To add a new Interrupt String, press Alt+F2.\n\n"+
"Press escape to close the window")

else

let msgIs = ("The following Interrupt Strings are currently listed:\n\n"+
isv + "\n\n"+
"To add a new Interrupt String, press Alt+F2.\n"+
"To remove an Interrupt String, press Alt+F3.\n"+
"To toggle the use of interrupt strings, press Control+F4.\n"+
"To toggle case sensitivity, press Control+F5\n"+
"To hear the case sensitivity status, press Control+Shift+F5.\n\n"+
"Press escape to close the window")

endIf

UserBufferAddText (msgIs)
UserBufferActivate ()
SayAll ()

EndScript

String Function getInterruptStrings ()
var
int isi,
string iss,
string comp,
string tmp

let comp = ""
let isi = 0
let iss = IntToString (isi) let tmp = IniReadString (interP (""), iss, "InvalidKey", ini)

While (tmp != "InvalidKey")

if (tmp != "EmptyString") then
let comp = (comp + iss + " '" + tmp + "',\n")
endIf

let isi = (isi + 1)
let iss = IntToString (isi)
let tmp = IniReadString (interP (""), iss, "InvalidKey", ini)
EndWhile

if (!StringIsBlank (comp)) then
let comp = StringTrimTrailingBlanks (comp)
let comp = stringChopRight (comp, 1)
endIf

Return comp
EndFunction

Script toggleIs ()
if toggleIs then
let toggleIs = 0
Say ("interrupt values active", 0)
else
let toggleIs = 1
Say ("interrupt values will not be used", 0) endIf
EndScript

Script toggleRetypeWithEnterKey ()
if entKP then
let entKP = 0
Say ("auto re typing active", 0)
else
let entKP = 1
Say ("auto re typing off", 0)
endIf
EndScript

Void Function keyPressedEvent (int nKey, string strKeyName, int nIsBrailleKey, int nIsScriptKey)
let WindowClosed = false
let ClipboardTextChanged = false

If UserBufferIsActive () then
	If NKey == KEY_LEFT_WINDOWS || 
	nKey == KEY_RIGHT_WINDOWS || 
	nKey == KEY_CONTEXT ||
	nKey == KEY_ALT_TAB then
UserBufferDeactivate ()
endIf
If NKey == KEY_CONTEXT then
;			TypeKey (cKs23)
endIf
endIf

if (GetActiveCursor () != activeCur) ||
(activeVir != IsVirtualPCCursor ()) then
let activeCur = GetActiveCursor ()
let activeVir = IsVirtualPCCursor ()
focusChangedValues (g_FocusWindow)
endIf

;let stp = 0

if (isMessageWin &&
(MenusActive () ||
tInterruptM)) ||
(!isMessageWin &&
tInterrupt) then
StopSpeech ()
endIf
EndFunction

Script openNoteFile ()
if isMainWndw () then
var
string jp
let jp = stringChopRight (GetAppFilePath (), StringLength (GetAppFileName ())) + "jmcNotes.txt"
if FileExists (jp) then
Say ("notes", 0)
Run (jp)
else
SayFormattedMessage (ot_error, notesEr1, cmsgSilent)
endIf
else
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
endIf
EndScript

Script interCaseSensitive ()
if interCs then
let interCs = 0
Say ("interrupt values will be case sensitive", 0)
else
let interCs = 1
Say ("interrupt values will not be case sensitive", 0)
endIf

IniWriteInteger (getInterCs (""), "interCs", interCs, ini)
validateIni ()
EndScript

String Function interToLowerCase (string cnvs)
let cnvs = StringLower (cnvs)
Return cnvs
EndFunction

String Function getInterCs (string rtns)
let rtns = ("CaseNF " + pfl)
Return rtns
EndFunction

Script checkInterCs ()
if interCs then
Say ("interrupt values will not be case sensitive", 0)
else Say ("interrupt values will be case sensitive", 0)
endIf
EndScript

String Function dValT (string ctm, int segment, string strhh, int strlng)
let strhh = StringSegment (ctm, ":", 1)
if segment then
let strlng = (StringLength (strhh) + 1)
let ctm = stringChopLeft (ctm, strlng)
Return StringSegment (ctm, " ", 1)
else
Return strhh
endIf
EndFunction

Int Function separateDValT (int sgmnt, int intVl)
let intVl = StringToInt (dValT (sysGetTime (), sgmnt, "", 0))
Return intVl
EndFunction

String Function resTGlSt ()
if UserBufferIsActive () then
UserBufferClear ()
UserBufferDeactivate ()
endIf

var
 string lst,
string chk,
string cts,
int ct

let lst = ""
let ct = 1
let cntPflDiv = ct
let cts = IntToString (ct)
let chk = IniReadString (pfll, cts, "InvalidKey", ini)

While (chk != "InvalidKey")

if (chk != "EmptyString") then
let lst = (lst + chk + ":v::")
endIf

let ct = (ct + 1)
let cntPflDiv = ct
let cts = IntToString (ct)
let chk = IniReadString (pfll, cts, "InvalidKey", ini)

EndWhile

if (!StringIsBlank (lst)) then
let lst = StringTrimTrailingBlanks (lst)
let lst = stringChopRight (lst, 1)
endIf

Return lst
EndFunction

Void Function divideNms (string appnd, string rtnStr)
var
string gpf,
int kt
let kt = 1
let gpf = resTGlSt ()

While (!StringIsBlank (gpf)) ||
(kt == cntpflDiv)

let rtnStr = StringSegment (gpf, ":v:", 1)
rtnStrRemSection (rtnStr, appnd)
let gpf = stringChopLeft (gpf, (StringLength (rtnStr) + 1))
let kt = (kt + 1)

EndWhile
 EndFunction

Void Function rtnStrRemSection (string rt, string ppnd)
let rt = (ppnd + " " + rt)
IniRemoveSection (rt, ini)
EndFunction

Script tst ()
if clearIniVer then
let clearIniVer = 0
Say ("please waite while the configuration file is cleared", 0)
Pause ()
Delay (1)
Say ("0%", 0)
var
string snms

divideNms (wKeys, "")
divideNms (trimLt, "")
divideNms (compStrt, "")
divideNms (compStr, "")
divideNms (macV, "")
divideNms ("CaseNF", "")
Pause ()
Delay (1)
Say ("10%", 0)
divideNms ("IgCaseNF", "")
divideNms (inter, "")
Pause ()
Delay (1)
Say ("25%", 0)
divideNms (ignor, "")
divideNms (amp, "")
divideNms (nav, "")
divideNms (spam, "")

Pause ()
Delay (1)
Say ("40%", 0)
Pause ()
Delay (1)
Say ("55%", 0)
IniRemoveSection (pfll, ini)
Pause ()
Delay (1)
Say ("70%", 0)
IniRemoveSection (cpfl, ini)
Pause ()
Delay (1)
Say ("85%", 0)
IniRemoveSection (def, ini)
Pause ()
Delay (1)
Say ("95%", 0)
Delay (2)
Say ("The configuration file has successfully been cleared", 0)
PerformScript rsDefault()
validateIni ()
else
let clearIniVer = 1
Say ("Are you sure you want to clear the configuration file? "+
"The configuration file is where all profiles and interrupt values are stored. ", 0)
Say ("Press Alt+F11 to continue, or press the Control key to cancel. ", 0)
endIf
EndScript

Script cleanDefaultPfl ()
if clearIniVerD then
let clearIniVerD = 0
var
string snms
let snms = (wKeys + " " + abb)
IniRemoveSection (snms, ini)
let snms = (trimLt + " " + abb)
IniRemoveSection (snms, ini)
let snms = (compStrt + " " + abb)
IniRemoveSection (snms, ini)
let snms = (compStr + " " + abb)
IniRemoveSection (snms, ini)
let snms = (spam + " " + abb)
IniRemoveSection (snms, ini)
let snms = (nav + " " + abb)
IniRemoveSection (snms, ini)
let snms = (amp + " " + abb)
IniRemoveSection (snms, ini)
let snms = ("CaseNF " + abb)
IniRemoveSection (snms, ini)
let snms = ("IgCaseNF " + abb)
IniRemoveSection (snms, ini)
let snms = (macV + " " + abb)
IniRemoveSection (snms, ini)
let snms = (inter + " " + abb)
IniRemoveSection (snms, ini)
let snms = (ignor + " " + abb)
IniRemoveSection (snms, ini)

Say ("the default profile has successfully been cleared", 0)
if (IniReadString (cpfl, "cpfl", "InvalidString", ini) == abb) then
PerformScript rsDefault()
endIf

else
let clearIniVerD = 1
Say ("Are you sure you want to clear the default profile settings? "+
"This action will only effect the default profile, all other settings will not be effected. ", 0)
Say ("Press Control+Shift+0 to continue, or press the Control key to cancel. ", 0)
endIf
EndScript

Script OpenJmcHlp ()
var string p
let p = stringChopRight (GetAppFilePath (), StringLength (GetAppFileName ())) + "help\\index.html"
Say ("JMC Help", 0, false)
Run ("\"" + p + "\"")
EndScript

Function vlTarget ()
var
int ghh,
int gmm
let ghh = separateDValT (0, 0)
let gmm = separateDValT (1, 0)

if (gmm <= 24) then
let slFirstHalf = 1
let prevVlhh = ghh
let vlhh = ghh
let extVlhh = 0
let vlmm = (gmm + 35)
else
let slFirstHalf = 0
let prevVlhh = ghh

if (ghh == 12) then
let vlhh = 1
let extVlhh = 13
else
let vlhh = (ghh + 1)
let extVlhh = 0
endIf
let gmm = (gmm + 35)
let vlmm = (gmm - 60)
endIf
EndFunction

Script ctrlKey ()
StopSpeech ()
if clearIniVer ||
clearIniVerD then
let clearIniVer = 0
let clearIniVerD = 0
Say ("action canceled", 0)
endIf
let stp = 0
EndScript

Script openHlpFile ()
if IsSameScript () then
UserBufferDeactivate ()
var string p
let p = GetJAWSSettingsDirectory () + "\\jmc.htm"
Say ("JMC Script Reference", 0, false)
Run ("\"" + p + "\"")
Return
else
PerformScript ScreenSensitiveHelp()
endIf
EndScript

Void Function getIgnorValues ()
var
string val,
string t,
int tI,
int blnk
;string act 
let tI = 0
let t = IntToString (tI)

let val = IniReadString (ignorP (""), t, "InvalidStr", ini)

if ignorCs then
let val = interToLowerCase (val)
endIf

While (tI != 20)
if ((val != "InvalidStr") &&
(val != "EmptyString")) then
let blnk = 0
else
let blnk = 1
endIf

if (!blnk) then
if (StringLeft (val, 1) == "'") then
let val = stringChopLeft (val, 1)
endIf
if (StringRight (val, 1) == "'") then
let val = stringChopRight (val, 1)
endIf
endIf

if (!blnk) &&
(tI == 0) then
let ignor0 = val

elIf (tI == 0) then
let ignor0 = ""
endIf
if (!blnk) &&
(tI == 1) then
let ignor1 = val

elIf (tI == 1) then
let ignor1 = ""
endIf
if (!blnk) &&
(tI == 2) then
let ignor2 = val

elIf (tI == 2) then
let ignor2 = ""
endIf
if (!blnk) &&
(tI == 3) then
let ignor3 = val

elIf (tI == 3) then
let ignor3 = ""
endIf
if (!blnk) &&
(tI == 4) then
let ignor4 = val

elIf (tI == 4) then
let ignor4 = ""
endIf
if (!blnk) &&
(tI == 5) then
let ignor5 = val

elIf (tI == 5) then
let ignor5 = ""
endIf
if (!blnk) &&
(tI == 6) then
let ignor6 = val

elIf (tI == 6) then
let ignor6 = ""
endIf
if (!blnk) &&
(tI == 7) then
let ignor7 = val

elIf (tI == 7) then
let ignor7 = ""
endIf
if (!blnk) &&
(tI == 8) then
let ignor8 = val

elIf (tI == 8) then
let ignor8 = "" endIf

if (!blnk) &&
(tI == 9) then
let ignor9 = val
elIf (tI == 9) then
let ignor9 = ""
 endIf

if (!blnk) &&
(tI == 10) then
let ignor10 = val
elIf (tI == 10) then
let ignor10 = ""
 endIf

if (!blnk) &&
(tI == 11) then
let ignor11 = val
elIf (tI == 11) then
let ignor11 = ""
 endIf

if (!blnk) &&
(tI == 12) then
let ignor12 = val
elIf (tI == 12) then
let ignor12 = ""
 endIf

if (!blnk) &&
(tI == 13) then
let ignor13 = val
elIf (tI == 13) then
let ignor13 = ""
 endIf

if (!blnk) &&
(tI == 14) then
let ignor14 = val
elIf (tI == 14) then
let ignor14 = ""
 endIf

/*
if (!blnk) &&
(tI == 15) then
let ignor15 = val
elIf (tI == 15) then
let ignor15 = ""
 endIf

if (!blnk) &&
(tI == 16) then
let ignor16 = val
elIf (tI == 16) then
let ignor16 = ""
 endIf

if (!blnk) &&
(tI == 17) then
let ignor17 = val
elIf (tI == 17) then
let ignor17 = ""
 endIf

if (!blnk) &&
(tI == 18) then
let ignor18 = val
elIf (tI == 18) then
let ignor18 = ""
 endIf

if (!blnk) &&
(tI == 19) then
let ignor19 = val
elIf (tI == 19) then
let ignor19 = ""
 endIf
*/

let tI = (tI + 1)
let t = IntToString (tI)
let val = IniReadString (ignorP (""), t, "InvalidStr", ini)
if ignorCs then
let val = interToLowerCase (val)
endIf
 EndWhile
Return
 EndFunction

String Function ignorP (string pVal)
let pVal = (ignor + " " + pfl)
Return pVal
EndFunction

Script viewIgnorValues ()
var
string isv,
string msgIs

let isv = getIgnorStrings ()
UserBufferClear ()

if StringIsBlank (isv) then

let msgIs = ("There are no ignore Strings currently listed.\n\n"+
"To add a new ignore String, press Alt+2.\n\n"+
"Press escape to close the window")

else

let msgIs = ("The following ignore Strings are currently listed:\n\n"+
isv + "\n\n"+
"To add a new ignore String, press Alt+2.\n"+
"To remove an ignore String, press Alt+3.\n"+
"To toggle the use of ignore strings, press Control+4.\n"+
"To toggle case sensitivity, press Control+5\n"+
"To hear the case sensitivity status, press Control+Shift+5.\n\n"+
"Press escape to close the window")

endIf

UserBufferAddText (msgIs)
UserBufferActivate ()
SayAll ()

EndScript

String Function getIgnorStrings ()
var
int isi,
string iss,
string comp,
string tmp

let comp = ""
let isi = 0
let iss = IntToString (isi)
let tmp = IniReadString (ignorP (""), iss, "InvalidKey", ini)

While (tmp != "InvalidKey")

if (tmp != "EmptyString") then
let comp = (comp + iss + " '" + tmp + "',\n")
endIf

let isi = (isi + 1)
let iss = IntToString (isi)
let tmp = IniReadString (ignorP (""), iss, "InvalidKey", ini)
EndWhile

if (!StringIsBlank (comp)) then
let comp = StringTrimTrailingBlanks (comp)
let comp = stringChopRight (comp, 1)
endIf

Return comp
EndFunction

Script addIgnorValue ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string amsg,
string vl
let amsg = ("Type the string that you wish to " +
"use to ignore output during game-play. ")

if InputBox (amsg, "Add Ignore String", vl) then

if (StringLength (vl) > 60) then
Say ("The string may not exceed 60 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("The string must contain some visible characters, please try again", 0)
Return
endIf

var
int ii,
string ist,
string fl,
string blnk,
string dbl
 let dbl = "" let blnk = ""
let vl = ("'" + vl + "'")

let ii = 0
let ist = IntToString (ii)
let fl = IniReadString (ignorP (""), ist, "InvalidKey", ini)

While (fl != "InvalidKey")

if (fl == vl) then
let dbl = ist
elIf ((fl == "EmptyString") &&
(StringIsBlank (blnk))) then
let blnk = ist
endIf

let ii = (ii + 1)
let ist = IntToString (ii)
let fl = IniReadString (ignorP (""), ist, "InvalidKey", ini)
EndWhile

if (!StringIsBlank (dbl)) then
let ist = dbl
elIf (!StringIsBlank (blnk)) then
let ist = blnk
endIf

if (StringToInt (ist) >= totalSlots) then
Say ("All available slots are taken, no more values may be added. " +
"Press Alt+3 if you wish to remove any pre-existing strings", 0)
Return
endIf

IniWriteString (ignorP (""), ist, vl, ini)
validateIni ()
Say ("Your ignore string has successfully been added", 0)

endIf
EndScript

String Function getIgnorCs (string rtns)
let rtns = ("IgCaseNF " + pfl)
Return rtns
EndFunction

Script remIgnorValue ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string rmsg,
string nm
let rmsg = ("Type the number of the ignore String that " +
"you wish to remove. As seen when pressing Alt+1")

if InputBox (rmsg, "Remove Ignore String", nm) then
let nm = stringStripAllBlanks (nm)

if (IniReadString (ignorP (""), nm, "EmptyString", ini) == "EmptyString") then
Say ("There is no ignore string associated with that slot", 0)
Return
endIf

IniWriteString (ignorP (""), nm, "EmptyString", ini)
validateIni ()
Say ("The ignore string has successfully been removed", 0)

endIf
EndScript

Script ignorCaseSensitive ()
if ignorCs then
let ignorCs = 0
Say ("ignore values will be case sensitive", 0)
else
let ignorCs = 1
Say ("ignore values will not be case sensitive", 0)
endIf
IniWriteInteger (getIgnorCs (""), "ignorCs", ignorCs, ini)
validateIni ()
EndScript

Script toggleIsIg ()
if toggleIsIg then
let toggleIsIg = 0 Say ("ignore values active", 0)
else
let toggleIsIg = 1
Say ("ignore values will not be used", 0)
endIf
EndScript

Script checkIgnorCs ()
if ignorCs then
Say ("ignore values will not be case sensitive", 0)
else
Say ("ignore values will be case sensitive", 0)
endIf
EndScript

Function validateIni ()
let interCs = IniReadInteger (getInterCs (""), "interCs", 0, ini)
getInterValues ()
getCompTValues ()
let ignorCs = IniReadInteger (getIgnorCs (""), "ignorCs", 0, ini)
getIgnorValues ()
getCompValues ()
getAmpValues ()
getNavVs ()
EndFunction

Int Function isImportantIg (string bfr)
if ignorCs then
let bfr = StringLower (bfr)
endIf

var
int ics
let ics = isCompString (bfr)
if ics then
Return ics
endIf

if (!StringIsBlank (ignor0)) &&
(StringContains (bfr, ignor0)) then
Return 1
elIf (!StringIsBlank (ignor1)) &&
(StringContains (bfr, ignor1)) then
Return 1
elIf (!StringIsBlank (ignor2)) &&
(StringContains (bfr, ignor2)) then
Return 1
elIf (!StringIsBlank (ignor3)) &&
(StringContains (bfr, ignor3)) then
Return 1
elIf (!StringIsBlank (ignor4)) &&
(StringContains (bfr, ignor4)) then
Return 1
elIf (!StringIsBlank (ignor5)) &&
(StringContains (bfr, ignor5)) then
Return 1
elIf (!StringIsBlank (ignor6)) &&
(StringContains (bfr, ignor6)) then
Return 1
elIf (!StringIsBlank (ignor7)) &&
(StringContains (bfr, ignor7)) then
Return 1
elIf (!StringIsBlank (ignor8)) &&
(StringContains (bfr, ignor8)) then
Return 1
elIf (!StringIsBlank (ignor9)) &&
(StringContains (bfr, ignor9)) then
Return 1

elIf (!StringIsBlank (ignor10)) &&
(StringContains (bfr, ignor10)) then
Return 1

elIf (!StringIsBlank (ignor11)) &&
(StringContains (bfr, ignor11)) then
Return 1

elIf (!StringIsBlank (ignor12)) &&
(StringContains (bfr, ignor12)) then
Return 1

elIf (!StringIsBlank (ignor13)) &&
(StringContains (bfr, ignor13)) then
Return 1

elIf (!StringIsBlank (ignor14)) &&
(StringContains (bfr, ignor14)) then
Return 1

;/*
elIf (!StringIsBlank (ignor15)) &&
(StringContains (bfr, ignor15)) then
Return 1

elIf (!StringIsBlank (ignor16)) &&
(StringContains (bfr, ignor16)) then
Return 1

elIf (!StringIsBlank (ignor17)) &&
(StringContains (bfr, ignor17)) then
Return 1

elIf (!StringIsBlank (ignor18)) &&
(StringContains (bfr, ignor18)) then
Return 1

elIf (!StringIsBlank (ignor19)) &&
(StringContains (bfr, ignor19)) then
Return 1
;*/

else
Return 0
endIf
EndFunction

Script maxResScreen ()
if (opt_graphics_mode == 0) then
SetJCFOption (opt_include_graphics, 1)
endIf

if FindGraphic (GetFocus (), "Maximize symbol", s_top, s_unrestricted) then
PCCursor ()
LeftMouseButton ()
Say ("screen maximized", 0)
elIf FindGraphic (GetFocus (), "Restore symbol", s_top, s_unrestricted) then
PCCursor ()
LeftMouseButton ()
Say ("screen restored", 0)
else
PCCursor ()
Say ("symbol not found", 0)
endIf

if chngFromMainW then
SetJCFOption (opt_include_graphics, 0)
endIf
EndScript

Script checkMaxResScreen ()
if (opt_graphics_mode == 0) then
SetJCFOption (opt_include_graphics, 1)
endIf

if FindGraphic (GetFocus (), "Maximize symbol", s_top, s_unrestricted) then
PCCursor ()
Say ("screen not currently maximized", 0)
elIf FindGraphic (GetFocus (), "Restore symbol", s_top, s_unrestricted) then
PCCursor ()
Say ("screen already maximized", 0)
else
PCCursor ()
Say ("symbol not found", 0)
endIf

if chngFromMainW then
SetJCFOption (opt_include_graphics, 0)
endIf
EndScript

Script toggleIBt ()
if iBt then
let iBt = 0
Say ("reverse message buffer deactivated", 0)
else
let iBt = 1
Say ("the reverse message buffer is now active", 0)
endIf
IniWriteInteger ("MsgBfr", "iBt", iBt, ini)
EndScript

Script readFBToT ()
if iBt then
Say (bfrBt, 0)
else
Say ("the reverse message buffer is not currently active. "+
"press Alt+Control+shift+upArrow to toggle this feature", 0)
endIf
EndScript

Script toggleITb ()
if iTb then
let iTb = 0
Say ("forward message buffer deactivated", 0)
else
let iTb = 1
Say ("the forward message buffer is now active", 0)
endIf
IniWriteInteger ("MsgBfr", "iTb", iTb, ini)
EndScript

Script readFTToB ()
if iTb then
Say (bfrTb, 0)
else
Say ("the forward message buffer is not currently active. "+
"press Alt+Control+shift+downArrow to toggle this feature", 0)
endIf
EndScript

;msgBfrRefresh values
;0 refresh none
;1 refresh reverse only
;2 refresh forward only
;3 refresh both

Script toggleEntKMsgBfrReset ()
if (msgBfrRefresh == 0) then
let msgBfrRefresh = 1
Say ("the enter key will only refresh the reverse message buffer", 0)
elIf (msgBfrRefresh == 1) then
let msgBfrRefresh = 2
Say ("the enter key will only refresh the forward message buffer", 0)
elIf (msgBfrRefresh == 2) then
let msgBfrRefresh = 3
Say ("the enter key will refresh both the reverse and forward message buffers", 0)
else
let msgBfrRefresh = 0
Say ("the enter key will not refresh either buffer", 0)
endIf
IniWriteInteger ("MsgBfr", "entKRefreshVal", msgBfrRefresh, ini)
EndScript

String Function cutMsgBfrSegments (string strm)
var
string stm,
int cm,
string fl

While (!StringIsBlank (strm))
let fl = StringLeft (strm, 1)

if (cm == 0) then
if (fl == " ") then
let cm = (cm + 1) else
let cm = 0
endIf
elIf (cm == 1) then
if (fl == ":") then
let cm = (cm + 1)
else
let cm = 0
endIf
elIf (cm == 2) then
if (fl == "-") then
let cm = (cm + 1)
else
let cm = 0
endIf
elIf (cm == 3) then
if (fl == " ") then
let cm = (cm + 1)
else
let cm = 0
endIf
endIf

if (cm == 4) then
let stm = stringChopRight (stm, 3)
let stm = (stm + "\n- ")
let cm = 0
endIf
let stm = (stm + fl)
let strm = stringChopLeft (strm, 1)
EndWhile

Return stm
EndFunction

Script makeVirtualCopyOfBt ()
var
string cbt
let cbt = cutMsgBfrSegments (bfrbt)

if (!StringIsBlank (cbt)) then
UserBufferClear ()
UserBufferAddText (cbt)
UserBufferActivate ()
SayAll ()
else
Say ("The reverse message buffer is empty", 0)
endIf
EndScript

Script makeVirtualCopyOfTb ()
var
string ctb
let ctb = cutMsgBfrSegments (bfrtb)

if (!StringIsBlank (ctb)) then
UserBufferClear ()
UserBufferAddText (ctb)
UserBufferActivate ()
SayAll ()
else
Say ("The forward message buffer is empty", 0)
endIf
EndScript

Function trkSch ()
PerformScript trk()
EndFunction

Script dnldNewVersion ()
Say ("You are currently running the Jmc scripts, version ", 0)
Say (csVer, 0)
EndScript

Script ToggleNavMode ()
if navMode then
let navMode = 0
Say ("Quick navigation mode off", 0)
else
let navMode = 1
Say ("Quick navigation mode on", 0)
endIf
EndScript

String Function commandCharInitialize ()
Say ("initializing scripts, please wait", 0)
var string stv
let stv = ";"
IniWriteString (amp, "ampCs", stv, ini)
Say ("the jmc scripts have been initialized", 0)
Say ("ready", 0)
Return stv
EndFunction

Void Function getNavVs ()
let commandChar = IniReadString (def, "commandChar", "KNF", ini)
if (commandChar == "KNF") then
let commandChar = commandCharInitialize ()
PerformScript SayWindowPromptAndText()
endIf

let ccLen = StringLength (commandChar)
let navVs = getNavSection ("")
let ampDel = IniReadInteger (navVs, "ampDel", 0, ini)
let ampDelVl = IniReadInteger (navVs, "ampDelVl", 5, ini)

let navN = IniReadString (navVs, "navN", "n", ini)
let navNE = IniReadString (navVs, "navNE", " ", ini)
let navE = IniReadString (navVs, "navE", "e", ini)
let navSE = IniReadString (navVs, "navSE", " ", ini)
let navS = IniReadString (navVs, "navS", "s", ini)
let navSW = IniReadString (navVs, "navSW", " ", ini)
let navW = IniReadString (navVs, "navW", "w", ini)
let navNW = IniReadString (navVs, "navNW", " ", ini)
let navU = IniReadString (navVs, "navU", "u", ini)
let navD = IniReadString (navVs, "navD", "d", ini)

let macVs = getMacSection ("")
let mEscK = IniReadString (macVs, "mEscK", "", ini)
let mTabK = IniReadString (macVs, "mTabK", "", ini)
let mInsK = IniReadString (macVs, "mInsK", "", ini)
let escKvl = IniReadInteger (macVs, "escKvl", 0, ini)

let spamF = IniReadInteger (getSpamSection (""), "spamF", 0, ini)
let spamRefresh = IniReadInteger (getSpamSection (""), "spamRefresh", 0, ini)
let spamLt = IniReadInteger (getSpamSection (""), "spamLt", 0, ini)

getCompValues ()
getCompTValues ()

let trim = IniReadInteger (getTrimSection (""), "trim", 0, ini)
let trimL = IniReadInteger (getTrimSection (""), "trimL", 0, ini)
let trimT = IniReadInteger (getTrimSection (""), "trimT", 0, ini)
let trimCh = IniReadInteger (getTrimSection (""), "trimCh", 0, ini)
let trimToggle = IniReadInteger (getTrimSection (""), "trimToggle", 0, ini)

getWKeys (getWKeysSection (""))
EndFunction

Function checkCommandChar ()
var
handle gw,
string stv

if (GetWindowClass (g_FocusWindow) == "SysTabControl32" ||
GetWindowClass (GetLastWindow (GetParent (g_FocusWindow))) == "SysTabControl32") &&
(GetWindowName (g_FocusWindow) == "Common" ||
GetWindowName (GetLastWindow (GetParent (g_FocusWindow))) == "Common") then
else
Return
endIf

let stv = GetWindowTextEx (FindDescendantWindow (GetParent (GetFocus ()), 1033), false, false)
if StringIsBlank (stv) then
let stv = ";"
endIf

IniWriteString (amp, "ampCs", stv, ini)

let stv = GetWindowTextEx (FindDescendantWindow (GetParent (GetFocus ()), 1032), false, false)
if StringIsBlank (stv) then
let stv = "#"
endIf

IniWriteString (def, "commandChar", stv, ini)

getNavVs ()
EndFunction

Script enterKey ()
;let quickNav = false
let isK = 0
let stp = 0
if isMainWndw () then

var
string wt
let wt = GetLine ()

if (!entKP) then
if StringIsBlank (wt) then
TypeString (mainET)
EnterKey ()
refreshBuffers ()
refreshSpamFilters ()
Return
else
let mainET = wt
endIf
endIf

if (StringLeft (wt, ccLen) != commandChar) then
EnterKey ()
refreshBuffers ()
refreshSpamFilters ()
Return
else
commandCharEnter (wt, ccLen)
EnterKey ()
refreshBuffers ()
refreshSpamFilters ()
Return
endIf

elIf (GetWindowName (GetRealWindow (GetFocus ())) == "Options") then
checkCommandChar ()
endIf
EnterKey ()
EndScript

Function refreshSpamFilters ()
if ((spamF == 2) ||
(spamF == 3)) &&
(!spamRefresh) then
spamCycleSv ("", 2)
let spamEnt = 1
endIf
EndFunction

Void Function commandCharEnter (string gln, int iln)
if StringContains (StringLeft (gln, (iln + 7)), "connect") then
let gln = stringChopLeft (gln, iln)
IniWriteString (def, "lc", gln, ini)
elIf StringContains (StringLeft (gln, (iln + 5)), "char ") then
let gln = stringChopLeft (gln, (iln + 4))
let gln = StringTrimLeadingBlanks (gln)
let gln = StringTrimTrailingBlanks (gln)
if (StringLeft (gln, 1) == "{") then
let gln = stringChopLeft (gln, 1)
endIf
if (StringRight (gln, 1) == "}") then
let gln = stringChopRight (gln, 1)
endIf
let commandChar = gln
IniWriteString (def, "commandChar", gln, ini)
let ccLen = StringLength (commandChar)
elIf StringContains (StringLeft (gln, (iln + 4)), "mark") &&
(!StringContains (gln, "off")) then
let autoMap = 1
let fRoute = ""
let bRoute = ""
elIf StringContains (StringLeft (gln, (iln + 4)), "mark") &&
StringContains (gln, "off") then
let autoMap = 0
endIf
EndFunction

Function setCChar (string c)
let commandChar = c
IniWriteString (def, "commandChar", c, ini)
EndFunction

Int Function isMainWndw ()
if chngFromMainW &&
(!MenusActive ()) &&
(!IsVirtualPCCursor ()) &&
IsPCCursor () &&
(!DialogActive ()) then
Return 1
endIf
Return 0
EndFunction

String Function getNavKvl (int nkvl, string kstrv)
if (nkvl == 1) then
let kstrv = navN
let drnmft = 1
elIf (nkvl == 2) then
let kstrv = navNE
let drnmft = 2
elIf (nkvl == 3) then
let kstrv = navE
let drnmft = 1
elIf (nkvl == 4) then
let kstrv = navSE
let drnmft = 2
elIf (nkvl == 5) then
let kstrv = navS
let drnmft = 1
elIf (nkvl == 6) then
let kstrv = navSW
let drnmft = 2
elIf (nkvl == 7) then
let kstrv = navW
let drnmft = 1
elIf (nkvl == 8) then
let kstrv = navNW
let drnmft = 2
elIf (nkvl == 9) then
let kstrv = navU
let drnmft = 3
elIf (nkvl == 10) then
let kstrv = navD
let drnmft = 3
elIf (nkvl == 11) then
let kstrv = mEscK
elIf (nkvl == 12) then
let kstrv = mTabK
elIf (nkvl == 13) then
let kstrv = mInsK
endIf
if autoMap &&
(nkvl < 11) then
let drToggle = 1
let autoMapDr = kstrv
endIf
Return kstrv
EndFunction

Script UpA ()
if isMainWndw () &&
navMode then
if StringIsBlank (navN) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (1)
Return
else
endIf
EndScript

Script upP ()
if isMainWndw () &&
navMode then
if StringIsBlank (navNE) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (2)
Return
else
endIf
EndScript

Script rightA ()
if not isMessageWin then
if (GetWindowName (GetRealWindow (g_FocusWindow)) == "Options") then
checkCommandChar ()
endIf
endIf
if isMainWndw () &&
navMode then
if StringIsBlank (navE) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (3)
Return
else
endIf
EndScript

Script downP ()
if isMainWndw () &&
navMode then
if StringIsBlank (navSE) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (4) Return
else
endIf
EndScript

Script downA ()
if isMainWndw () &&
navMode then
if StringIsBlank (navS) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (5)
Return
else
endIf
EndScript

Script endK ()
if isMainWndw () &&
navMode then
if StringIsBlank (navSW) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (6)
Return
else
endIf
EndScript

Script leftA ()
if isMainWndw () &&
navMode then
if StringIsBlank (navW) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (7)
Return
else
endIf
EndScript

Script homeK ()
if isMainWndw () &&
navMode then
if StringIsBlank (navNW) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (8)
Return else
endIf
EndScript

Script np5 ()
if isMainWndw () &&
navMode then
if StringIsBlank (navU) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (9)
Return
else
endIf
EndScript

Script np5ctrl ()
if isMainWndw () &&
navMode then
if StringIsBlank (navD) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
navType (10)
Return
else
endIf
EndScript

Function refreshBuffers ()
if (msgBfrRefresh  == 1) ||
(msgBfrRefresh  == 3) then
let msgr5 = msgr4
let msgr4 = msgr3
let msgr3 = msgr2
let msgr2 = bfrbt
let bfrBt = ""
endIf
if (msgBfrRefresh  == 2) ||
(msgBfrRefresh  == 3) then
let msg5 = msg4
let msg4 = msg3
let msg3 = msg2
let msg2 = bfrtb
let bfrTb = ""
endIf
EndFunction

Function clearLine ()
if (GetWindowTypeCode (GetFocus ()) == wt_edit) then
var
string wt
let wt = GetLine ()
if (!StringIsBlank (wt)) then
JAWSHome ()
SelectToEndOfLine ()
{delete}
endIf
endIf
EndFunction

Void Function navType (int kvl)
clearLine ()
TypeString (getNavKvl (kvl, ""))
EnterKey ()
refreshBuffers ()
EndFunction

globals
string ndr

Script ResetNav ()
if isMainWndw () then
IniRemoveSection (navVs, ini)
getNavVs ()
Delay (1)
pathDir (navN, navS)
Delay (1)
pathDir (navNE, navSW)
Delay (1)
pathDir (navE, navW)
Delay (1)
pathDir (navSE, navNW)
Delay (1)
pathDir (navS, navN)
Delay (1)
pathDir (navSW, navNE)
Delay (1)
pathDir (navW, navE)
Delay (1)
pathDir (navNW, navSE)
Delay (1)
pathDir (navU, navD)
Delay (1)
pathDir (navD, navU)
Delay (1)
Say ("the quick navigation values have been reset", 0)
endIf
EndScript

Function integrateNav ()
Pause ()
Delay (5)
focusChangedValues (g_FocusWindow)
if isMainWndw () then
Delay (1)
pathDir (navN, navS)
Delay (1)
pathDir (navNE, navSW)
Delay (1)
pathDir (navE, navW)
Delay (1)
pathDir (navSE, navNW)
Delay (1)
pathDir (navS, navN)
Delay (1)
pathDir (navSW, navNE)
Delay (1)
pathDir (navW, navE)
Delay (1)
pathDir (navNW, navSE)
Delay (1)
pathDir (navU, navD)
Delay (1)
pathDir (navD, navU)
Delay (1)
endIf
EndFunction

Function pathDir (string p1, string p2)
if StringIsBlank (p1) then
let p1 = " "
endIf
if StringIsBlank (p2) then
let p2 = " "
endIf
var
string tc
let tc = (commandChar + "pathdir {" +
p1 + "} {" +
p2 + "}")
clearLine ()
TypeString (tc)
let passSp = 1
EnterKey ()
Pause ()
let passSp = 0
EndFunction

Script changeN ()
let ndr = "North"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navN", navSub, ini)
getNavVs ()
pathDir (" ", navS)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navN", navSub, ini)
getNavVs ()
pathDir (navSub, navS)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeNE ()
let ndr = "North East"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navNE", navSub, ini)
getNavVs ()
pathDir (" ", navSW)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0) Return
endIf
IniWriteString (navVs, "navNE", navSub, ini)
getNavVs ()
pathDir (navSub, navSW)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeE ()
let ndr = "East"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navE", navSub, ini)
getNavVs ()
pathDir (" ", navW)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navE", navSub, ini)
getNavVs ()
pathDir (navSub, navW)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeSE ()
let ndr = "South East"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navSE", navSub, ini)
getNavVs ()
pathDir (" ", navNW)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navSE", navSub, ini)
getNavVs ()
pathDir (navSub, navNW)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeS ()
let ndr = "South"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navS", navSub, ini)
getNavVs ()
pathDir (" ", navN)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navS", navSub, ini)
getNavVs ()
pathDir (navSub, navN)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeSW ()
let ndr = "South West"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navSW", navSub, ini)
getNavVs ()
pathDir (" ", navNE)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navSW", navSub, ini)
getNavVs ()
pathDir (navSub, navNE)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeW ()
let ndr = "West"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navW", navSub, ini)
getNavVs ()
pathDir (" ", navE)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navW", navSub, ini)
getNavVs ()
pathDir (navSub, navE)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeNW ()
let ndr = "North West"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navNW", navSub, ini)
getNavVs ()
pathDir (" ", navSE)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navNW", navSub, ini)
getNavVs ()
pathDir (navSub, navSE)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeU ()
let ndr = "Up"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navU", navSub, ini)
getNavVs ()
pathDir (" ", navD)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navU", navSub, ini)
getNavVs ()
pathDir (navSub, navD)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script changeD ()
let ndr = "Down"
var
string navSub,
string navDir
let navDir = ("Substitute for " + ndr)
if InputBox (changeNav, navDir, navSub) then
if StringIsBlank (navSub) then
IniWriteString (navVs, "navD", navSub, ini)
getNavVs ()
pathDir (" ", navU)
Say ("the value for ", 0)
Say (ndr, 0)
Say ("has been cleared", 0)
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (navVs, "navD", navSub, ini)
getNavVs ()
pathDir (navSub, navU)
Say (navSub, 0)
Say ("has been substituted for the quick navigation key: ", 0)
Say (ndr, 0)
endIf
EndScript

Script macEscK ()
if (!escKvl) then
let escKvl = 1
IniWriteInteger (macVs, "escKvl", escKvl, ini)
Say ("auto retrace active. ", 0)
Say ("This feature works in conjunction with the auto map feature, and will give you the ability to ", 0)
Say ("use the escape key to automatically retrace your steps. ", 0)
Say ("just make sure auto mapping is enabled beforehand. ", 0)
Say ("To use the escape key as a macro instead, just press Alt+Shift+Escape once more", 0)

elIf escKvl then
let escKvl = 0
IniWriteInteger (macVs, "escKvl", escKvl, ini)

let ndr = "The Escape Key"
var
string navSub,
string navDir
let navDir = ("Type the macro for " + ndr + ". " +
"To reactivate the quick escape feature, " +
"just press Alt+Shift+Escape once again after closing this box. ")
if InputBox (changeMac, navDir, navSub) then
if (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (macVs, "mEscK", navSub, ini)
getNavVs ()
if StringIsBlank (navSub) then
Say ("the macro has been cleared", 0)
Return
endIf
Say (navSub, 0)
Say ("has been set as the macro for ", 0)
Say (ndr, 0)
endIf

endIf
EndScript

Script macTabK ()
let ndr = "The Tab Key"
var
string navSub,
string navDir
let navDir = ("Type the macro for " + ndr)
if InputBox (changeMac, navDir, navSub) then
if (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (macVs, "mTabK", navSub, ini)
getNavVs ()
if StringIsBlank (navSub) then
Say ("the macro has been cleared", 0)
Return
endIf
Say (navSub, 0)
Say ("has been set as the macro for ", 0)
Say (ndr, 0)
endIf
EndScript

Script macInsK ()
let ndr = "The Insert Key"
var
string navSub,
string navDir
let navDir = ("Type the macro for " + ndr)
 if InputBox (changeMac, navDir, navSub) then
if (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (macVs, "mInsK", navSub, ini)
getNavVs ()
if StringIsBlank (navSub) then
Say ("the macro has been cleared", 0)
Return
endIf
Say (navSub, 0)
Say ("has been set as the macro for ", 0)
Say (ndr, 0)
endIf
EndScript

Script mEscK ()
if UserBufferIsActive () then
UserBufferDeactivate ()
Say ("Edit", 0, false)

elIf mBar > 0 then
let mBar = 0
Say ("Leaving menus, edit", 0, false)

else

if isMainWndw () &&
(!StringIsBlank (mEscK)) then

if escKvl then
if ampRetrace () then
Return
endIf
endIf

if (!StringIsBlank (mEscK)) then
navType (11)
Return
endIf
endIf

endIf
TypeCurrentScriptKey ()
EndScript

Script mTabK ()
if isMainWndw () &&
(!StringIsBlank (mTabK)) then
navType (12)
Return
endIf
var string s, int i
if isMessageWin &&
!MenusActive () &&
!IsVirtualPCCursor () then
let s = GetWindowTextEx (GetFocus (), false, false)
let i = StringLength (s)
endIf
TabKey ()
if isMessageWin &&
!StringIsBlank (s) then
Pause ()
var int n
let n = StringLength (GetWindowTextEx (GetFocus (), false, false))
if n == i then
Return
endIf
var string r
if StringContains (s, " ") then
let r = StringSegment (s, " ", -1)
let s = stringChopRight (s, StringLength (r))
if i < n then
let r = r + stringChopLeft (GetWindowTextEx (GetFocus (), false, false), StringLength (s))
else
Say ("undo", 0, false)
endIf
else
let r = GetWindowTextEx (GetFocus (), false, false)
endIf
Say (r, 0, false)
endIf
EndScript

Script mInsK ()
if quickNav then
let quickNav = false
Say ("quick nav disabled", 0)
Return
endIf

if isMainWndw () &&
(!StringIsBlank (mInsK)) then
navType (13)
Return
endIf
TypeCurrentScriptKey ()
EndScript

Script changeForwardBfrLen ()
var
string tmpf,
int fvl,
string fmsg
let fmsg = ("The Forward Message Buffer length is currently set to " +
IntToString (fbfrLen) + " characters. " +
"Type the number you want to set as the forward message buffer length, " +
"or press escape to keep the current setting")
if InputBox (fmsg, "Forward Message Buffer Length", tmpf) then
let fvl = StringToInt (tmpf)
if (fvl < 500) then
Say ("The length cannot be less than 500", 0)
Return
endIf
IniWriteInteger ("MsgBfr", "fbfrLen", fvl, ini)
let fbfrLen = fvl
Say ("The forward message buffer length has now been set to ", 0)
SayInteger (fvl)
Return
endIf
Say ("Action canceled", 0)
EndScript

Script ChangeReverseBfrLen ()
var
string tmpr,
int rvl,
string rmsg
let rmsg = ("The Reverse Message Buffer length is currently set to " +
IntToString (rbfrLen) + " characters. " +
"Type the number you want to set as the reverse message buffer length, " +
"or press escape to keep the current setting")
 if InputBox (rmsg, "Reverse Message Buffer Length", tmpr) then
let rvl = StringToInt (tmpr)
if (rvl < 500) then
Say ("The length cannot be less than 500", 0)
Return
endIf
IniWriteInteger ("MsgBfr", "rbfrLen", rvl, ini)
let rbfrLen = rvl
Say ("The reverse message buffer length has now been set to ", 0)
SayInteger (rvl)
Return
endIf
Say ("Action canceled", 0)
EndScript

String Function getAmpSection (string rtns)
let rtns = (amp + " " + pfl)
Return rtns
EndFunction

Void Function getAmpValues ()
var
string nvs
let nvs = getAmpSection ("")
let am0 = IniReadString (nvs, "0", "", ini)
let am1 = IniReadString (nvs, "1", "", ini)
let am2 = IniReadString (nvs, "2", "", ini)
let am3 = IniReadString (nvs, "3", "", ini)
let am4 = IniReadString (nvs, "4", "", ini)
let am5 = IniReadString (nvs, "5", "", ini)
let am6 = IniReadString (nvs, "6", "", ini)
let am7 = IniReadString (nvs, "7", "", ini)
let am8 = IniReadString (nvs, "8", "", ini)
let am9 = IniReadString (nvs, "9", "", ini)
let ampCs = IniReadString (amp, "ampCs", ";", ini)
EndFunction

Script ampCaptureNext ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

if ampCapture then
let ampCapture = 0
Say ("Capture next message cancelled", 0)
else
let ampCapture = 1
Say ("The next message will be added to the auto map ignore list", 0)
Say ("press again to cancel", 0)
endIf
EndScript

Script addAmpNew ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string amsg,
string vl
let amsg = ("Type the string that you wish to " +
"use to ignore when auto mapping is active. ")
if InputBox (amsg, "Add Auto Map Ignore String", vl) then
if (StringLength (vl) > 70) then
Say ("The string may not exceed 70 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("The string must contain some visible characters, please try again", 0)
Return
endIf
addAmpString (vl)
endIf
EndScript

Void Function addAmpString (string vl)
var
int ii,
string ist,
string fl,
string blnk,
string dbl
let dbl = ""
let blnk = ""
let vl = ("'" + vl + "'")

let ii = 0
let ist = IntToString (ii)
let fl = IniReadString (getAmpSection (""), ist, "InvalidKey", ini)

While (fl != "InvalidKey")

if (fl == vl) then
let dbl = ist
elIf ((fl == "EmptyString") &&
(StringIsBlank (blnk))) then
let blnk = ist
endIf

let ii = (ii + 1)
let ist = IntToString (ii)
let fl = IniReadString (getAmpSection (""), ist, "InvalidKey", ini)
EndWhile

if (!StringIsBlank (dbl)) then
let ist = dbl
elIf (!StringIsBlank (blnk)) then
let ist = blnk
endIf

if (StringToInt (ist) >= 10) then
Say ("All available slots are taken, no more values may be added. " +
"Press  Alt+Shift+M if you wish to remove any pre-existing strings", 0)
Return
endIf

IniWriteString (getAmpSection (""), ist, vl, ini)
validateIni ()
Say ("Your Auto Mapp ignore string has successfully been added", 0)
EndFunction

String Function getAmpStrings ()
var
int isi,
string iss,
string comp,
string tmp

let comp = ""
let isi = 0
let iss = IntToString (isi)
let tmp = IniReadString (getAmpSection (""), iss, "InvalidKey", ini)

While (tmp != "InvalidKey")

if (tmp != "EmptyString") then
let comp = (comp + iss + " '" + tmp + "',\n")
endIf

let isi = (isi + 1)
let iss = IntToString (isi)
let tmp = IniReadString (getAmpSection (""), iss, "InvalidKey", ini)
 EndWhile

if (!StringIsBlank (comp)) then
let comp = StringTrimTrailingBlanks (comp)
let comp = stringChopRight (comp, 1)
endIf

Return comp
EndFunction

Script viewAmpIgnoreStrings ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string isv,
string msgIs

let isv = getAmpStrings ()
UserBufferClear ()

if StringIsBlank (isv) then

let msgIs = ("There are no Auto Map Ignore Strings currently listed.\n\n"+
"To add a new Auto Map Ignore String, press Alt+Shift+A.\n\n"+
"Press escape to close the window")

else

let msgIs = ("The following Auto Map Ignore Strings are currently listed:\n\n"+
isv + "\n\n"+
"To add a new Auto Map Ignore String, press Alt+Shift+A.\n"+
"To remove an Auto Map Ignore String, press Alt+Shift+M.\n"+
"To capture the next message as an Auto Map Ignore String, press Alt+Shift+C.\n\n"+
"Press escape to close the window")

endIf

UserBufferAddText (msgIs)
UserBufferActivate ()
SayAll ()
EndScript

Script RemAmpString ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string rmsg,
string nm
let rmsg = ("Type the number of the Auto Map Ignore String that " +
"you wish to remove. As seen when pressing Alt+Shift+I")

if InputBox (rmsg, "Remove Auto Map Ignore String", nm) then
let nm = stringStripAllBlanks (nm)

if (IniReadString (getAmpSection (""), nm, "EmptyString", ini) == "EmptyString") then
Say ("There is no interrupt string associated with that slot", 0)
Return
endIf

IniWriteString (getAmpSection (""), nm, "EmptyString", ini)
validateIni ()
Say ("The Auto Map Ignore string has successfully been removed", 0)
endIf
EndScript

Script toggleAmp ()
var
string tc
if isMainWndw () then
clearLine ()
if autoMap then
let autoMap = 0
let tc = (commandChar + "mark off")
TypeString (tc)
PerformScript enterKey()
else
let autoMap = 1
let tc = (commandChar + "mark")
TypeString (tc)
PerformScript enterKey()
endIf

else
Say ("you need to be focused on the main window to use this feature", 0)
endIf
EndScript

Int Function ampIsIgnoreString (string ByRef bf)
if (StringContains (bf, am0) &&
(!StringIsBlank (am0)) &&
(am0 != "EmptyString")) ||
(StringContains (bf, am1) &&
(!StringIsBlank (am1)) &&
(am1 != "EmptyString")) ||
(StringContains (bf, am2) &&
(!StringIsBlank (am2)) &&
(am2 != "EmptyString")) ||
(StringContains (bf, am3) &&
(!StringIsBlank (am3)) &&
(am3 != "EmptyString")) ||
(StringContains (bf, am4) &&
(!StringIsBlank (am4)) &&
(am4 != "EmptyString")) ||
(StringContains (bf, am5) &&
(!StringIsBlank (am5)) &&
(am5 != "EmptyString")) ||
(StringContains (bf, am6) &&
(!StringIsBlank (am6)) &&
(am6 != "EmptyString")) ||
(StringContains (bf, am7) &&
(!StringIsBlank (am7)) &&
(am7 != "EmptyString")) ||
(StringContains (bf, am8) &&
(!StringIsBlank (am8)) &&
(am8 != "EmptyString")) ||
(StringContains (bf, am9) &&
(!StringIsBlank (am9)) &&
(am9 != "EmptyString")) then
Return 1
endIf
Return 0
EndFunction

Void Function ampRcd (string bf, string dr)
var
string rt
if ampIsIgnoreString (bf) then
clearLine ()
let rt = (commandChar + "unpath")
TypeString (rt)
EnterKey ()
Return
endIf

if (!ampIsCorrectDr (dr)) then
Return
endIf

var
int drc,
string drs
let drs = (dr + ampCs)
let drc = StringLength (drs)

if (drs != StringLeft (bRoute, drc)) then
let fRoute = (fRoute + drs)
let drs = (ampReverseDr (dr, "", drnmft) + ampCs)
let bRoute = (drs + bRoute)
Return

else

clearLine ()
let rt = (commandChar + "unpath" + ampCs +
" " + commandChar + "unpath")
TypeString (rt)
EnterKey ()
let bRoute = stringChopLeft (bRoute, drc)
let drs = (ampReverseDr (dr, "", drnmft) + ampCs)
let drc = StringLength (drs)
let fRoute = stringChopRight (fRoute, drc)
Return
endIf
EndFunction

Int Function ampIsCorrectDr (string fdr)
if (fdr == navN) then
elIf (fdr == navNE) then
elIf (fdr == navE) then
elIf (fdr == navSE) then
elIf (fdr == navS) then
elIf (fdr == navSW) then
elIf (fdr == navW) then
elIf (fdr == navNW) then
elIf (fdr == navU) then
elIf (fdr == navD) then
else
Return 0
endIf
Return 1
EndFunction

String Function ampReverseDr (string fdr, string rdr, int drnm)

if (drnm == 1) ||
(!drnm) then

if (fdr == navN) then
let rdr = navS
elIf (fdr == navE) then
let rdr = navW
elIf (fdr == navS) then
let rdr = navN
elIf (fdr == navW) then
let rdr = navE
endIf
endIf

if (drnm == 2) ||
(!drnm) then

if (fdr == navNE) then
let rdr = navSW
elIf (fdr == navSE) then let rdr = navNW
elIf (fdr == navNW) then
let rdr = navSE
elIf (fdr == navSW) then
let rdr = navNE
endIf
endIf

if (drnm == 3) ||
(!drnm) then

if (fdr == navU) then
let rdr = navD
elIf (fdr == navD) then
let rdr = navU
endIf
endIf

Return rdr
EndFunction

Int Function ampCheckCt (int frst, int sec)
if (frst == sec) then
Return 1
else
Return 0
endIf
EndFunction

Script AmpClearRoutes ()
var
string tc
if autoMap then
let fRoute = ""
let bRoute = ""
clearLine ()
let tc = (commandChar + "mark")
TypeString (tc)
PerformScript enterKey()
else
Say ("auto mapping must first be active to clear the maps from memory", 0)
endIf
EndScript

Script ampCopyFRoute ()
if StringIsBlank (fRoute) then
Say ("The forwards track is currently empty", 0)
Return
endIf
CopyToClipboard (fRoute)
Say ("the forward track has been copied", 0)
EndScript

Script ampCopyBRoute ()
if StringIsBlank (bRoute) then
Say ("The backwards track is currently empty", 0)
Return
endIf
CopyToClipboard (bRoute)
Say ("the backward track has been copied", 0)
EndScript

Int Function ampRetrace ()
if (!autoMap) then
Return 0
endIf
clearLine ()
var
string tmp
if loadR then
let tmp = loadF
else
let tmp = bRoute
endIf

if (!ampDel) then
TypeString (tmp)
EnterKey ()
else
var
string gdr,
int cdr,
int ccs,
string trk
let ccs = StringLength (ampCs)
let trk = tmp

While (!StringIsBlank (trk))
let gdr = StringSegment (trk, ampCs, 1)
TypeString (gdr)
EnterKey ()
let cdr = (ccs + StringLength (gdr))
let trk = stringChopLeft (trk, cdr)
Delay (ampDelVl)
EndWhile
endIf
Return 1
EndFunction

String Function getNavSection (string rtns)
let rtns = (nav + " " + pfl)
Return rtns
EndFunction

String Function getMacSection (string rtns)
let rtns = (macV + " " + pfl)
Return rtns
EndFunction

String Function getSpamSection (string rtns)
let rtns = (spam + " " + pfl)
Return rtns
EndFunction

Script toggleSpamFilter ()
var
string dsp
UserBufferClear ()

if (spamF == 3) then
let spamF = 0
let dsp = ("repeated messages will not be suppressed, \n" +
"and spam filtering is off\n")
elIf (spamF == 0) then
let spamF = 1
let dsp = ("Spam filtering is now on, \n" +
"and repeated messages will not be suppressed.\n\n" +
"Leading and Trailing spam filtering is currently set to:\n")
if (spamLt == 1) ||
(spamLt == 3) then
let dsp = (dsp +
"Leading Spam Filtering: On\n")
else
let dsp = (dsp +
"Leading Spam Filtering: Off\n")
endIf
if (spamLt == 2) ||
(spamLt == 3) then
let dsp = (dsp +
"Trailing Spam Filtering: On\n")
else
let dsp = (dsp +
"Trailing Spam Filtering: Off\n")
endIf
elIf (spamF == 1) then
let spamF = 2
let dsp = ("repeated messages will now be suppressed, \n" +
"and spam filtering will also be on\n\n" +
"Leading and Trailing spam filtering is currently set to:\n")
if (spamLt == 1) ||
(spamLt == 3) then
let dsp = (dsp +
"Leading Spam Filtering: On\n")
else
let dsp = (dsp +
"Leading Spam Filtering: Off\n")
endIf
if (spamLt == 2) ||
(spamLt == 3) then
let dsp = (dsp +
"Trailing Spam Filtering: On\n")
else
let dsp = (dsp +
"Trailing Spam Filtering: Off\n")
endIf
elIf (spamF == 2) then
let spamF = 3
let dsp = ("Spam filtering is off, \n" +
"but repeated messages will continue to be suppressed\n")
endIf
IniWriteInteger (getSpamSection (""), "spamF", spamF, ini)

let dsp = (dsp +
"\nPress Control+Shift+Enter to customize the Leading and Trailing filter settings from this window. \n")
let dsp = (dsp +
"Press Alt+Shift+Enter to continue toggling these settings from this window\n\n")
let dsp = (dsp +
"Press escape to save the current settings")

UserBufferAddText (dsp)
if (!UserBufferIsActive ()) then
UserBufferActivate ()
endIf
JAWSTopOfFile ()
SayLine ()
PerformScript SayNextLine()
Say ("virtual cursor", 0)
EndScript

Script toggleSpamLeadTrail ()
if (spamLt == 3) then
let spamLt = 0
Say ("both leading spam filtering and trailing spam filtering, are now off", 0)
elIf (spamLt == 0) then
let spamLt = 1
Say ("leading spam filtering is on, and trailing spam filtering is off", 0)
elIf (spamLt == 1) then
let spamLt = 2
Say ("trailing spam filtering is on, and leading spam filtering is off", 0)
elIf (spamLt == 2) then
let spamLt = 3
Say ("both leading spam filtering and trailing spam filtering, are now active", 0)
endIf
IniWriteInteger (getSpamSection (""), "spamLt", spamLt, ini)

if UserBufferIsActive () then
var
string dsp
UserBufferClear ()

if (spamF == 3) then
let dsp = ("Spam filtering is off, \n" +
"but repeated messages will continue to be suppressed\n")
elIf (spamF == 0) then
let dsp = ("repeated messages will not be suppressed, \n" +
"and spam filtering is off\n")
elIf (spamF == 1) then
let dsp = ("Spam filtering is now on, \n" +
"and repeated messages will not be suppressed.\n\n" +
"Leading and Trailing spam filtering is currently set to:\n")
if (spamLt == 1) ||
(spamLt == 3) then
let dsp = (dsp +
"Leading Spam Filtering: On\n")
else
let dsp = (dsp +
"Leading Spam Filtering: Off\n")
endIf
if (spamLt == 2) ||
(spamLt == 3) then
let dsp = (dsp +
"Trailing Spam Filtering: On\n")
else
let dsp = (dsp +
"Trailing Spam Filtering: Off\n")
endIf
elIf (spamF == 2) then
let dsp = ("repeated messages will now be suppressed, \n" +
"and spam filtering will also be on\n\n" +
"Leading and Trailing spam filtering is currently set to:\n")
if (spamLt == 1) ||
(spamLt == 3) then
let dsp = (dsp +
"Leading Spam Filtering: On\n")
else
let dsp = (dsp +
"Leading Spam Filtering: Off\n")
endIf
if (spamLt == 2) ||
(spamLt == 3) then
let dsp = (dsp +
"Trailing Spam Filtering: On\n")
else
let dsp = (dsp +
"Trailing Spam Filtering: Off\n")
endIf
endIf

let dsp = (dsp +
"\nPress Control+Shift+Enter to customize the Leading and Trailing filter settings from this window. \n")
let dsp = (dsp +
"Press Alt+Shift+Enter to continue toggling these settings from this window\n\n")
let dsp = (dsp +
"Press escape to save the current settings")

UserBufferAddText (dsp)
if (!UserBufferIsActive ()) then
UserBufferActivate ()
endIf
JAWSTopOfFile ()
SayLine ()
PerformScript SayNextLine()
endIf
EndScript

Script toggleSpamRefresh ()
if spamRefresh then
let spamRefresh = 0
Say ("when the enter key is pressed, the spam filter will automatically be refreshed", 0)
else
let spamRefresh = 1
Say ("the spam filter will not be refreshed when the enter key is pressed", 0)
endIf
IniWriteInteger (getSpamSection (""), "spamRefresh", spamRefresh, ini)
EndScript

Void Function spamF (string msg, string lst)
if StringIsBlank (msg) ||
(msg == lst) then
Return
endIf

let spamP = msg

var
int sct,
int mct,
string strm,
string strp

if (spamLt == 1) ||
(spamLt == 3) then
let mct = StringLength (msg)
let sct = 1
While (mct >= sct)
let strp = StringLeft (lst, sct)
let strm = StringLeft (msg, sct)
if (strp == strm) then
let sct = (sct + 1)
else
let mct = (sct - 1)
let msg = stringChopLeft (msg, mct)
endIf
EndWhile
endIf

if (spamLt == 2) ||
(spamLt == 3) then
let mct = StringLength (msg)
let sct = 1
While (mct >= sct)
let strp = StringRight (lst, sct)
let strm = StringRight (msg, sct)
if (strp == strm) then
let sct = (sct + 1)
else
let mct = (sct - 1)
let msg = stringChopRight (msg, mct)
endIf
EndWhile
endIf

if StringIsBlank (msg) then
Return
else Say (msg, 0)
Return
endIf
EndFunction

Void Function spamCycleSv (string ByRef nmsg, int switch)
if (switch == 1) then
let sp9 = sp8
let sp8 = sp7
let sp7 = sp6
let sp6 = sp5
let sp5 = sp4
let sp4 = sp3
let sp3 = sp2
let sp2 = sp1
let sp1 = sp0
let sp0 = nmsg

elIf (switch == 2) then
let sp9 = ""
let sp8 = ""
let sp7 = ""
let sp6 = ""
let sp5 = ""
let sp4 = ""
let sp3 = ""
let sp2 = ""
let sp1 = ""
let sp0 = ""

else
let sv9 = sv8
let sv8 = sv7
let sv7 = sv6
let sv6 = sv5
let sv5 = sv4
let sv4 = sv3
let sv3 = sv2
let sv2 = sv1
let sv1 = sv0
let sv0 = nmsg
endIf
EndFunction

Int Function spamSuppress (string nmsg)
var
int vrslt,
int vlen

if (nmsg == sp0) then
let vlen = StringLength (sp0)
let vrslt = 1
elIf (nmsg == sp1) then
let vlen = StringLength (sp1)
let vrslt = 1
elIf (nmsg == sp2) then
let vlen = StringLength (sp2)
let vrslt = 1
elIf (nmsg == sp3) then
let vlen = StringLength (sp3)
let vrslt = 1
elIf (nmsg == sp4) then
let vlen = StringLength (sp4)
let vrslt = 1
elIf (nmsg == sp5) then
let vlen = StringLength (sp5)
let vrslt = 1
elIf (nmsg == sp6) then
let vlen = StringLength (sp6)
let vrslt = 1
elIf (nmsg == sp7) then
let vlen = StringLength (sp7)
let vrslt = 1
elIf (nmsg == sp8) then
let vlen = StringLength (sp8)
let vrslt = 1
elIf (nmsg == sp9) then
let vlen = StringLength (sp9)
let vrslt = 1
else
let vrslt = 0
endIf

if vrslt then
if (StringLength (nmsg) != vlen) then
let vrslt = 0
endIf
endIf

if (nmsg == sv0) ||
(nmsg == sv1) ||
(nmsg == sv2) ||
(nmsg == sv3) ||
(nmsg == sv4) ||
(nmsg == sv5) ||
(nmsg == sv6) ||
(nmsg == sv7) ||
(nmsg == sv8) ||
(nmsg == sv9) then
spamCycleSv (nmsg, 1)
endIf

spamCycleSv (nmsg, 0)

Return vrslt
EndFunction

Int Function isCompString (string bfr)
var int ret
if (StringContains (bfr, comp1a) &&
(!StringIsBlank (comp1a)) &&
(!StringIsBlank (comp1b)) &&
StringContains (bfr, comp1b)) then
let ret = isCompAct (ag0, comp1a, comp1b, bfr)
if trimToggle &&
(trimCh == 0) then
let ret = 2
endIf
 Return ret

elIf (StringContains (bfr, comp2a) &&
(!StringIsBlank (comp2a)) &&
(!StringIsBlank (comp2b)) &&
StringContains (bfr, comp2b)) then
let ret = isCompAct (ag1, comp2a, comp2b, bfr)
if trimToggle &&
(trimCh == 1) then
let ret = 2
endIf
Return ret

elIf (StringContains (bfr, comp3a) &&
(!StringIsBlank (comp3a)) &&
(!StringIsBlank (comp3b)) &&
StringContains (bfr, comp3b)) then
let ret = isCompAct (ag2, comp3a, comp3b, bfr)
if trimToggle &&
(trimCh == 2) then
let ret = 2
endIf
Return ret

elIf (StringContains (bfr, comp4a) &&
(!StringIsBlank (comp4a)) &&
(!StringIsBlank (comp4b)) &&
StringContains (bfr, comp4b)) then
let ret = isCompAct (ag3, comp4a, comp4b, bfr)
if trimToggle &&
(trimCh == 3) then
let ret = 2
endIf
Return ret

elIf (StringContains (bfr, comp5a) &&
(!StringIsBlank (comp5a)) &&
(!StringIsBlank (comp5b)) &&
StringContains (bfr, comp5b)) then
let ret = isCompAct (ag4, comp5a, comp5b, bfr)
if trimToggle &&
(trimCh == 4) then
let ret = 2
endIf
Return ret
else
Return 0
endIf
EndFunction

String Function compSplit (string knm, string half, string sect, int isAct)
var
string x,
string y,
int c,
string act

if not isAct then
let x = IniReadString (sect, knm, "", ini)
else
let act = IniReadString (sect, "a" + knm, "", ini)
Return act
endIf

if StringLeft (x, 1) == "'" then
let x = stringChopLeft (x, 1)
endIf
if StringRight (x, 1) == "'" then
let x = stringChopRight (x, 1)
endIf
let y = StringSegment (x, "|@|", 1)

if (half == "a") then
Return y
elIf (half == "b") then
let c = (StringLength (y) + 3)
let x = stringChopLeft (x, c)
Return x
endIf
EndFunction

Void Function getCompValues ()
var
string nvs
;***
let nvs = getCompSection ("")

let comp1a = compSplit ("0", "a", nvs, 0)
let comp1b = compSplit ("0", "b", nvs, 0)
let ag0 = compSplit ("0", "", nvs, 1)

let comp2a = compSplit ("1", "a", nvs, 0)
let comp2b = compSplit ("1", "b", nvs, 0)
let ag1 = compSplit ("1", "", nvs, 1)

let comp3a = compSplit ("2", "a", nvs, 0)
let comp3b = compSplit ("2", "b", nvs, 0)
let ag2 = compSplit ("2", "", nvs, 1)

let comp4a = compSplit ("3", "a", nvs, 0)
let comp4b = compSplit ("3", "b", nvs, 0)
let ag3 = compSplit ("3", "", nvs, 1)

let comp5a = compSplit ("4", "a", nvs, 0)
let comp5b = compSplit ("4", "b", nvs, 0)
let ag4 = compSplit ("4", "", nvs, 1)

EndFunction

String Function getCompSection (string rtns)
let rtns = (compStr + " " + pfl)
Return rtns
EndFunction

Script addCompNew ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string amsg,
string vl,
string vl2

let amsg = ("Type the first string that you wish to " +
"use to compare. ")

if InputBox (amsg, "Add First Ignore Comparison Value", vl) then
if (StringLength (vl) > 33) then
Say ("The string may not exceed 33 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("The string must contain some visible characters, please try again", 0)
Return
endIf

let vl2 = (vl + "|@|")

let amsg = ("Type the second string that you wish to " +
"use to compare. ")

if InputBox (amsg, "Add Second Ignore Comparison Value", vl) then
if (StringLength (vl) > 33) then
Say ("The string may not exceed 33 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("The string must contain some visible characters, please try again", 0)
Return
endIf

let vl2 = (vl2 + vl)

let amsg = "Would you like an action to automatically be performed when a match is found? " +
"If so, type the action you would like to be performed. Otherwise, just press enter to continue without specifying an action."
var string act

if InputBox (amsg, "Perform Action", act) then
if (StringLength (act) > 70) then
Say ("The string may not exceed 70 characters in length, please try again", 0)
Return
endIf
endIf

addCompString (vl2, act)
endIf
endIf
EndScript

Void Function addCompString (string vl, string act)
var
int ii,
string ist,
string fl,
string blnk,
string dbl
let dbl = ""
let blnk = ""
let vl = ("'" + vl + "'")

let ii = 0
let ist = IntToString (ii)
let fl = IniReadString (getCompSection (""), ist, "InvalidKey", ini)

While (fl != "InvalidKey")

if (fl == vl) then
let dbl = ist
elIf ((fl == "EmptyString") &&
(StringIsBlank (blnk))) then
let blnk = ist
endIf

let ii = (ii + 1)
let ist = IntToString (ii)
let fl = IniReadString (getCompSection (""), ist, "InvalidKey", ini)
EndWhile

if (!StringIsBlank (dbl)) then
let ist = dbl
elIf (!StringIsBlank (blnk)) then
let ist = blnk
endIf

if (StringToInt (ist) >= 5) then
Say ("All available slots are taken, no more values may be added. " +
"Press  Alt+Control+F3 to remove any pre-existing strings", 0)
Return
endIf

IniWriteString (getCompSection (""), ist, vl, ini)
IniWriteString (getCompSection (""), "a" + ist, act, ini)

validateIni ()
Say ("Your ignore comparison string has successfully been added", 0)
EndFunction

Script RemCompString ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string rmsg,
string nm
let rmsg = ("Type the number of the Ignore Comparison String that " +
"you wish to remove. As seen when pressing Alt+Control+F1")

if InputBox (rmsg, "Remove Ignore Comparison String", nm) then
let nm = stringStripAllBlanks (nm)

if (IniReadString (getCompSection (""), nm, "EmptyString", ini) == "EmptyString") then
Say ("There are no comparison strings associated with that slot", 0)
Return
endIf

IniWriteString (getCompSection (""), nm, "EmptyString", ini)
validateIni ()
Say ("The Ignore Comparison String has successfully been removed", 0)
endIf
EndScript

Script viewCompIgnoreStrings ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string isv,
string msgIs

let isv = getCompStrings ()
UserBufferClear ()

if StringIsBlank (isv) then

let msgIs = ("There are no Ignore Comparison Strings currently listed.\n\n"+
"To add a new Ignore Comparison String, press Alt+Control+F2.\n\n"+
"Press escape to close the window")

else

let msgIs = ("The following Ignore Comparison Strings are currently listed:\n\n"+
isv + "\n\n"+
"Please note: The symbols |@| indicate a comparison marker. \n" +
"The strings before and after the marker, will be compared at runtime. \n\n" +
"To add a new Ignore Comparison String, press Alt+Control+F2.\n"+
"To remove an Ignore Comparison String, press Alt+Control+F3.\n\n"+
"Press escape to close the window")

endIf

UserBufferAddText (msgIs)
UserBufferActivate ()
SayAll ()
EndScript

String Function getCompStrings ()
var
int isi,
string iss,
string comp,
string tmp

let comp = ""
let isi = 0
let iss = IntToString (isi)
let tmp = IniReadString (getCompSection (""), iss, "InvalidKey", ini)

While (tmp != "InvalidKey")

if (tmp != "EmptyString") then
let comp = (comp + iss + " '" + tmp + "',\n")
endIf

let isi = (isi + 1)
let iss = IntToString (isi)
let tmp = IniReadString (getCompSection (""), iss, "InvalidKey", ini)
EndWhile

if (!StringIsBlank (comp)) then
let comp = StringTrimTrailingBlanks (comp)
let comp = stringChopRight (comp, 1)
endIf

Return comp
EndFunction

Void Function getCompTValues ()
var
string nvs let nvs = getCompTSection ("")
 let compT1a = compSplit ("0", "a", nvs, 0)
let compT1b = compSplit ("0", "b", nvs, 0)
let compT2a = compSplit ("1", "a", nvs, 0)
let compT2b = compSplit ("1", "b", nvs, 0)
let compT3a = compSplit ("2", "a", nvs, 0)
let compT3b = compSplit ("2", "b", nvs, 0)
let compT4a = compSplit ("3", "a", nvs, 0)
let compT4b = compSplit ("3", "b", nvs, 0)
let compT5a = compSplit ("4", "a", nvs, 0)
let compT5b = compSplit ("4", "b", nvs, 0)
EndFunction

String Function getCompTSection (string rtns)
let rtns = (compStrt + " " + pfl)
Return rtns
EndFunction

Script addCompTNew ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string amsg,
string vl,
string vl2

let amsg = ("Type the first string that you wish to " +
"use to compare. ")

if InputBox (amsg, "Add First Interrupt Comparison Value", vl) then
if (StringLength (vl) > 33) then
Say ("The string may not exceed 33 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("The string must contain some visible characters, please try again", 0)
Return
endIf

let vl2 = (vl + "|@|")

let amsg = ("Type the second string that you wish to " +
"use to compare. ")

if InputBox (amsg, "Add Second Interrupt Comparison Value", vl) then
if (StringLength (vl) > 33) then
Say ("The string may not exceed 33 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("The string must contain some visible characters, please try again", 0)
Return
endIf

let vl2 = (vl2 + vl)
addCompTString (vl2)
endIf
endIf
EndScript

Void Function addCompTString (string vl)
var
int ii,
string ist,
string fl,
string blnk,
string dbl
let dbl = ""
let blnk = ""
let vl = ("'" + vl + "'")

let ii = 0
let ist = IntToString (ii)
let fl = IniReadString (getCompTSection (""), ist, "InvalidKey", ini)

While (fl != "InvalidKey")

if (fl == vl) then
let dbl = ist
elIf ((fl == "EmptyString") &&
(StringIsBlank (blnk))) then
let blnk = ist
endIf

let ii = (ii + 1)
let ist = IntToString (ii)
let fl = IniReadString (getCompTSection (""), ist, "InvalidKey", ini) EndWhile

if (!StringIsBlank (dbl)) then
let ist = dbl
elIf (!StringIsBlank (blnk)) then
let ist = blnk
endIf

if (StringToInt (ist) >= 5) then
Say ("All available slots are taken, no more values may be added. " +
"Press  Alt+Shift+F3 to remove any pre-existing strings", 0)
Return
endIf

IniWriteString (getCompTSection (""), ist, vl, ini)
validateIni ()
Say ("Your Interrupt comparison string has successfully been added", 0)
EndFunction

Script RemCompTString ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string rmsg,
string nm
let rmsg = ("Type the number of the Interrupt Comparison String that " +
"you wish to remove. As seen when pressing Alt+Shift+F1")

if InputBox (rmsg, "Remove Interrupt Comparison String", nm) then
let nm = stringStripAllBlanks (nm)

if (IniReadString (getCompTSection (""), nm, "EmptyString", ini) == "EmptyString") then
Say ("There are no comparison strings associated with that slot", 0)
Return
endIf

IniWriteString (getCompTSection (""), nm, "EmptyString", ini)
validateIni ()
Say ("The Interrupt Comparison String has successfully been removed", 0)
endIf
EndScript

Script viewCompTStrings ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string isv,
string msgIs

let isv = getCompTStrings ()
UserBufferClear ()

if StringIsBlank (isv) then

let msgIs = ("There are no Interrupt Comparison Strings currently listed.\n\n"+
"To add a new Interrupt Comparison String, press Alt+Shift+F2.\n\n"+
"Press escape to close the window")

else

let msgIs = ("The following Interrupt Comparison Strings are currently listed:\n\n"+
isv + "\n\n"+
"Please note: The symbols |@| indicate a comparison marker. \n" +
"The strings before and after the marker, will be compared at runtime. \n\n" +
"To add a new Interrupt Comparison String, press Alt+Shift+F2.\n"+
"To remove an Interrupt Comparison String, press Alt+Shift+F3.\n\n"+
"Press escape to close the window")

endIf

UserBufferAddText (msgIs)
UserBufferActivate ()
SayAll ()
EndScript

String Function getCompTStrings ()
var
int isi,
string iss,
string comp,
string tmp

let comp = ""
let isi = 0
let iss = IntToString (isi)
let tmp = IniReadString (getCompTSection (""), iss, "InvalidKey", ini)

While (tmp != "InvalidKey")

if (tmp != "EmptyString") then
let comp = (comp + iss + " '" + tmp + "',\n")
endIf

let isi = (isi + 1)
let iss = IntToString (isi)
let tmp = IniReadString (getCompTSection (""), iss, "InvalidKey", ini)
EndWhile

if (!StringIsBlank (comp)) then
let comp = StringTrimTrailingBlanks (comp)
let comp = stringChopRight (comp, 1)
endIf

Return comp
EndFunction

Int Function isCompTString (string bfr)

if (StringContains (bfr, compT1a) &&
(!StringIsBlank (compT1a)) &&
(!StringIsBlank (compT1b)) &&
StringContains (bfr, compT1b)) then

Return 1

elIf (StringContains (bfr, compT2a) &&
(!StringIsBlank (compT2a)) &&
(!StringIsBlank (compT2b)) &&
StringContains (bfr, compT2b)) then

Return 1

elIf (StringContains (bfr, compT3a) &&
(!StringIsBlank (compT3a)) &&
(!StringIsBlank (compT3b)) &&
StringContains (bfr, compT3b)) then

Return 1

elIf (StringContains (bfr, compT4a) &&
(!StringIsBlank (compT4a)) &&
(!StringIsBlank (compT4b)) &&
StringContains (bfr, compT4b)) then

Return 1

elIf (StringContains (bfr, compT5a) &&
(!StringIsBlank (compT5a)) &&
(!StringIsBlank (compT5b)) &&
StringContains (bfr, compT5b)) then

Return 1

else

Return 0

endIf
EndFunction

String Function getTrimSection (string rtns)
let rtns = (trimLt + " " + pfl)
Return rtns
EndFunction

Script addTrimLNew ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string amsg,
string vl,
int vl2

let amsg = ("Type the number of characters that you want incomming messages to be trimmed by. " +
"Please note: Only messages that match those specified using Control+T, will be trimmed by this many characters. " +
"The current Leading Trim Value is set to " +
IntToString (trimL) + ". " +
"Just press escape to keep the current setting.")

if InputBox (amsg, "Leading Trim Value", vl) then
if (StringLength (vl) > 33) then
Say ("The value may not exceed 33 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("A numerical value must be entered, please try again", 0)
Return
endIf

let vl = stringStripAllBlanks (vl)
let vl2 = StringToInt (vl)
let trimL = vl2
IniWriteInteger (getTrimSection (""), "trimL", trimL, ini)

let amsg = ("Type the number of characters that you want incomming messages to be trimmed by. " +
"Please note: Only messages that match those specified using Control+T, will be trimmed by this many characters. " +
"The current Trailing Trim Value is set to " +
IntToString (trimT) + ". " +
"Just press escape to keep the current setting.")

if InputBox (amsg, "Trailing Trim Value", vl) then
if (StringLength (vl) > 33) then
Say ("The value may not exceed 33 characters in length, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("A numerical value must be entered, please try again", 0)
Return
endIf

let vl = stringStripAllBlanks (vl)
let vl2 = StringToInt (vl)
let trimT = vl2
IniWriteInteger (getTrimSection (""), "trimT", trimT, ini)

Say ("success", 0)
endIf
endIf
EndScript

Script addTrimCh ()
if UserBufferIsActive () then
UserBufferDeactivate ()
endIf

var
string amsg,
string vl,
int vl2

let amsg = ("Type the number associated with the Ignore Comparison String that " +
"you wish to trigger the trim leading/trailing string functions. " +
"You can find this number by pressing Alt+Control+F1. ")

if InputBox (amsg, "Trigger Value", vl) then
if (StringLength (vl) > 1) then
Say ("The numerical value can only be between 0 and 4, please try again", 0)
Return
elIf StringIsBlank (vl) then
Say ("A numerical value between 0 and 4 must be entered, please try again", 0)
Return
endIf

let vl = stringStripAllBlanks (vl)
let vl2 = StringToInt (vl)
let trimCh = vl2
IniWriteInteger (getTrimSection (""), "trimCh", trimCh, ini)

Say ("success", 0)
endIf
EndScript

String Function trimString (string bfr, int tt, int ln, int tn)
var
string b
let b = bfr
if (tt == 1) ||
(tt == 3) then
let b = stringChopLeft (b, trimL)
endIf
if (tt == 2) ||
(tt == 3) then
let b = stringChopRight (b, trimT)
endIf
Return b
EndFunction

Script trimToggle ()
if (trimToggle == 3) then
let trimToggle = 0
Say ("automatic trimming is off", 0)
elIf (trimToggle == 0) then
let trimToggle = 1
Say ("only leading strings will be trimmed", 0)
elIf (trimToggle == 1) then
let trimToggle = 2
Say ("only trailing strings will be trimmed", 0)
elIf (trimToggle == 2) then
let trimToggle = 3
Say ("both ends of the string will be trimmed", 0)
endIf
IniWriteInteger (getTrimSection (""), "trimToggle", trimToggle, ini)
EndScript

String Function getWKeysSection (string rtns)
let rtns = (wKeys + " " + pfl)
Return rtns
EndFunction

Int Function addNewConnection ()
var
string addr
let addr = IniReadString ("JMC", "addr", "InvalidKey", "JMC.ini")

if (addr == "InvalidKey") then
Return 0
endIf

var
string cnt
let cnt = (commandChar +
"connect " +
addr + " " +
IniReadString ("JMC", "prt", "23", "JMC.ini"))
TypeString (cnt)
IniRemoveSection ("JMC", "JMC.ini")
PerformScript enterKey()
Return 1
EndFunction

Script newConnect ()
if isMainWndw () then
clearLine ()
if (!addNewConnection ()) then
var
string gln
let gln = IniReadString (def, "lc", "knf", ini)
if (gln == "knf") then
Say ("a previous connection was not detected", 0)
Return
endIf
let gln = (commandChar + gln)
TypeString (gln)
EnterKey ()
endIf
endIf
EndScript

Script changeWN ()
let ndr = "Shift+Windows+UpArrow"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wUp", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wUp", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWNE ()
let ndr = "Shift+Windows+PageUp"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wPUp", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wPUp", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWE ()
let ndr = "Shift+Windows+RightArrow"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wRight", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wRight", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWSE ()
let ndr = "Shift+Windows+PageDown"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wPDown", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wPDown", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWS ()
let ndr = "Shift+Windows+DownArrow"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wDown", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return endIf
IniWriteString (getWKeysSection (""), "wDown", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWSW ()
let ndr = "Shift+Windows+End"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wEnd", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wEnd", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWW ()
let ndr = "Shift+Windows+LeftArrow"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wLeft", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wLeft", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWNW ()
let ndr = "Shift+Windows+Home"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wHome", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wHome", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWNP5 ()
let ndr = "Shift+Windows+NumPad5"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wNP5", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wNP5", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWNPSlash ()
let ndr = "Shift+Windows+Slash"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wNPSlash", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wNPSlash", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWNPStar ()
let ndr = "Shift+Windows+Star"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wNPStar", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wNPStar", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Script changeWNPIns ()
let ndr = "Shift+Windows+Insert"
var
string navSub,
string navDir
let navDir = ("Type the command you wish to assign to the " + ndr +
" hotkey.")
if InputBox ("Customize hotkey", navDir, navSub) then
if StringIsBlank (navSub) then
Say ("the key assignment has been cleared", 0)
IniWriteString (getWKeysSection (""), "wNPIns", navSub, ini)
getNavVs ()
Return
elIf (StringLength (navSub) > 70) then
Say ("String must not exceed 70 characters in length", 0)
Return
endIf
IniWriteString (getWKeysSection (""), "wNPIns", navSub, ini)
getNavVs ()
Say (navSub, 0)
Say ("has been set for the ", 0)
Say (ndr, 0)
Say ("hotkey", 0)
endIf
EndScript

Void Function getWKeys (string sect)
let wUp = IniReadString (sect, "wUp", "", ini)
let wPUp = IniReadString (sect, "wPUp", "", ini)
let wRight = IniReadString (sect, "wRight", "", ini)
let wPDown = IniReadString (sect, "wPDown", "", ini)
let wDown = IniReadString (sect, "wDown", "", ini)
let wEnd = IniReadString (sect, "wEnd", "", ini)
let wLeft = IniReadString (sect, "wLeft", "", ini)
let wHome = IniReadString (sect, "wHome", "", ini)
let wNP5 = IniReadString (sect, "wNP5", "", ini)
let wNPSlash = IniReadString (sect, "wNPSlash", "", ini)
let wNPStar = IniReadString (sect, "wNPStar", "", ini)
let wNPIns = IniReadString (sect, "wNPIns", "", ini)
EndFunction

Script swUp ()
if StringIsBlank (wUp) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wUp)
EnterKey ()
refreshBuffers ()
EndScript

Script swPUp ()
if StringIsBlank (wPUp) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wPUp)
EnterKey ()
refreshBuffers ()
EndScript

Script swRight ()
if StringIsBlank (wRight) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wRight)
EnterKey ()
refreshBuffers ()
EndScript

Script swPDown ()
if StringIsBlank (wPDown) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wPDown)
EnterKey ()
refreshBuffers ()
EndScript

Script swDown () if StringIsBlank (wDown) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wDown)
EnterKey ()
refreshBuffers ()
EndScript

Script swEnd ()
if StringIsBlank (wEnd) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wEnd)
EnterKey ()
refreshBuffers ()
EndScript

Script swLeft ()
if StringIsBlank (wLeft) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wLeft)
EnterKey ()
refreshBuffers ()
EndScript

Script swHome ()
if StringIsBlank (wHome) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wHome)
EnterKey ()
refreshBuffers ()
EndScript

Script swNP5 ()
if StringIsBlank (wNP5) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
if StringLeft (IntToString (GetJFWVersion ()), 1) == "8" &&
StringContains (wNP5, "$CP$") then
var string s
let s = StringReplaceSubstrings (wNP5, "$CP$", stringStripAllBlanks (GetClipboardText ()))
TypeString (s)
else
TypeString (wNP5)
endIf
EnterKey ()
refreshBuffers ()
EndScript

Script swNPSlash ()
if StringIsBlank (wNPSlash) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wNPSlash)
EnterKey ()
refreshBuffers ()
EndScript

Script swNPStar ()
if StringIsBlank (wNPSlash) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wNPStar)
EnterKey ()
refreshBuffers ()
EndScript

Script swNPIns ()
if StringIsBlank (wNPIns) then
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
Return
endIf
clearLine ()
TypeString (wNPIns)
EnterKey ()
refreshBuffers ()
EndScript

Script PunctuationToggle ()
var
int nPunctuationLevel

let nPunctuationLevel = GetJCFOption (opt_punctuation)

If (nPunctuationLevel == 3) then
let nPunctuationLevel = 0
Else
let nPunctuationLevel = (nPunctuationLevel + 1)
endIf

SetJCFOption (opt_punctuation, nPunctuationLevel)

if isMainWndw () then
let punctM = nPunctuationLevel
IniWriteInteger ("msgBfr", "punctM", punctM, ini)
Say ("Message window punctuation: ", 0)
if (!punctM) then
Say ("none", 0)
elIf (punctM == 1) then
Say ("some", 0)
elIf (punctM == 2) then
Say ("most", 0)
elIf (punctM == 3) then
Say ("all", 0)
endIf
else
let punct = nPunctuationLevel
IniWriteInteger ("msgBfr", "punct", punct, ini)
Say ("General punctuation: ", 0)
if (!punct) then
Say ("none", 0)
elIf (punct == 1) then
Say ("some", 0)
elIf (punct == 2) then
Say ("most", 0)
elIf (punct == 3) then
Say ("all", 0)
endIf
endIf
EndScript

Script TypingEcho ()
Var
Int iEcho

let iEcho =GetJCFOption (opt_typing_Echo)

If (iEcho == 3) Then
let iEcho = 0
Else
let iEcho = (iEcho + 1)
endIf

SetJcfOption (Opt_Typing_Echo, iEcho)

if isMainWndw () then
let tEchoM = iEcho
IniWriteInteger ("msgBfr", "tEchoM", tEchoM, ini)
Say ("Keyboard echo for the message window: ", 0)
else
let tEcho = iEcho
IniWriteInteger ("msgBfr", "tEcho", tEcho, ini)
Say ("General keyboard echo: ", 0)
endIf

If (iEcho == 0) Then
Say ("none", 0)
elIf (iEcho == 1) Then
Say ("characters", 0)
elIf (iEcho == 2) Then
Say ("words", 0)
elIf (iEcho == 3) then
Say ("both characters and words", 0)
endIf
EndScript

Script ToggleTrInterrupt ()
var
string rmsg

if isMainWndw () then
let rmsg = "Typing interrupt for the message window: "
if tInterruptM then
let tInterruptM = 0
let rmsg = (rmsg + "off")
else
let tInterruptM = 1
let rmsg = (rmsg + "on")
endIf
IniWriteInteger ("msgBfr", "tInterruptM", tInterruptM, ini)
SetJCFOption (opt_typing_interrupt, tInterruptM)

else

let rmsg = "General Typing interrupt: "
if tInterrupt then
let tInterrupt = 0
let rmsg = (rmsg + "off")
else
let tInterrupt = 1
let rmsg = (rmsg + "on")
endIf
IniWriteInteger ("msgBfr", "tInterrupt", tInterrupt, ini)
SetJCFOption (opt_typing_interrupt, tInterrupt)
endIf

Say (rmsg, 0)
EndScript

Script toggleReadingInterrupt ()
var
string rmsg

if isMainWndw () then
let rmsg = "Reading interrupt for the message window: "
if rInterruptM then
let rInterruptM = 0
let rmsg = (rmsg + "off")
else
let rInterruptM = 1
let rmsg = (rmsg + "on")
endIf
IniWriteInteger ("msgBfr", "rInterruptM", rInterruptM, ini)
SetJCFOption (opt_reading_interrupt, rInterruptM)

else

let rmsg = "General reading interrupt: "
if rInterrupt then
let rInterrupt = 0
let rmsg = (rmsg + "off")
else
let rInterrupt = 1
let rmsg = (rmsg + "on")
endIf
IniWriteInteger ("msgBfr", "rInterrupt", rInterrupt, ini)
SetJCFOption (opt_reading_interrupt, rInterrupt)

endIf

Say (rmsg, 0)
EndScript

Script wndws ()
let stp = 0
if not isK ||
(!StringContains (GetCurrentScriptKeyName (), "Insert")) then
Return
endIf
let isK = 0
if not StringIsBlank (kTemp) then
let targ = kTemp
Say ("now tracking " + targ, 0)
endIf
EndScript

Script addNewHostAndPort ()
var
string getWn

if isMainWndw () then
if (!mainE) then
let mainE = getMainEHndl ()
endIf
var
string wt,
string cnm,
string prt

let wt = GetWindowTextEx (mainE, false, true)

if (!StringIsBlank (wt)) then

if StringContains (wt, " ") then
let prt = StringSegment (wt, " ", 2)
let wt = StringSegment (wt, " ", 1)
endIf

let getWn = (wt + " has been selected as the desired host address. " +
"If this is the correct address, press enter. If not correct, press escape, and retype the address in the edit field below.")

if InputBox ("Type the name you would like to use for the connection.", "Connection Name", cnm) then
let cnm = stringStripAllBlanks (cnm)
if StringIsBlank (cnm) then
Say ("string is blank", 0)
Return
elIf (StringLength (cnm) > 15) then
Say ("string must not exceed 15 characters", 0)
Return
endIf
else
Say ("action canceled", 0)
Return
endIf

if InputBox (getWn, "Host Address", wt) then
if InputBox ("Type the port number in the field below", "Port Number", prt) then
SpeechOff ()
Pause ()
Delay (5)
let prt = stringStripAllBlanks (prt)
clearLine ()
addNewHostToList (cnm, wt, prt)
SpeechOn ()
Say ("the new host has been added!", 0)
TypeString ((commandChar + "connect " +
wt + " " + prt))
PerformScript enterKey()
Return
endIf

endIf

Say ("action canceled", 0)
Return
endIf
Say ("the edit field is blank. please type " +
"or paste the desired host address into the main window edit field, then use this hotkey again. ", 0)
Return
endIf
Say ("the main window of Jmc is not visible", 0)
EndScript

Script QuickHelp ()
UserBufferClear ()
UserBufferAddText (getHlp)
if (!UserBufferIsActive ()) then
UserBufferActivate ()
endIf
SayLine ()
EndScript

Script connectToURL ()
if isMainWndw () then
var
string ln,
string pro
let ln = GetLine ()
let ln = StringLower (ln)

if (!StringContains (ln, "http://")) &&
(!StringContains (ln, "ftp://")) then
Say ("a URL could not be located, try copying the link using Control+Space, and manually connect", 0)
Return
else
if StringContains (ln, "http://") then
let pro = "http://"
elIf StringContains (ln, "ftp://") then
let pro = "ftp://"
endIf
endIf

var
int sct,
int cct,
string flst
let sct = StringLength (ln)

While (sct)
let flst = (flst + StringLeft (ln, 1))
let ln = stringChopLeft (ln, 1)

if StringContains (flst, pro) then
let sct = 0
else
let sct = (sct - 1)
endIf
EndWhile

let flst = StringSegment (ln, " ", 1)
let flst = StringSegment (flst, "/", 1)

if InputBox ("Please verify that this is the correct link. " +
"Feel free to make any necessary changes before pressing enter.", "Verify Link", flst) then
if (!StringContains (flst, pro)) then
let flst = (pro + flst)
endIf
var
string pth
let pth = (GetJawsSettingsDirectory () +
"\\Jmc_files\\t.htm")
if FileExists (pth) then
Run (pth)
Pause ()
Run (flst)
else
Say ("the connecting file was not found, try reinstalling the scripts to fix this problem", 0)
endIf
Return
endIf
Say ("action canceled", 0)
else
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
endIf
EndScript

Script remAmpLastDir ()
var
string st,
string st2,
int ct,
string rt

if isMainWndw () then

let ct = StringLength (ampCs)
let st = StringSegment (bRoute, ampCs, 1)
let ct = (ct + StringLength (st))
let bRoute = stringChopLeft (bRoute, ct)

let ct = StringLength (ampCs)
let st2 = ampReverseDr (st, "", 0)
let ct = (ct + StringLength (st2))
let fRoute = stringChopRight (fRoute, ct)

let rt = (commandChar + "unpath")
clearLine ()
TypeString (rt)
EnterKey ()
Pause ()

Say (st2, 0)
Say ("has been removed from the map", 0)
endIf
EndScript

Script toggleAmpDel ()
if ampDel then
let ampDel = 0
Say ("auto delay off", 0)
else
let ampDel = 1
Say ("auto delay on", 0)
endIf
IniWriteInteger (getNavSection (""), "ampDel", ampDel, ini)
getNavVs ()
EndScript

Script changeAmpDelVl ()
if isMainWndw () then
var
string dlvlm,
string dlvl
let dlvlm = ("Type the value that you want to use for automatic delay. " +
"A value of 5 represents half a second, 10 represents 1 second, 20 represents 2 seconds, etc. " +
"Automatic delay is currently set to: " +
IntToString (ampDelVl))
if InputBox (dlvlm, "Enter Automatic Delay Value", dlvl) then
let ampDelVl = StringToInt (dlvl)
IniWriteInteger (getNavSection (""), "ampDelVl", ampDelVl, ini)
getNavVs ()
SayInteger (ampDelVl)
Say ("has been set for the automatic delay value", 0)
endIf
else
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
endIf
EndScript

Script loadAmp ()
var
string mp
let mp = ""
PriorCharacter ()
PriorCharacter ()
JAWSHome ()
While (!StringIsBlank (GetCharacter ()))
let mp = (mp + GetCharacter ())
NextCharacter ()
EndWhile
if StringIsBlank (mp) then
Say ("the edit field of the message window does not contain a map", 0)
Return
endIf

let loadF = stringStripAllBlanks (mp)
Say ("the map has been loaded into memory", 0)
Say ("the map can now be run using control+shift+F1", 0)
EndScript

Script runLoadF ()
if StringIsBlank (loadF) then
Say ("a map is not currently loaded", 0)
Return
endIf
let loadR = 1
ampRetrace ()
let loadR = 0
EndScript

Script syncLoadF ()
if isMainWndw () then
let loadF = fRoute
Say ("the forward track has been copied to loaded memory", 0)
Say ("the map can now be run using control+shift+F1", 0)
else
SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
endIf
EndScript

Script resetJMCScripts ()
let mBar = 0
let quickNav = false
if (GetWindowTypeCode (GetFocus ()) == wt_edit) then
Say ("Reload the JMC scripts for the current JMC profile.", 0, false)
TypeString (commandChar + "use common.scr")
EnterKey ()
Return
endIf
Say ("Focus must be set within the main message window to reload the JMC scripts.", 0, false)
EndScript

Script ClearEditField ()
clearLine ()
let tms = 0
EndScript

String Function getHostList ()
var
string lst,
string sg,
int ct,
string st
let ct = 0

let st = IntToString (ct)
let sg = IniReadString (hostLst, st, "InvalidKey", ini)

While (sg != "InvalidKey")
if (sg != "EmptyString") then
let lst = (lst + st + " " +
sg + "\n")
endIf
let ct = (ct + 1)
let st = IntToString (ct)
let sg = IniReadString (hostLst, st, "InvalidKey", ini)
EndWhile
Return lst
EndFunction

Void Function addNewHostToList (string cnm, string hst, string prt)
var
int cth,
string sth,
string sg
let cth = 0

let sth = IntToString (cth)
let sg = IniReadString (hostLst, sth, "InvalidKey", ini)
While (sg != "InvalidKey") &&
(sg != "EmptyString")
if (sg == hst) then
let sg = "EmptyString"
else
let cth = (cth + 1)
let sth = IntToString (cth)
let sg = IniReadString (hostLst, sth, "InvalidKey", ini)
endIf
EndWhile

let cth = (StringLength (cnm) +
StringLength (hst) + 1)

if (cth > 71) then
Say ("the connection name plus the " +
"connection URL exceeds 70 characters in length. " +
"Try choosing a shorter connection name, and try again. ", 0)
Return
endIf

IniWriteString (hostLst, sth, cnm, ini)
IniWriteString (hostLst, cnm, hst, ini)
IniWriteString (hostLst, (cnm + "Prt"), prt, ini)
EndFunction

Script RemHostFromList ()
var
string rh,
string sg

if InputBox ("Type the number of the host that you would like to remove, as seen by pressing Control+H", "Remove Host", rh) then

let sg = IniReadString (hostLst, rh, "EmptyString", ini)
if (sg == "EmptyString") then
Say ("there is no host associated with that slot", 0)
Return
endIf

IniWriteString (hostLst, rh, "EmptyString", ini)
IniRemoveKey (hostLst, sg, ini)
IniRemoveKey (hostLst, sg + "Prt", ini)
Say (sg, 0)
Say ("has been removed from the host list", 0)
endIf
EndScript

Script viewHostList ()
UserBufferClear ()
var
string hl
if StringIsBlank (getHostList ()) then
let hl = ("There are no hosts currently listed.\n\n" +
"To add a host to the list, type the host address in the edit field of the main window, then press Alt+Enter.\n\n")
else
let hl = ("The following hosts are currently available:\n\n" +
getHostList () +
"\n\nTo connect to the specified host, press Alt+Control+H\n" +
"To remove a host from the list, press Alt+Shift+H\n" +
"To add a host to the list, type the host address in the edit field of the main window, then press Alt+Enter.\n" +
"To clear the host list, press Alt+Control+Shift+H\n\n")
endIf
let hl = (hl + "Press Escape to close this window.")

UserBufferAddText (hl)
UserBufferActivate ()
SayAll ()
EndScript

Script clearHostList ()
IniRemoveSection (hostLst, ini)
Say ("The host list has been cleared", 0)
EndScript

Script connectToSpecifiedHost ()
var
string rh,
string sg

if InputBox ("Type the number of the host that you want to select, " +
"as seen by pressing Control+H", "Select Host", rh) then

let sg = IniReadString (hostLst, rh, "EmptyString", ini)
if (sg == "EmptyString") then
Say ("there is no host associated with that slot", 0)
Return
endIf
clearLine ()
TypeString ((commandChar + "connect " +
IniReadString (hostLst, sg, sg, ini) + " "))
let sg = (sg + "Prt")
TypeString (IniReadString (hostLst, sg, "", ini))
JAWSHome ()
commandCharEnter (GetLine (), ccLen)
EnterKey ()
endIf
EndScript

Void Function setStptmr (int tm)
let stptmr = tm
ScheduleFunction ("stptmr", stptmr)
EndFunction

Void Function stptmr ()
let stp = 0
EndFunction

Script setDelString ()
var
string dTimes,
int dTimes2,
string dDelay,
int dDelay2

if (!InputBox ("Type the string command you wish to have repeated.",
"Command String", delString)) then
Return
endIf

if (!InputBox ("How many times do you want the command to be repeated?",
"How many times?", dTimes)) then
Return
endIf
if StringIsBlank (dTimes) then
let dTimes2 = 1
else
let dTimes2 = StringToInt (dTimes)
endIf

if (!InputBox ("Do you want a time delay between each command? " +
"If so, type how much. (10 is one second, 20 is two seconds, etc.) " +
"Just hit enter if you want no time delay.",
"Time Delay", dDelay)) then
Return
endIf
if StringIsBlank (dDelay) then
let dDelay2 = 0
else
let dDelay2 = StringToInt (dDelay)
endIf

if (!InputBox ("Would you like to enter a search string? " +
"If so, the loop command will automatically stop when a match is found. " +
"Just hit enter to pass this step.",
"Search String", delSearch)) then
Return
endIf

let delTimes = dTimes2
let delDelay = dDelay2
Delay (5)
Refresh ()
let delAction = 1
Say ("Ready", 0)
EndScript

Script delAction ()
if isMainWndw () then
if (!delAction) then
Say ("there is no loop command specified. " +
"press insert+shift+tab to enter a command to repeat.", 0)
Return
endIf
let tms = delTimes
dAction ()
else
PerformScript SayWindowPromptAndText()
endIf
EndScript

Void Function dAction ()
if (!tms) then
Say ("loop finished", 0)
Return
endIf
if (GetWindowTypeCode (GetFocus ()) != wt_edit) then
Return
endIf

clearLine ()
TypeString (delString)
EnterKey ()
let tms = (tms - 1)
Pause ()
ScheduleFunction ("dAction", delDelay)
EndFunction

Void Function dSearch (string bfr, string dSearch)
if StringIsBlank (dSearch) then
Return
endIf
if StringContains (bfr, dSearch) then
let tms = 0
endIf
EndFunction

Script msg1 ()
var string m
let m = bfrtb
Say (m, 0)
EndScript

Script msg2 ()
var string m
let m = msg2
Say (m, 0)
EndScript

Script msg3 ()
var string m
let m = msg3
Say (m, 0)
EndScript

Script msg4 ()
var string m
let m = msg4
Say (m, 0)
EndScript

Script msg5 ()
var string m
let m = msg5
Say (m, 0)
EndScript

Script msgr1 ()
var string m
let m = bfrbt
Say (m, 0)
EndScript

Script msgr2 ()
var string m
let m = msgr2
Say (m, 0)
EndScript

Script msgr3 ()
var string m
let m = msgr3
Say (m, 0)
EndScript

Script msgr4 ()
var string m
let m = msgr4
Say (m, 0)
EndScript

Script msgr5 ()
var string m
let m = msgr5
Say (m, 0)
EndScript

Script kHandler ()
if isK == 2 then
let kTemp = IniReadString (kSec, GetCurrentScriptKeyName (), "", ini)
TypeString (kTemp)
Say ("OK", 0)
let isK = 0
Return
elIf isK == 1 then
if not StringIsBlank (kFilter) then
var int ct, string char, string s1, string s2
let ct = StringLength (kFilter)
While (ct)
let char = SubString (kFilter, ct, 1)

if GetJFWVersion () > 600000 then
let kTemp = StringReplaceSubstrings (kTemp, char, "")
else
While (StringContains (kTemp, char))
let s1 = StringSegment (kTemp, char, 1)
let s2 = stringChopLeft (kTemp, StringLength (s1) + 1)
let kTemp = s1 + s2
EndWhile
endIf

let ct = ct - 1
EndWhile
endIf
IniWriteString (kSec, GetCurrentScriptKeyName (), kTemp, ini)
Say (kTemp + " has been saved in slot " + GetCurrentScriptKeyName (), 0)
let isK = 0
Return
elIf GetCurrentScriptKeyName () == "F12" &&
StringLength (GetCurrentScriptKeyName ()) == 3 then
PerformScript maxResScreen()
Return
endIf

SayCurrentScriptKeyLabel ()
TypeCurrentScriptKey ()
EndScript

Script WriteFromSlot ()
let isK = 2
Say ("Get from slot ", 0)
EndScript

Script SpecifySlotStringFilter ()
var string f
let f = kFilter
InputBox ("Which characters would you like filtered?", "All of the characters in the edit field will be filtered. If spaces are included in the edit field, they too will be filtered.", f)
if StringIsBlank (f) then
Say ("nothing", 0)
endIf
let kFilter = f
IniWriteString (kSec, "kFilter", kFilter, ini)
Say (kFilter + " will now be filtered", 0)
EndScript

Int Function isCompAct (string a, string compA, string compB, string bfr)
if StringIsBlank (a) then
Return 1
endIf
var string vr, string type,
string s1, string s2, int si, string strSeg, int iSeg, int iComp

if StringContains (a, "$targ$") then
if (!StringIsBlank (targ)) &&
StringContains (bfr, targ) then
if GetJFWVersion () > 600000 then
let a = StringReplaceSubstrings (a, "$targ$", targ)
else
While (StringContains (a, "$targ$"))
let s1 = StringSegment (a, "$targ$", 1)
let s2 = stringChopLeft (a, StringLength (s1) + 6)
let a = s1 + targ + s2
EndWhile
endIf
else
Return 0
endIf
endIf

if StringContains (a, "$var$") then
let vr = ""
let s1 = ""

let iSeg = StringLength (bfr)
let strSeg = bfr
let iComp = StringLength (compA)

While (iSeg)
if StringLeft (strSeg, iComp) == compA then
let iSeg = 0
else
let strSeg = stringChopLeft (strSeg, 1)
let iSeg = iSeg - 1
endIf
EndWhile

let s2 = stringChopLeft (strSeg, StringLength (compA))

let iSeg = StringLength (s2)
let strSeg = s2
let iComp = StringLength (compB)

While (iSeg)
let vr = vr + StringLeft (strSeg, 1)
let strSeg = stringChopLeft (strSeg, 1)
let iSeg = iSeg - 1
if StringLeft (strSeg, iComp) == compB then
let iSeg = 0
endIf
EndWhile

if GetJFWVersion () > 600000 then
let type = StringReplaceSubstrings (a, "$var$", vr)
else
While (StringContains (a, "$var$"))
let s1 = StringSegment (a, "$var$", 1)
let s2 = stringChopLeft (a, StringLength (s1) + 5)
let type = s1 + vr + s2
let a = type
EndWhile
endIf

else
let type = a
endIf

clearLine ()
TypeString (type)

EnterKey ()
;refreshBuffers ()
return 1
EndFunction

Script StopTracking ()
if StringIsBlank (targ) then
Return
endIf
let targ = ""
Say ("tracking off", 0)
EndScript

Script quickNavHandler ()
var string pressed, int isCtrl
let pressed = StringLower (GetCurrentScriptKeyName ())
if StringContains (pressed, "control") then
let isCtrl = true
else
let isCtrl = false
endIf

if StringContains (pressed, "uparrow") then
if mBar > 0 then
activateMenu ()
Return
endIf
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swUp()
Return
endIf
PerformScript UpA()
else
if isCtrl then
PerformScript SayPriorParagraph()
Return
endIf
PerformScript SayPriorLine()
endIf
Return
endIf

if StringContains (pressed, "downarrow") then
if mBar > 0 then
activateMenu ()
Return
endIf
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swDown()
Return
endIf
PerformScript downA()
else
if isCtrl then
PerformScript SayNextParagraph()
Return
endIf
PerformScript SayNextLine()
endIf
Return
endIf

if StringContains (pressed, "leftarrow") then
if mBar > 0 then
if mBar == 1 then
let mBar = 5
else
let mBar = mBar - 1
endIf
traverseMenuBar ()
Return
endIf
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swLeft()
Return
endIf
PerformScript leftA()
else
if isCtrl then
PerformScript SayPriorWord()
Return
endIf
PriorCharacter ()
SayCharacter ()
endIf
Return
endIf

if StringContains (pressed, "rightarrow") then
if mBar > 0 then
if mBar == 5 then
let mBar = 1
else
let mBar = mBar + 1
endIf
traverseMenuBar ()
Return
endIf
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swRight()
Return
endIf
PerformScript rightA()
else
if isCtrl then
PerformScript SayNextWord()
Return
endIf
NextCharacter ()
SayCharacter ()
endIf
Return
endIf

if StringContains (pressed, "shift") then
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swNPSlash()
Return
endIf
PerformScript np5()
else
if isCtrl then
PerformScript ClearEditField()
Return
endIf
TypeCurrentScriptKey ()
endIf
Return
endIf

if StringContains (pressed, "control") then
if quickNav && IsPCCursor () then
if StringContains (pressed, "rightcontrol+leftcontrol") then
PerformScript swNPStar()
Return
endIf
PerformScript np5ctrl()
else
PerformScript ctrlKey()
endIf
Return
endIf

if StringContains (pressed, "pageup") then
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swPUp()
Return
endIf
PerformScript upP()
else
if isCtrl then
Return
endIf
JAWSPageUp ()
endIf
Return
endIf

if StringContains (pressed, "pagedown") then
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swPDown()
Return
endIf
PerformScript downP()
else
if isCtrl then
Return
endIf
JAWSPageDown ()
endIf
Return
endIf

if StringContains (pressed, "end") then
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swEnd()
Return
endIf
PerformScript endK()
else
if isCtrl then
JAWSBottomOfFile ()
Return
endIf
JAWSEnd ()
endIf
Return
endIf

if StringContains (pressed, "home") then
if quickNav && IsPCCursor () then
if isCtrl then
PerformScript swHome()
Return
endIf
PerformScript homeK()
else
if isCtrl then
JAWSTopOfFile ()
Return
endIf
JAWSHome ()
endIf
Return
endIf

EndScript

Script ToggleQuickNav ()
let quickNav = true
Say ("quick nav on, press insert to disable", 0)
EndScript

Script NextDocumentWindow ()
if not isMessageWin then
if (GetWindowName (GetRealWindow (g_FocusWindow)) == "Options") then
checkCommandChar ()
endIf
endIf
PerformScript NextDocumentWindow()
EndScript

Script PreviousDocumentWindow ()
if not isMessageWin then
if (GetWindowName (GetRealWindow (g_FocusWindow)) == "Options") then
checkCommandChar ()
endIf
endIf
PerformScript PreviousDocumentWindow()
EndScript

Script altPassKeyThrough ()
var string pressed, int isCtrl
let pressed = StringLower (GetCurrentScriptKeyName ())
if StringContains (pressed, "control") then
let isCtrl = true
else
let isCtrl = false
endIf
if isCtrl && StringContains (pressed, "uparrow") && IsVirtualPCCursor () then
PerformScript SayPriorParagraph()
Return
elIf isCtrl && StringContains (pressed, "downarrow") && IsVirtualPCCursor () then
PerformScript SayNextParagraph()
Return
endIf
TypeCurrentScriptKey ()
EndScript

Script toggleLog ()
if (GetWindowTypeCode (GetFocus ()) == wt_edit) then
clearLine ()
TypeString (commandChar + "script lg()")
EnterKey ()
endIf
EndScript

Script toggleLogAppend ()
if (GetWindowTypeCode (GetFocus ()) == wt_edit) then
clearLine ()
TypeString (commandChar + "script lgAppend()")
EnterKey ()
endIf
EndScript

Script toggleAutoLog ()
if (GetWindowTypeCode (GetFocus ()) == wt_edit) then
clearLine ()
TypeString (commandChar + "script autoLg()")
EnterKey ()
endIf
EndScript

Script menuBar ()
if quickNav then
let quickNav = false
Say ("quick nav disabled", 0)
endIf
if MenusActive () then
{alt}
Return
endIf
if mBar > 0 then
let mBar = 0
Say ("Leaving menus, edit", 0, false)
else
let mBar = 1
Say ("File menu", 0, false)
endIf
EndScript

Function traverseMenuBar ()
if mBar == 1 then
Say ("File Menu", 0, false)
elIf mBar == 2 then
Say ("View Menu", 0, false)
elIf mBar == 3 then
Say ("Options Menu", 0, false)
elIf mBar == 4 then
Say ("Scripts Menu", 0, false)
elIf mBar == 5 then
Say ("Help Menu", 0, false)
endIf
EndFunction

Function activateMenu ()
if mBar == 1 then
{alt+f}
elIf mBar == 2 then
{alt+v}
elIf mBar == 3 then
{alt+o}
elIf mBar == 4 then
{alt+s}
elIf mBar == 5 then
{alt+h}
endIf
let mBar = 0
EndFunction
