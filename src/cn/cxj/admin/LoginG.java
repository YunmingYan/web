package cn.cxj.admin;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.alibaba.fastjson.JSON;

import cn.sxt.db.Dao;

/**
 * Servlet implementation class Login
 */
@WebServlet("/admin/login")
public class LoginG extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginG() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: login").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//Ω‚æˆøÁ”Ú«Î«Û
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Content-Type", "*");
		response.setContentType("text/json");
		
		String username = request.getParameter("userName");
		String password = request.getParameter("password");

		String strSql = "select * from user where username=? and password =? ";
		Object[] params = {username,password};
		ArrayList<HashMap<String, Object>> queryArr = Dao.query(strSql,params);
		//System.out.println(queryArr.size());
		if (username!=null&&password!=null) {
		if(queryArr.size()==0) {
			//response.getWriter().println("’À∫≈ªÚ√‹¬Î¥ÌŒÛ");
			
			HashMap<Object, Object> info = new HashMap<>();
			info.put("code","400");
			info.put("msg","Login fail!Username or password is wrong");
			String jsonString = JSON.toJSONString(info);
			response.getWriter().println(jsonString);
			
		}else {
			//response.getWriter().println("µ«¬º≥…π¶");
			
			HashMap<Object, Object> info = new HashMap<>();
			info.put("code","200");
			info.put("msg","Login success!");
			String jsonString = JSON.toJSONString(info);
			response.getWriter().println(jsonString);
		}
		}
		else {
			HashMap<Object, Object> info = new HashMap<>();
			info.put("msg","Login fail!Username or password is null");
			info.put("code","400");
			String jsonString = JSON.toJSONString(info);
			response.getWriter().println(jsonString);
		}
	}

}
