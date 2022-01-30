#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import cgitb
cgitb.enable()

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host='mysql154.phy.lolipop.lan',
    user='LAA1390446',
    passwd='1234abcdABCD',
    db='LAA1390446-windyobi22')
cursor = connection.cursor()


cursor.execute("SELECT * FROM test")

print("Content-Type: text/html; charset=UTF-8\r\n")
print("<html><head><title>Title</title></head><body>")
for row in cursor:
  print (row)
print("</body></html>")

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
