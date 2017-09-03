/*
J-Fetch 1.0
An awesome script module to GET and POST remote server requests within JAWS scripts.
Written by Bryan Garaventa, WhatSock.com
Last updated September 2, 2017
*/

include "hjconst.jsh"
Globals
object cFileObject,
object cAjax

; Variable descriptions
; url = The full url to the remote file
; FilePath = The path where you want to save the new file. Leave blank to return the text string.
; method = "GET" or "POST"
; body = should be blank if not using the POST method to send info within the request
; isBinary = true if downloading a binary file, false otherwise
; shouldOverwrite = true or false, if file already exists. Doesn't apply when FilePath is blank.

String Function getRemoteFile (string url, string FilePath, string method, string body, int isBinary, int shouldOverwrite)
var variant null, object OpenFile
; Check for FileSystemObject
if not cFileObject then
let cFileObject = fsoCreateInstance ()
endif
; Check for XMLHttp object
if not cAjax then
let cAjax = ajaxCreateObj ()
endif
if not cAjax then
; Error: The ajax object could not be created, please verify that Internet Explorer is installed on your system.
Return ""
endif
; Fetch file on remote server
cAjax.open(method, url, false)
if StringIsBlank (body) then
; Send GET request
cAjax.send(null)
else
; Send POST request
cAjax.send(body)
endif
Pause ()
; Check for success
if cAjax.status != "200" then
; Error: An error occured, preventing the external file from being downloaded.
Return ""
endif
; Return string if FilePath is empty and isBinary equals false
if StringIsBlank (FilePath) &&
!isBinary then
Return cAjax.responseText
endif
; Otherwise, save content to file
if !FileExists (FilePath) ||
shouldOverwrite then
; Create recursive folder structure if not found
var int i, int count, string fp
let count = StringSegmentCount (FilePath, "\\")
let fp = StringSegment (FilePath, "\\", 1)
let i = 2
While (i < count)
let fp = fp + "\\" + StringSegment (FilePath, "\\", i)
if not FileExists (fp) then
fsoCreateFolder (cFileObject, fp)
endif
let i = i + 1
EndWhile
; Now save file
if isBinary then
let OpenFile = CreateObject ("adodb.stream")
if not OpenFile then
Return ""
endif
let OpenFile.type = 1
let OpenFile.mode = 3
OpenFile.open
OpenFile.write(cAjax.responseBody)
if FileExists (FilePath) then
OpenFile.saveToFile(FilePath, 2)
else
OpenFile.saveToFile(FilePath, 1)
endif
OpenFile.close
else
; if is not binary, save text file
let OpenFile = fsoCreateTextFile (cFileObject, FilePath, false)
Pause ()
fsoWriteFile (OpenFile, cAjax.responseText)
Pause ()
OpenFile.close
endif
; File saved
else
; File already exists
endif
Return ""
EndFunction

Object Function fsoCreateInstance ()
Return CreateObjectEx ("Scripting.FileSystemObject", true)
EndFunction

Object Function ajaxCreateObj ()
var string versions, int ct, int i, variant null, object obj
let versions = "MSXML2.XMLHttp.7.0|MSXML2.XMLHttp.6.0|MSXML2.XMLHttp.5.0|MSXML2.XMLHttp.4.0|MSXML2.XMLHttp.3.0|MSXML2.XMLHttp|Microsoft.XMLHttp"
let ct = StringSegmentCount (versions, "|")
let i = 1
While (i <= ct)
let obj = CreateObject (StringSegment (versions, "|", i))
Pause ()
if obj then
Return obj
endif
let i = i + 1
EndWhile
Return null
EndFunction

Object Function fsoCreateFolder (object FileObject, string FolderPath)
Return FileObject.CreateFolder(FolderPath)
EndFunction

Object Function fsoCreateTextFile (object FileObject, string FileName, int isUniCode)
Return FileObject.CreateTextFile(FileName, TRUE, isUniCode)
EndFunction

Object Function fsoWriteFile (object OpenObject, string SourceCode)
Return OpenObject.Write(SourceCode)
EndFunction
