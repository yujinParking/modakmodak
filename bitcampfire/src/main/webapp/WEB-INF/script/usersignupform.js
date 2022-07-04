//다음 우편번호
function checkPost() {
        new daum.Postcode({
            oncomplete: function(data) {

                var addr = ''; 
                var extraAddr = ''; 

                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                document.getElementById('class_academy').value = data.zonecode;
                document.getElementById("addr1").value = addr;
                document.getElementById("addr2").focus();
            }
        }).open();
    }

$(function(){
	
	//프로필 설정
	$('#camera_icon_div').click(function(){
		$('#user_img').trigger('click');
	});
	
	$('#user_img').on('change',function(){
		readURL(this);
	});
	
	function readURL(input){
		if(input.files[0]){
			var reader = new FileReader();
			reader.onload=function(e){ 
				$('#basic_profile_img').attr('src', e.target.result); 
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
});

/*아이디 중복체크*/

$('#user_id').focusout(function(){
	if( $('#user_id').val() == ''){
		$('#user_idDiv').html('먼저 아이디 입력');
		$('#user_idDiv').css('color','red');
		$('#user_idDiv').css('font-size','8px');
	}else{
		$.ajax({
			type: 'post',
			url:'/bitcampfire/user/userSignup_idCheck',
			data: {'user_id' : $('#user_id').val()}, 
			dataType: 'text', 
			success: function(data){
				//data = data.trim();
				alert(data);
				if(data=='exist'){
					$('#user_idDiv').html('이미 사용하고 있는 아이디입니다.');
					$('#user_idDiv').css('color', 'red');
					$('#user_idDiv').css('font-size', '8px');
				}else if(data=='non exist'){
					$('input[name="user_id_check"]').val($('#user_id').val());
					$('#user_idDiv').html('사용 가능한 아이디입니다.');
					$('#user_idDiv').css('color', 'blue');
					$('#user_idDiv').css('font-size', '8px');
				}
			},
			error: function(err){
				console.log(err);
			}
		});
	}
		
});

/*버튼을 눌렀을때~*/

$('#signUpBtn').click(function(){
		$('#user_nameDiv').empty();
		$('#user_idDiv').empty();
		$('#user_pwdDiv').empty();
		$('#user_emailDiv').empty();
		$('#user_nicknameDiv').empty();
		$('#flexCheckCheckedDiv').empty();
		
		var pw = $("#user_pwd").val();
		 var num = pw.search(/[0-9]/g);
		 var eng = pw.search(/[a-z]/ig);
		 var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
		
		
		if($('#user_name').val() == ''){
			$('#user_nameDiv').html('이름을 입력하세요.');
			$('#user_nameDiv').css('color','red');
			$('#user_nameDiv').css('font-size','8px');
		}
		else if($('#user_id').val() == ''){
			$('#user_idDiv').html('아이디를 입력하세요.');
			$('#user_idDiv').css('color','red');
			$('#user_idDiv').css('font-size','8px');
		}
		else if($('#user_pwd').val() == ''){
			$('#user_pwdDiv').html('비밀번호를 입력하세요.');
			$('#user_pwdDiv').css('color','red');
			$('#user_pwdDiv').css('font-size','8px');
		}
		else if(pw.length < 8 || pw.length > 20){
			
			$('#user_pwdDiv').html('8자리 ~ 20자리 이내로 입력해주세요.');
			$('#user_pwdDiv').css('color','red');
			$('#user_pwdDiv').css('font-size','8px');
			
		}
		else if(pw.search(/\s/) != -1){
			$('#user_pwdDiv').html('비밀번호는 공백 없이 입력해주세요.');
			$('#user_pwdDiv').css('color','red');
			$('#user_pwdDiv').css('font-size','8px');
			
		}
		else if(num < 0 || eng < 0 || spe < 0 ){
			$('#user_pwdDiv').html('영문,숫자, 특수문자를 혼합하여 입력해주세요.');
			$('#user_pwdDiv').css('color','red');
			$('#user_pwdDiv').css('font-size','8px');
			
		}
		else if($('#user_repwd').val() == ''){
			$('#user_pwdDiv').html('비밀번호를 확인하세요.');
			$('#user_pwdDiv').css('color','red');
			$('#user_pwdDiv').css('font-size','8px');
		}
		else if($('#user_pwd').val() != $('#user_repwd').val()){
			$('#user_pwdDiv').html('비밀번호가 맞지 않습니다.');
			$('#user_pwdDiv').css('color','red');
			$('#user_pwdDiv').css('font-size','8px');
		}
		else if($('#user_email').val() == ''){
			$('#user_emailDiv').html('이메일을 입력하세요.');
			$('#user_emailDiv').css('color','red');
			$('#user_emailDiv').css('font-size','8px');
		}
		else if($('#user_nickname').val() == ''){
			$('#user_nicknameDiv').html('닉네임을 입력하세요.');
			$('#user_nicknameDiv').css('color','red');
			$('#user_nicknameDiv').css('font-size','8px');
		}
		else if(!$('input[name="flexCheckChecked"]').is(':checked')){
			$('#flexCheckCheckedDiv').html('이메일 수신에 동의해주세요.');
			$('#flexCheckCheckedDiv').css('color','red');
			$('#flexCheckCheckedDiv').css('font-size','8px');
			
		}
		else if($('#user_id').val() != $('input[name="user_id_check"]').val()){
			$('#idDiv_wite').html('중복체크하세요.');
			$('#idDiv_wite').css('color','red');
			$('#idDiv_wite').css('font-size','8pt');
		}
		else{
			/*$('#userSignupWriteForm').submit();*/
			$.ajax({
				type: 'post',
				url: '/bitcampfire/user/SignupComplete',
				data: '$(#userSignupWriteForm).serialize()',
				success: function(){
					alert('이메일 전송');
					location.href="/bitcampfire/user/userLoginForm";
					
				},
				error: function(err){
					console.log(err);
				}
				
			});
		}//else
			
		
});


/*아이디 수 세기*/
$("#user_id").keyup(function(e) {
	var content = $(this).val();
	$("#countId").val("(" + content.length + "/ 20)"); //실시간 글자수 카운팅
	$("#countId").css('font-size','8px');
	if (content.length > 20) {
		$(this).val(content.substring(0, 20));
		$('#countId').html("(200 / 최대 20자)");
	}
});

/*비밀번호 제약조건*/

/*$('#user_pwd').focusout(function(){
	
	 var pw = $("#user_pwd").val();
	 var num = pw.search(/[0-9]/g);
	 var eng = pw.search(/[a-z]/ig);
	 var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
	
	 if(pw.length < 8 || pw.length > 20){
		 
		$('#user_pwdDiv').html('8자리 ~ 20자리 이내로 입력해주세요.');
		$('#user_pwdDiv').css('color','red');
		$('#user_pwdDiv').css('font-size','8px');
		  
		 }else if(pw.search(/\s/) != -1){
			$('#user_pwdDiv').html('비밀번호는 공백 없이 입력해주세요.');
			$('#user_pwdDiv').css('color','red');
			$('#user_pwdDiv').css('font-size','8px');
		
		 }else if(num < 0 || eng < 0 || spe < 0 ){
			$('#user_pwdDiv').html('영문,숫자, 특수문자를 혼합하여 입력해주세요.');
			$('#user_pwdDiv').css('color','red');
			$('#user_pwdDiv').css('font-size','8px');
		  
		 }else {
			 $('#user_pwdDiv').val('사용가능');
			 $('#user_pwdDiv').css('color','blue');
			$('#user_pwdDiv').css('font-size','8px');
		 
		 }
	
});*/

