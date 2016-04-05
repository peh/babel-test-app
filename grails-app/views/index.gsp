<%@ page import="grails.util.Environment" %>
<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome to Grails</title>
</head>

<body>
<div id="test"></div>
<g:if test="${grails.util.Environment.developmentMode && asset.pipeline.babel.WebpackDevserverBabelifier.isDevServerRunning()}">
    <script src="http://localhost:3000/application.js"></script>
</g:if>
<g:else>
    <asset:javascript src="application.js"/>
</g:else>
</body>

</html>
