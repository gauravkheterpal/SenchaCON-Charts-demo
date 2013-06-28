package com.metacube.senchacon.demoapp.view.manager;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.metacube.senchacon.demoapp.common.enums.ErrorReason;
import com.metacube.senchacon.demoapp.common.enums.JSONMessages;
import com.metacube.senchacon.demoapp.common.util.EntityToViewUtils;
import com.metacube.senchacon.demoapp.common.util.JSONUtils;
import com.metacube.senchacon.demoapp.model.entity.User;
import com.metacube.senchacon.demoapp.model.entity.UserSession;
import com.metacube.senchacon.demoapp.service.UserService;

@Component
public class UserManager 
{	
	final static Logger logger = LoggerFactory.getLogger(UserManager.class);

	@Autowired
	private UserService userService;
	
	public String signinUser(String userName, String password)
	{
		User user = userService.getUser(userName);
		if (user != null)
		{
			if (password != null && user.getPassword().equals(password))
			{
				UserSession session = userService.createSession(user);
				return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_LOGIN, EntityToViewUtils.userSessionEntityToView(session)).toString();
			}
			else
			{
				return JSONUtils.getErrorJSON(ErrorReason.WRONG_PASSWORD).toString();
			}
		}
		else
		{
			return JSONUtils.getErrorJSON(ErrorReason.USER_NOT_EXISTS).toString();
		}
	}
	
	public String checkUserSession(Long userId, String accessKey)
	{
		UserSession session = userService.getUserSession(accessKey);
		if (session != null && session.getUser().getId() == userId)
		{
			if (new Date().getTime() < session.getExpiryDate().getTime())
			{
				return JSONUtils.getMessageJSON(JSONMessages.SUCCESS_LOGIN, EntityToViewUtils.userSessionEntityToView(session)).toString();
			}
			else
			{
				return JSONUtils.getErrorJSON(ErrorReason.SESSION_EXPIRED);
			}
		}
		else
		{
			return JSONUtils.getErrorJSON(ErrorReason.SESSION_INVALID);
		}
	}
	
	public String createNewUser()
	{
		//User user = new User();
		return null;
	}
}