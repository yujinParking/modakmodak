<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

	<a href="${pageContext.request.contextPath }/user/userSignupForm">signup</a>
<P>  The time on the server is ${serverTime}. </P>
	testCnt= ${requestScope.testCnt} 
	
</body>
</html>