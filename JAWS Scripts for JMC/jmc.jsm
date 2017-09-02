messages
@getHlp
Hotkey List

JMC Script Setup
-----

When creating new profiles, it may be necessary to reload the supporting JMC scripts for message announcement.

To reinitialize the JMC scripts for message announcement, press Insert+Control+R.

JMC Help Documentation
-----

To open the JMC Script Reference file, press Insert+F1 twice quickly.
To open the jmc program (help) file, press Control+F1.

JMC Session Logging
-----

Log file is automatically saved within the JMC directory within the file named "log.log".

To toggle current session logging, press Control+L.
To toggle log file appending versus overwrite modes, press Alt+Shift+L.
To toggle auto session logging every time JMC is opened, press Control+Shift+L.

Server Listing
-----

To view the current host list, press Control+H
To quickly connect to the specified host, press Alt+Control+H
To remove the specified host, press Alt+Shift+H
To completely remove the host list, press Alt+Control+Shift+H

Quick connect using jmc
-----

Quick connect to server: Windows+Enter
Quickly add new host and port: Alt+Enter

Profiling
-----

To view a list of all available profiles, press Control+Shift+P.
To switch between profiles, press Alt+P.
To speak the name of the currently loaded profile, press Control+P.
To create a new profile, press Control+Shift+N.
To remove a profile, press Control+Shift+R.
To reload the default profile, press Control+Shift+D.

Basic Commands
-----

To toggle speech output for incoming messages, press Control+S.
To toggle the use of auto re-typing, press Control+Enter.
To clear the edit field, press Control+Shift
To maximize or restore the screen, press F12.
To hear whether the screen is currently maximized, press Control+F12.
To quickly add a new host and port to jmc, press Alt+Enter

Changeable Speech Output Settings
-----

Toggle reading interrupt: Shift+Windows+Enter
Toggle typing interrupt: Control+Insert+2
Toggle keyboard echo: Insert+2
Toggle punctuation: Alt+Shift+P

Copying and Storing Text
-----

To make a virtual copy of the message window, press Alt+C.
To copy all message window text to the clipboard, press Control+Shift+C.

To copy the current word at the cursor, press Shift+Space. (See below for storing this string)
To copy the current line at the cursor, press Control+Space. (See below for storing this string)

Storing Strings and Fast Retreaval
-----

To store a string after using either the Copy Word or Copy Line command above, press F1 through F12 (Note: The string will be assigned to the key that is pressed.)
To quickly retreave and auto-type a stored string, press Alt+`, then press the F# key for the string that you would like to retreave.
To automatically filter out specific characters when storing strings into F# slots, press Alt+Shift+` to specify which characters you would like ignored.

Reviewing Recent Messages
-----

To change the refresh settings for each buffer, press Alt+Control+Shift+Enter.
To modify the Forward Message Buffer length, press: Alt+Control+F
To modify the Reverse Message Buffer length, press: Alt+Control+R
To listen to the Reverse Message Buffer, press Alt+Control+UpArrow.
To listen to the Forward Message Buffer, press Alt+Control+DownArrow.
To make a virtual copy of the Reverse Message Buffer, press Alt+Shift+UpArrow.
To make a virtual copy of the Forward Message Buffer, press Alt+Shift+DownArrow.

Reviewing Previous Messages
-----

To listen to the last 1 through 5 messages in the forward message buffer , hold down the Windows key, and press 1 through 5.
To listen to the last 1 through 5 messages in the reverse message buffer , hold down the Alt+Windows keys, and press 1 through 5.

Loop Commands with Time Delay and Search Parameter
-----

Assign loop command: Insert+Shift+Tab
Activate loop command: Insert+Tab
Cancel current loop: Control+Shift

Interrupt Values
-----

To view a list of all interrupt values in the current profile, press Alt+F1.
To add an interrupt value to the current profile, press Alt+F2.
To remove an interrupt value from the current profile, press Alt+F3.
To toggle the use of interrupt values, press Control+F4
To toggle case sensitivity for the current profile's interrupt values, press Control+F5.
To hear whether case sensitivity is active for the current profile's interrupt values, press Control+Shift+F5.

Interrupt Comparison Strings
-----

Toggle Interrupt Strings: Control+F4
Toggle case sensitivity: Control+F5
Show all of the interrupt comparison strings currently listed: Alt+Shift+F1
Add a new interrupt comparison string: Alt+Shift+F2
Remove an interrupt comparison string: Alt+Shift+F3

Ignore Values
-----

To view a list of all ignore values in the current profile, press Alt+1.
To add an ignore value to the current profile, press Alt+2.
To remove an ignore value from the current profile, press Alt+3.
To toggle the use of ignore values, press Control+4.
To toggle case sensitivity for the current profile's ignore values, press Control+5.
To check whether case sensitivity is active for the current profile's ignore values, press Control+Shift+5.

Ignore Comparison Strings
-----

Toggle Ignore Strings: Control+4
Toggle case sensitivity: Control+5
Show all of the ignore comparison strings currently listed: Alt+Control+F1
Add a new ignore comparison string: Alt+Control+F2
Remove an ignore comparison string: Alt+Control+F3
Advanced: To configure the Auto Tracking feature, do the following:
Within the first Ignore Comparison String dialog, enter the string that always appears before the direction text.
Within the second Ignore Comparison String dialog, enter the string that always appears just after the directional text.
(Note: The text exactly between the first and second values above, will be stored in the following variable: $var$ )
Within the optional third dialog, type the command you would like to perform during tracking. These variables can be used:
$var$  (Which is the direction that the victim has gone.)
$targ$  (Which is the name of the victim being tracked.)

Advanced: Auto Tracking, Experimental
-----

(This feature becomes available after using the Copy Word command: Shift+Space.)

To start auto tracking, press Insert+Windows. (This is usually the name of the victim, which will be saved in the $targ$ variable for later use during tracking. See above.)
To clear auto tracking, press Control+Shift+Windows.
(Important: This feature works in conjunction with the Ignore Comparison String feature, so refer to the Ignore Comparison String section to properly configure auto tracking.)

Spam Filtering and Repeat Message Suppression
-----

Toggle the combination of Spam filtering and repeat message suppression: Shift+Alt+Enter
Toggle whether leading or trailing Spam will be filtered: Control+Shift+Enter
Toggle whether the enter key will refresh the Spam filter: Control+Alt+Enter

Message Trimming
-----

Toggle message trimming: Alt+Shift+T
Specify the message that you wish to be trimmed: Control+T
Specify the number for both leading and trailing lengths to be trimmed: Alt+Control+T

Customizable Hotkeys
-----

To assign value to Shift+Windows+UpArrow, press Alt+Windows+UpArrow
To assign value to Shift+Windows+DownArrow, press Alt+Windows+DownArrow
To assign value to Shift+Windows+LeftArrow, press Alt+Windows+LeftArrow
To assign value to Shift+Windows+RightArrow, press Alt+Windows+RightArrow
To assign value to Shift+Windows+PageUp, press Alt+Windows+PageUp
To assign value to Shift+Windows+PageDown, press Alt+Windows+PageDown
To assign value to Shift+Windows+Home, press Alt+Windows+Home
To assign value to Shift+Windows+End, press Alt+Windows+End
To assign value to Shift+Windows+NumPadSlash, press Alt+Windows+NumPadSlash
To assign value to Shift+Windows+NumPadStar, press Alt+Windows+NumPadStar
To assign value to Shift+Windows+NumPad5, press Alt+Windows+NumPad5
To assign value to Shift+Windows+Insert, press Alt+Windows+Insert

Quick Navigation Mode
-----

Toggle quick navigation mode on/off: Control+Insert+NumPad5, or Insert+K, or Control+K
Navigational hotkeys...
Go direction: Hotkey
North: Windows+UpArrow
North-East: Windows+PageUp
East: Windows+RightArrow
South-East: Windows+PageDown
South: Windows+DownArrow
South-West: Windows+End
West: Windows+LeftArrow
North-West: Windows+Home
Up: Control+Windows+UpArrow
Down: Control+Windows+DownArrow
To change the string assignment for any compass direction...
Change direction: Hotkey
North: Alt+Control+1
North-East: Alt+Control+2
East: Alt+Control+3
South-East: Alt+Control+4
South: Alt+Control+5
South-West: Alt+Control+6
West: Alt+Control+7
North-West: Alt+Control+8
Up: Alt+Control+9
Down: Alt+Control+0
Reset original compass directions: Shift+Alt+=

Hyper Nav Mode
-----

(Hyper Nav Mode is meant to work using the NumPad keys as a compass with one hand.)

To activate Hyper Nav Mode, press Insert+Control.
When Hyper Nav Mode is active, the following navigation keys are enabled: (The numpad is best used for this.)
North: Uparrow
North-east: PageUp
East: Rightarrow
South-east: PageDown
South: Downarrow
South-west: End
West: Leftarrow
North-west: Home
Up: Shift
Down: Control
To quickly disable Hyper Nav Mode, press the Insert key.

Auto Mapping and Quick Escape
-----

Toggle the use of auto mapping: Control+Shift+NumPad5, or Control+Shift+F12
Copy the forward track to the clipboard: Alt+Shift+F
Copy the backward track to the clipboard: Alt+Shift+B
Remove the last recorded direction from the map: Shift+Control+M
Clear both the forward and backward tracks: Control+Shift+Semicolon

Auto Mapping - Ignore Strings
-----

Manually add new auto map ignore string: Alt+Shift+A
Automatically add new ignore string: Alt+Shift+C
Show all current Auto Map Ignore Strings: Alt+Shift+I
Remove an auto map ignore string for the current profile: Alt+Shift+M

Quick Escape and Command Stacking
-----

To toggle quick escape, press: Alt+Shift+Escape
To toggle the use of automatic delay during map execution, press Alt+Shift+D
To change the automatic delay value, press Alt+D

Load Map into Memory
-----

Load new map into memory: Alt+L
Run map in loaded memory: Control+Shift+F1
Copy map in forward track to loaded memory: Alt+S

Custom Macros
-----

Add a macro command to the Tab key: Alt+Windows+Tab
Add a macro command to the Insert key: Alt+Shift+Insert
Add a macro command to the Escape key: Alt+Shift+Escape
To clear a macro: Repeat the desired hotkey above, and leaving the input field blank, press enter.

Maintenance
-----

To clear all settings/values from the configuration file, press Alt+F11.
To clear all settings/values from the default profile, press Control+Shift+0.

Special JMC Script Commands
-----

To speak the currently running script version, press Alt+Shift+V.

Press Escape to close this window
@@
EndMessages