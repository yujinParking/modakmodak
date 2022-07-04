package com.modak.user.dao;

import com.modak.user.bean.UserDto;

public interface UserDao {

	public UserDto userSignup_idCheck(String user_id);

	public void SignupComplete(UserDto userDto);

}
