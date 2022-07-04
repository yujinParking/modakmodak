package com.modak.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.modak.user.bean.UserDto;
import com.modak.user.service.UserService;

@Controller
@RequestMapping(value = "user")
public class UserSignupController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(value = "userSignupForm")
	public String userSignupForm() {
		return "/user/userSignupForm";
	}
	
	@PostMapping(value = "userSignup_idCheck")
	@ResponseBody
	public String userSignup_idCheck(@RequestParam String user_id) {
		return userService.userSignup_idCheck(user_id);
	}
	
	@PostMapping(value = "SignupComplete")
	@ResponseBody
	public void SignupComplete(@ModelAttribute UserDto userDto) {
		userService.SignupComplete(userDto);
		
	}
	
	@GetMapping(value = "userLoginForm")
	public String userLoginForm() {
		return "/user/userLoginForm";
	}
	
	

}
