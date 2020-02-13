package WebRoot;

import java.io.IOException;

import org.hoyi.dishop.Hoyipage;
import org.hoyi.wb.comment.RequestMode;
import org.hoyi.wb.comment.RequestType;

@RequestMode(MODE = {RequestType.POST,RequestType.GET})
public class index extends Hoyipage {

//	@Override
//	public void OnPreInit() throws IOException {
//		this.WriteUTF8HTML("Hello World!~");
//	}
	public String GetName() {
		return "UserName";
	}
	/*public String GetInfos() {
		return "AA";
	}*/
	@RequestMode(MODE= {RequestType.POST,RequestType.GET})
	public void GetInfos() {
		this.WriteUTF8JSONDATAMSG(1, "msg is", "AAA");
	}
	@RequestMode(MODE= {RequestType.POST})
	public void GetServInfos() {
		this.WriteUTF8HTML("$('#input2').val('server.infos');");
	}
	
	
}
