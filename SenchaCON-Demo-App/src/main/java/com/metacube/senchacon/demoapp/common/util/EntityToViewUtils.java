package com.metacube.senchacon.demoapp.common.util;

import java.util.ArrayList;

import com.metacube.senchacon.demoapp.model.entity.DatabaseTable;
import com.metacube.senchacon.demoapp.model.entity.DatabaseTableFields;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableFieldsView;
import com.metacube.senchacon.demoapp.view.model.DatabaseTableView;

public class EntityToViewUtils
{
	
	public static ArrayList<DatabaseTableFieldsView> databaseTableFieldsEntityToView(ArrayList<DatabaseTableFields> entityList)
	{
		ArrayList<DatabaseTableFieldsView> viewList = new ArrayList<DatabaseTableFieldsView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(databaseTableFieldsEntityToView(entityList.get(i)));
			}			
		}
		return viewList;
	}
	
	public static ArrayList<DatabaseTableView> databaseTableEntityToView(ArrayList<DatabaseTable> entityList)
	{
		ArrayList<DatabaseTableView> viewList = new ArrayList<DatabaseTableView>();
		if (entityList != null && entityList.size() > 0)
		{			
			for (int i = 0; i < entityList.size(); i++)
			{
				viewList.add(databaseTableEntityToView(entityList.get(i)));
			}			
		}
		return viewList;
	}
	
	public static DatabaseTableView databaseTableEntityToView(DatabaseTable entity)
	{
		if (entity != null)
		{
			DatabaseTableView view = new DatabaseTableView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setTableName(entity.getTableName());
			view.setName(entity.getName());
			view.setDescription(entity.getDescription());
			view.setIsActive(entity.getIsActive());
			return view;
		}
		return null;
	}
	
	public static DatabaseTableFieldsView databaseTableFieldsEntityToView(DatabaseTableFields entity)
	{
		if (entity != null)
		{
			DatabaseTableFieldsView view = new DatabaseTableFieldsView();
			view.setId(entity.getId());
			view.setDateCreated(entity.getDateCreated());
			view.setDateModified(entity.getDateModified());
			view.setDatabaseTable(databaseTableEntityToView(entity.getDatabaseTable()));
			view.setFieldName(entity.getFieldName());
			view.setFieldLabel(entity.getFieldLabel());
			view.setFieldType(entity.getFieldType());
			view.setFieldSelection(entity.getFieldSelection());
			view.setFieldCalculation(entity.getFieldCalculation());
			view.setFieldDescription(entity.getFieldDescription());
			return view;
		}
		return null;
	}
}