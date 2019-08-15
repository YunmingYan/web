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
 * Servlet implementation class RegisterG
 */
@WebServlet("/admin/register")
public class RegisterG extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterG() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: register").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//解决跨域请求
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
						//response.getWriter().println("注册成功");
						
						HashMap<String, Object> user = new HashMap<>();
						user.put("username", username);
						user.put("password", password);
						Dao.insertObj("user", user);
						HashMap<Object, Object> info = new HashMap<>();
						info.put("code","200");
						info.put("msg","Register success!");
						String jsonString = JSON.toJSONString(info);
						response.getWriter().println(jsonString);
						
					}else {
						//response.getWriter().println("登录成功");
						
						HashMap<Object, Object> info = new HashMap<>();
						info.put("code","400");
						info.put("msg","Register fail!Username has exited.");
						String jsonString = JSON.toJSONString(info);
						response.getWriter().println(jsonString);
					}
					
				}
				else {
					HashMap<Object, Object> info = new HashMap<>();
					info.put("msg","Register fail!Username or password is null");
					info.put("code","400");
					String jsonString = JSON.toJSONString(info);
					response.getWriter().println(jsonString);
				}
	}

}
