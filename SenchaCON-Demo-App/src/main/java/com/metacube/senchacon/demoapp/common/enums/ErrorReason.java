package com.metacube.senchacon.demoapp.common.enums;

public enum ErrorReason 
{
	WRONG_PASSWORD, USER_NOT_EXISTS, SESSION_EXPIRED, SESSION_INVALID, FAILED_SAVING_DASHBOARD, NO_SAVED_DASHBOARDS, FAILED_DELETE_DASHBOARD,
	DASHBOARD_DATA_NOT_FOUND, INVALID_UNIQUE_ID, FAILED_SAVING_MANUAL_IM, DASHBOARD_ALREADY_BOOKMARKED, FAILED_BOOKMARKING_DASHBOARD,
	FAILED_DELETING_MANUAL_IM, CANT_DELETE_OTHER_USERS_MANUAL_IM, FAILED_UPLOADING_FILE, FAILED_SAVING_UPLOADED_FILE, NOT_MULTIPART_REQUEST, 
	FAILED_CONFIGURING_DATA_SOURCE, DATA_SOURCE_CONFIGURATION_CANT_BE_CANCELLED, FAILED_DELETING_DATA_SOURCES
}