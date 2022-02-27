#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host='mysql202.phy.lolipop.lan',
    user='LAA1400403',
    passwd='test',
    db='LAA1400403-test20220219')

# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()




cursor.execute(f"SELECT * FROM test WHERE id='{sys.argv[1]}'")

num_fields = len(cursor.description)
field_names = [i[0] for i in cursor.description]
print(field_names)

for row in cursor:
   print (row)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
