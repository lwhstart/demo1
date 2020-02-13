package model;

import org.hoyi.DB.comment.DbAttrANNO;
import org.hoyi.DB.comment.EntityAttrANNO;
import org.hoyi.DB.comment.datatype;
import org.hoyi.DB.ctrl.HOYI;
import org.hoyi.DB.ctrl.HOYICMD;
import org.hoyi.DB.ents.Entity;
import org.hoyi.DB.model.AttField;


/**
*  实体类 user 属性说明自动提取数据库字段的描述信息.
*/
@EntityAttrANNO(tablename="user", comment="用户信息")
public class user extends Entity{
	//#region 静态字段
	/// <summary>
	/// 用户信息编号
	/// </summary>
	public static AttField userid = new AttField("userid");
	/// <summary>
	/// 用户信息名称
	/// </summary>
	public static AttField username = new AttField("username");
	/// <summary>
	/// 用户信息类型
	/// </summary>
	public static AttField usertype = new AttField("usertype");
	/// <summary>
	/// 创建时间
	/// </summary>
	public static AttField createtime = new AttField("createtime");
	/// <summary>
	/// 备注
	/// </summary>
	public static AttField notes = new AttField("notes");
	   
	//#endregion 静态字段
	
	
	//#region 字段
	/// <summary>
	/// 用户信息编号
	/// </summary>	
	@DbAttrANNO(type=datatype.Bigint,  Length = 30, Comment = "用户信息编号", FieldName = "userid",isPK= true,Identity=true)
	public String _userid ;

	/// <summary>
	/// 用户信息名称
	/// </summary>	
	@DbAttrANNO(type=datatype.Varchar,  Length = 50, Comment = "用户信息名称", FieldName = "username")
	public String _username ;

	/// <summary>
	/// 用户信息类型
	/// </summary>	
	@DbAttrANNO(type=datatype.Varchar,  Length = 50, Comment = "用户信息类型", FieldName = "usertype")
	public String _usertype ;

	/// <summary>
	/// 创建时间
	/// </summary>	
	@DbAttrANNO(type=datatype.Varchar,  Length = 20, Comment = "创建时间", FieldName = "createtime")
	public String _createtime ;

	/// <summary>
	/// 备注
	/// </summary>	
	@DbAttrANNO(type=datatype.Varchar,  Length = 50, Comment = "备注", FieldName = "notes", NotNULL = true)
	public String _notes ;

	 
	
	
	/// <summary>
	/// 用户信息编号
	/// </summary>	
	
	public String getUserid(){
		if(this._userid == null)
			return "";
		return this._userid;
	}
	
	public void setUserid(String F_userid)
	{
		this._userid = F_userid;
		
	}
	/// <summary>
	/// 用户信息名称
	/// </summary>	
	
	public String getUsername(){
		if(this._username == null)
			return "";
		return this._username;
	}
	
	public void setUsername(String F_username)
	{
		this._username = F_username;
		
	}
	/// <summary>
	/// 用户信息类型
	/// </summary>	
	
	public String getUsertype(){
		if(this._usertype == null)
			return "";
		return this._usertype;
	}
	
	public void setUsertype(String F_usertype)
	{
		this._usertype = F_usertype;
		
	}
	/// <summary>
	/// 创建时间
	/// </summary>	
	
	public String getCreatetime(){
		if(this._createtime == null)
			return "";
		return this._createtime;
	}
	
	public void setCreatetime(String F_createtime)
	{
		this._createtime = F_createtime;
		
	}
	/// <summary>
	/// 备注
	/// </summary>	
	
	public String getNotes(){
		if(this._notes == null)
			return "";
		return this._notes;
	}
	
	public void setNotes(String F_notes)
	{
		this._notes = F_notes;
		
	}
	 
	//#endregion 字段
	
				
	public static user NEW(){
		return new user();
	} 
	
	public user() {
	}
	
	public user( String F_username ,  String F_usertype ,  String F_createtime ,  String F_notes ){
		 this._username =  F_username;
		 this._usertype =  F_usertype;
		 this._createtime =  F_createtime;
		 this._notes =  F_notes;
		
	}	
	
	public user( String F_userid ,  String F_username ,  String F_usertype ,  String F_createtime ,  String F_notes ){
		 this._userid =  F_userid;
		 this._username =  F_username;
		 this._usertype =  F_usertype;
		 this._createtime =  F_createtime;
		 this._notes =  F_notes;
		
	}	
	
	//#region 语法所迫, 初始化命令.
	
	public static HOYICMD E() {
			return HOYI.E(user.class);
	}
	
	@Override
	public String getFirstfield() {
		// TODO Auto-generated method stub
		return "userid";
	}
	
	@Override
	public String getSecondfield() {
		// TODO Auto-generated method stub
		return "username";
	}

	//#endregion 语法所迫, 初始化命令.
}
