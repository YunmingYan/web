package cn.sxt.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DButil {
	static {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static Connection con() {
		Connection connection = null;
		String username = "root";
		String password = "123456";
		String database = "agriculture";
		String url = "jdbc:mysql://localhost:3306/"+database+"?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&useSSL=false";
		try {
			connection = DriverManager.getConnection(url,username,password);
		} catch (SQLException e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		
		return connection;
		
	}
	public static void close(Connection conn) {
		if(conn!=null) {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	public static void main(String[] args) {
		System.out.println("DButil");
	}
}
