package com.modak.board.service;

import java.util.Map;

import com.modak.board.bean.BoardDTO;

public interface BoardViewService {
	
	public Map<String, Object> getBoardView(String seq);
}
