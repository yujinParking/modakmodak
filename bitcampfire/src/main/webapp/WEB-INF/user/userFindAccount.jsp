<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../css/signupForm.css">

</head>
<body>

<form id="userSignupWriteForm"><!-- method="post" action="/bitcampfire/user/SignupComplete" -->
	<table>
		<h4 class="mb-3">회원가입</h4>
		 <div class="input-form-backgroud row">
      		<div class="input-form col-md-10 mx-auto">
      			<div  class="form-header">
	      			 <h5>이메일로 가입하기</h5>

			        	
			        	<div class="mb-3">
				        	<label for="user_email"  class="form-label">이메일</label>
				            <input type="email" class="form-control" id="user_email" placeholder="you@example.com" required>
				            <div id="user_emailDiv"></div>
		         		 </div>
					
			</div>
			
		</div>	
	</table>
	
</form>



<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type = "text/javascript" src="../script/usersignupform.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dc78e967df29d8230c51a513536953f8&libraries=services"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>