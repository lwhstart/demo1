package WebRoot.exdm;

import java.io.IOException;

import org.hoyi.DB.ctrl.FILTER;
import org.hoyi.dishop.Hoyipage;
import org.hoyi.wb.comment.PostParam;
import org.hoyi.wb.comment.RequestMode;
import org.hoyi.wb.comment.RequestType;
import org.hoyi.web.ctrls.Repeater;

import model.user;

@RequestMode(MODE={RequestType.GET, RequestType.POST})
public class usermanage extends Hoyipage{
	
	Repeater repuser = new Repeater("repuser", pageroot);
	
	@Override
	@RequestMode(MODE={RequestType.POST})
	public void OnInit() throws IOException {
		if (this.Behaviored) 
			return;
		repuser.FooterStyle = "A";
		// 这里可以上来什么事情都不干，直接发送获取项目列表的请求就行了.
		SetUserSource();
		
		super.OnInit();
	}
	
	@PostParam(ENTITY=user.class)
	@RequestMode(MODE={RequestType.POST})
	public void AddUser()
	{
		user _user = this.getModelFromReq(user.class);
		int ret = _user.Insert();
		
		if(ret == 1){
			this.WriteUTF8HTML("pgc(curindex); $('#modiModal').modal(\"hide\");");
		}else{
			this.WriteUTF8HTML("alert('新增失败');");
		}
	}
	
	@PostParam(PARMS={"userid"})
	@RequestMode(MODE={RequestType.POST})
	public void DELETE()
	{
		String _userid = this.getParams("userid");
		int ret2 = user.E().Where(user.userid.Equals(_userid)).Delete();

		if(ret2 > 0){
			this.WriteUTF8HTML("$('#myModal').modal('hide');$('#tr" + _userid + "').empty();pgc(curindex);");
		}else{
			this.WriteUTF8HTML("alert('删除失败');");
		}
	}
	
	@PostParam(ENTITY=user.class)
	@RequestMode(MODE={RequestType.POST})
	public void UPDATEBYID()
	{
		user _user = this.getModelFromReq(user.class);
		int ret1 = _user.Update();
		
		if(ret1 > 0){
			this.WriteUTF8HTML("pgc(curindex);$('#modiModal').modal('hide');");
		}else{
			this.WriteUTF8HTML("alert('更新失败');");
		}
	}

	@RequestMode(MODE={RequestType.POST})
	public void SetUserSource() {
		String filter = this.getParams("filter");
		FILTER fil = null;
		if (filter != null && filter.length() > 0) {
			filter = "%" + filter + "%";
			
			fil = user.userid.Like(filter).OR(user.userid.Like(filter)).OR(user.username.Like(filter)).OR(user.usertype.Like(filter)).OR(user.createtime.Like(filter));	
		}
		
		repuser.DataCount = user.E().Where(fil).Count();
		repuser.PageIndex = this.getpgindex();
		repuser.PageSize = 10;
		repuser.EntitySource = user.E().Where(fil).DataCount(repuser.DataCount)
				.PgSize(repuser.PageSize).Jump(repuser.PageIndex).Select();
	}

	@RequestMode(MODE={RequestType.POST})
	public void GetUser() {
		SetUserSource();
		String Template = this.RenderChild(repuser, repuser.DataCount);
		this.WriteUTF8HTML(Template);
	}

}
