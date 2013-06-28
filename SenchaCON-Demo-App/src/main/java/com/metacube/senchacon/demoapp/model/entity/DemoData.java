package com.metacube.senchacon.demoapp.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "demo_data")
public class DemoData {
	
	/*TABLE `demo_data`
			`set` INT(10) NOT NULL,
			`datestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
			`timestamp` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
			`length` INT(10) NULL DEFAULT NULL,
			`reason` VARCHAR(20) NULL DEFAULT NULL,
			`subreason` VARCHAR(20) NULL DEFAULT NULL,
			`Subreason1` VARCHAR(20) NULL DEFAULT NULL,
			`Subreason2` VARCHAR(20) NULL DEFAULT NULL,
			`code` INT(10) NULL DEFAULT NULL,
			`User` VARCHAR(50) NULL DEFAULT NULL,
			`Part` VARCHAR(50) NULL DEFAULT NULL,
			`Cycles` INT(10) NULL DEFAULT NULL,
			`ShiftKey` INT(10) NULL DEFAULT NULL,
			`PRunID` INT(10) NOT NULL,
			`EndCycles` INT(10) NULL DEFAULT NULL,
			`Terminated` BIT(1) NOT NULL,
			`note` TEXT NULL,
			`AddField1` VARCHAR(50) NULL DEFAULT NULL,
			`DayOfWeek` VARCHAR(255) NULL DEFAULT NULL,
			`HourOfDay` INT(10) NULL DEFAULT NULL,
			`Hour` VARCHAR(255) NULL DEFAULT NULL,
			`DateOfMonth` INT(10) NULL DEFAULT NULL,
			`Month` VARCHAR(255) NULL DEFAULT NULL,
			`Week` VARCHAR(255) NULL DEFAULT NULL,
			`MonthAbbr` VARCHAR(255) NULL DEFAULT NULL,
			`Date` VARCHAR(255) NULL DEFAULT NULL
		*/
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	Long id;
	
	@Column( name = "set" )
	int set;
	
	@Column( name = "datestamp" )
	Date dateStamp;
	
	@Column( name = "timestamp" )
	Date timeStamp;
	
	@Column( name = "length" )
	int length;
	
	@Column( name = "reason" )
	String reason;
	
	@Column( name = "subreason" )
	String subReason;
	
	@Column( name = "Subreason1" )
	String subReason1;
	
	@Column( name = "Subreason2" )
	String subReason2;
	
	@Column( name = "code" )
	int code;
	
	@Column( name = "User" )	
	String user;
	
	@Column( name = "Part" )
	String part;
	
	@Column( name = "Cycles" )
	int cycles;
	
	@Column( name = "ShiftKey" )
	int shiftKey;
	
	@Column( name = "PRunID" )
	int prunId;
	
	@Column( name = "EndCycles" )
	int endCycles;
	
	@Column( name = "Terminated" )
	boolean terminated;
	
	@Column( name = "note" )
	String note;
	
	@Column( name = "AddField1" )
	String addField1;
	
	@Column( name = "DayOfWeek" )
	String dayOfWeek;
	
	@Column( name = "HourOfDay" )
	String hourOfDay;
	
	@Column( name = "Hour" )
	String hour;
	
	@Column( name = "DateOfMonth" )
	int dateOfMonth;
	
	@Column( name = "Month" )
	String month;
	
	@Column( name = "Week" )
	String week;
	
	@Column( name = "MonthAbbr" )
	String monthAbbr;
	
	@Column( name = "Date" )
	String date;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getSet() {
		return set;
	}

	public void setSet(int set) {
		this.set = set;
	}

	public Date getDateStamp() {
		return dateStamp;
	}

	public void setDateStamp(Date dateStamp) {
		this.dateStamp = dateStamp;
	}

	public Date getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getSubReason() {
		return subReason;
	}

	public void setSubReason(String subReason) {
		this.subReason = subReason;
	}

	public String getSubReason1() {
		return subReason1;
	}

	public void setSubReason1(String subReason1) {
		this.subReason1 = subReason1;
	}

	public String getSubReason2() {
		return subReason2;
	}

	public void setSubReason2(String subReason2) {
		this.subReason2 = subReason2;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPart() {
		return part;
	}

	public void setPart(String part) {
		this.part = part;
	}

	public int getCycles() {
		return cycles;
	}

	public void setCycles(int cycles) {
		this.cycles = cycles;
	}

	public int getShiftKey() {
		return shiftKey;
	}

	public void setShiftKey(int shiftKey) {
		this.shiftKey = shiftKey;
	}

	public int getPrunId() {
		return prunId;
	}

	public void setPrunId(int prunId) {
		this.prunId = prunId;
	}

	public int getEndCycles() {
		return endCycles;
	}

	public void setEndCycles(int endCycles) {
		this.endCycles = endCycles;
	}

	public boolean isTerminated() {
		return terminated;
	}

	public void setTerminated(boolean terminated) {
		this.terminated = terminated;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getAddField1() {
		return addField1;
	}

	public void setAddField1(String addField1) {
		this.addField1 = addField1;
	}

	public String getDayOfWeek() {
		return dayOfWeek;
	}

	public void setDayOfWeek(String dayOfWeek) {
		this.dayOfWeek = dayOfWeek;
	}

	public String getHourOfDay() {
		return hourOfDay;
	}

	public void setHourOfDay(String hourOfDay) {
		this.hourOfDay = hourOfDay;
	}

	public String getHour() {
		return hour;
	}

	public void setHour(String hour) {
		this.hour = hour;
	}

	public int getDateOfMonth() {
		return dateOfMonth;
	}

	public void setDateOfMonth(int dateOfMonth) {
		this.dateOfMonth = dateOfMonth;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public String getWeek() {
		return week;
	}

	public void setWeek(String week) {
		this.week = week;
	}

	public String getMonthAbbr() {
		return monthAbbr;
	}

	public void setMonthAbbr(String monthAbbr) {
		this.monthAbbr = monthAbbr;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
}