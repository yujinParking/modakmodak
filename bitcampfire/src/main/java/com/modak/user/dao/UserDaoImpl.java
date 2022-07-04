package com.modak.user.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.modak.user.bean.UserDto;

@Repository
@Transactional
public class UserDaoImpl implements UserDao {
	@Autowired
	private SqlSession session;
	/* private final String namespace = "userSQL."; */
	
	@Override
	public UserDto userSignup_idCheck(String user_id) {
		return session.selectOne("userSQL.userSignup_idCheck",user_id);
	}

	@Override
	public void SignupComplete(UserDto userDto) {
		session.insert("userSQL.SignupComplete",userDto);
		
	}
	
	
}
