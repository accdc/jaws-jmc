JFW Script File                                                           �  �    getremotefile           $  cfileobject           fsocreateinstance   &  cfileobject    $  cajax             ajaxcreateobj   &  cajax      $  cajax                 	      $  cajax     %  %           open          %    stringisblank      $  cajax     %    send          $  cajax     %    send               pause      $  cajax       status    200 
              	         %    stringisblank   # �%    
     $  cajax       responsetext       	         %    fileexists    " T%  
        %    \     stringsegmentcount  '     %    \          stringsegment   '       ' 	 % 	 %  
     %    \   
     %    \   % 	   stringsegment   
  '     %    fileexists          $  cfileobject %    fsocreatefolder       % 	      
  ' 	  �   %          adodb.stream      createobject    ' 
 % 
               	           % 
 !  type         % 
 !  mode    % 
     open       % 
   $  cajax       responsebody      write         %    fileexists     % 
   %         savetofile        % 
   %         savetofile        % 
     close            $  cfileobject %          fsocreatetextfile   ' 
      pause         % 
 $  cajax       responsetext      fsowritefile            pause      % 
     close                        	      d     fsocreateinstance        Scripting.FileSystemObject         createobjectex     	      �    ajaxcreateobj      MSXML2.XMLHttp.7.0|MSXML2.XMLHttp.6.0|MSXML2.XMLHttp.5.0|MSXML2.XMLHttp.4.0|MSXML2.XMLHttp.3.0|MSXML2.XMLHttp|Microsoft.XMLHttp '      %     |     stringsegmentcount  '       '  %  %  
           %     |   %    stringsegment     createobject    '       pause      %     %     	      %       
  '   �    %     	      H     fsocreatefolder     %     %    createfolder       	      \     fsocreatetextfile        %     %       %    createtextfile     	      @     fsowritefile        %     %    write      	      