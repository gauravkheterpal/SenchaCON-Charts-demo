package com.metacube.senchacon.demoapp.service;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.model.dao.UserDAO;
import com.metacube.senchacon.demoapp.model.entity.User;
import com.metacube.senchacon.demoapp.model.entity.UserSession;

@Service
public class UserService 
{
	@Autowired
	private UserDAO userDAO;
	
	final static Logger logger = LoggerFactory.getLogger(UserService.class);
	
	public String getUsers()
	{
		ArrayList<User> users = userDAO.getAllUsers();
		return users.toString();
	}
	
	public User getUser(Long userId)
	{
		return userDAO.getUser(userId);
	}
	
	public User getUser(String userName)
	{
		return userDAO.getUser(userName);
	}
	
	public UserSession getUserSession(String accessKey)
	{
		return userDAO.getUserSession(accessKey);
	}
	
	public UserSession createSession(User user)
	{
		UserSession newSession = UserSession.createNewSession(user);
		userDAO.saveUserSession(newSession);
		return newSession;
	}
	
	public User createUser(User user)
	{
		return userDAO.saveUser(user);
	}
}
