package com.modak.board.service;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

import com.modak.board.bean.BoardDTO;
import com.modak.board.bean.BoardPaging;
import com.modak.board.dao.BoardDAO;

public class BoardViewServiceImpl implements BoardViewService {

	@Autowired
	private HttpSession session;
	
	@Autowired
	private BoardDAO boardDAO;
	
	@Autowired
	private BoardPaging boardPaging;
	
	@Override
	public Map<String, Object> getBoardView(String seq) {
		
		if (session.getAttribute("userHit")!=null) {
			session.removeAttribute("userHit");
		}
		BoardDTO boardDTO = boardDTO.getBoardView(seq);
		return null;
	}

	
}
