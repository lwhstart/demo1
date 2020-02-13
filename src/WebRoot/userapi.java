package WebRoot;

import org.hoyi.dishop.Hoyipage;

public class userapi extends Hoyipage {
	public void getuser() {
		this.WriteUTF8JSONDATAMSG(1, "获取成功", "user.data");
	
	}
}
