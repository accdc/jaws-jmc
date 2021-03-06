JFW Script File                                                          @� jFetchUpdater.jsb �
    autostartevent               getscriptfilename     stringlower   jmc.jsb 
     $  gmft           https://gutterstar.bizland.com/whatsock/jaws-scripts/jmc/   '      %     version.txt 
          GET                     getremotefile   '     %    CurrentJMC-Version=   stringcontains        %    CurrentJMC-Version="      5.1.6   
    "   
    stringcontains           ; There is a newer release of the JAWS Scripts for JMC currently available, would you like to load them now? Updating is recommended to apply bug fixes and feature enhancements. All of your current settings will be saved automatically.     JAWS Scripts Update Available          exmessagebox    '  %       
          Updating, please wait.                say       %     jFetchUpdater.JSS   
       getjawssettingsdirectory      \jFetchUpdater.JSS  
    GET                   getremotefile         %     jFetchUpdater.JSD   
       getjawssettingsdirectory      \jFetchUpdater.JSD  
    GET                   getremotefile         %     jFetchUpdater.jsb   
       getjawssettingsdirectory      \jFetchUpdater.jsb  
    GET                   getremotefile         %     jmc.JSS 
       getjawssettingsdirectory      \jmc.JSS    
    GET                   getremotefile         %     jmc.jsm 
       getjawssettingsdirectory      \jmc.jsm    
    GET                   getremotefile         %     jmc.jsd 
       getjawssettingsdirectory      \jmc.jsd    
    GET                   getremotefile         %     jmc.jsb 
       getjawssettingsdirectory      \jmc.jsb    
    GET                   getremotefile         %     jmc.jkm 
       getjawssettingsdirectory      \jmc.jkm    
    GET                   getremotefile         %     jmcChangeLog.txt    
       getjawssettingsdirectory      \jmcChangeLog.txt   
    GET                   getremotefile            &  intertoggle      Update complete.                  say         "        getjawssettingsdirectory    
    \jmcChangeLog.txt"  
    run    	                 0     stringtohandle  &  prevmaine        To hear the help topic for jmc, press Insert+H.               say         Currently running JAWS Scripts for JMC version    5.1.6   
                say         &  gmft       $  intertoggle           setglobalvalues         &  intertoggle               getfocus      getappmainwindow          0�  %    sendmessage            autostartevent           �     autofinishevent              getscriptfilename     stringlower   jmc.jsb 
           &  intertoggle         autofinishevent              setglobalvalues      kSlots    kFilter         jmc.ini   inireadstring   &  kfilter      msgBfr    tEcho          jmc.ini   inireadinteger  &  techo        msgBfr    tEchoM          jmc.ini   inireadinteger  &  techom       msgBfr    rInterrupt         jmc.ini   inireadinteger  &  rinterrupt       msgBfr    rInterruptM         jmc.ini   inireadinteger  &  rinterruptm      msgBfr    tInterrupt         jmc.ini   inireadinteger  &  tinterrupt       msgBfr    tInterruptM         jmc.ini   inireadinteger  &  tinterruptm      msgBfr    punct          jmc.ini   inireadinteger  &  punct        msgBfr    punctM          jmc.ini   inireadinteger  &  punctm       MsgBfr    entKRefreshVal         jmc.ini   inireadinteger  &  msgbfrrefresh        MsgBfr    iBt         jmc.ini   inireadinteger  &  ibt      MsgBfr    iTb         jmc.ini   inireadinteger  &  itb      MsgBfr    fbfrLen   �    jmc.ini   inireadinteger  &  fbfrlen      MsgBfr    rbfrLen   �    jmc.ini   inireadinteger  &  rbfrlen      Current Profile   cpfl      Abbreviated strings   jmc.ini   inireadstring   &  pfl               getintercs    interCs         jmc.ini   inireadinteger  &  intercs      getintervalues          getignorvalues          getampvalues             &  chngfrommainw        0     stringtohandle  &  maine        getnavvs          �     focuschangedevent                    getscriptfilename     stringlower   jmc.jsb 
     %   &  g_focuswindow      $  g_focuswindow     focuschangedvalues     	            %   %    focuschangedevent         �    focuschangedvalues           &  chngfrommainw        0     stringtohandle  &  maine      %     getcontrolid      �  
  " �    %     getcontrolid      d   
  
  # �      menusactive   
  # L   %     getwindowsubtypecode         
  " H   %     getwindowsubtypecode      A   
  
  
  # t     isvirtualpccursor     
  # �     ispccursor  
  # �     dialogactive      
          getmainwhndl    &  mainw        getmainehndl    &  maine        	   $  rinterruptm   setjcfoption               $  techom    setjcfoption               $  tinterruptm   setjcfoption            !   $  punctm    setjcfoption       $  prevmaine        $  maine   &  prevmaine      $  prevmaine   $  maine   
           &  automap       &  froute        &  broute  $  maine   &  prevmaine           &  ismessagewin             	           	   $  rinterrupt    setjcfoption               $  techo     setjcfoption               $  tinterrupt    setjcfoption            !   $  punct     setjcfoption             &  ismessagewin             	             getmainwhndl                  getfocus      getparent     getfirstwindow    getfirstchild   '      %     getcontrolid       �  
          &  chngfrommainw   %      	            &  chngfrommainw        0     stringtohandle     	         �    parseincomingstring       %     &quat;    "     stringreplacesubstrings '      $  monmatch      stringisblank     # �    %   $  monmatch      stringcontains  
     %   &  monbfr           %     stringtrimtrailingblanks      stringtrimleadingblanks '   %     0   
     	      $  passsp  " �   %     Last move forgotten.      stringcontains  
     	      $  ampcapture           &  ampcapture     %     stringlength      F   
        %     F     stringleft  '     %   '        %          say       %    addampstring       	      $  automap # �$  drtoggle    
           &  drtoggle       %   $  automapdr     amprcd           &  automapdr      $  tspk         $  toggleis            %     isimportant # <$  stp   
          &  stp      stopspeech           $  toggleisig          %     isimportantig   '  %       
     	      %       
        %   $  trimtoggle  $  triml   $  trimt     trimstring  '         $  spament      $  spamf        
        %   $  spamp     spamf      	      $  spamf        
        %     spamsuppress       	         %   $  spamp     spamf      	      $  spamf        
        %     spamsuppress       	                  &  spament              getscriptfilename     stringlower   jmc.jsb 
        %           say            JAWSCursor  %          sayusingvoice            $  ibt    %      
  
  $  bfrbt   
  &  bfrbt      $  bfrbt     stringlength    $  rbfrlen 
        $  bfrbt     stringlength      �   
  '     $  bfrbt   %    stringleft  &  bfrbt         $  itb    $  bfrtb      
  
  %   
  &  bfrtb      $  bfrtb     stringlength    $  fbfrlen 
        $  bfrtb     stringlength      �   
  '     $  bfrtb   %    stringright &  bfrtb            �	    isimportant    $  tms       %   $  delsearch     dsearch       $  intercs       %     stringlower '         %     iscomptstring              	         $  inter0    stringisblank     #    %   $  inter0    stringcontains  
             	         $  inter1    stringisblank     # x   %   $  inter1    stringcontains  
             	         $  inter2    stringisblank     # �   %   $  inter2    stringcontains  
             	         $  inter3    stringisblank     # X   %   $  inter3    stringcontains  
             	         $  inter4    stringisblank     # �   %   $  inter4    stringcontains  
             	         $  inter5    stringisblank     # 8   %   $  inter5    stringcontains  
             	         $  inter6    stringisblank     # �   %   $  inter6    stringcontains  
             	         $  inter7    stringisblank     #    %   $  inter7    stringcontains  
             	         $  inter8    stringisblank     # �   %   $  inter8    stringcontains  
             	         $  inter9    stringisblank     # �   %   $  inter9    stringcontains  
             	         $  inter10   stringisblank     # h   %   $  inter10   stringcontains  
             	         $  inter11   stringisblank     # �   %   $  inter11   stringcontains  
             	         $  inter12   stringisblank     # H   %   $  inter12   stringcontains  
             	         $  inter13   stringisblank     # �   %   $  inter13   stringcontains  
             	         $  inter14   stringisblank     # (   %   $  inter14   stringcontains  
             	         $  inter15   stringisblank     # �   %   $  inter15   stringcontains  
             	         $  inter16   stringisblank     #    %   $  inter16   stringcontains  
             	         $  inter17   stringisblank     # x   %   $  inter17   stringcontains  
             	         $  inter18   stringisblank     # �   %   $  inter18   stringcontains  
             	         $  inter19   stringisblank     # X	   %   $  inter19   stringcontains  
             	               	         �     $togglespeach   $  tspk             &  tspk         messages will be spoken         say            &  tspk         messages will not be spoken         say          <     getmainehndl         getfocus    '   %      	      �     $makevirtualcopy         ismainwndw          $virtualizewindow           saycurrentscriptkeylabel            typecurrentscriptkey             d    $copycurrentword         getword '      %     stringisblank           Global    there is no word at the cursor          sayusingvoice         %   &  ktemp        &  isk    %     copytoclipboard         Global  %           sayusingvoice           Global    has been copied         sayusingvoice            d    $copycurrentline         getline '      %     stringisblank           Global    there is no line at the cursor          sayusingvoice         %   &  ktemp        &  isk    %     copytoclipboard         Global  %           sayusingvoice           Global    has been copied         sayusingvoice            �    $virtualizewindow   $  mainw   '      %     getwindowleft   '     %     getwindowtop    '     %     getwindowright  '     %     getwindowbottom '     %  %  %  %             �     �       gettextinrect   '  %  1      
                     sayformattedmessage         userbufferclear       %    userbufferaddtext           userbufferactivate          sayline                       sayformattedmessage          x    $copymainwindow    %     getwindowleft   '     %     getwindowtop    '     %     getwindowright  '     %     getwindowbottom '     %  %  %  %             �     �       gettextinrect   '  %  1      
        %    copytoclipboard         window copied           say            window is empty         say          0    $switchprofile       getprofiles '        userbufferclear       %     stringisblank        There are no alternate profiles currently listed.

   To create a new profile, press Control+Shift+N.

   
   	 Press escape to close the window    
  '       The following profiles are currently available:

   %   
    

  
    To remove a profile, press Control+Shift+R.
    
    To switch your profiles on the fly, press Alt+P.
   
    To hear which profile you are currently using, press Control+P.
    
    To reset your profile to the default, press Control+Shift+D.
   
    To create a new profile, press Control+Shift+N.

   
   	 Press escape to close the window    
  '        %    userbufferaddtext           userbufferactivate          sayall        x    getprofiles      userbufferisactive          userbufferclear         userbufferdeactivate                '        '     %    inttostring '       Profile List    %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
     %   %  
        
  %  
    , 
 
  '      %       
  '     %    inttostring '       Profile List    %    InvalidKey    jmc.ini   inireadstring   '   �       %     stringisblank           %     stringtrimtrailingblanks    '      %          stringchopright '      %      	          $swpfl       ismainwndw          userbufferisactive          userbufferdeactivate           
 Enter the number of the profile that      you wish to switch to. As seen when pressing Control-Shift-P.   
  '      %     Switch Profile  %    inputbox            Profile List    %    InvalidString     jmc.ini   inireadstring     InvalidString   
  " �     Profile List    %    InvalidString     jmc.ini   inireadstring     EmptyString 
  
          No profile is associated with that number, please try again         say    	           please wait         say         Profile List    %    Abbreviated strings   jmc.ini   inireadstring   &  pfl      Current Profile   cpfl    $  pfl   jmc.ini   iniwritestring          validateini         integratenav           	 Your current profile is now set to          say       $  pfl         say               saycurrentscriptkeylabel            typecurrentscriptkey                 $curpfl      userbufferisactive          userbufferdeactivate               Your current profile is set to          say    $  pfl   Abbreviated strings 
        $  pfl         say            Default         say          |    $rsdefault       userbufferisactive          userbufferdeactivate               please wait         say         Current Profile   cpfl      Abbreviated strings   jmc.ini   iniwritestring       Abbreviated strings &  pfl      validateini         integratenav           
 Your profile is now set to the default          say       P    $newpfl      userbufferisactive          userbufferdeactivate            Type the profile name you wish   
 to use. Spaces will not be included.    
    For example: if playing a mud called "Mume", a good profile name may be     
    "Mume" to make the profile game specific.   
  '      %     Profile Name    %    inputbox          %    stringstripallblanks    '     %    stringisblank           The string may not be blank, please try again           say    	         %    stringlength         
          A profile name may not exceed 30 characters in length, please try again         say    	           please wait         say         Profile List       %    selectpflslot   %    jmc.ini   iniwritestring     %  &  pfl      Current Profile   cpfl    $  pfl   jmc.ini   iniwritestring          Current Profile   cpfl    %    jmc.ini   iniwritestring          validateini         integratenav            your new profile has been added         say         $curpfl       L    selectpflslot            '        '       '     %    inttostring '       Profile List    %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
  " � %  %   
  
     %  %   
     %  '     %    EmptyString 
  # @%        
  
     %  '        %       
  '     %    inttostring '       Profile List    %    InvalidKey    jmc.ini   inireadstring   '   �       %    stringisblank        %  '        %    stringisblank        %  '     %     	      �    $rempfl      userbufferisactive          userbufferdeactivate           
 Just type the number of the profile       that you wish to remove. As seen when pressing Control-Shift-P. 
  '      %     Remove Profile  %    inputbox          %    stringstripallblanks    '       Profile List    %    EmptyString   jmc.ini   inireadstring     EmptyString 
          There is no profile associated with that number         say          %    removepflsections              Profile List    %    InvalidString     jmc.ini   inireadstring     jmc.ini   iniremovesection            Profile List    %    InvalidString     jmc.ini   inireadstring   $  pfl 
          $rsdefault          Profile List    %    EmptyString   jmc.ini   iniwritestring          validateini         The profile has successfully been removed           say             H    removepflsections           Profile List    %     InvalidString     jmc.ini   inireadstring   '     %    CaseNF    rtnstrremsection          %    IgCaseNF      rtnstrremsection          %    Interrupt Values      rtnstrremsection          %    Ignore Values     rtnstrremsection          %    Ignore Comparison string values   rtnstrremsection          %   	 Interrupt Comparison string values    rtnstrremsection          %    SpamFiltering     rtnstrremsection          %    AMNullifyStrings      rtnstrremsection          %    NavigationValues      rtnstrremsection          %    MacroValues   rtnstrremsection          %    Trim Leading Trailing Strs    rtnstrremsection          %    Extra Window Hotkeys      rtnstrremsection          �    getintervalues        '      %     inttostring '                interp  %    InvalidStr    jmc.ini   inireadstring   '  $  intercs       %    intertolowercase    '     %     
   
     %    InvalidStr  
  # %    EmptyString 
  
           '          '     %          %         stringleft    '   
        %         stringchopleft  '        %         stringright   '   
        %         stringchopright '        %    #  %         
  
     %  &  inter0     %         
           &  inter0     %    # �%        
  
     %  &  inter1     %        
           &  inter1     %    # �%        
  
     %  &  inter2     %        
           &  inter2     %    # L%        
  
     %  &  inter3     %        
           &  inter3     %    # �%        
  
     %  &  inter4     %        
           &  inter4     %    # %        
  
     %  &  inter5     %        
           &  inter5     %    # x%        
  
     %  &  inter6     %        
           &  inter6     %    # �%        
  
     %  &  inter7     %        
           &  inter7     %    # @%        
  
     %  &  inter8     %        
           &  inter8     %    # �%     	   
  
     %  &  inter9     %     	   
           &  inter9     %    # %     
   
  
     %  &  inter10    %     
   
           &  inter10    %    # l%        
  
     %  &  inter11    %        
           &  inter11    %    # �%        
  
     %  &  inter12    %        
           &  inter12    %    # 4%        
  
     %  &  inter13    %        
           &  inter13    %    # �%        
  
     %  &  inter14    %        
           &  inter14    %        
  '      %     inttostring '                interp  %    InvalidStr    jmc.ini   inireadstring   '  $  intercs       %    intertolowercase    '      �    	      �    $addinterruptvalue       userbufferisactive          userbufferdeactivate           	 Type the string that you wish to      use for interrupting speech during game-play.   
  '      %     Add Interrupt String    %    inputbox          %    stringlength      <   
          The string may not exceed 60 characters in length, please try again         say    	         %    stringisblank           The string must contain some visible characters, please try again           say    	            '        '    '   %  
    '   
  '        '     %    inttostring '                interp  %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %  %  
     %  '     %    EmptyString 
  # D   %    stringisblank   
     %  '     %       
  '     %    inttostring '                interp  %    InvalidKey    jmc.ini   inireadstring   '   �      %    stringisblank        %  '        %    stringisblank        %  '        %    stringtoint      
          All available slots are taken, no more values may be added.       Press Alt+F3 if you wish to remove any pre-existing strings 
          say    	                    interp  %  %    jmc.ini   iniwritestring          validateini         Your interrupt string has successfully been added           say          T     interp       Interrupt Values          
  $  pfl 
  '   %      	      �    $reminterruptvalue       userbufferisactive          userbufferdeactivate            Type the number of the Interrupt String that      you wish to remove. As seen when pressing Alt+F1    
  '      %     Remove Interrupt String %    inputbox          %    stringstripallblanks    '                interp  %    EmptyString   jmc.ini   inireadstring     EmptyString 
          There is no interrupt string associated with that slot          say    	                    interp  %    EmptyString   jmc.ini   iniwritestring          validateini         The interrupt string has successfully been removed          say          0    $viewinterruptvalues         getinterruptstrings '        userbufferclear       %     stringisblank        There are no Interrupt Strings currently listed.

    To add a new Interrupt String, press Alt+F2.

  
   	 Press escape to close the window    
  '       The following Interrupt Strings are currently listed:

 %   
    

  
    To add a new Interrupt String, press Alt+F2.
   
    To remove an Interrupt String, press Alt+F3.
   
    To toggle the use of interrupt strings, press Control+F4.
  
    To toggle case sensitivity, press Control+F5
   
    To hear the case sensitivity status, press Control+Shift+F5.

  
   	 Press escape to close the window    
  '        %    userbufferaddtext           userbufferactivate          sayall        $    getinterruptstrings       '         '     %    inttostring '                interp  %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
     %   %  
     '  
  %  
    ',
 
  '      %       
  '     %    inttostring '                interp  %    InvalidKey    jmc.ini   inireadstring   '   �       %     stringisblank           %     stringtrimtrailingblanks    '      %          stringchopright '      %      	      �     $toggleis   $  toggleis             &  toggleis         interrupt values active         say            &  toggleis        	 interrupt values will not be used           say          �     $toggleretypewithenterkey   $  entkp            &  entkp        auto re typing active           say            &  entkp        auto re typing off          say          $    keypressedevent                    getscriptfilename     stringlower   jmc.jsb 
           &  windowclosed          &  clipboardtextchanged         userbufferisactive     %     [   
  " � %     \   
  
  " %     ]  @
  
  " (%       
  
          userbufferdeactivate                  getactivecursor $  activecur   
  " �$  activevir        isvirtualpccursor   
  
          getactivecursor &  activecur        isvirtualpccursor   &  activevir      $  g_focuswindow     focuschangedvalues        $  ismessagewin    # �     menusactive " �$  tinterruptm 
  
  " �$  ismessagewin      # �$  tinterrupt  
  
          stopspeech              %   %  %  %    keypressedevent          8    $opennotefile        ismainwndw             getappfilepath          getappfilename    stringlength      stringchopright   jmcNotes.txt    
  '      %     fileexists          notes           say       %     run               1 ( The jmc notes file cannot be found. 

The name may have been changed, or the file may have been moved. Try reinstalling the jmc Scripts to 
solve this problem. 1
 cmsgSilent    sayformattedmessage               saycurrentscriptkeylabel            typecurrentscriptkey             \    $intercasesensitive $  intercs          &  intercs     
 interrupt values will be case sensitive         say            &  intercs      interrupt values will not be case sensitive         say                     getintercs    interCs $  intercs   jmc.ini   iniwriteinteger         validateini       H     intertolowercase          %     stringlower '   %      	      @     getintercs       CaseNF  $  pfl 
  '   %      	      �     $checkintercs   $  intercs         interrupt values will not be case sensitive         say           
 interrupt values will be case sensitive         say          �     dvalt            %     :          stringsegment   '  %        %    stringlength         
  '     %   %    stringchopleft  '      %                stringsegment      	      %     	         |     separatedvalt                  sysgettime  %                 dvalt     stringtoint '  %     	      �    restglst         userbufferisactive          userbufferclear         userbufferdeactivate                '        '  %  &  cntpfldiv      %    inttostring '       Profile List    %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
     %   %  
    :v::    
  '      %       
  '  %  &  cntpfldiv      %    inttostring '       Profile List    %    InvalidKey    jmc.ini   inireadstring   '         %     stringisblank           %     stringtrimtrailingblanks    '      %          stringchopright '      %      	      @    dividenms            '       restglst    '     %    stringisblank     " | %  $  cntpfldiv   
  
        %    :v:        stringsegment   '     %  %     rtnstrremsection          %     %    stringlength         
    stringchopleft  '  %       
  '   <       p     rtnstrremsection        %        
  %   
  '      %     jmc.ini   iniremovesection          <    $tst    $  cleariniver          &  cleariniver      please waite while the configuration file is cleared            say         pause                delay           0%          say         Extra Window Hotkeys            dividenms           Trim Leading Trailing Strs          dividenms          	 Interrupt Comparison string values          dividenms           Ignore Comparison string values         dividenms           MacroValues         dividenms           CaseNF          dividenms           pause                delay           10%         say         IgCaseNF            dividenms           Interrupt Values            dividenms           pause                delay           25%         say         Ignore Values           dividenms           AMNullifyStrings            dividenms           NavigationValues            dividenms           SpamFiltering           dividenms           pause                delay           40%         say         pause                delay           55%         say         Profile List      jmc.ini   iniremovesection            pause                delay           70%         say         Current Profile   jmc.ini   iniremovesection            pause                delay           85%         say         Default Variables     jmc.ini   iniremovesection            pause                delay           95%         say              delay           The configuration file has successfully been cleared            say         $rsdefault       validateini            &  cleariniver      Are you sure you want to clear the configuration file?    The configuration file is where all profiles and interrupt values are stored.   
          say         Press Alt+F11 to continue, or press the Control key to cancel.          say          �    $cleandefaultpfl    $  cleariniverd             &  cleariniverd      Extra Window Hotkeys          
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         Trim Leading Trailing Strs        
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection        	 Interrupt Comparison string values        
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         Ignore Comparison string values       
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         SpamFiltering         
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         NavigationValues          
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         AMNullifyStrings          
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         CaseNF    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         IgCaseNF      Abbreviated strings 
  '      %     jmc.ini   iniremovesection         MacroValues       
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         Interrupt Values          
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection         Ignore Values         
    Abbreviated strings 
  '      %     jmc.ini   iniremovesection            the default profile has successfully been cleared           say         Current Profile   cpfl      InvalidString     jmc.ini   inireadstring     Abbreviated strings 
          $rsdefault             &  cleariniverd         Are you sure you want to clear the default profile settings?      This action will only effect the default profile, all other settings will not be effected.  
          say         Press Control+Shift+0 to continue, or press the Control key to cancel.          say          �     $openjmchlp         getappfilepath          getappfilename    stringlength      stringchopright   help\index.html 
  '        JMC Help                  say         "   %   
    "   
    run       �    vltarget                     separatedvalt   '                   separatedvalt   '  %       
          &  slfirsthalf %   &  prevvlhh    %   &  vlhh          &  extvlhh %    #   
  &  vlmm             &  slfirsthalf %   &  prevvlhh    %        
          &  vlhh         &  extvlhh    %        
  &  vlhh          &  extvlhh    %    #   
  '  %    <   
  &  vlmm          �     $ctrlkey         stopspeech     $  cleariniver " T $  cleariniverd    
           &  cleariniver       &  cleariniverd         action canceled         say             &  stp    (    $openhlpfile         issamescript            userbufferdeactivate            getjawssettingsdirectory      \jmc.htm    
  '        JMC Script Reference                  say         "   %   
    "   
    run    	           $screensensitivehelp          �    getignorvalues        '      %     inttostring '                ignorp  %    InvalidStr    jmc.ini   inireadstring   '  $  ignorcs       %    intertolowercase    '     %        
     %    InvalidStr  
  # %    EmptyString 
  
           '          '     %          %         stringleft    '   
        %         stringchopleft  '        %         stringright   '   
        %         stringchopright '        %    #  %         
  
     %  &  ignor0     %         
           &  ignor0     %    # �%        
  
     %  &  ignor1     %        
           &  ignor1     %    # �%        
  
     %  &  ignor2     %        
           &  ignor2     %    # L%        
  
     %  &  ignor3     %        
           &  ignor3     %    # �%        
  
     %  &  ignor4     %        
           &  ignor4     %    # %        
  
     %  &  ignor5     %        
           &  ignor5     %    # x%        
  
     %  &  ignor6     %        
           &  ignor6     %    # �%        
  
     %  &  ignor7     %        
           &  ignor7     %    # @%        
  
     %  &  ignor8     %        
           &  ignor8     %    # �%     	   
  
     %  &  ignor9     %     	   
           &  ignor9     %    # %     
   
  
     %  &  ignor10    %     
   
           &  ignor10    %    # l%        
  
     %  &  ignor11    %        
           &  ignor11    %    # �%        
  
     %  &  ignor12    %        
           &  ignor12    %    # 4%        
  
     %  &  ignor13    %        
           &  ignor13    %    # �%        
  
     %  &  ignor14    %        
           &  ignor14    %        
  '      %     inttostring '                ignorp  %    InvalidStr    jmc.ini   inireadstring   '  $  ignorcs       %    intertolowercase    '      �    	      P     ignorp       Ignore Values         
  $  pfl 
  '   %      	          $viewignorvalues         getignorstrings '        userbufferclear       %     stringisblank        There are no ignore Strings currently listed.

   To add a new ignore String, press Alt+2.

  
   	 Press escape to close the window    
  '       The following ignore Strings are currently listed:

    %   
    

  
    To add a new ignore String, press Alt+2.
   
    To remove an ignore String, press Alt+3.
   
    To toggle the use of ignore strings, press Control+4.
  
    To toggle case sensitivity, press Control+5
    
    To hear the case sensitivity status, press Control+Shift+5.

   
   	 Press escape to close the window    
  '        %    userbufferaddtext           userbufferactivate          sayall             getignorstrings       '         '     %    inttostring '                ignorp  %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
     %   %  
     '  
  %  
    ',
 
  '      %       
  '     %    inttostring '                ignorp  %    InvalidKey    jmc.ini   inireadstring   '   �       %     stringisblank           %     stringtrimtrailingblanks    '      %          stringchopright '      %      	      �    $addignorvalue       userbufferisactive          userbufferdeactivate           	 Type the string that you wish to     
 use to ignore output during game-play.  
  '      %     Add Ignore String   %    inputbox          %    stringlength      <   
          The string may not exceed 60 characters in length, please try again         say    	         %    stringisblank           The string must contain some visible characters, please try again           say    	            '        '    '   %  
    '   
  '        '     %    inttostring '                ignorp  %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %  %  
     %  '     %    EmptyString 
  # 4   %    stringisblank   
     %  '     %       
  '     %    inttostring '                ignorp  %    InvalidKey    jmc.ini   inireadstring   '   �      %    stringisblank        %  '        %    stringisblank        %  '        %    stringtoint      
          All available slots are taken, no more values may be added.       Press Alt+3 if you wish to remove any pre-existing strings  
          say    	                    ignorp  %  %    jmc.ini   iniwritestring          validateini         Your ignore string has successfully been added          say          D     getignorcs       IgCaseNF    $  pfl 
  '   %      	      �    $remignorvalue       userbufferisactive          userbufferdeactivate            Type the number of the ignore String that     you wish to remove. As seen when pressing Alt+1 
  '      %     Remove Ignore String    %    inputbox          %    stringstripallblanks    '                ignorp  %    EmptyString   jmc.ini   inireadstring     EmptyString 
          There is no ignore string associated with that slot         say    	                    ignorp  %    EmptyString   jmc.ini   iniwritestring          validateini         The ignore string has successfully been removed         say          \    $ignorcasesensitive $  ignorcs          &  ignorcs     
 ignore values will be case sensitive            say            &  ignorcs      ignore values will not be case sensitive            say                     getignorcs    ignorCs $  ignorcs   jmc.ini   iniwriteinteger         validateini       �     $toggleisig $  toggleisig           &  toggleisig       ignore values active            say            &  toggleisig       ignore values will not be used          say          �     $checkignorcs   $  ignorcs         ignore values will not be case sensitive            say           
 ignore values will be case sensitive            say          x    validateini               getintercs    interCs         jmc.ini   inireadinteger  &  intercs      getintervalues          getcomptvalues                   getignorcs    ignorCs         jmc.ini   inireadinteger  &  ignorcs      getignorvalues          getcompvalues           getampvalues            getnavvs          X	    isimportantig      $  ignorcs       %     stringlower '         %     iscompstring    '  %     %     	         $  ignor0    stringisblank     # �    %   $  ignor0    stringcontains  
             	         $  ignor1    stringisblank     # H   %   $  ignor1    stringcontains  
             	         $  ignor2    stringisblank     # �   %   $  ignor2    stringcontains  
             	         $  ignor3    stringisblank     # (   %   $  ignor3    stringcontains  
             	         $  ignor4    stringisblank     # �   %   $  ignor4    stringcontains  
             	         $  ignor5    stringisblank     #    %   $  ignor5    stringcontains  
             	         $  ignor6    stringisblank     # x   %   $  ignor6    stringcontains  
             	         $  ignor7    stringisblank     # �   %   $  ignor7    stringcontains  
             	         $  ignor8    stringisblank     # X   %   $  ignor8    stringcontains  
             	         $  ignor9    stringisblank     # �   %   $  ignor9    stringcontains  
             	         $  ignor10   stringisblank     # 8   %   $  ignor10   stringcontains  
             	         $  ignor11   stringisblank     # �   %   $  ignor11   stringcontains  
             	         $  ignor12   stringisblank     #    %   $  ignor12   stringcontains  
             	         $  ignor13   stringisblank     # �   %   $  ignor13   stringcontains  
             	         $  ignor14   stringisblank     # �   %   $  ignor14   stringcontains  
             	         $  ignor15   stringisblank     # h   %   $  ignor15   stringcontains  
             	         $  ignor16   stringisblank     # �   %   $  ignor16   stringcontains  
             	         $  ignor17   stringisblank     # H   %   $  ignor17   stringcontains  
             	         $  ignor18   stringisblank     # �   %   $  ignor18   stringcontains  
             	         $  ignor19   stringisblank     # (	   %   $  ignor19   stringcontains  
             	               	         `    $maxresscreen     �        
          �         setjcfoption                  getfocus      Maximize symbol               findgraphic         pccursor            leftmousebutton         screen maximized            say               getfocus      Restore symbol                findgraphic         pccursor            leftmousebutton         screen restored         say            pccursor            symbol not found            say       $  chngfrommainw           �          setjcfoption             D    $checkmaxresscreen    �        
          �         setjcfoption                  getfocus      Maximize symbol               findgraphic         pccursor            screen not currently maximized          say               getfocus      Restore symbol                findgraphic         pccursor            screen already maximized            say            pccursor            symbol not found            say       $  chngfrommainw           �          setjcfoption                 $toggleibt  $  ibt          &  ibt     	 reverse message buffer deactivated          say            &  ibt      the reverse message buffer is now active            say            MsgBfr    iBt $  ibt   jmc.ini   iniwriteinteger       �     $readfbtot  $  ibt       $  bfrbt           say            the reverse message buffer is not currently active.       press Alt+Control+shift+upArrow to toggle this feature  
          say              $toggleitb  $  itb          &  itb     	 forward message buffer deactivated          say            &  itb      the forward message buffer is now active            say            MsgBfr    iTb $  itb   jmc.ini   iniwriteinteger       �     $readfttob  $  itb       $  bfrtb           say            the forward message buffer is not currently active.       press Alt+Control+shift+downArrow to toggle this feature    
          say          �    $toggleentkmsgbfrreset  $  msgbfrrefresh         
          &  msgbfrrefresh        the enter key will only refresh the reverse message buffer          say       $  msgbfrrefresh        
          &  msgbfrrefresh        the enter key will only refresh the forward message buffer          say       $  msgbfrrefresh        
          &  msgbfrrefresh        the enter key will refresh both the reverse and forward message buffers         say             &  msgbfrrefresh        the enter key will not refresh either buffer            say            MsgBfr    entKRefreshVal  $  msgbfrrefresh     jmc.ini   iniwriteinteger       d    cutmsgbfrsegments         %     stringisblank           %          stringleft  '  %        
     %        
     %       
  '           '        %       
     %    :   
     %       
  '           '        %       
     %    -   
     %       
  '           '        %       
     %        
     %       
  '           '        %       
        %         stringchopright '  %    
-  
  '        '     %  %  
  '     %          stringchopleft  '        %     	      ,    $makevirtualcopyofbt       $  bfrbt     cutmsgbfrsegments   '      %     stringisblank             userbufferclear       %     userbufferaddtext           userbufferactivate          sayall            	 The reverse message buffer is empty         say          ,    $makevirtualcopyoftb       $  bfrtb     cutmsgbfrsegments   '      %     stringisblank             userbufferclear       %     userbufferaddtext           userbufferactivate          sayall            	 The forward message buffer is empty         say                trksch       $trk       �     $dnldnewversion      You are currently running the Jmc scripts, version          say         5.1.6           say       �     $togglenavmode  $  navmode          &  navmode      Quick navigation mode off           say            &  navmode      Quick navigation mode on            say          0    commandcharinitialize       	 initializing scripts, please wait           say      ;   '        AMNullifyStrings      ampCs   %     jmc.ini   iniwritestring         
 the jmc scripts have been initialized           say         ready           say    %      	      �
    getnavvs         Default Variables     commandChar   KNF   jmc.ini   inireadstring   &  commandchar $  commandchar   KNF 
          commandcharinitialize   &  commandchar      $saywindowpromptandtext       $  commandchar   stringlength    &  cclen              getnavsection   &  navvs      $  navvs     ampDel          jmc.ini   inireadinteger  &  ampdel     $  navvs     ampDelVl           jmc.ini   inireadinteger  &  ampdelvl       $  navvs     navN      n     jmc.ini   inireadstring   &  navn       $  navvs     navNE           jmc.ini   inireadstring   &  navne      $  navvs     navE      e     jmc.ini   inireadstring   &  nave       $  navvs     navSE           jmc.ini   inireadstring   &  navse      $  navvs     navS      s     jmc.ini   inireadstring   &  navs       $  navvs     navSW           jmc.ini   inireadstring   &  navsw      $  navvs     navW      w     jmc.ini   inireadstring   &  navw       $  navvs     navNW           jmc.ini   inireadstring   &  navnw      $  navvs     navU      u     jmc.ini   inireadstring   &  navu       $  navvs     navD      d     jmc.ini   inireadstring   &  navd       $  navvs     nav5            jmc.ini   inireadstring   &  nav5               getmacsection   &  macvs      $  macvs     mEscK           jmc.ini   inireadstring   &  mesck      $  macvs     mTabK           jmc.ini   inireadstring   &  mtabk      $  macvs     mInsK           jmc.ini   inireadstring   &  minsk      $  macvs     escKvl          jmc.ini   inireadinteger  &  esckvl                getspamsection    spamF           jmc.ini   inireadinteger  &  spamf                 getspamsection    spamRefresh         jmc.ini   inireadinteger  &  spamrefresh               getspamsection    spamLt          jmc.ini   inireadinteger  &  spamlt       getcompvalues           getcomptvalues                   gettrimsection    trim            jmc.ini   inireadinteger  &  trim                  gettrimsection    trimL           jmc.ini   inireadinteger  &  triml                 gettrimsection    trimT           jmc.ini   inireadinteger  &  trimt                 gettrimsection    trimCh          jmc.ini   inireadinteger  &  trimch                gettrimsection    trimToggle          jmc.ini   inireadinteger  &  trimtoggle             getmonitorsection   &  mons       $  mons      match           jmc.ini   inireadstring   &  monmatch                  getwkeyssection   getwkeys          �    checkcommandchar       $  g_focuswindow     getwindowclass    SysTabControl32 
  " �          $  g_focuswindow     getparent     getlastwindow     getwindowclass    SysTabControl32 
  
  # �   $  g_focuswindow     getwindowname     Common  
  " �         $  g_focuswindow     getparent     getlastwindow     getwindowname     Common  
  
  
        	                    getfocus      getparent     	    finddescendantwindow                  getwindowtextex '      %     stringisblank        ;   '           AMNullifyStrings      ampCs   %     jmc.ini   iniwritestring                   getfocus      getparent         finddescendantwindow                  getwindowtextex '      %     stringisblank        #   '           Default Variables     commandChar %     jmc.ini   iniwritestring          getnavvs          �    $enterkey         &  isk       &  stp      ismainwndw          getline '   $  entkp           %     stringisblank         $  mainet    typestring          enterkey            refreshbuffers          refreshspamfilters     	      %   &  mainet           %   $  cclen     stringleft  $  commandchar 
          enterkey            refreshbuffers          refreshspamfilters     	         %   $  cclen     commandcharenter            enterkey            refreshbuffers          refreshspamfilters     	                    getfocus      getrealwindow     getwindowname     Options 
          checkcommandchar               enterkey          �     refreshspamfilters  $  spamf        
  " P $  spamf        
  
  # l $  spamrefresh   
                     spamcyclesv         &  spament       h    commandcharenter              %   %       
    stringleft    connect   stringcontains        %   %    stringchopleft  '        Default Variables     lc  %     jmc.ini   iniwritestring              %   %       
    stringleft    char      stringcontains        %   %       
    stringchopleft  '      %     stringtrimleadingblanks '      %     stringtrimtrailingblanks    '      %          stringleft    {   
        %          stringchopleft  '         %          stringright   }   
        %          stringchopright '      %   &  commandchar      Default Variables     commandChar %     jmc.ini   iniwritestring        $  commandchar   stringlength    &  cclen            %   %       
    stringleft    mark      stringcontains  # �   %     off   stringcontains    
          &  automap       &  froute        &  broute           %   %       
    stringleft    mark      stringcontains  # H   %     off   stringcontains  
           &  automap       �     setcchar       %   &  commandchar      Default Variables     commandChar %     jmc.ini   iniwritestring        �     ismainwndw  $  chngfrommainw   # D      menusactive   
  # l      isvirtualpccursor     
  # �      ispccursor  
  # �      dialogactive      
             	               	      P    getnavkvl       %        
     $  navn    '       &  drnmft     %        
     $  navne   '       &  drnmft     %        
     $  nave    '       &  drnmft     %        
     $  navse   '       &  drnmft     %        
     $  navs    '       &  drnmft     %        
     $  navsw   '       &  drnmft     %        
     $  navw    '       &  drnmft     %        
     $  navnw   '       &  drnmft     %     	   
     $  navu    '       &  drnmft     %     
   
     $  navd    '       &  drnmft     %        
     $  mesck   '     %        
     $  mtabk   '     %        
     $  minsk   '     $  automap # %        
  
          &  drtoggle    %  &  automapdr      %     	      �     $upa         ismainwndw  # 4 $  navmode 
        $  navn      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	                navtype    	            �     $upp         ismainwndw  # 4 $  navmode 
        $  navne     stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	                navtype    	            |    $righta $  ismessagewin               $  g_focuswindow     getrealwindow     getwindowname     Options 
          checkcommandchar                  ismainwndw  # � $  navmode 
        $  nave      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	                navtype    	            �     $downp       ismainwndw  # 4 $  navmode 
        $  navse     stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	                navtype    	         �     $downa       ismainwndw  # 4 $  navmode 
        $  navs      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	                navtype    	         �     $endk        ismainwndw  # 4 $  navmode 
        $  navsw     stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	                navtype    	         �     $lefta       ismainwndw  # 4 $  navmode 
        $  navw      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	                navtype    	         �     $homek       ismainwndw  # 4 $  navmode 
        $  navnw     stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	                navtype    	            �    $np5            getcurrentscriptkeyname   stringlower '      %     windows   stringcontains          '           '          ismainwndw  # � $  navmode # � %  
  " � $  quicknav    
  
  # �      ispccursor  
  #       isvirtualpccursor     
  # P   $  nav5      stringisblank     
          clearline         $  nav5      typestring          enterkey            refreshbuffers     	           $saycharacter      �     $navup       ismainwndw  # 4 $  navmode 
        $  navu      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           	     navtype    	         �     $navdown         ismainwndw  # 8 $  navmode 
        $  navd      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           
     navtype    	         �    refreshbuffers  $  msgbfrrefresh        
  " \ $  msgbfrrefresh        
  
     $  msgr4   &  msgr5   $  msgr3   &  msgr4   $  msgr2   &  msgr3   $  bfrbt   &  msgr2         &  bfrbt      $  msgbfrrefresh        
  "  $  msgbfrrefresh        
  
     $  msg4    &  msg5    $  msg3    &  msg4    $  msg2    &  msg3    $  bfrtb   &  msg2          &  bfrtb         �     clearline           getfocus      getwindowtypecode        
          getline '      %     stringisblank             jawshome            selecttoendofline           delete    typekey          �     navtype          &  stp      clearline            %           getnavkvl     typestring          enterkey            refreshbuffers        �    $resetnav        ismainwndw        $  navvs     jmc.ini   iniremovesection            getnavvs                 delay         $  navn    $  navs      pathdir              delay         $  navne   $  navsw     pathdir              delay         $  nave    $  navw      pathdir              delay         $  navse   $  navnw     pathdir              delay         $  navs    $  navn      pathdir              delay         $  navsw   $  navne     pathdir              delay         $  navw    $  nave      pathdir              delay         $  navnw   $  navse     pathdir              delay         $  navu    $  navd      pathdir              delay         $  navd    $  navu      pathdir              delay           the quick navigation values have been reset         say          �    integratenav         pause                delay         $  g_focuswindow     focuschangedvalues          ismainwndw               delay         $  navn    $  navs      pathdir              delay         $  navne   $  navsw     pathdir              delay         $  nave    $  navw      pathdir              delay         $  navse   $  navnw     pathdir              delay         $  navs    $  navn      pathdir              delay         $  navsw   $  navne     pathdir              delay         $  navw    $  nave      pathdir              delay         $  navnw   $  navse     pathdir              delay         $  navu    $  navd      pathdir              delay         $  navd    $  navu      pathdir              delay            P    pathdir        %     stringisblank            '         %    stringisblank            '     $  commandchar   pathdir {   
  %   
    } { 
  %  
    }   
  '       clearline         %    typestring          &  passsp       enterkey            pause            &  passsp     \    $changen      North   &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navN    %    jmc.ini   iniwritestring          getnavvs                $  navs      pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navN    %    jmc.ini   iniwritestring          getnavvs          %  $  navs      pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          `    $changene     North East  &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navNE   %    jmc.ini   iniwritestring          getnavvs                $  navsw     pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navNE   %    jmc.ini   iniwritestring          getnavvs          %  $  navsw     pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          \    $changee      East    &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navE    %    jmc.ini   iniwritestring          getnavvs                $  navw      pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navE    %    jmc.ini   iniwritestring          getnavvs          %  $  navw      pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          `    $changese     South East  &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navSE   %    jmc.ini   iniwritestring          getnavvs                $  navnw     pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navSE   %    jmc.ini   iniwritestring          getnavvs          %  $  navnw     pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          \    $changes      South   &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navS    %    jmc.ini   iniwritestring          getnavvs                $  navn      pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navS    %    jmc.ini   iniwritestring          getnavvs          %  $  navn      pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          `    $changesw     South West  &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navSW   %    jmc.ini   iniwritestring          getnavvs                $  navne     pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navSW   %    jmc.ini   iniwritestring          getnavvs          %  $  navne     pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          \    $changew      West    &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navW    %    jmc.ini   iniwritestring          getnavvs                $  nave      pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navW    %    jmc.ini   iniwritestring          getnavvs          %  $  nave      pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          `    $changenw     North West  &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navNW   %    jmc.ini   iniwritestring          getnavvs                $  navse     pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navNW   %    jmc.ini   iniwritestring          getnavvs          %  $  navse     pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          X    $changeu      Up  &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navU    %    jmc.ini   iniwritestring          getnavvs                $  navd      pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navU    %    jmc.ini   iniwritestring          getnavvs          %  $  navd      pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say          \    $changed      Down    &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     navD    %    jmc.ini   iniwritestring          getnavvs                $  navu      pathdir         the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     navD    %    jmc.ini   iniwritestring          getnavvs          %  $  navu      pathdir       %          say         has been substituted for the quick navigation key:          say       $  ndr         say              $changenp5    NumPad5 &  ndr   Substitute for  $  ndr 
  '      1  Type the string you wish quick navigation to use.   %   %    inputbox          %    stringisblank         $  navvs     nav5    %    jmc.ini   iniwritestring          getnavvs            the value for           say       $  ndr         say         has been cleared            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  navvs     nav5    %    jmc.ini   iniwritestring          getnavvs          %          say         has been substituted for the quick navigation key:          say       $  ndr         say          �    $macesck    $  esckvl            &  esckvl     $  macvs     escKvl  $  esckvl    jmc.ini   iniwriteinteger         auto retrace active.            say         This feature works in conjunction with the auto map feature, and will give you the ability to           say         use the escape key to automatically retrace your steps.             say         just make sure auto mapping is enabled beforehand.          say         To use the escape key as a macro instead, just press Alt+Shift+Escape once more         say       $  esckvl           &  esckvl     $  macvs     escKvl  $  esckvl    jmc.ini   iniwriteinteger      The Escape Key  &  ndr   Type the macro for  $  ndr 
    .   
    To reactivate the quick escape feature,     
    just press Alt+Shift+Escape once again after closing this box.  
  '      1  Type the string you wish to assign to the macro.    %   %    inputbox          %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  macvs     mEscK   %    jmc.ini   iniwritestring          getnavvs          %    stringisblank           the macro has been cleared          say    	         %          say         has been set as the macro for           say       $  ndr         say             d    $mactabk      The Tab Key &  ndr   Type the macro for  $  ndr 
  '      1  Type the string you wish to assign to the macro.    %   %    inputbox          %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  macvs     mTabK   %    jmc.ini   iniwritestring          getnavvs          %    stringisblank           the macro has been cleared          say    	         %          say         has been set as the macro for           say       $  ndr         say          h    $macinsk      The Insert Key  &  ndr   Type the macro for  $  ndr 
  '      1  Type the string you wish to assign to the macro.    %   %    inputbox          %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  macvs     mInsK   %    jmc.ini   iniwritestring          getnavvs          %    stringisblank           the macro has been cleared          say    	         %          say         has been set as the macro for           say       $  ndr         say          �    $mesck        &  stp      userbufferisactive          userbufferdeactivate            Edit                  say       $  mbar          
           &  mbar         Leaving menus, edit               say            ismainwndw  # @   $  mesck     stringisblank     
     $  esckvl          ampretrace     	            $  mesck     stringisblank                  navtype    	                 typecurrentscriptkey          �    $mtabk        &  stp      ismainwndw  # `    $  mtabk     stringisblank     
               navtype    	      $  ismessagewin    # �      menusactive   
  # �      isvirtualpccursor     
             getfocus                  getwindowtextex '      %     stringlength    '          tabkey     $  ismessagewin    # �   %     stringisblank     
          pause                 getfocus                  getwindowtextex   stringlength    '  %  %  
     	         %           stringcontains        %           ����  stringsegment   '     %      %    stringlength      stringchopright '   %  %  
     %             getfocus                  getwindowtextex    %     stringlength      stringchopleft  
  '          undo                  say                  getfocus                  getwindowtextex '        %                say              $minsk        &  stp $  quicknav             &  quicknav         quick nav disabled          say    	           ismainwndw  # �    $  minsk     stringisblank     
               navtype    	           typecurrentscriptkey          �    $changeforwardbfrlen      The Forward Message Buffer length is currently set to      $  fbfrlen   inttostring 
     characters.    
    Type the number you want to set as the forward message buffer length,   
    or press escape to keep the current setting 
  '      %     Forward Message Buffer Length   %    inputbox          %    stringtoint '  %    �  
         	 The length cannot be less than 500          say    	           MsgBfr    fbfrLen %    jmc.ini   iniwriteinteger    %  &  fbfrlen      The forward message buffer length has now been set to           say       %    sayinteger     	           Action canceled         say       �    $changereversebfrlen      The Reverse Message Buffer length is currently set to      $  rbfrlen   inttostring 
     characters.    
    Type the number you want to set as the reverse message buffer length,   
    or press escape to keep the current setting 
  '      %     Reverse Message Buffer Length   %    inputbox          %    stringtoint '  %    �  
         	 The length cannot be less than 500          say    	           MsgBfr    rbfrLen %    jmc.ini   iniwriteinteger    %  &  rbfrlen      The reverse message buffer length has now been set to           say       %    sayinteger     	           Action canceled         say       \     getampsection        AMNullifyStrings          
  $  pfl 
  '   %      	          getampvalues               getampsection   '      %     0           jmc.ini   inireadstring   &  am0    %     1           jmc.ini   inireadstring   &  am1    %     2           jmc.ini   inireadstring   &  am2    %     3           jmc.ini   inireadstring   &  am3    %     4           jmc.ini   inireadstring   &  am4    %     5           jmc.ini   inireadstring   &  am5    %     6           jmc.ini   inireadstring   &  am6    %     7           jmc.ini   inireadstring   &  am7    %     8           jmc.ini   inireadstring   &  am8    %     9           jmc.ini   inireadstring   &  am9      AMNullifyStrings      ampCs     ;     jmc.ini   inireadstring   &  ampcs      t    $ampcapturenext      userbufferisactive          userbufferdeactivate          $  ampcapture           &  ampcapture       Capture next message cancelled          say            &  ampcapture       The next message will be added to the auto map ignore list          say         press again to cancel           say          <    $addampnew       userbufferisactive          userbufferdeactivate           	 Type the string that you wish to      use to ignore when auto mapping is active.  
  '      %     Add Auto Map Ignore String  %    inputbox          %    stringlength      F   
          The string may not exceed 70 characters in length, please try again         say    	         %    stringisblank           The string must contain some visible characters, please try again           say    	         %    addampstring             �    addampstring             '        '    '   %   
    '   
  '         '     %    inttostring '                getampsection   %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %  %   
     %  '     %    EmptyString 
  # H   %    stringisblank   
     %  '     %       
  '     %    inttostring '                getampsection   %    InvalidKey    jmc.ini   inireadstring   '   �       %    stringisblank        %  '        %    stringisblank        %  '        %    stringtoint   
   
          All available slots are taken, no more values may be added.       Press  Alt+Shift+M if you wish to remove any pre-existing strings   
          say    	                    getampsection   %  %     jmc.ini   iniwritestring          validateini         Your Auto Mapp ignore string has successfully been added            say       0    getampstrings         '         '     %    inttostring '                getampsection   %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
     %   %  
     '  
  %  
    ',
 
  '      %       
  '     %    inttostring '                getampsection   %    InvalidKey    jmc.ini   inireadstring   '   �       %     stringisblank           %     stringtrimtrailingblanks    '      %          stringchopright '      %      	      <    $viewampignorestrings        userbufferisactive          userbufferdeactivate               getampstrings   '        userbufferclear       %     stringisblank        There are no Auto Map Ignore Strings currently listed.

      To add a new Auto Map Ignore String, press Alt+Shift+A.

   
   	 Press escape to close the window    
  '       The following Auto Map Ignore Strings are currently listed:

   %   
    

  
    To add a new Auto Map Ignore String, press Alt+Shift+A.
    
    To remove an Auto Map Ignore String, press Alt+Shift+M.
    
    To capture the next message as an Auto Map Ignore String, press Alt+Shift+C.

  
   	 Press escape to close the window    
  '        %    userbufferaddtext           userbufferactivate          sayall        �    $remampstring        userbufferisactive          userbufferdeactivate            Type the number of the Auto Map Ignore String that    you wish to remove. As seen when pressing Alt+Shift+I   
  '      %     Remove Auto Map Ignore String   %    inputbox          %    stringstripallblanks    '                getampsection   %    EmptyString   jmc.ini   inireadstring     EmptyString 
          There is no interrupt string associated with that slot          say    	                    getampsection   %    EmptyString   jmc.ini   iniwritestring          validateini         The Auto Map Ignore string has successfully been removed            say          �    $toggleamp       ismainwndw          clearline      $  automap          &  automap $  commandchar   mark off    
  '      %     typestring          $enterkey           &  automap $  commandchar   mark    
  '      %     typestring          $enterkey              you need to be focused on the main window to use this feature           say              ampisignorestring     �   %   $  am0   stringcontains  # l    $  am0   stringisblank     
  # � $  am0   EmptyString 
  
  "    %   $  am1   stringcontains  # �    $  am1   stringisblank     
  # $  am1   EmptyString 
  
  
  " �   %   $  am2   stringcontains  # `   $  am2   stringisblank     
  # �$  am2   EmptyString 
  
  
  "    %   $  am3   stringcontains  # �   $  am3   stringisblank     
  #  $  am3   EmptyString 
  
  
  " �   %   $  am4   stringcontains  # X   $  am4   stringisblank     
  # |$  am4   EmptyString 
  
  
  " �   %   $  am5   stringcontains  # �   $  am5   stringisblank     
  # �$  am5   EmptyString 
  
  
  " x   %   $  am6   stringcontains  # P   $  am6   stringisblank     
  # t$  am6   EmptyString 
  
  
  " �   %   $  am7   stringcontains  # �   $  am7   stringisblank     
  # �$  am7   EmptyString 
  
  
  " p   %   $  am8   stringcontains  # H   $  am8   stringisblank     
  # l$  am8   EmptyString 
  
  
  " �   %   $  am9   stringcontains  # �   $  am9   stringisblank     
  # �$  am9   EmptyString 
  
  
             	               	      X    amprcd         %     ampisignorestring           clearline      $  commandchar   unpath  
  '     %    typestring          enterkey       	         %    ampiscorrectdr       	      %  $  ampcs   
  '     %    stringlength    '  %     $  broute  %    stringleft  
     $  froute  %  
  &  froute     %        $  drnmft    ampreversedr    $  ampcs   
  '  %  $  broute  
  &  broute  	           clearline      $  commandchar   unpath  
  $  ampcs   
        
  $  commandchar 
    unpath  
  '     %    typestring          enterkey          $  broute  %    stringchopleft  &  broute     %        $  drnmft    ampreversedr    $  ampcs   
  '     %    stringlength    '     $  froute  %    stringchopright &  froute  	         X    ampiscorrectdr     %   $  navn    
        %   $  navne   
        %   $  nave    
        %   $  navse   
        %   $  navs    
        %   $  navsw   
        %   $  navw    
        %   $  navnw   
        %   $  navu    
        %   $  navd    
                 	              	      `    ampreversedr         %       
  " @ %    
     %   $  navn    
     $  navs    '     %   $  nave    
     $  navw    '     %   $  navs    
     $  navn    '     %   $  navw    
     $  nave    '        %       
  " %    
     %   $  navne   
     $  navsw   '     %   $  navse   
     $  navnw   '     %   $  navnw   
     $  navse   '     %   $  navsw   
     $  navne   '        %       
  " �%    
     %   $  navu    
     $  navd    '     %   $  navd    
     $  navu    '        %     	      T     ampcheckct      %   %  
             	               	              $ampclearroutes $  automap          &  froute        &  broute       clearline      $  commandchar   mark    
  '      %     typestring          $enterkey           auto mapping must first be active to clear the maps from memory         say          �     $ampcopyfroute     $  froute    stringisblank          
 The forwards track is currently empty           say    	         $  froute    copytoclipboard        	 the forward track has been copied           say       �     $ampcopybroute     $  broute    stringisblank          
 The backwards track is currently empty          say    	         $  broute    copytoclipboard        	 the backward track has been copied          say            ampretrace  $  automap               	           clearline      $  loadr      $  loadf   '      $  broute  '      $  ampdel          %     typestring          enterkey             $  ampcs     stringlength    '  %   '     %    stringisblank           %  $  ampcs          stringsegment   '     %    typestring          enterkey       %     %    stringlength    
  '     %  %    stringchopleft  '     $  ampdelvl      delay                     	      \     getnavsection        NavigationValues          
  $  pfl 
  '   %      	      T     getmacsection        MacroValues       
  $  pfl 
  '   %      	      X     getspamsection       SpamFiltering         
  $  pfl 
  '   %      	      T     getmonitorsection        Monitor       
  $  pfl 
  '   %      	      �    $togglespamfilter        userbufferclear    $  spamf        
           &  spamf     repeated messages will not be suppressed, 
   and spam filtering is off
  
  '      $  spamf         
          &  spamf     Spam filtering is now on, 
   and repeated messages will not be suppressed.

 
    Leading and Trailing spam filtering is currently set to:
   
  '   $  spamlt       
  " �$  spamlt       
  
     %     Leading Spam Filtering: On
 
  '      %     Leading Spam Filtering: Off
    
  '      $  spamlt       
  " h$  spamlt       
  
     %     Trailing Spam Filtering: On
    
  '      %     Trailing Spam Filtering: Off
   
  '         $  spamf        
          &  spamf     repeated messages will now be suppressed, 
  
 and spam filtering will also be on

    
    Leading and Trailing spam filtering is currently set to:
   
  '   $  spamlt       
  " �$  spamlt       
  
     %     Leading Spam Filtering: On
 
  '      %     Leading Spam Filtering: Off
    
  '      $  spamlt       
  " �$  spamlt       
  
     %     Trailing Spam Filtering: On
    
  '      %     Trailing Spam Filtering: Off
   
  '         $  spamf        
          &  spamf     Spam filtering is off, 
      but repeated messages will continue to be suppressed
   
  '                    getspamsection    spamF   $  spamf     jmc.ini   iniwriteinteger    %     
Press Control+Shift+Enter to customize the Leading and Trailing filter settings from this window. 
    
  '   %     Press Alt+Shift+Enter to continue toggling these settings from this window

    
  '   %     Press escape to save the current settings   
  '      %     userbufferaddtext           userbufferisactive            userbufferactivate             jawstopoffile           sayline         $saynextline         virtual cursor          say       �	    $togglespamleadtrail    $  spamlt       
           &  spamlt       both leading spam filtering and trailing spam filtering, are now off            say       $  spamlt        
          &  spamlt       leading spam filtering is on, and trailing spam filtering is off            say       $  spamlt       
          &  spamlt       trailing spam filtering is on, and leading spam filtering is off            say       $  spamlt       
          &  spamlt       both leading spam filtering and trailing spam filtering, are now active         say                     getspamsection    spamLt  $  spamlt    jmc.ini   iniwriteinteger         userbufferisactive          userbufferclear    $  spamf        
       Spam filtering is off, 
      but repeated messages will continue to be suppressed
   
  '      $  spamf         
       repeated messages will not be suppressed, 
   and spam filtering is off
  
  '      $  spamf        
       Spam filtering is now on, 
   and repeated messages will not be suppressed.

 
    Leading and Trailing spam filtering is currently set to:
   
  '   $  spamlt       
  "  $  spamlt       
  
     %     Leading Spam Filtering: On
 
  '      %     Leading Spam Filtering: Off
    
  '      $  spamlt       
  " �$  spamlt       
  
     %     Trailing Spam Filtering: On
    
  '      %     Trailing Spam Filtering: Off
   
  '         $  spamf        
       repeated messages will now be suppressed, 
  
 and spam filtering will also be on

    
    Leading and Trailing spam filtering is currently set to:
   
  '   $  spamlt       
  " $  spamlt       
  
     %     Leading Spam Filtering: On
 
  '      %     Leading Spam Filtering: Off
    
  '      $  spamlt       
  " �$  spamlt       
  
     %     Trailing Spam Filtering: On
    
  '      %     Trailing Spam Filtering: Off
   
  '         %     
Press Control+Shift+Enter to customize the Leading and Trailing filter settings from this window. 
    
  '   %     Press Alt+Shift+Enter to continue toggling these settings from this window

    
  '   %     Press escape to save the current settings   
  '      %     userbufferaddtext           userbufferisactive            userbufferactivate             jawstopoffile           sayline         $saynextline          �    $togglespamrefresh  $  spamrefresh          &  spamrefresh      when the enter key is pressed, the spam filter will automatically be refreshed          say            &  spamrefresh      the spam filter will not be refreshed when the enter key is pressed         say                     getspamsection    spamRefresh $  spamrefresh   jmc.ini   iniwriteinteger            spamf          %     stringisblank   " D %   %  
  
     	      %   &  spamp   $  spamlt       
  " � $  spamlt       
  
        %     stringlength    '       '  %  %  
        %  %    stringleft  '     %   %    stringleft  '  %  %  
     %       
  '     %       
  '     %   %    stringchopleft  '       �       $  spamlt       
  " �$  spamlt       
  
        %     stringlength    '       '  %  %  
        %  %    stringright '     %   %    stringright '  %  %  
     %       
  '     %       
  '     %   %    stringchopright '       �         %     stringisblank      	         %           say    	         (    spamcyclesv   � %       
     $  sp8 &  sp9 $  sp7 &  sp8 $  sp6 &  sp7 $  sp5 &  sp6 $  sp4 &  sp5 $  sp3 &  sp4 $  sp2 &  sp3 $  sp1 &  sp2 $  sp0 &  sp1 %   &  sp0    %       
           &  sp9       &  sp8       &  sp7       &  sp6       &  sp5       &  sp4       &  sp3       &  sp2       &  sp1       &  sp0    $  sv8 &  sv9 $  sv7 &  sv8 $  sv6 &  sv7 $  sv5 &  sv6 $  sv4 &  sv5 $  sv3 &  sv4 $  sv2 &  sv3 $  sv1 &  sv2 $  sv0 &  sv1 %   &  sv0       �    spamsuppress       %   $  sp0 
        $  sp0   stringlength    '       '     %   $  sp1 
        $  sp1   stringlength    '       '     %   $  sp2 
        $  sp2   stringlength    '       '     %   $  sp3 
        $  sp3   stringlength    '       '     %   $  sp4 
        $  sp4   stringlength    '       '     %   $  sp5 
        $  sp5   stringlength    '       '     %   $  sp6 
        $  sp6   stringlength    '       '     %   $  sp7 
        $  sp7   stringlength    '       '     %   $  sp8 
        $  sp8   stringlength    '       '     %   $  sp9 
        $  sp9   stringlength    '       '           '     %        %     stringlength    %  
           '        %   $  sv0 
  " d%   $  sv1 
  
  " |%   $  sv2 
  
  " �%   $  sv3 
  
  " �%   $  sv4 
  
  " �%   $  sv5 
  
  " �%   $  sv6 
  
  " �%   $  sv7 
  
  " %   $  sv8 
  
  " $%   $  sv9 
  
        %          spamcyclesv          %           spamcyclesv    %     	      �    iscompstring          %   $  comp1a    stringcontains  # p    $  comp1a    stringisblank     
  # �    $  comp1b    stringisblank     
  # �    %   $  comp1b    stringcontains  
        $  ag0 $  comp1a  $  comp1b  %     iscompact   '  $  trimtoggle  # @$  trimch        
  
          '     %     	         %   $  comp2a    stringcontains  # �   $  comp2a    stringisblank     
  # �   $  comp2b    stringisblank     
  #    %   $  comp2b    stringcontains  
        $  ag1 $  comp2a  $  comp2b  %     iscompact   '  $  trimtoggle  # �$  trimch       
  
          '     %     	         %   $  comp3a    stringcontains  #    $  comp3a    stringisblank     
  # 8   $  comp3b    stringisblank     
  # h   %   $  comp3b    stringcontains  
        $  ag2 $  comp3a  $  comp3b  %     iscompact   '  $  trimtoggle  # �$  trimch       
  
          '     %     	         %   $  comp4a    stringcontains  # T   $  comp4a    stringisblank     
  # �   $  comp4b    stringisblank     
  # �   %   $  comp4b    stringcontains  
        $  ag3 $  comp4a  $  comp4b  %     iscompact   '  $  trimtoggle  # $$  trimch       
  
          '     %     	         %   $  comp5a    stringcontains  # �   $  comp5a    stringisblank     
  # �   $  comp5b    stringisblank     
  #     %   $  comp5b    stringcontains  
        $  ag4 $  comp5a  $  comp5b  %     iscompact   '  $  trimtoggle  # p$  trimch       
  
          '     %     	               	         @    compsplit         %          %  %           jmc.ini   inireadstring   '        %    a   %   
          jmc.ini   inireadstring   '  %     	         %         stringleft    '   
        %         stringchopleft  '        %         stringright   '   
        %         stringchopright '        %    |@|        stringsegment   '  %    a   
     %     	      %    b   
        %    stringlength         
  '     %  %    stringchopleft  '  %     	         �    getcompvalues              getcompsection  '        0     a   %           compsplit   &  comp1a       0     b   %           compsplit   &  comp1b       0         %          compsplit   &  ag0      1     a   %           compsplit   &  comp2a       1     b   %           compsplit   &  comp2b       1         %          compsplit   &  ag1      2     a   %           compsplit   &  comp3a       2     b   %           compsplit   &  comp3b       2         %          compsplit   &  ag2      3     a   %           compsplit   &  comp4a       3     b   %           compsplit   &  comp4b       3         %          compsplit   &  ag3      4     a   %           compsplit   &  comp5a       4     b   %           compsplit   &  comp5b       4         %          compsplit   &  ag4    h     getcompsection       Ignore Comparison string values       
  $  pfl 
  '   %      	      �    $addcompnew      userbufferisactive          userbufferdeactivate           
 Type the first string that you wish to    use to compare.     
  '      %    	 Add First Ignore Comparison Value   %    inputbox          %    stringlength      !   
          The string may not exceed 33 characters in length, please try again         say    	         %    stringisblank           The string must contain some visible characters, please try again           say    	      %    |@| 
  '    Type the second string that you wish to       use to compare.     
  '      %    	 Add Second Ignore Comparison Value  %    inputbox          %    stringlength      !   
          The string may not exceed 33 characters in length, please try again         say    	         %    stringisblank           The string must contain some visible characters, please try again           say    	      %  %  
  '    Would you like an action to automatically be performed when a match is found?      If so, type the action you would like to be performed. Otherwise, just press enter to continue without specifying an action.    
  '      %     Perform Action  %    inputbox          %    stringlength      F   
          The string may not exceed 70 characters in length, please try again         say    	            %  %    addcompstring               @    addcompstring             '        '    '   %   
    '   
  '         '     %    inttostring '                getcompsection  %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %  %   
     %  '     %    EmptyString 
  # L   %    stringisblank   
     %  '     %       
  '     %    inttostring '                getcompsection  %    InvalidKey    jmc.ini   inireadstring   '   �       %    stringisblank        %  '        %    stringisblank        %  '        %    stringtoint      
          All available slots are taken, no more values may be added.       Press  Alt+Control+F3 to remove any pre-existing strings    
          say    	                    getcompsection  %  %     jmc.ini   iniwritestring                   getcompsection    a   %  
  %    jmc.ini   iniwritestring          validateini         Your ignore comparison string has successfully been added           say       �    $remcompstring       userbufferisactive          userbufferdeactivate            Type the number of the Ignore Comparison String that      you wish to remove. As seen when pressing Alt+Control+F1    
  '      %     Remove Ignore Comparison String %    inputbox          %    stringstripallblanks    '                getcompsection  %    EmptyString   jmc.ini   inireadstring     EmptyString 
          There are no comparison strings associated with that slot           say    	                    getcompsection  %    EmptyString   jmc.ini   iniwritestring          validateini         The Ignore Comparison String has successfully been removed          say          �    $viewcompignorestrings       userbufferisactive          userbufferdeactivate               getcompstrings  '        userbufferclear       %     stringisblank        There are no Ignore Comparison Strings currently listed.

    To add a new Ignore Comparison String, press Alt+Control+F2.

  
   	 Press escape to close the window    
  '       The following Ignore Comparison Strings are currently listed:

 %   
    

  
    Please note: The symbols |@| indicate a comparison marker. 
    
    The strings before and after the marker, will be compared at runtime. 

    
    To add a new Ignore Comparison String, press Alt+Control+F2.
   
    To remove an Ignore Comparison String, press Alt+Control+F3.

  
   	 Press escape to close the window    
  '        %    userbufferaddtext           userbufferactivate          sayall        0    getcompstrings        '         '     %    inttostring '                getcompsection  %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
     %   %  
     '  
  %  
    ',
 
  '      %       
  '     %    inttostring '                getcompsection  %    InvalidKey    jmc.ini   inireadstring   '   �       %     stringisblank           %     stringtrimtrailingblanks    '      %          stringchopright '      %      	      �    getcomptvalues             getcomptsection '        0     a   %           compsplit   &  compt1a      0     b   %           compsplit   &  compt1b      1     a   %           compsplit   &  compt2a      1     b   %           compsplit   &  compt2b      2     a   %           compsplit   &  compt3a      2     b   %           compsplit   &  compt3b      3     a   %           compsplit   &  compt4a      3     b   %           compsplit   &  compt4b      4     a   %           compsplit   &  compt5a      4     b   %           compsplit   &  compt5b    l     getcomptsection     	 Interrupt Comparison string values        
  $  pfl 
  '   %      	          $addcomptnew         userbufferisactive          userbufferdeactivate           
 Type the first string that you wish to    use to compare.     
  '      %    
 Add First Interrupt Comparison Value    %    inputbox          %    stringlength      !   
          The string may not exceed 33 characters in length, please try again         say    	         %    stringisblank           The string must contain some visible characters, please try again           say    	      %    |@| 
  '    Type the second string that you wish to       use to compare.     
  '      %    
 Add Second Interrupt Comparison Value   %    inputbox          %    stringlength      !   
          The string may not exceed 33 characters in length, please try again         say    	         %    stringisblank           The string must contain some visible characters, please try again           say    	      %  %  
  '     %    addcomptstring              �    addcomptstring           '        '    '   %   
    '   
  '         '     %    inttostring '                getcomptsection %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %  %   
     %  '     %    EmptyString 
  # H   %    stringisblank   
     %  '     %       
  '     %    inttostring '                getcomptsection %    InvalidKey    jmc.ini   inireadstring   '   �       %    stringisblank        %  '        %    stringisblank        %  '        %    stringtoint      
          All available slots are taken, no more values may be added.       Press  Alt+Shift+F3 to remove any pre-existing strings  
          say    	                    getcomptsection %  %     jmc.ini   iniwritestring          validateini         Your Interrupt comparison string has successfully been added            say       �    $remcomptstring      userbufferisactive          userbufferdeactivate            Type the number of the Interrupt Comparison String that       you wish to remove. As seen when pressing Alt+Shift+F1  
  '      %    	 Remove Interrupt Comparison String  %    inputbox          %    stringstripallblanks    '                getcomptsection %    EmptyString   jmc.ini   inireadstring     EmptyString 
          There are no comparison strings associated with that slot           say    	                    getcomptsection %    EmptyString   jmc.ini   iniwritestring          validateini         The Interrupt Comparison String has successfully been removed           say          �    $viewcomptstrings        userbufferisactive          userbufferdeactivate               getcomptstrings '        userbufferclear       %     stringisblank        There are no Interrupt Comparison Strings currently listed.

     To add a new Interrupt Comparison String, press Alt+Shift+F2.

 
   	 Press escape to close the window    
  '       The following Interrupt Comparison Strings are currently listed:

  %   
    

  
    Please note: The symbols |@| indicate a comparison marker. 
    
    The strings before and after the marker, will be compared at runtime. 

    
    To add a new Interrupt Comparison String, press Alt+Shift+F2.
  
    To remove an Interrupt Comparison String, press Alt+Shift+F3.

 
   	 Press escape to close the window    
  '        %    userbufferaddtext           userbufferactivate          sayall        0    getcomptstrings       '         '     %    inttostring '                getcomptsection %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
     %   %  
     '  
  %  
    ',
 
  '      %       
  '     %    inttostring '                getcomptsection %    InvalidKey    jmc.ini   inireadstring   '   �       %     stringisblank           %     stringtrimtrailingblanks    '      %          stringchopright '      %      	      @    iscomptstring         %   $  compt1a   stringcontains  # p    $  compt1a   stringisblank     
  # �    $  compt1b   stringisblank     
  # �    %   $  compt1b   stringcontains  
             	         %   $  compt2a   stringcontains  # @   $  compt2a   stringisblank     
  # p   $  compt2b   stringisblank     
  # �   %   $  compt2b   stringcontains  
             	         %   $  compt3a   stringcontains  #    $  compt3a   stringisblank     
  # @   $  compt3b   stringisblank     
  # p   %   $  compt3b   stringcontains  
             	         %   $  compt4a   stringcontains  # �   $  compt4a   stringisblank     
  #    $  compt4b   stringisblank     
  # @   %   $  compt4b   stringcontains  
             	         %   $  compt5a   stringcontains  # �   $  compt5a   stringisblank     
  # �   $  compt5b   stringisblank     
  #    %   $  compt5b   stringcontains  
             	               	         d     gettrimsection       Trim Leading Trailing Strs        
  $  pfl 
  '   %      	      d    $addtrimlnew         userbufferisactive          userbufferdeactivate            Type the number of characters that you want incomming messages to be trimmed by.      Please note: Only messages that match those specified using Control+T, will be trimmed by this many characters.     
    The current Leading Trim Value is set to    
     $  triml     inttostring 
    .   
    Just press escape to keep the current setting.  
  '      %     Leading Trim Value  %    inputbox          %    stringlength      !   
          The value may not exceed 33 characters in length, please try again          say    	         %    stringisblank           A numerical value must be entered, please try again         say    	         %    stringstripallblanks    '     %    stringtoint '  %  &  triml                 gettrimsection    trimL   $  triml     jmc.ini   iniwriteinteger      Type the number of characters that you want incomming messages to be trimmed by.      Please note: Only messages that match those specified using Control+T, will be trimmed by this many characters.     
    The current Trailing Trim Value is set to   
     $  trimt     inttostring 
    .   
    Just press escape to keep the current setting.  
  '      %     Trailing Trim Value %    inputbox          %    stringlength      !   
          The value may not exceed 33 characters in length, please try again          say    	         %    stringisblank           A numerical value must be entered, please try again         say    	         %    stringstripallblanks    '     %    stringtoint '  %  &  trimt                 gettrimsection    trimT   $  trimt     jmc.ini   iniwriteinteger         success         say             `    $addtrimch       userbufferisactive          userbufferdeactivate            Type the number associated with the Ignore Comparison String that     you wish to trigger the trim leading/trailing string functions.     
    You can find this number by pressing Alt+Control+F1.    
  '      %     Trigger Value   %    inputbox          %    stringlength         
          The numerical value can only be between 0 and 4, please try again           say    	         %    stringisblank           A numerical value between 0 and 4 must be entered, please try again         say    	         %    stringstripallblanks    '     %    stringtoint '  %  &  trimch                gettrimsection    trimCh  $  trimch    jmc.ini   iniwriteinteger         success         say          �     trimstring        %   '  %       
  " P %       
  
        %  $  triml     stringchopleft  '     %       
  " � %       
  
        %  $  trimt     stringchopright '     %     	      p    $trimtoggle $  trimtoggle       
           &  trimtoggle       automatic trimming is off           say       $  trimtoggle        
          &  trimtoggle      
 only leading strings will be trimmed            say       $  trimtoggle       
          &  trimtoggle      
 only trailing strings will be trimmed           say       $  trimtoggle       
          &  trimtoggle      
 both ends of the string will be trimmed         say                     gettrimsection    trimToggle  $  trimtoggle    jmc.ini   iniwriteinteger       `     getwkeyssection      Extra Window Hotkeys          
  $  pfl 
  '   %      	      �    addnewconnection         JMC   addr      InvalidKey    JMC.ini   inireadstring   '   %     InvalidKey  
              	      $  commandchar   connect     
  %   
        
       JMC   prt   23    JMC.ini   inireadstring   
  '     %    typestring          JMC   JMC.ini   iniremovesection            $enterkey           	      p    $newconnect      ismainwndw          clearline           addnewconnection              Default Variables     lc    knf   jmc.ini   inireadstring   '   %     knf 
         
 a previous connection was not detected          say    	      $  commandchar %   
  '      %     typestring          enterkey                    $changewn     Shift+Windows+UpArrow   &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wUp %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wUp %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          $    $changewne    Shift+Windows+PageUp    &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wPUp    %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wPUp    %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          (    $changewe     Shift+Windows+RightArrow    &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wRight  %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wRight  %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          $    $changewse    Shift+Windows+PageDown  &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wPDown  %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wPDown  %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          $    $changews     Shift+Windows+DownArrow &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wDown   %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wDown   %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say               $changewsw    Shift+Windows+End   &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wEnd    %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wEnd    %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          $    $changeww     Shift+Windows+LeftArrow &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wLeft   %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wLeft   %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say               $changewnw    Shift+Windows+Home  &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wHome   %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wHome   %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          $    $changewnp5   Shift+Windows+NumPad5   &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wNP5    %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wNP5    %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          ,    $changewnpslash   Shift+Windows+Slash &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wNPSlash    %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wNPSlash    %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          $    $changewnpstar    Shift+Windows+Star  &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wNPStar %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wNPStar %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          (    $changewnpins     Shift+Windows+Insert    &  ndr   Type the command you wish to assign to the  $  ndr 
     hotkey.    
  '        Customize hotkey    %   %    inputbox          %    stringisblank          	 the key assignment has been cleared         say                  getwkeyssection   wNPIns  %    jmc.ini   iniwritestring          getnavvs       	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	                    getwkeyssection   wNPIns  %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the            say       $  ndr         say         hotkey          say          x    getwkeys          %     wUp         jmc.ini   inireadstring   &  wup    %     wPUp            jmc.ini   inireadstring   &  wpup       %     wRight          jmc.ini   inireadstring   &  wright     %     wPDown          jmc.ini   inireadstring   &  wpdown     %     wDown           jmc.ini   inireadstring   &  wdown      %     wEnd            jmc.ini   inireadstring   &  wend       %     wLeft           jmc.ini   inireadstring   &  wleft      %     wHome           jmc.ini   inireadstring   &  whome      %     wNP5            jmc.ini   inireadstring   &  wnp5       %     wNPSlash            jmc.ini   inireadstring   &  wnpslash       %     wNPStar         jmc.ini   inireadstring   &  wnpstar    %     wNPIns          jmc.ini   inireadstring   &  wnpins     �     $swup      $  wup   stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wup   typestring          enterkey            refreshbuffers        �     $swpup     $  wpup      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wpup      typestring          enterkey            refreshbuffers             $swright       $  wright    stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wright    typestring          enterkey            refreshbuffers             $swpdown       $  wpdown    stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wpdown    typestring          enterkey            refreshbuffers        �     $swdown    $  wdown     stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wdown     typestring          enterkey            refreshbuffers        �     $swend     $  wend      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wend      typestring          enterkey            refreshbuffers        �     $swleft    $  wleft     stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wleft     typestring          enterkey            refreshbuffers        �     $swhome    $  whome     stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  whome     typestring          enterkey            refreshbuffers        �     $swnp5     $  wnp5      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wnp5      typestring          enterkey            refreshbuffers            $swnpslash     $  wnpslash      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wnpslash      typestring          enterkey            refreshbuffers            $swnpstar      $  wnpslash      stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wnpstar   typestring          enterkey            refreshbuffers             $swnpins       $  wnpins    stringisblank           saycurrentscriptkeylabel            typecurrentscriptkey       	           clearline         $  wnpins    typestring          enterkey            refreshbuffers        �    $punctuationtoggle       !     getjcfoption    '   %        
           '      %        
  '           !   %     setjcfoption            ismainwndw     %   &  punctm       msgBfr    punctM  $  punctm    jmc.ini   iniwriteinteger         Message window punctuation:             say    $  punctm            none            say       $  punctm       
          some            say       $  punctm       
          most            say       $  punctm       
          all         say          %   &  punct        msgBfr    punct   $  punct     jmc.ini   iniwriteinteger         General punctuation:            say    $  punct             none            say       $  punct        
          some            say       $  punct        
          most            say       $  punct        
          all         say             �    $typingecho           getjcfoption    '   %        
           '      %        
  '              %     setjcfoption            ismainwndw     %   &  techom       msgBfr    tEchoM  $  techom    jmc.ini   iniwriteinteger        
 Keyboard echo for the message window:           say       %   &  techo        msgBfr    tEcho   $  techo     jmc.ini   iniwriteinteger         General keyboard echo:          say       %         
          none            say       %        
          characters          say       %        
          words           say       %        
          both characters and words           say          �    $toggletrinterrupt       ismainwndw       Typing interrupt for the message window:    '   $  tinterruptm          &  tinterruptm %     off 
  '           &  tinterruptm %     on  
  '           msgBfr    tInterruptM $  tinterruptm   jmc.ini   iniwriteinteger            $  tinterruptm   setjcfoption            General Typing interrupt:   '   $  tinterrupt           &  tinterrupt  %     off 
  '           &  tinterrupt  %     on  
  '           msgBfr    tInterrupt  $  tinterrupt    jmc.ini   iniwriteinteger            $  tinterrupt    setjcfoption             %           say       �    $togglereadinginterrupt      ismainwndw       Reading interrupt for the message window:   '   $  rinterruptm          &  rinterruptm %     off 
  '           &  rinterruptm %     on  
  '           msgBfr    rInterruptM $  rinterruptm   jmc.ini   iniwriteinteger         	   $  rinterruptm   setjcfoption            General reading interrupt:  '   $  rinterrupt           &  rinterrupt  %     off 
  '           &  rinterrupt  %     on  
  '           msgBfr    rInterrupt  $  rinterrupt    jmc.ini   iniwriteinteger         	   $  rinterrupt    setjcfoption             %           say           $wndws        &  stp $  isk   " x         getcurrentscriptkeyname   Insert    stringcontains    
     	            &  isk    $  ktemp     stringisblank        $  ktemp   &  targ         now tracking    $  targ    
          say          �    $addnewhostandport       ismainwndw     $  maine             getmainehndl    &  maine         $  maine                getwindowtextex '      %     stringisblank           %           stringcontains        %                stringsegment   '     %                stringsegment   '      %      has been selected as the desired host address.     
    If this is the correct address, press enter. If not correct, press escape, and retype the address in the edit field below.  
  '       Type the name you would like to use for the connection.   Connection Name %    inputbox          %    stringstripallblanks    '     %    stringisblank           string is blank         say    	         %    stringlength         
         
 string must not exceed 15 characters            say    	              action canceled         say    	         %    Host Address    %     inputbox           
 Type the port number in the field below   Port Number %    inputbox            speechoff           pause                delay         %    stringstripallblanks    '       clearline         %  %   %    addnewhosttolist            speechon            the new host has been added!            say       $  commandchar   connect     
  %   
        
  %  
    typestring          $enterkey   	              action canceled         say    	          
 the edit field is blank. please type      or paste the desired host address into the main window edit field, then use this hotkey again.  
          say    	          
 the main window of Jmc is not visible           say       ,,    $quickhelp       userbufferclear       1 �
Hotkey List

JMC Script Setup
-----

When creating new profiles, it may be necessary to reload the supporting JMC scripts for message announcement.

To reinitialize the JMC scripts for message announcement, press Insert+Control+R.

JMC Help Documentation
-----

To open the JMC Script Reference file, press Insert+F1 twice quickly.
To open the jmc program (help) file, press Control+F1.

Automatic Monitoring
-----

To set a string to match for automatic monitoring, press Alt+Control+Insert or Windows+Insert. (Example: "HP:", so that this matches a constant string sent by the MUD.)
To hear the most recent automatic monitor value received by the MUD, press Alt+Control or the Windows key.

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
Custom NumPad5: Windows+NumPad5

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
Custom NumPad5: Alt+Control+`
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
Custom NumPad5: NumPad5
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

Press Escape to close this window     userbufferaddtext           userbufferisactive            userbufferactivate             sayline       x    $connecttourl        ismainwndw          getline '      %     stringlower '      %     http://   stringcontains    # �    %     ftp://    stringcontains    
          a URL could not be located, try copying the link using Control+Space, and manually connect          say    	         %     http://   stringcontains       http:// '        %     ftp://    stringcontains       ftp://  '           %     stringlength    '  %     %     %          stringleft  
  '     %          stringchopleft  '      %  %    stringcontains           '     %       
  '      �      %                stringsegment   '     %    /          stringsegment   '       Please verify that this is the correct link.      Feel free to make any necessary changes before pressing enter.  
    Verify Link %    inputbox          %  %    stringcontains       %  %  
  '          getjawssettingsdirectory      \Jmc_files\t.htm    
  '     %    fileexists        %    run         pause         %    run            the connecting file was not found, try reinstalling the scripts to fix this problem         say       	           action canceled         say            saycurrentscriptkeylabel            typecurrentscriptkey             �    $remamplastdir       ismainwndw        $  ampcs     stringlength    '      $  broute  $  ampcs          stringsegment   '  %      %    stringlength    
  '      $  broute  %     stringchopleft  &  broute     $  ampcs     stringlength    '      %                ampreversedr    '  %      %    stringlength    
  '      $  froute  %     stringchopright &  froute  $  commandchar   unpath  
  '       clearline         %    typestring          enterkey            pause         %          say         has been removed from the map           say          (    $toggleampdel   $  ampdel           &  ampdel       auto delay off          say            &  ampdel       auto delay on           say                     getnavsection     ampDel  $  ampdel    jmc.ini   iniwriteinteger         getnavvs          �    $changeampdelvl      ismainwndw       Type the value that you want to use for automatic delay.      A value of 5 represents half a second, 10 represents 1 second, 20 represents 2 seconds, etc.    
   
 Automatic delay is currently set to:    
     $  ampdelvl      inttostring 
  '      %     Enter Automatic Delay Value %    inputbox          %    stringtoint &  ampdelvl                  getnavsection     ampDelVl    $  ampdelvl      jmc.ini   iniwriteinteger         getnavvs          $  ampdelvl      sayinteger          has been set for the automatic delay value          say               saycurrentscriptkeylabel            typecurrentscriptkey             d    $changemonitormatchstring    5 Type the string value that you want to match against incomming messages for the automatic Monitor feature, where pressing the Windows key, or Alt+Control will repeat the current monitor buffer value in memory.   '      %     Enter Monitor String Value  %    inputbox          %    stringisblank         $  mons      match           jmc.ini   iniwritestring          getnavvs            the value for Automatic Monitoring has been cleared.            say    	         %    stringlength      F   
          String must not exceed 70 characters in length          say    	         $  mons      match   %    jmc.ini   iniwritestring          getnavvs          %          say         has been set for the Automatic Monitoring value         say          X     $speakmonitormatch       stopspeech        $  monbfr          say       ,    $loadamp          '        priorcharacter          priorcharacter          jawshome               getcharacter      stringisblank        %        getcharacter    
  '        nextcharacter       l       %     stringisblank           the edit field of the message window does not contain a map         say    	         %     stringstripallblanks    &  loadf       	 the map has been loaded into memory         say         the map can now be run using control+shift+F1           say       �     $runloadf      $  loadf     stringisblank           a map is not currently loaded           say    	           &  loadr        ampretrace           &  loadr      4    $syncloadf       ismainwndw     $  froute  &  loadf        the forward track has been copied to loaded memory          say         the map can now be run using control+shift+F1           say            saycurrentscriptkeylabel            typecurrentscriptkey             �    $resetjmcscripts          &  mbar          &  quicknav            getfocus      getwindowtypecode        
          Reload the JMC scripts for the current JMC profile.               say       $  commandchar   use common.scr  
    typestring          enterkey       	           Focus must be set within the main message window to reload the JMC scripts.               say       @     $cleareditfield      clearline            &  tms    �    gethostlist       '      %     inttostring '       Host List   %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
     %    EmptyString 
     %  %  
        
  %  
    
   
  '     %        
  '      %     inttostring '       Host List   %    InvalidKey    jmc.ini   inireadstring   '   �    %     	      t    addnewhosttolist               '     %    inttostring '       Host List   %    InvalidKey    jmc.ini   inireadstring   '  %    InvalidKey  
  # � %    EmptyString 
  
     %  %  
       EmptyString '     %       
  '     %    inttostring '       Host List   %    InvalidKey    jmc.ini   inireadstring   '      �       %     stringlength       %    stringlength    
       
  '  %    G   
          the connection name plus the      connection URL exceeds 70 characters in length.     
    Try choosing a shorter connection name, and try again.  
          say    	           Host List   %  %     jmc.ini   iniwritestring          Host List   %   %    jmc.ini   iniwritestring          Host List   %     Prt 
  %    jmc.ini   iniwritestring        �    $remhostfromlist         Type the number of the host that you would like to remove, as seen by pressing Control+H      Remove Host %     inputbox            Host List   %     EmptyString   jmc.ini   inireadstring   '  %    EmptyString 
          there is no host associated with that slot          say    	           Host List   %     EmptyString   jmc.ini   iniwritestring          Host List   %    jmc.ini   iniremovekey            Host List   %    Prt 
    jmc.ini   iniremovekey          %          say        	 has been removed from the host list         say          $    $viewhostlist        userbufferclear            gethostlist   stringisblank       
 There are no hosts currently listed.

    To add a host to the list, type the host address in the edit field of the main window, then press Alt+Enter.

  
  '        The following hosts are currently available:

       gethostlist 
    

To connect to the specified host, press Alt+Control+H
    
    To remove a host from the list, press Alt+Shift+H
  
    To add a host to the list, type the host address in the edit field of the main window, then press Alt+Enter.
   
    To clear the host list, press Alt+Control+Shift+H

 
  '      %    	 Press Escape to close this window.  
  '      %     userbufferaddtext           userbufferactivate          sayall        �     $clearhostlist       Host List     jmc.ini   iniremovesection            The host list has been cleared          say       �    $connecttospecifiedhost      Type the number of the host that you want to select,      as seen by pressing Control+H   
    Select Host %     inputbox            Host List   %     EmptyString   jmc.ini   inireadstring   '  %    EmptyString 
          there is no host associated with that slot          say    	           clearline         $  commandchar   connect     
       Host List   %  %    jmc.ini   inireadstring   
        
    typestring     %    Prt 
  '          Host List   %          jmc.ini   inireadstring     typestring          jawshome               getline $  cclen     commandcharenter            enterkey             `     setstptmr      %   &  stptmr       stptmr  $  stptmr    schedulefunction                stptmr        &  stp    $    $setdelstring        Type the string command you wish to have repeated.    Command String  $  delstring     inputbox         	           How many times do you want the command to be repeated?    How many times? %     inputbox         	         %     stringisblank           '        %     stringtoint '          Do you want a time delay between each command?    If so, type how much. (10 is one second, 20 is two seconds, etc.)   
    Just hit enter if you want no time delay.   
    Time Delay  %    inputbox         	         %    stringisblank            '        %    stringtoint '          Would you like to enter a search string?      If so, the loop command will automatically stop when a match is found.  
   	 Just hit enter to pass this step.   
    Search String   $  delsearch     inputbox         	      %  &  deltimes    %  &  deldelay              delay           refresh         &  delaction        Ready           say       $    $delaction       ismainwndw     $  delaction            
 there is no loop command specified.       press insert+shift+tab to enter a command to repeat.    
          say    	      $  deltimes    &  tms      daction            $saywindowpromptandtext       `    daction $  tms           loop finished           say    	              getfocus      getwindowtypecode        
     	           clearline         $  delstring     typestring          enterkey       $  tms      
  &  tms      pause           dAction $  deldelay      schedulefunction          x     dsearch        %    stringisblank      	         %   %    stringcontains           &  tms       <     $msg1   $  bfrtb   '      %           say       <     $msg2   $  msg2    '      %           say       <     $msg3   $  msg3    '      %           say       <     $msg4   $  msg4    '      %           say       <     $msg5   $  msg5    '      %           say       <     $msgr1  $  bfrbt   '      %           say       <     $msgr2  $  msgr2   '      %           say       <     $msgr3  $  msgr3   '      %           say       <     $msgr4  $  msgr4   '      %           say       <     $msgr5  $  msgr5   '      %           say       �    $khandler   $  isk      
          kSlots       getcurrentscriptkeyname         jmc.ini   inireadstring   &  ktemp      $  ktemp     typestring          OK          say          &  isk 	      $  isk      
        $  kfilter   stringisblank           $  kfilter   stringlength    '   %         $  kfilter %          substring   '       getjfwversion     �'	 
        $  ktemp   %          stringreplacesubstrings &  ktemp         $  ktemp   %    stringcontains        $  ktemp   %         stringsegment   '     $  ktemp      %    stringlength         
    stringchopleft  '  %  %  
  &  ktemp    �      %        
  '    T           kSlots       getcurrentscriptkeyname $  ktemp     jmc.ini   iniwritestring        $  ktemp      has been saved in slot     
       getcurrentscriptkeyname 
          say          &  isk 	           getcurrentscriptkeyname   F12 
  # L        getcurrentscriptkeyname   stringlength         
  
          $maxresscreen   	           saycurrentscriptkeylabel            typecurrentscriptkey          T     $writefromslot       &  isk      Get from slot           say       �    $specifyslotstringfilter    $  kfilter '        Which characters would you like filtered?      All of the characters in the edit field will be filtered. If spaces are included in the edit field, they too will be filtered.  %     inputbox          %     stringisblank           nothing         say       %   &  kfilter      kSlots    kFilter $  kfilter   jmc.ini   iniwritestring        $  kfilter    will now be filtered   
          say       (    iscompact            %     stringisblank              	         %     $targ$    stringcontains        $  targ      stringisblank     # �    %  $  targ      stringcontains  
          getjfwversion     �'	 
        %     $targ$  $  targ      stringreplacesubstrings '         %     $targ$    stringcontains        %     $targ$         stringsegment   '     %      %    stringlength         
    stringchopleft  '  %  $  targ    
  %  
  '    H                  	            %     $var$     stringcontains           '        '     %    stringlength    '  %  '     %    stringlength    ' 	 %        %  % 	   stringleft  %  
           '        %         stringchopleft  '  %       
  '      �      %     %    stringlength      stringchopleft  '     %    stringlength    '  %  '     %    stringlength    ' 	 %     %     %         stringleft  
  '     %         stringchopleft  '  %       
  '     %  % 	   stringleft  %  
           '      �        getjfwversion     �'	 
        %     $var$   %    stringreplacesubstrings ' 
       %     $var$     stringcontains        %     $var$          stringsegment   '     %      %    stringlength         
    stringchopleft  '  %  %  
  %  
  ' 
 % 
 '    �         %   ' 
         clearline         % 
   typestring          enterkey               	      �     $stoptracking      $  targ      stringisblank      	            &  targ         tracking off            say       �    $quicknavhandler            getcurrentscriptkeyname   stringlower '      %     control   stringcontains          '           '           &  stp    %     uparrow   stringcontains     $  mbar          
          activatemenu       	      $  quicknav    # D     ispccursor  
  # l     isvirtualpccursor     
     %          $swup   	           $upa       %          $saypriorparagraph  	           $saypriorline      	         %     downarrow     stringcontains     $  mbar          
          activatemenu       	      $  quicknav    # �     ispccursor  
  # �     isvirtualpccursor     
     %          $swdown 	           $downa     %          $saynextparagraph   	           $saynextline       	         %     leftarrow     stringcontains     $  mbar          
     $  mbar         
          &  mbar       $  mbar         
  &  mbar            traversemenubar    	      $  quicknav    # 8     ispccursor  
  # `     isvirtualpccursor     
     %          $swleft 	           $lefta     %          $saypriorword   	           priorcharacter          saycharacter          	         %     rightarrow    stringcontains     $  mbar          
     $  mbar         
          &  mbar       $  mbar         
  &  mbar            traversemenubar    	      $  quicknav    # �     ispccursor  
  # $     isvirtualpccursor     
     %          $swright    	           $righta    %          $saynextword    	           nextcharacter           saycharacter          	         %     shift     stringcontains     $  quicknav    # $     ispccursor  
  # L     isvirtualpccursor     
     %          $cleareditfield 	           $navup     %          $cleareditfield 	           typecurrentscriptkey          	         %     control   stringcontains     $  quicknav    # <     ispccursor  
  # d     isvirtualpccursor     
          $navdown            $ctrlkey       	         %     pageup    stringcontains     $  quicknav    # �     ispccursor  
  #  	     isvirtualpccursor     
     %          $swpup  	           $upp       %     	           jawspageup        	         %     pagedown      stringcontains     $  quicknav    # �	     ispccursor  
  # 
     isvirtualpccursor     
     %          $swpdown    	           $downp     %     	           jawspagedown          	         %     end   stringcontains     $  quicknav    # �
     ispccursor  
  #       isvirtualpccursor     
     %          $swend  	           $endk      %          jawsbottomoffile       	           jawsend       	         %     home      stringcontains     $  quicknav    # �     ispccursor  
  #      isvirtualpccursor     
     %          $swhome 	           $homek     %          jawstopoffile      	           jawshome          	         �     $togglequicknav $  navmode           $togglenavmode          &  quicknav        
 quick nav on, press insert to disable           say       �     $nextdocumentwindow $  ismessagewin               $  g_focuswindow     getrealwindow     getwindowname     Options 
          checkcommandchar                  $nextdocumentwindow    �     $previousdocumentwindow $  ismessagewin               $  g_focuswindow     getrealwindow     getwindowname     Options 
          checkcommandchar                  $previousdocumentwindow    �    $altpasskeythrough          getcurrentscriptkeyname   stringlower '      %     control   stringcontains          '           '     %  # �    %     uparrow   stringcontains  
  # �      isvirtualpccursor   
          $saypriorparagraph  	      %  # T   %     downarrow     stringcontains  
  # x     isvirtualpccursor   
          $saynextparagraph   	           typecurrentscriptkey          �     $togglelog          getfocus      getwindowtypecode        
          clearline         $  commandchar   script lg() 
    typestring          enterkey             �     $togglelogappend            getfocus      getwindowtypecode        
          clearline         $  commandchar   script lgAppend()   
    typestring          enterkey             �     $toggleautolog          getfocus      getwindowtypecode        
          clearline         $  commandchar   script autoLg() 
    typestring          enterkey             `    $menubar    $  quicknav             &  quicknav         quick nav disabled          say            menusactive         alt   typekey 	      $  mbar          
           &  mbar         Leaving menus, edit               say            &  mbar         File menu                 say          �    traversemenubar $  mbar         
          File Menu                 say       $  mbar         
          View Menu                 say       $  mbar         
          Options Menu                  say       $  mbar         
          Scripts Menu                  say       $  mbar         
          Help Menu                 say          X    activatemenu    $  mbar         
          alt+f     typekey    $  mbar         
          alt+v     typekey    $  mbar         
          alt+o     typekey    $  mbar         
          alt+s     typekey    $  mbar         
          alt+h     typekey          &  mbar           newtextevent                          getscriptfilename     stringlower   jmc.jsb 
  # �         getfocus      getwindowtypecode        
  
     	         %   %  %  %  %  %  %    newtextevent          