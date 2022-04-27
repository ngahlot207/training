public class ReqeuestBody_LWC_Create {

	public class LwcResource {
		public String filePath;
		public String source;
	}

	public String FullName;
	public Metadata Metadata;

	public class Metadata {
		public Double apiVersion;
		public Boolean isExposed;
		public LwcResources lwcResources;
	}

	public class LwcResources {
		public List<LwcResource> lwcResource;
	}

	
	public static ReqeuestBody_LWC_Create parse() {
        String json= '{"FullName" : "defaultComp12","Metadata" : {"apiVersion" : 48.0,"isExposed" : true,"lwcResources" : {"lwcResource" : [ {"filePath" : "lwc/defaultComp12/defaultComp12.js","source" : "aW1wb3J0IHsgTGlnaHRuaW5nRWxlbWVudCB9IGZyb20gJ2x3Yyc7DQoNCmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRDb21wIGV4dGVuZHMgTGlnaHRuaW5nRWxlbWVudCB7ICAgICAgIA0KDQp9"		}, {"filePath" : "lwc/defaultComp12/defaultComp12.html","source" : "PHRlbXBsYXRlPiAgICAgICAgDQoNCjwvdGVtcGxhdGU+"} ]  }}}';
		return (ReqeuestBody_LWC_Create) System.JSON.deserialize(json, ReqeuestBody_LWC_Create.class);
    }
    
    public static String jsonReturn(){
        return '{"FullName" : "defaultComp127","Metadata" : {"apiVersion" : 48.0,"isExposed" : true,"lwcResources" : {"lwcResource" : [ {"filePath" : "lwc/defaultComp127/defaultComp127.js","source" : "aW1wb3J0IHsgTGlnaHRuaW5nRWxlbWVudCB9IGZyb20gJ2x3Yyc7DQoNCmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRDb21wIGV4dGVuZHMgTGlnaHRuaW5nRWxlbWVudCB7ICAgICAgIA0KDQp9"		}, {"filePath" : "lwc/defaultComp127/defaultComp127.html","source" : "PHRlbXBsYXRlPiAgICAgICAgDQoNCjwvdGVtcGxhdGU+"} ]  }}}';
    }
}