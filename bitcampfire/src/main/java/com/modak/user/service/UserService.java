package com.modak.user.service;

import com.modak.user.bean.UserDto;

public interface UserService {


	public String userSignup_idCheck(String user_id);

	public void SignupComplete(UserDto userDto);

}
