package com.modak.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.modak.user.bean.UserDto;
import com.modak.user.dao.UserDao;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	

	@Override
	public String userSignup_idCheck(String user_id) {
		UserDto userDto = userDao.userSignup_idCheck(user_id);
		if(userDto == null) {
			return "non exist";
		}else {
			return "exist";
		}
	}


	@Override
	public void SignupComplete(UserDto userDto) {
		userDao.SignupComplete(userDto);
	}
}
