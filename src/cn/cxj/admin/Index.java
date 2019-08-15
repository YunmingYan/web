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
 * Servlet implementation class IndexMobile
 */
@WebServlet("/index")
public class Index extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Index() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//解决跨域请求
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Content-Type", "*");
		//从数据库获取新闻的数据
		String strSql = "select * from atricle order by pubtime desc limit 0,5";
		ArrayList<HashMap<String, Object>> queryArr = Dao.query(strSql);
		String jsonString = JSON.toJSONString(queryArr);
		
		response.setContentType("text/json");
		
		//新闻内容JSON
		response.getWriter().println(jsonString);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
