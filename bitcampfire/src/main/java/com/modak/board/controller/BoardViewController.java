package com.modak.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.modak.board.service.BoardViewService;

@Controller
@RequestMapping(value = "/board")
public class BoardViewController {
	
	@Autowired
	private BoardViewService boardViewService;
	
	/* @GetMapping(value = "boardView") */
	
	
	
	
}
