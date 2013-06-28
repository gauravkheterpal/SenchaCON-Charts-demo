package com.metacube.senchacon.demoapp.service;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metacube.senchacon.demoapp.common.Constants;
import com.metacube.senchacon.demoapp.common.enums.DatabaseFieldTypes;
import com.metacube.senchacon.demoapp.common.util.DateUtils;
import com.metacube.senchacon.demoapp.common.util.ModelUtils;
import com.metacube.senchacon.demoapp.common.util.Utilities;
import com.metacube.senchacon.demoapp.model.entity.DataSources;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTable;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTableFields;

@Service
public class DataSourceParserService
{
	Logger logger = LoggerFactory.getLogger(DataSourceParserService.class);

	@Autowired
	private DatabaseTableService databaseTableService;

	public ArrayList<DatabaseTableFields> processDataSourceExcelFile(File uploadedFile, DataSources dataSource)
	{
		try
		{
			FileInputStream fileInputStream = new FileInputStream(uploadedFile);
			Workbook workbook = WorkbookFactory.create(fileInputStream);
			Boolean isHeaderRowHorizontal = this.checkHeaderRow(workbook);
			dataSource.setIsHeaderHorizontal(isHeaderRowHorizontal);
			databaseTableService.saveDataSource(dataSource);
			ArrayList<DatabaseTableFields> tableFields = this.getHeaderFieldsFromExcelWorkbook(workbook, isHeaderRowHorizontal, dataSource);
			fileInputStream.close();
			return tableFields;
		}
		catch (Exception e)
		{
			logger.error("Error while processing dataSource", e);
		}
		return null;
	}

	public ArrayList<DatabaseTableFields> getHeaderFieldsFromExcelWorkbook(Workbook workbook, Boolean isHeaderRowHorizontal,
			DataSources dataSource)
	{
		ArrayList<DatabaseTableFields> tableFields = new ArrayList<DatabaseTableFields>();
		Sheet sheet = workbook.getSheetAt(0);
		//if (isHeaderRowHorizontal)
		//{
			Iterator<Row> rowIterator = sheet.iterator();
			if (rowIterator.hasNext())
			{
				Row headerRow = rowIterator.next();
				Row dataRow = rowIterator.next();
				Iterator<Cell> headerCellIterator = headerRow.cellIterator();
				Iterator<Cell> dataCellIterator = dataRow.cellIterator();
				int columnNumber = 0;
				while (headerCellIterator.hasNext() && dataCellIterator.hasNext())
				{
					Cell headerCell = headerCellIterator.next();
					Cell dataCell = dataCellIterator.next();
					String headerFieldString = null;
					try
					{
						headerFieldString = headerCell.getStringCellValue();
					}
					catch (Exception e)
					{
						logger.debug("Exception getting string value", e);
					}
					if (Utilities.verifyString(headerFieldString))
					{
						String fieldType = this.getCellFieldType(dataCell);
						if (Utilities.verifyString(fieldType))
						{
							String fieldName = this.convertHeaderStringForDatabaseFieldName(headerFieldString);
							DatabaseTableFields field = new DatabaseTableFields();
							field = ModelUtils.entityForDatabaseTableFields(field, fieldName, headerFieldString, fieldType, fieldName,
									null, null, dataSource, (long) columnNumber);
							tableFields.add(field);
						}
					}
					columnNumber++;
				}
			}
		/*}
		else
		{
			Iterator<Row> rowIterator = sheet.iterator();
			int rowNumber = 0;
			while (rowIterator.hasNext())
			{
				Row row = rowIterator.next();
				Iterator<Cell> cellIterator = row.cellIterator();
				if (cellIterator.hasNext())
				{
					Cell headerCell = cellIterator.next();
					Cell dataCell = cellIterator.next();
					String headerFieldString = null;
					try
					{
						headerFieldString = headerCell.getStringCellValue();
					}
					catch (Exception e)
					{
						logger.debug("Exception getting string value", e);
					}
					if (Utilities.verifyString(headerFieldString))
					{
						String fieldType = this.getCellFieldType(dataCell);
						if (Utilities.verifyString(fieldType))
						{
							DatabaseTableFields field = new DatabaseTableFields();
							field = ModelUtils.entityForDatabaseTableFields(field,
									this.convertHeaderStringForDatabaseFieldName(headerFieldString), headerFieldString, fieldType, null,
									null, null, dataSource, (long) rowNumber);
							tableFields.add(field);
						}
					}
				}
				rowNumber++;
			}
		}*/
		return tableFields;
	}

	public String getCellFieldType(Cell dataCell)
	{
		String fieldType = null;
		switch (dataCell.getCellType())
		{
			case Cell.CELL_TYPE_BOOLEAN:
			{
				return null;
			}
			case Cell.CELL_TYPE_NUMERIC:
			{
				Boolean isDateField = DateUtil.isCellDateFormatted(dataCell);
				if (isDateField)
				{
					fieldType = DatabaseFieldTypes.TIME_FIELD.toString();
				}
				else
				{
					fieldType = DatabaseFieldTypes.DATA_FIELD.toString();
				}
				break;
			}
			case Cell.CELL_TYPE_BLANK:
			case Cell.CELL_TYPE_STRING:
			{
				fieldType = DatabaseFieldTypes.CATEGORY_FIELD.toString();
				break;
			}
		}
		return fieldType;
	}

	public Boolean checkHeaderRow(Workbook workbook)
	{
		Boolean isHeaderRowHorizontal = true;
		Sheet sheet = workbook.getSheetAt(0);
		Iterator<Row> rowIterator = sheet.iterator();
		if (rowIterator.hasNext())
		{
			Row headerRow = rowIterator.next();
			Iterator<Cell> headerCellIterator = headerRow.cellIterator();
			while (headerCellIterator.hasNext())
			{
				Cell headerCell = headerCellIterator.next();
				switch (headerCell.getCellType())
				{
					case Cell.CELL_TYPE_BOOLEAN:
						isHeaderRowHorizontal = false;
						break;
					case Cell.CELL_TYPE_NUMERIC:
						isHeaderRowHorizontal = false;
						break;
					case Cell.CELL_TYPE_STRING:
						break;
				}
			}
		}
		return isHeaderRowHorizontal;
	}

	public String convertHeaderStringForDatabaseFieldName(String headerField)
	{
		if (Utilities.verifyString(headerField))
		{
			String convertedString = headerField.toLowerCase();
			convertedString = convertedString.replace(" ", "_");
			convertedString = convertedString.replace("-", "_");
			convertedString = convertedString.replace("\\", "_");
			convertedString = convertedString.replace("/", "_");
			Pattern pt = Pattern.compile("[\\W+]");
			Matcher match = pt.matcher(convertedString);
			while (match.find())
			{
				String s = match.group();
				convertedString = convertedString.replaceAll("\\" + s, "");
			}
			return convertedString;
		}
		return null;
	}

	public ArrayList<DatabaseTableFields> getTableFieldsFromJSONString(String tableFieldsJSON)
	{
		ArrayList<DatabaseTableFields> tableFields = new ArrayList<DatabaseTableFields>();
		try
		{
			JSONArray fieldsArray = JSONArray.fromObject(tableFieldsJSON);
			for (int index = 0; index < fieldsArray.size(); index++)
			{
				DatabaseTableFields temp = new DatabaseTableFields();
				JSONObject fieldObject = fieldsArray.getJSONObject(index);
				if (Utilities.verifyString(fieldObject.optString("id")))
				{
					temp = databaseTableService.findDatabaseTableFieldById(fieldObject.optLong("id"));
				}
				String fieldName = fieldObject.optString("fieldName");
				if (Utilities.verifyString(fieldName))
				{
					temp.setFieldName(fieldName);
				}
				String fieldLabel = fieldObject.optString("fieldLabel");
				if (Utilities.verifyString(fieldLabel))
				{
					temp.setFieldLabel(fieldLabel);
				}
				String fieldType = fieldObject.optString("fieldType");
				if (Utilities.verifyString(fieldType))
				{
					temp.setFieldType(fieldType);
				}
				String fieldSelection = fieldObject.optString("fieldSelection");
				if (Utilities.verifyString(fieldSelection))
				{
					temp.setFieldSelection(fieldSelection);
				}
				String fieldCalculation = fieldObject.optString("fieldCalculation");
				if (Utilities.verifyString(fieldCalculation))
				{
					temp.setFieldCalculation(fieldCalculation);
				}				
				tableFields.add(temp);
			}
			return tableFields;
		}
		catch (Exception e)
		{
			logger.debug("Error parsing fieldsJSON", e);
		}
		return null;
	}

	public DatabaseTable createDatabaseTableForDataSource(DataSources dataSource, ArrayList<DatabaseTableFields> tableFields)
	{
		DatabaseTable databaseTable = new DatabaseTable();
		String databaseTableName = this.getDatabaseTableNameForDataSourceName(dataSource.getDataSourceName());
		String createSQL = this.prepareSQLForDataSource(dataSource, tableFields, databaseTableName);
		if (databaseTableService.executePreparedSQL(createSQL))
		{
			databaseTable.setTableName(databaseTableName);
			databaseTable.setName(dataSource.getDataSourceName());
			if (this.inserDataForDataSourceIntoDatabase(dataSource, tableFields, databaseTable))
			{
				return databaseTable;
			}
		}
		return null;
	}

	public String prepareSQLForDataSource(DataSources dataSource, ArrayList<DatabaseTableFields> tableFields, String databaseTableName)
	{
		String createSQL = "CREATE TABLE IF NOT EXISTS ";
		createSQL = createSQL + "`" + databaseTableName + "` (";
		String fieldsPart = "`id` int(11) NOT NULL AUTO_INCREMENT";
		String indexPart = ", PRIMARY KEY (`id`)";
		int indexCount = 0;
		for (int index = 0; index < tableFields.size(); index++)
		{
			DatabaseTableFields field = tableFields.get(index);
			if (field.getDataSourceRowColumnNumber() != null && !field.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.IGNORE.toString()))
			{
				if (field.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.TIME_FIELD.toString()))
				{
					fieldsPart = fieldsPart + ", `" + field.getFieldName() + "`" + " timestamp NULL DEFAULT NULL";
				}
				else if (field.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.DATA_FIELD.toString()))
				{
					fieldsPart = fieldsPart + ", `" + field.getFieldName() + "`" + " int(20) DEFAULT NULL";
				}
				else if (field.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.CATEGORY_FIELD.toString()))
				{
					fieldsPart = fieldsPart + ", `" + field.getFieldName() + "`" + " varchar(200) DEFAULT NULL";
				}
				if (indexCount < 64)
				{
					indexPart = indexPart + ", KEY `" + field.getFieldName() + "_index` (`" + field.getFieldName() + "`)";
					indexCount++;
				}				
			}
		}
		createSQL = createSQL + fieldsPart + indexPart + ") ENGINE=InnoDB DEFAULT CHARSET=utf8";
		return createSQL;
	}

	public String getDatabaseTableNameForDataSourceName(String dataSourceName)
	{
		return this.convertHeaderStringForDatabaseFieldName(dataSourceName) + "_" + DateUtils.getDateTimeStringForAppending();
	}

	public Boolean inserDataForDataSourceIntoDatabase(DataSources dataSource, ArrayList<DatabaseTableFields> tableFields,
			DatabaseTable databaseTable)
	{
		ArrayList<String> sqlStatements = new ArrayList<String>();
		String tempSQL, insertSQL = "INSERT INTO `" + databaseTable.getTableName() + "`";
		insertSQL = insertSQL + " (" + this.getInsertPartForTableFields(tableFields) + ") VALUES ";
		//HashMap<Long,DatabaseTableFields> columnMap = this.getDataSourceColumnMap(tableFields);
		try
		{
			tempSQL = insertSQL;
			FileInputStream fileInputStream = new FileInputStream(new File(dataSource.getDataSourceFilePath()));
			Workbook workbook = WorkbookFactory.create(fileInputStream);
			Sheet sheet = workbook.getSheetAt(0);
			//if (dataSource.getIsHeaderHorizontal())
			//{
				Iterator<Row> rowIterator = sheet.iterator();
				Row dataRow = rowIterator.next(); // Skip Header Row
				int rowNumber = 0, batchRowNumber = 0, batchNumber = 1;
				while (rowIterator.hasNext())
				{
					String rowSQL = "";
					dataRow = rowIterator.next(); 
					for (int index = 0; index < tableFields.size(); index++)
					{
						Long columnNumber = tableFields.get(index).getDataSourceRowColumnNumber();
						if (tableFields.get(index).getFieldType().equalsIgnoreCase(DatabaseFieldTypes.IGNORE.toString()))
						{
							continue;
						}
						if (columnNumber == null)
						{
							continue;
						}
						else
						{
							if (index != 0)
							{
								rowSQL = rowSQL + ", ";
							}
							Cell dataCell = dataRow.getCell(columnNumber.intValue(), Row.CREATE_NULL_AS_BLANK);
							switch(dataCell.getCellType())
							{
								case Cell.CELL_TYPE_BOOLEAN:
								{
									rowSQL = rowSQL + "'" + dataCell.getBooleanCellValue() + "'";
									break;
								}
								case Cell.CELL_TYPE_NUMERIC:
								{
									Boolean isDateField = DateUtil.isCellDateFormatted(dataCell);
									if (isDateField)
									{
										Date date = dataCell.getDateCellValue();
										rowSQL = rowSQL + "'" + new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_HOURLY).format(date) + "'";
									}
									else
									{
										rowSQL = rowSQL + "'" + dataCell.getNumericCellValue() + "'";
									}
									break;
								}
								case Cell.CELL_TYPE_BLANK:
								{
									rowSQL = rowSQL + "NULL";
									break;
								}
								case Cell.CELL_TYPE_STRING:
								{
									rowSQL = rowSQL + "'" + this.escapeStringCellValueForSQL(dataCell.getStringCellValue()) + "'";
									break;
								}
							}
						}
					}
					if (batchRowNumber != 0)
					{
						tempSQL = tempSQL + ", ";
					}
					tempSQL = tempSQL + "(" + rowSQL + ")";
					rowNumber++;
					batchRowNumber++;
					if (rowNumber >= (Constants.SQL_STATEMENT_BATCH_SIZE * batchNumber))
					{
						sqlStatements.add(tempSQL);
						tempSQL = insertSQL;
						batchNumber++;
						batchRowNumber = 0;
					}
					/*Iterator<Cell> dataCellIterator = dataRow.cellIterator();
					int columnNumber = 0;
					while (dataCellIterator.hasNext())
					{
						if (columnNumber != 0)
						{
							rowSQL = rowSQL + ", ";
						}
						Cell dataCell = dataCellIterator.next();
						switch(dataCell.getCellType())
						{
							case Cell.CELL_TYPE_BOOLEAN:
							{
								rowSQL = rowSQL + "'" + dataCell.getBooleanCellValue() + "'";
								break;
							}
							case Cell.CELL_TYPE_NUMERIC:
							{
								Boolean isDateField = DateUtil.isCellDateFormatted(dataCell);
								if (isDateField)
								{
									Date date = dataCell.getDateCellValue();
									rowSQL = rowSQL + "'" + new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_HOURLY).format(date) + "'";
								}
								else
								{
									rowSQL = rowSQL + "'" + dataCell.getNumericCellValue() + "'";
								}
								break;
							}
							case Cell.CELL_TYPE_BLANK:
							{
								rowSQL = rowSQL + "NULL";
								break;
							}
							case Cell.CELL_TYPE_STRING:
							{
								rowSQL = rowSQL + "'" + this.escapeStringCellValueForSQL(dataCell.getStringCellValue()) + "'";
								break;
							}
						}
						columnNumber++;
					}
					if (rowNumber != 0)
					{
						insertSQL = insertSQL + ", ";
					}
					insertSQL = insertSQL + "(" + rowSQL + ")";
					rowNumber++;*/
				}
			/*}
			else
			{

			}*/
			/*if (Utilities.verifyString(insertSQL))
			{
				//logger.debug(insertSQL);
				return databaseTableService.executePreparedSQL(insertSQL);
			}*/
			fileInputStream.close();
			if (sqlStatements.size() > 0)
			{
				return databaseTableService.executePreparedSQL(sqlStatements);
			}
			return false;
		}
		catch (Exception e)
		{
			logger.debug("Error inserting dataSource data into table.", e);
		}
		return false;
	}
	
	public HashMap<Long, DatabaseTableFields> getDataSourceColumnMap(ArrayList<DatabaseTableFields> tableFields)
	{
		HashMap<Long, DatabaseTableFields> columnMap = new HashMap<Long, DatabaseTableFields>();
		for (int index = 0; index < tableFields.size(); index++)
		{
			DatabaseTableFields temp = tableFields.get(index);
			if (temp.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.IGNORE.toString()))
			{
				continue;
			}
			if (temp.getDataSourceRowColumnNumber() != null)
			{
				columnMap.put(temp.getDataSourceRowColumnNumber(), temp);
			}
		}		
		return columnMap;
	}
	
	public String escapeStringCellValueForSQL(String cellValue)
	{
		cellValue = cellValue.replaceAll("'", " ");
		return cellValue;
	}
	
	public String getInsertPartForTableFields(ArrayList<DatabaseTableFields> tableFields)
	{
		String insertPart = "";
		for (int index = 0; index < tableFields.size(); index++)
		{
			DatabaseTableFields temp = tableFields.get(index);
			if (temp.getDataSourceRowColumnNumber() != null && !temp.getFieldType().equalsIgnoreCase(DatabaseFieldTypes.IGNORE.toString()))
			{
				if (index != 0)
				{
					insertPart = insertPart + ", ";
				}
				insertPart = insertPart + "`" + temp.getFieldName() + "`";
			}
		}
		return insertPart;
	}
}